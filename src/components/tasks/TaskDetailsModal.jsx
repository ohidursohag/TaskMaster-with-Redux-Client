import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { removeTask, updateStatus } from "../../Redux/Fearures/Tasks/taskSlice";
import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";

const TaskDetailsModal = ({ isOpen, setIsOpen,item:task }) => {
  const dispatch = useDispatch()
  let updatedStatus ;
if(task.status === 'pending') {
  updatedStatus = 'on-going'
}else if(task.status === 'on-going') {
  updatedStatus = 'completed'
} else if(task.status === 'completed') {
  updatedStatus = 'archive'
}
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Task Details"}>
      <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task?.priority === 'high' ? 'text-red-500' : ''
        } ${task?.priority === 'medium' ? 'text-yellow-500' : ''} ${
          task?.priority === 'low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={()=>dispatch(removeTask(task?.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button onClick={()=>dispatch(updateStatus({id:task?.id,status:updatedStatus}))}            
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
    </Modal>
  );
};

TaskDetailsModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default TaskDetailsModal;
