import './Courses.css'
import { coursesCard } from '../../dumyData'
import StarIcon from '@mui/icons-material/Star';

const CoursesWrapper = () => {
  return (
    <section className='course-card'>
        <div className="container grid2">
            {coursesCard.map((card) => (
                <div className="item">
                    <div className="content flex">
                        <div className="left">
                            <div className="img">
                                <img src={card.cover} alt="" />
                            </div>
                            <div className="text-right">
                                <h1>{card.coursesName}</h1>
                                <div className="rate">
                                    <StarIcon className='icon'/>
                                    <StarIcon className='icon'/>
                                    <StarIcon className='icon'/>
                                    <StarIcon className='icon'/>
                                    <label htmlFor=""> (5.0) </label>
                                </div>
                                <div className="details">
                                        {card.courTeacher.map(teacher => (
                                        <>
                                            <div className="box">
                                                <div className="dimg">
                                                    <img src={teacher.dcover} alt="" />
                                                </div>
                                                <div className="para">
                                                    <h4>{teacher.name}</h4>
                                                </div>
                                            </div>
                                            <span>{card.totalTime}</span>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <h3>
                                {card.priceAll} / {card.pricePer}
                            </h3>
                        </div>
                        <button className="enroll-btn">Enroll now</button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default CoursesWrapper
