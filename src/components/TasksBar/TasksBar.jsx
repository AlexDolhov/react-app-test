import TaskCounter from "../TaskCounter/TaskCounter";
import { Section } from "../TasksBar/TaskBar.styled";
import TasksFilter from "../TasksFilter/TasksFilter";
import Tasklist from "../TaskList/TaskList";
import { Wraper } from "./TaskBar.styled";
import TaskForm from "../TaskForm/TaskForm"

const TasksBar = () => {
    return (
      <Section>
        <h2>Task Manager</h2>
        <Wraper>
          <TaskCounter />
          <TasksFilter />
        </Wraper>
        <TaskForm />
        <Tasklist />
      </Section>
    );
}

export default TasksBar;