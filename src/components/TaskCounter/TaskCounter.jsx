import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";



const TaskCounter = () => {
    // const tasks = useSelector(state => state.tasks);
    const tasks = useSelector(getTasks);
    
    const count = tasks.reduce((acc, task) => {
        if (task.completed) {
            acc.active += 1;
        } else {
            acc.completed += 1;
        }
        return acc;
    }, { active: 0, completed: 0 });

    return (
        <div>
            <p>Active: {count.active }</p>
            <p>Done: {count.completed} </p>
        </div>
    );
}

export default TaskCounter;