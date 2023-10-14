import { team } from "../../dumyData"

const TeamCard = () => {
  return (
    <>
      {team.map((myTeam) => (
        <div className="items">
            <div className="img">
                <img src={myTeam.cover} alt="" />
            </div>
            <div className="details">
                <h2>{myTeam.name}</h2>
                <p>{myTeam.work}</p>
            </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
