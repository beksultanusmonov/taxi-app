import { Link } from 'react-router-dom'
import './Home.scss'
import BestDriver from '../../assets/bestdriver.jpg'


function Home() {
  return (
    <>
        <section className="home">
            <div className="container">
                <div className="info">
                    <div className="choose">
                        <div className="button active"><i class="fa-solid fa-envelope"></i> Earn</div>
                        <div className="button"><i class="fa-solid fa-car"></i> Reads</div>
                    </div>
                    <h1 className="title">Ready to start earning?</h1>
                    <p className="description">Driving with Uber can be a great way to earn on your terms.</p>
                    <Link>Complete next steps</Link>
                </div>
                <div className="image">
                    <img src={BestDriver} alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
