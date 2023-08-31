
const Sort = ({data,handler}) => {
  return (
    <select value={data} onChange={handler}>
       <option value="default">Default</option>
        <option value="name">Name</option>
       <option value="price">Price</option>
    </select>
  )
}

export default Sort