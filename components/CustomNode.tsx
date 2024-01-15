import { NodeData } from "@/types/react-flow.interface";
import { memo } from "react"
import { Handle, Position } from "reactflow"

const CustomNode = ({ data }: { data: NodeData }) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {data.icon}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.type}</div>
          <div className="text-gray-500">{data.name}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Left} className="h-4 !bg-teal-500" />
      <Handle type="source" position={Position.Right} className="h-4 !bg-teal-500" />
    </div>
  )
}

export default memo(CustomNode);