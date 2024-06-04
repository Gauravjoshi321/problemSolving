import styled from "styled-components"
import TaskDND from "./TaskDND";
import { Droppable } from 'react-beautiful-dnd';


const Container = styled.div`
  margin: 4px;
  border: 1px solid grey;
  min-width: 100px;
  padding: 6px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  /* background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}; */
  flex-grow: 1;
  min-height: 100px;
`

export default function ColumnDND({ column, tasks }) {
  // console.log(tasks)
  return (
    <Container>
      <Title>{column.title}</Title>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {
              tasks.map((task, index) =>
              (
                <TaskDND
                  key={task.id}
                  task={task}
                  index={index}
                />
              ))
            }
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>

    </Container>
  )
}