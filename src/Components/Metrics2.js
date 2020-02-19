import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
const Metrics2 = ({baseScore, use, setUse, fix, setFix, proof, setProof}) => {
    let e = [1, 0.85, 0.9, 0.95, 1][use]
    let rl = [1, 0.87, 0.9, 0.95, 1][fix]
    let rc = [1, 0.9, 0.95, 1][proof]
    let TemporalScore = baseScore*e*rl*rc
    return(
        <div>
        <Container>
        Временные метрики: {Number(TemporalScore.toFixed(1))}
        </Container>
        <FormControl>
      <FormLabel component="legend">Возможность использования :</FormLabel>
      <RadioGroup value={use} onChange={(event) => setUse(parseInt(event.target.value))}>
      <FormControlLabel value={0} control={<Radio />} label="Не определено" />
        <FormControlLabel value={1} control={<Radio />} label="Теоретически" />
        <FormControlLabel value={2} control={<Radio />} label="Есть концепция" />
        <FormControlLabel value={3} control={<Radio />} label="Есть сценарий" />
        <FormControlLabel value={4} control={<Radio />} label="Недоступно" />
      </RadioGroup>
      <FormLabel component="legend">Уровень исправления  :</FormLabel>
      <RadioGroup value={fix} onChange={(event) => setFix(parseInt(event.target.value))}>
        <FormControlLabel value={0} control={<Radio />} label="Не определено" />
        <FormControlLabel value={1} control={<Radio />} label="Официальное" />
        <FormControlLabel value={2} control={<Radio />} label="Временное" />
        <FormControlLabel value={3} control={<Radio />} label="Рекомендации" />
        <FormControlLabel value={4} control={<Radio />} label="Недоступно" />
      </RadioGroup>
      <FormLabel component="legend">Степень достоверности источника :</FormLabel>
      <RadioGroup value={proof} onChange={(event) => setProof(parseInt(event.target.value))}>
        <FormControlLabel value={0} control={<Radio />} label="Не определено" />
        <FormControlLabel value={1} control={<Radio />} label="Не подтверждена" />
        <FormControlLabel value={2} control={<Radio />} label="Не доказана" />
        <FormControlLabel value={3} control={<Radio />} label="Подтверждена" />
      </RadioGroup>
      </FormControl>
      </div>
    )
}
export default Metrics2