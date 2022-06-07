import { useParams } from "react-router-dom"

const Details = () => {
  const { id } = useParams()
  return (
    <div>Details page for ID: {id}</div>
  )
}

export default Details