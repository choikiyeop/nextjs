'use client'

import { DragEvent, useState } from "react"

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const onDragStart = (nodeType: 'custom') => {
    return (e: DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('application/reactflow', nodeType);
      e.dataTransfer.effectAllowed = 'move';
    }
  }

  return (
    <aside className="absolute z-10 flex">
      {isOpen && (
        <div className="w-[250px] h-[500px] bg-gray-100">
          <div draggable onDragStart={onDragStart('custom')} className="h-9 p-1 border rounded cursor-grab">Input Node</div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="h-9 px-2 m-2 border border-gray-200 rounded-md bg-white hover:bg-gray-50">
        {isOpen? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg>              
        ):(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
          </svg>
        )}
      </button>
    </aside>
  )
}