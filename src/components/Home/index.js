/* eslint-disable prettier/prettier */
// Write your code here

import { Component } from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'


export default class Home extends Component {


    state = {
        isLoaderActive: true,
        cardDetails: []
    }




    componentDidMount() {
        this.cardInfo()
    }

    renderEachCard = () => {
        const { cardDetails } = this.state

        return (
            cardDetails.map(eachCard => <TeamCard key={eachCard.id} data={eachCard} />)
        )
    }

    renderHomePage = () => 
      
         (

            <div >
                <div className='logoAndTitlecntr'>
                    <img className='logo' src='https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png' alt='ipl logo' />
                    <p className='title'>Ipl Dashboard</p>
                </div>
                <ul className='team-card-container'>

                    {this.renderEachCard()}
                </ul>

           </div>
        )

    

    cardInfo = async () => {

        const response = await fetch('https://apis.ccbp.in/ipl')
        const fetchedData = await response.json()



        this.setState({
            cardDetails: fetchedData.teams.map(eachitem => ({
                id: eachitem.id,
                name: eachitem.name,
                teamImageUrl: eachitem.team_image_url
            })
            ), isLoaderActive: false
        })

    }


    render() {
        const { cardDetails, isLoaderActive } = this.state
        console.log(cardDetails)

        return (
            <div className='home-container'>
                {isLoaderActive ? <div > <Loader data-testid='loader' type="Rings" color="#ffffff" height={130} width={130} /> </div> : this.renderHomePage()}

            </div>
        )

    }
}
