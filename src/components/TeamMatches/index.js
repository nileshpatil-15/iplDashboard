/* eslint-disable prettier/prettier */
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

export default class TeamMatches extends Component {
  state = {
    teamMatchInfo: {},
    isLoaderActive: true,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },

      recentMatches: data.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        id: each.id,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      })),
    }

    this.setState({teamMatchInfo: formattedData, isLoaderActive: false})
  }

  displayWholeTeamMatchDisplay = () => {
    const {teamMatchInfo} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchInfo
    const {id} = latestMatchDetails

    return (
      <div className="inner-teammatch-container">
        <img className="teamBanner" src={teamBannerUrl} alt="team banner" />
        <h1>Latest </h1>

        <LatestMatch key={id} data={latestMatchDetails} />
        <ul className="match-card-container">
          {recentMatches.map(eachCard => (
            <MatchCard key={eachCard.id} data={eachCard} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoaderActive} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-match-container ${id}`}>
        {isLoaderActive ? (
          <Loader
            data-testid="loader"
            type="Rings"
            color="#ffffff"
            height={130}
            width={130}
          />
        ) : (
          this.displayWholeTeamMatchDisplay()
        )}
      </div>
    )
  }
}
