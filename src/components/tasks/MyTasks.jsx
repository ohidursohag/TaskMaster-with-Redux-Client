import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../Redux/Fearures/Tasks/taskSlice";
import TaskDetailsModal from "./TaskDetailsModal";
import { useState } from "react";

const MyTasks = ({ item }) => {
  const dispatch = useDispatch()
  const [isOpenDetails,setIsOpenDetails]= useState(false)
  let updatedStatus ;
if(item.status === 'pending' || item.status === 'on-going') {
  updatedStatus = 'completed'
}
  return (
      <div className="bg-secondary/10 rounded-md p-3 flex justify-between">
        <h1>{item.title}</h1>
        <div className="flex gap-3">
          <button onClick={()=>setIsOpenDetails(!isOpenDetails)} className="grid place-content-center" title="Details">
            <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
          </button>
          <button onClick={()=>dispatch(updateStatus({id:item.id ,status:updatedStatus}))} className="grid place-content-center" title="Done">
            <CheckIcon className="w-5 h-5 text-primary" />
          </button>
        </div>
        <TaskDetailsModal isOpen={isOpenDetails}
            setIsOpen={setIsOpenDetails} item={item}/>
      </div>
  );
};

export default MyTasks;
