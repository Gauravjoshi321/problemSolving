const list = ["Geetika", "Sanjay", "Gaurav", "Divya", "Prince", "Ekaansh"];

export default function SearchableList() {
  // const [list, setList] = useState()
  return (
    <div>
      <input type="text" />
      <ul>
        {
          list.map(li => {
            return <Name key={li} li={li} />
          })
        }
      </ul>
    </div>
  )
}

function Name({ li }) {
  return (
    <li>
      {li}
    </li>
  )
}