import GradientTitle from "./GradientTitle"
import GradientCode from "./GradientCode"
import GradientPill from "./GradientPill"
import { gradients, uniqueTags } from "../gradients"


console.log(gradients.tabs)
const Gradient = ({ colorStart, colorEnd, name }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <div className="mt-3">
          <button type="button" className="btn btn-sm me-2 mb-2 bg-dark text-white">
            {uniqueTags.map(el => <tag key={el.name}>{el.tags}</tag>)}
          </button>
        </div>
      </div>
    </li>
  )
}

export default Gradient
