
import { gradients } from "../gradients"

const GradientsSelect = () => {
  return (
    <select>
      {gradients.map(el => <option value={el.name}>{el.name}</option>)}
    </select>

  )
}

export default GradientsSelect()