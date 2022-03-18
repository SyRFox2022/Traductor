import Style from '../../styles/loading.module.css';

export default function Loading() {
  return (
    <div className={Style.circlesToRhombusesSpinner}>
    <div className={Style.circle}></div>
    <div className={Style.circle}></div>
    <div className={Style.circle}></div>
    </div>
  )
}
