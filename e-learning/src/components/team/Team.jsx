import './Team.css'
import Back from '../helpers/Back'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div>
      <Back title="Team"/>
      <section className="team padding">
        <div className="container grid2">
            <TeamCard/>
        </div>
      </section>
    </div>
  )
}

export default Team
