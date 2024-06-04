import { useReducer } from "react"
import initialData from "./initialData"
import styled from "styled-components"
import ColumnDND from "./ColumnDND"
import { DragDropContext } from "react-beautiful-dnd"

const Container = styled.div`
  padding: 10px;
  border: 2px solid grey;

  display: flex;
`

const reducer = function (state, action) {

}

export default function DNDBeauty() {
  const [state, dispatch] = useReducer(reducer, initialData);

  function onDragEnd(result) {
    console.log(result);
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