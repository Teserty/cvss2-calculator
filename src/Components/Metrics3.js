import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
const Metrics3 = ({baseScore,local, hard, Auth,InflC,InflI,InflA,  per, setPer, plot, setPlot, conf, setConf, celo, setCelo, acces, setAcces, fix, proof, use}) => {
        let cdp = [0, 0, 0.1, 0.3, 0.4, 0.5][per]
        let td  = [1, 0, 0.25, 0.75, 1][plot]
        let cr  = [1, 0.5, 1, 1.51][conf]
        let ir  = [1, 0.5, 1, 1.51][celo]
        let ar  = [1, 0.5, 1, 1.51][acces]
        let rl = [1, 0.87, 0.9, 0.95, 1][fix]
        let rc = [1, 0.9, 0.95, 1][proof]
        let inf = [0, 0.275, 0.66]
        let c = inf[InflC]
        let i = inf[InflI]
        let a = inf[InflA]
        let impact = 10.41*(1-(1-c)*(1-i)*(1-a))
        let f = 0
        if (impact !== 0){
            f = 1.176
        }

        let av = [0.395, 0.646, 1][local]
        let ac = [0.35, 0.61, 0.71][hard]
        let au = [0.45, 0.56, 0.704][Auth]
        let exploi = 20*av*ac*au
        let e = [1, 0.85, 0.9, 0.95, 1][use]
        let AdjustedImpact = Math.min(10, 10.41*(1-(1-c*cr)*(1-i*ir)*(1-a*ar)))
        let AdjustedBaseScore = (((0.6*AdjustedImpact)+(0.4*exploi)-1.5)*f)
        let AdjustedTemporal = AdjustedBaseScore*e*rl*rc
        let EnvironmentalScore = ((AdjustedTemporal+(10-AdjustedTemporal)*cdp)*td)
    return(
        <div>
        <Container>
        Контекстные метрики: {Number(EnvironmentalScore.toFixed(1))}
        </Container>
        <FormControl>
      <FormLabel component="legend">Вероятность нанесения косвенного ущерба :</FormLabel>
      <RadioGroup value={per} onChange={(event) => setPer(parseInt(event.target.value))}>
      <FormControlLabel value={0} control={<Radio />} label="Не определено" />
        <FormControlLabel value={1} control={<Radio />} label="Отсутствует" />
        <FormControlLabel value={2} control={<Radio />} label="Низкая" />
        <FormControlLabel value={3} control={<Radio />} label="Средняя" />
        <FormControlLabel value={4} control={<Radio />} label="Повышенная" />
        <FormControlLabel value={5} control={<Radio />} label="Высокая" />
      </RadioGroup>
      <FormLabel component="legend">Плотность целей :</FormLabel>
      <RadioGroup value={plot} onChange={(event) => setPlot(parseInt(event.target.value))}>
        <FormControlLabel value={0} control={<Radio />} label="Не определено" />
        <FormControlLabel value={1} control={<Radio />} label="Отсутствует" />
        <FormControlLabel value={2} control={<Radio />} label="Низкая" />
        <FormControlLabel value={3} control={<Radio />} label="Средняя" />
        <FormControlLabel value={4} control={<Radio />} label="Высокая" />
      </RadioGroup>
      <FormLabel component="legend">Требования к конфиденциальности :</FormLabel>
      <RadioGroup value={conf} onChange={(event) => setConf(parseInt(event.target.value))}>
        <FormControlLabel value={0} control={<Radio />} label="Не определено" />
        <FormControlLabel value={1} control={<Radio />} label="Низкая" />
        <FormControlLabel value={2} control={<Radio />} label="Средняя" />
        <FormControlLabel value={3} control={<Radio />} label="Высокая" />
      </RadioGroup>
      <FormLabel component="legend">Требования к целостности :</FormLabel>
      <RadioGroup value={celo} onChange={(event) => setCelo(parseInt(event.target.value))}>
        <FormControlLabel value={0} control={<Radio />} label="Не определено" />
        <FormControlLabel value={1} control={<Radio />} label="Низкая" />
        <FormControlLabel value={2} control={<Radio />} label="Средняя" />
        <FormControlLabel value={3} control={<Radio />} label="Высокая" />
      </RadioGroup>
      <FormLabel component="legend">Требования к доступности :</FormLabel>
      <RadioGroup value={acces} onChange={(event) => setAcces(parseInt(event.target.value))}>
        <FormControlLabel value={0} control={<Radio />} label="Не определено" />
        <FormControlLabel value={1} control={<Radio />} label="Низкая" />
        <FormControlLabel value={2} control={<Radio />} label="Средняя" />
        <FormControlLabel value={3} control={<Radio />} label="Высокая" />
      </RadioGroup>
      </FormControl>
      </div>
    )
}
export default Metrics3