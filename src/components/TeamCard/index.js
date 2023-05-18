/* eslint-disable prettier/prettier */
// Write your code here
import './index.css'
import { Link } from 'react-router-dom'

const TeamCard = props => {
    const { data } = props
    const { id, teamImageUrl, name } = data
    
    return (
        <Link to={`/team-matches/${id}`}>
            <li className='card-item'>
                <img className='card-image' src={teamImageUrl} alt={name} />
                <p className='team-name'>{name}</p>
            </li>
        </Link>
    )
}


export default TeamCard