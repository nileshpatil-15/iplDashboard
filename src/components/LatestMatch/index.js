/* eslint-disable prettier/prettier */
// Write your code here
import './index.css'

const LatestMatch = (props) => {
    const { data } = props
    const { competingTeam, competingTeamLogo, date, firstInnings, manOfTheMatch, result, secondInnings, umpires, venue } = data
    return (
        <div className='latest-match-container'>
            <div className='latest-match-left-container'>
                <div>
                    <p className='team-name'>{competingTeam}</p>
                    <p className='date'>{date}</p>
                    <p className='venue'>{venue}</p>
                    <p className='result'>{result}</p>
                </div>
                <div>
                    <img src={competingTeamLogo} className='team-logo' alt={competingTeam} />
                </div>

            </div>
           <div>
              <hr className='line'/>
           </div>
            <div className='latest-match-right-container'>
                <p className='title'>First Innings</p>
                <p className='answer'>{firstInnings}</p>
                <p className='title'>Second Innings</p>
                <p className='answer'>{secondInnings}</p>
                <p className='title'>Man Of The Match</p>
                <p className='answer'>{manOfTheMatch}</p>
                <p className='title'>Umpires</p>
                <p className='answer'>{umpires}</p>

            </div>
        </div>
    )


}
export default LatestMatch