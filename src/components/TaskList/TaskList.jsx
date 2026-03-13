import { useSelector } from "react-redux";
import Task from "../Task/Task";
import statusFilters from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";
import { getTasks } from "../../redux/selectors";
import { List } from "./TaskList.styled";

const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    };
};

const TaskList = () => {

    //const tasks = useSelector(state => state.tasks);
    const tasks = useSelector(getTasks);
    // const statusFilter = useSelector(state => state.filters.status);
    const statusFilter = useSelector(getStatusFilter);
    const visibleTasks = getVisibleTasks(tasks, statusFilter);

    return (
        <>
            <List>
                {visibleTasks.map(task => (
                    <li id={task.id}><Task task={task} /></li>
                ))}
            </List>
        </>
    );
};
export default TaskList;