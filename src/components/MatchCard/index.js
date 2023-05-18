/* eslint-disable prettier/prettier */
// Write your code here

import './index.css'

const MatchCard = props => {
  const {data} = props
  const {matchStatus, competingTeam,result, competingTeamLogo} = data
 const resultColor=matchStatus==='Won'?'green':'red'
  return <li className="match-card-item">
      <img src={competingTeamLogo} className='team-logo' alt={competingTeam}/>
      <p className='team'>{competingTeam}</p>
<p className='result'>{result}</p>   
<p className={`status ${resultColor}`}>{matchStatus}</p>
    </li>
}
export default MatchCard
