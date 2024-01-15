import { Flow } from "@/components/Flow";

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: { icon: '😎', type: 'CEO', name: 'Jane Doe' },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'custom',
    data: { icon: '🤓', type: 'Designer', name: 'Tyler Weary' },
    position: { x: -200, y: 200 },
  },
  {
    id: '3',
    type: 'custom',
    data: { icon: '🤩', type: 'Developer', name: 'Kristi Price' },
    position: { x: 200, y: 200 },
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', label: "Yes" },
  { id: 'e1-2', source: '1', target: '3', label: "NO" },
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