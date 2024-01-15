import { Flow } from "@/components/Flow";

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 0 }, data: { label: '2' } },
  { id: '3', position: { x: 0, y: 100 }, data: { label: '3' } },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', label: "Yes" },
]

export default function ReactFlowPage() {
  
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div className="border w-1/2 h-1/2 mx-auto">
        <Flow nodeData={initialNodes} edgeData={initialEdges}/>
      </div>
    </div>
  )
}