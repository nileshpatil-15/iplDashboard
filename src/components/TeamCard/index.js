/* eslint-disable prettier/prettier */
// Write your code here
import './index.css'
import { Link } from 'react-router-dom'

const TeamCard = props => {
    const { data } = props
    const { id, teamImageUrl, name } = data
    
    return (
      
       
            <li className='card-item'>
  <Link to={`/team-matches/${id}`} className='link'>         
                <img className='card-image' src={teamImageUrl} alt={name} />
                <p className='team-name'>{name}</p>
                </Link>
            </li>
           
     
    )
}


 


export default TeamCard