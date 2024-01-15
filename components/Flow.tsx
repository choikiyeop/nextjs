'use client'
import { useCallback, useState } from 'react';
import ReactFlow, { Connection, Edge, addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 200, y: 50 }, data: { label: '2' } },
  { id: '3', position: { x: 200, y: -50 }, data: { label: '2' } },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', label: "Yes" }
]


export const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection: Edge | Connection) => {
    setEdges((eds) => addEdge(connection, eds))
  }, [setEdges]);


  return (
    <ReactFlow nodes={nodes} edges={edges} fitView>

    </ReactFlow>
  )
}