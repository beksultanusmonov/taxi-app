import { Link } from 'react-router-dom'

// assets
import './Home.scss'
import BestDriver from '../../assets/bestdriver.jpg';
import ViewPhone from '../../assets/viewphonedriver.jpg';
import ViewPhoneWoman from '../../assets/viewphonewoman.jpg';

//hooks
import { useState } from 'react'


function Home() {

    const [menu, setMenu] = useState('earn');

  return (
    <>
        {/* start to home section */}
        <section className="home">
            <div className="container">
                {menu == 'earn' &&
                <div className="info">
                    <div className="choose">
                        <div className="button active" onClick={() => setMenu('earn')}><i class="fa-solid fa-envelope"></i> Earn</div>
                        <div className="button" onClick={() => setMenu('reads')}><i class="fa-solid fa-car"></i> Reads</div>
                    </div>
                    <h1 className="title">Ready to start earning?</h1>
                    <p className="description">Driving with Uber can be a great way to earn on your terms.</p>
                    <Link to='/register'>Complete next steps</Link>
                </div>
                }
                {menu == 'reads' && 
                <div className="info">
                    <div className="choose">
                        <div className="button" onClick={() => setMenu('earn')}><i class="fa-solid fa-envelope"></i> Earn</div>
                        <div className="button active" onClick={() => setMenu('reads')}><i class="fa-solid fa-car"></i> Reads</div>
                    </div>
                    <h1 className="title">Go anywhere with Uber</h1>
                    <p className="description">Request a ride, hop in, and go.</p>
                    <div className="search">
                        <input type="text"  placeholder='Enter loaction' />
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="search">
                        <input type="text"  placeholder='Enter destination' />
                    </div>
                    <Link>See Price</Link>
                </div>
                }
                <div className="image">
                    <img src={BestDriver} alt="" />
                </div>
            </div>
        </section>
        {/* end of home section */}
        {/* start to sections section */}
        <section className="sections">
                <div className="container">
                    <div className="image">
                        <img src={ViewPhone} alt="" />
                    </div>
                    <div className="info">
                        <h2 className="subtitle">Drive when you want, make what you need</h2>
                        <p className="description">Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
                        <Link className="button">Get Started</Link>
                    </div>
                </div>
        </section>
        <section className="sections">
            <div className="container">
                <div className="info right-align">
                    <h2 className="subtitle">Move with us</h2>
                    <p className="description">Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
                    <Link className="button">Get Started</Link>
                </div>
                <div className="image">
                    <img src={ViewPhoneWoman} alt="" />
                </div>
            </div>
        </section>
        {/* end of sections section */}
    </>
  )
}

export default Home
