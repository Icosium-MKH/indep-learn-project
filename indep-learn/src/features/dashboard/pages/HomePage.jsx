import './Homepage.css'
import welcomeVideo from "assets/videos/welcome-video.mp4"

const Homepage = () => {
    return(
        <section className="homepage-container">
            <div className="welcome-part">
                <video
                    className="bg-video"
                    src={welcomeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="welcome-content">
                    <p className="welcome-message">Welcome to Indep-Learn</p>
                    <p className="indep-text">Learn today. Be independent tomorrow.</p>
                    <a className="start-journey" href="/courses">Start your journey now !</a>
                </div>
            </div>
            <div className="carousel-part">
                <p>CAROUSEL</p>
            </div>
        </section>
    );
}


export default Homepage;