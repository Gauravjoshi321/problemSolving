import { useState } from "react"
import initialData from "./initialData"
import styled from "styled-components"
import ColumnDND from "./ColumnDND"
import { DragDropContext } from "react-beautiful-dnd"

const Container = styled.div`
  padding: 10px;
  border: 2px solid grey;

  display: flex;
`


export default function DNDBeauty() {
  const [state, setState] = useState(initialData);

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination)
      return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {
          state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map(ids => {
              return state.tasks[ids];
            })

            return <ColumnDND
              key={column.id}
              column={column}
              tasks={tasks}
            />
          })
        }
      </Container>
    </DragDropContext>
  )
}