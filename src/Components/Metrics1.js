import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
const Metrics1 = ({local, hard, Auth, InflC, InflI, InflA,
  setLocal, setHard, setAth, setInflC, setInflI, setInflA, setBaseScore, baseScore}) => {
    let av = [0.395, 0.646, 1][local]
    let ac = [0.35, 0.61, 0.71][hard]
    let au = [0.45, 0.56, 0.704][Auth]
    let inf = [0, 0.275, 0.66]
    let c = inf[InflC]
    let i = inf[InflI]
    let a = inf[InflA]
    let impact = 10.41*(1-(1-c)*(1-i)*(1-a))
    let exploi = 20*av*ac*au
    
    let f = 0
    if (impact !== 0){
        f = 1.176
    }
    setBaseScore((((0.6*impact)+(0.4*exploi)-1.5)*f))
    return(
        <div>
        <Container>
        Базовые метрики: {Number(baseScore.toFixed(1))}
        </Container>
        <FormControl>
        <FormLabel component="legend">Способ получения доступа (AV):</FormLabel>
        <RadioGroup value={local} onChange={(event) => setLocal(parseInt(event.target.value))}>
          <FormControlLabel value={0} control={<Radio />} label="Локальный" />
          <FormControlLabel value={1} control={<Radio />} label="Смежная сеть" />
          <FormControlLabel value={2} control={<Radio />} label="Сетевой" />
        </RadioGroup>
        <FormLabel component="legend">Сложность получения доступа (AC):</FormLabel>
      <RadioGroup value={hard} onChange={(event) => setHard(parseInt(event.target.value))}>
        <FormControlLabel value={0} control={<Radio />} label="Высокая" />
        <FormControlLabel value={1} control={<Radio />} label="Средняя" />
        <FormControlLabel value={2} control={<Radio />} label="Низкая" />
      </RadioGroup>
      <FormLabel component="legend">Аутентификация (Au):</FormLabel>
      <RadioGroup value={Auth} onChange={(event) => setAth(parseInt(event.target.value))}>
        <FormControlLabel value={0} control={<Radio />} label="Множественная" />
        <FormControlLabel value={1} control={<Radio />} label="Единственная" />
        <FormControlLabel value={2} control={<Radio />} label="Не требуется" />
      </RadioGroup>
      <FormLabel component="legend">Влияние на конфиденциальность (С):</FormLabel>
      <RadioGroup value={InflC} onChange={(event) => setInflC(parseInt(event.target.value))}>
      <FormControlLabel value={0} control={<Radio />} label="Не оказывается" />
        <FormControlLabel value={1} control={<Radio />} label="Частичная" />
        <FormControlLabel value={2} control={<Radio />} label="Полное" />
      </RadioGroup>
      <FormLabel component="legend">Влияние на целостность (I):</FormLabel>
      <RadioGroup value={InflI} onChange={(event) => setInflI(parseInt(event.target.value))}>
        <FormControlLabel value={0} control={<Radio />} label="Не оказывается" />
        <FormControlLabel value={1} control={<Radio />} label="Частичная" />
        <FormControlLabel value={2} control={<Radio />} label="Полное" />
      </RadioGroup>
      <FormLabel component="legend">Влияние на доступность (A):</FormLabel>
      <RadioGroup value={InflA} onChange={(event) => setInflA(parseInt(event.target.value))}>
        <FormControlLabel value={0} control={<Radio />} label="Не оказывается" />
        <FormControlLabel value={1} control={<Radio />} label="Частичная" />
        <FormControlLabel value={2} control={<Radio />} label="Полное" />
      </RadioGroup>
      </FormControl>
      </div>
    )
}
export default Metrics1