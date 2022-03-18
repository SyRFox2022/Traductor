import Style from '../../styles/loading.module.css';
import { Typography } from '@mui/material';

export default function Loading() {
  return (
    <div className={Style.containerAll}>
        <Typography variant="h4"><strong> Loading </strong></Typography>

    <div className={Style.circlesToRhombusesSpinner}>
    <div className={Style.circle}></div>
    <div className={Style.circle}></div>
    <div className={Style.circle}></div>
    </div>
    </div>
  )
}
