import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Fearures/Tasks/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
const dispatch = useDispatch()
  const onClose =()=>{
   reset();
   setIsOpen(false);
  }
  const onSubmit = (data) => {
   // console.log(data);
   dispatch(addTask(data))
   onClose()
 };

 

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 my-3">
        <div>
          <label htmlFor="title" className="inline-block mb-[2px]">
            Title
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            id="title"
            className="inline-block w-full rounded-md "
          />
          {errors.title === "required" && (
            <p className="text-red-500 text-sm">required</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="inline-block mb-[2px]">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            id="description"
            className="inline-block w-full rounded-md "
          />
          {errors.description === "required" && (
            <p className="text-red-500 text-sm">required</p>
          )}
        </div>
        <div>
          <label htmlFor="date" className="inline-block mb-[2px]">
            Deadline
          </label>
          <input
            type="date"
            {...register("date", { required: true })}
            id="date"
            className="inline-block w-full rounded-md "
          />
          {errors.date === "required" && (
            <p className="text-red-500 text-sm">required</p>
          )}
        </div>
        <div>
          <label htmlFor="assignedTo" className="inline-block mb-[2px]">
            Assigned To
          </label>
          <select
            type="date"
            {...register("assignedTo", { required: true })}
            id="assignedTo"
            className="inline-block w-full rounded-md ">
            <option value="Md Sohag">Md Sohag</option>
            <option value="Russel Mizi">Russel Mizi</option>
            <option value="Jamal Hossain">Jamal Hossain</option>
            <option value="Murshada Ratna">Murshada Ratna</option>
            <option value="Ohidur Rahaman Shohel">Ohidur Rahaman Shohel</option>
          </select>
          {errors.assignedTo === "required" && (
            <p className="text-red-500 text-sm">required</p>
          )}
        </div>
        <div>
          <label htmlFor="priority" className="inline-block mb-[2px]">
            Priority
          </label>
          <select
            type="date"
            {...register("priority", { required: true })}
            id="priority"
            className="inline-block w-full rounded-md ">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          {errors.priority === "required" && (
            <p className="text-red-500 text-sm">required</p>
          )}
        </div>
        <div className="flex gap-5 place-content-end pt-2">
          <button
            onClick={() =>onClose()}
            type="button"
            className=" px-5 py-2 border bg-red-600 text-white rounded-xl">
            Cancel
          </button>
          <button
            type="submit"
            className=" px-5 py-2 border bg-blue-600 text-white rounded-xl">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
