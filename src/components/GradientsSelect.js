//import { gradients } from "../gradients"
import { uniqueTags } from "../gradients"

const GradientsSelect = () => {
  const
  return (
    <>
      <h2 className="text-center my-4">Alyra Gradients</h2>
      <div className="input-group mb-3">
        <label className="input-group-text mb-4" for="select">Filter par tag</label>
        <select className="form-control mb-4">
          <option>
            Tous
          </option>
          {uniqueTags.map(color => <option>{color}</option>)}
        </select>
      </div>
    </>
  )
}

export default GradientsSelect