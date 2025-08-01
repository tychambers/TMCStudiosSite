import "../styles/marketing.css"

function Home() {
    return (
        <div>
            <div className='navbar-space' />
            <div className='about-title sedgwick-ave-display-regular'>
                <h1>Looking for a Developer?</h1>
            </div>
            <div className='home-detail'>
                <p className="marketing-questions green-font">
                    Do you need a website for your small business or project?
                    Have you ever had an idea for an app, but don't know how to build it?
                    Are you interested in getting into development, but don't know where to get started?
                </p>
                <div className="base-body-div">
                    <p className="base-body">If you said yes to any of these questions TMCStudios can help. TMCStudios is a group of freelance developers interested in helping clients with their business needs and personal projects. We have the technical skills that YOU want to build websites, GUI applications or iOS apps. Below is a list of services we provide:</p>
                </div>
                <ul className="green-font">
                    <li>Website creation</li>
                    <li>App Development</li>
                    <li>Consulting and Mentorship</li>
                </ul>
                <div className="base-body-div">
                    <p className="base-body">Contact us now for a free consultation!</p>
                </div>
            </div>
            <div className='bottom'></div>
        </div>
    )
}

export default Home;