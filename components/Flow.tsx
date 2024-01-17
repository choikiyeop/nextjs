'use client'
import { useCallback, useState, DragEvent } from 'react';
import ReactFlow, { Connection, ConnectionLineType, Edge, Node, Position, ReactFlowInstance, addEdge, useEdgesState, useNodesState, useReactFlow } from 'reactflow';
import dagre from "@dagrejs/dagre";
import 'reactflow/dist/base.css';
import CustomNode from './CustomNode';

const nodeTypes = {
  custom: CustomNode
}

type DirectionType = 'TB' | 'LR';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const NODE_WIDTH = 172;
const NODE_HEIGHT = 36;

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'LR') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? Position.Left : Position.Top;
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

    node.position = {
      x: nodeWithPosition.x - NODE_WIDTH / 2,
      y: nodeWithPosition.y - NODE_HEIGHT / 2,
    };

    return node;
  });

  return { nodes, edges };
};

interface FlowProps {
  nodeData: Node[];
  edgeData: Edge[];
}

let id = 4;
const getId = () => `${id++}`;

export const Flow = ({ nodeData, edgeData }: FlowProps) => {
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodeData, edgeData);
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>();

  const onConnect = useCallback((params: Edge | Connection) => {
    setEdges((eds) =>
      addEdge({ ...params, type: ConnectionLineType.Bezier, animated: true }, eds)
    )
  }, []);

  const onLayout = useCallback((direction: DirectionType) => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodes, edges, direction);

    setNodes([...layoutedNodes]);
    setEdges([...layoutedEdges]);
  }, [nodes, edges]);

  const onDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const type = e.dataTransfer.getData('application/reactflow');
    if (typeof type === 'undefined' || !type) return;
    
    const position = reactFlowInstance?.screenToFlowPosition({
      x: e.clientX,
      y: e.clientY,
    });
    const newNode: Node = {
      id: getId(),
      type,
      position,
      data: {
        icon: "아이콘",
        type: "타입",
        name: "이름",
      }
    }
    
    setNodes((nds) => nds.concat(newNode));
    console.log(nodes)
  }, [reactFlowInstance]);

  const onInit = (e: ReactFlowInstance) => {
    setReactFlowInstance(e);
  }

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      // onConnect={onConnect}
      // connectionLineType={ConnectionLineType.Bezier}
      nodesConnectable={false}
      nodeTypes={nodeTypes}
      onInit={onInit}
      onDragOver={onDragOver}
      onDrop={onDrop}
      fitView
    />
  );
};