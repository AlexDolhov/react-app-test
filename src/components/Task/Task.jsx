import { Wraper } from "./Task.styled";
import { Button } from "./Task.styled";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/actions";

const Task = ({ task }) => {

    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteTask(task.id));

    const handleToggle = () => dispatch(toggleCompleted(task));

    return (
        <Wraper>
            <input type="checkbox" onClick={handleToggle} checked={task.completed} />
            <p>{task.text}</p>
            <Button onClick={handleDelete}>x</Button>
        </Wraper>
    );
}

export default Task
