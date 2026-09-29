import cosmosMist from '../assets/page-cosmos-mist.png'

export function PageBg() {
  return (
    <div className="page-bg" aria-hidden="true">
      <img className="page-bg__scene" src={cosmosMist} alt="" decoding="async" />
      <div className="page-bg__wash" />
      <div className="page-bg__nebula" />
      <div className="page-bg__clouds" />
    </div>
  )
}
