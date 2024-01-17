'use client';
import { Flow } from "@/components/Flow";
import { Sidebar } from "./_components/Sidebar";

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
  { id: 'e1-1', source: '1', target: '2', label: "Yes" },
  { id: 'e1-2', source: '1', target: '3', label: "NO" },
]

export default function ReactFlowPage() {

  return (
    <div>
      <div className="border w-[1000px] h-[500px] mx-auto mt-48">
        <div className="grow h-full">
          <Sidebar />
          <Flow nodeData={initialNodes} edgeData={initialEdges}/>
        </div>
      </div>
    </div>
  )
}