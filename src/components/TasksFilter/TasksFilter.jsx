import { useSelector, useDispatch } from "react-redux";
import {Button} from "./TaskFillter.styled"
import statusFilters from "../../redux/constants"
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/actions";

const TaskFilter = () => {
    // const filter = useSelector(state => state.filters.status);
    const filter = useSelector(getStatusFilter);
    const dispatch = useDispatch();

    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return (
      <div>
        <Button selected={filter === statusFilters.all} onClick={() => handleFilterChange(statusFilters.all)}>All</Button>
        <Button selected={filter === statusFilters.active} onClick={() => handleFilterChange(statusFilters.active)}>Active</Button>
        <Button selected={filter === statusFilters.completed} onClick={() => handleFilterChange(statusFilters.completed)}>Done</Button>
      </div>
    );
};

export default TaskFilter;