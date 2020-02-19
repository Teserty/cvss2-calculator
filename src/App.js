import React, {useState} from 'react';
import Metrics1 from "./Components/Metrics1"
import Metrics2 from "./Components/Metrics2"
import Metrics3 from "./Components/Metrics3"
import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function App() {
  const [local, setLocal] = useState(0)
  const [hard, setHard] = useState(0)
  const [Auth, setAth] = useState(0)
  const [InflC, setInflC] = useState(0)
  const [InflI, setInflI] = useState(0)
  const [InflA, setInflA] = useState(0)
  const [baseScore, setBaseScore] = useState(0)
  const [use, setUse] = useState(0)
  const [fix, setFix] = useState(0)
  const [proof, setProof] = useState(0)
  const[per, setPer] = useState(0)
  const[plot, setPlot] = useState(0)
  const[conf, setConf] = useState(0)
  const[celo, setCelo] = useState(0)
  const[acces, setAcces] = useState(0)
  return (
    <div className="App">
      <Grid container spacing={2} 
      direction="row"
      justify="space-around"
      alignItems="flex-start">
        <Grid item className="item">
          <Metrics1 local={local} hard={hard} Auth={Auth} InflC={InflC} InflI={InflI} InflA={InflA}
                    setLocal={setLocal} setHard={setHard} setAth={setAth} setInflC={setInflC} setInflI={setInflI} setInflA={setInflA} baseScore={baseScore} setBaseScore={setBaseScore}
            />
        </Grid>
        <Grid item className="item">
          <Metrics2 baseScore={baseScore} use={use} setUse={setUse} fix={fix} setFix={setFix} proof={proof} setProof={setProof}/>
        </Grid>
        <Grid item className="item">
          <Metrics3 per={per} setPer={setPer} plot={plot} setPlot={setPlot} conf={conf} setConf={setConf} fix={fix} proof={proof} celo={celo} setCelo={setCelo} acces={acces}
          setAcces={setAcces} InflC={InflC} InflI={InflI} InflA={InflA} use={use} local={local} hard={hard} Auth={Auth}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
