import "../styles/styles.css"

function Home() {
    return (
        <div>
            <div className='navbar-space' />
            <div className='home-title'>
                <div className="space-50p"></div>
                <div className="title1">
                    <h2 className="libre-baskerville-regular">EXCELLENCE</h2>
                </div>
                <div className="title2">
                    <h2 className="bungee-regular">Design & Technology</h2>
                </div>
                <div className="title-divider"></div>
                <div className="title-body">
                    <p className="schibsted-grotesk-test">At TMC Studios, we pride ourselves in delivering high-quality technological solutions.
                    TMC Studios is founded by Tyler M Chambers an IT professional with years of experience resolving technological issues with developed solutions.
                    </p>
                </div>
            </div>
            <div className='home-body-one'>
                <div className="body-divider"></div>
                <div className="blurb-one">
                    <p className="outfit-bold">Reliability, Quality Work, Knowledgeable</p>
                </div>
                <div className="blurb-two">
                    <p className="playwrite-fr-moderne-thin">Comitted to Excellence</p>
                </div>
                <div className="blurb-three">
                    <p className="schibsted-grotesk-test-two">Experience a high-level of professionalism and expertise. Over 5 industry certifications, including: CompTIA Security+, CCNA, RHCSA. Skilled in multiple programming languages like Javascript, Python, C# and popular frameworks like React, NodeJS and Django.  </p>
                </div>
                <div className="body-background-image"></div>
            </div>
            <div className='home-body-two'>
                <div className="body-two-title outfit-bold-black">
                    Solutions Tailored to You
                </div>
                <div className="body-two-subtitle playwrite-fr-moderne-thin-black">
                    IT Services
                </div>
                <div className="body-two-textbody schibsted-grotesk-test">
                    Discover a comprehensive suite of skills. I can develop breath-taking front-end visual designs for your website, offer expertise in break/fix troubleshooting and automate daily tasks to reduce your time spent in front of the screen.
                </div>
                <div className="ad-box-one">
                    <div className="ad-box-title">Front End Design</div>
                    <div className="ad-box-subtitle">Interactive UI</div>
                    <div className="ad-box-body">Experience visually stunning and interactive website and application UI. Utilizing ReactJS, HTML and CSS.</div>
                </div>
                <div className="ad-box-two">
                    <div className="ad-box-title">Client Services</div>
                    <div className="ad-box-subtitle">Dedicated Support</div>
                    <div className="ad-box-body">Skilled in break/fix troubleshooting at the application and network level of the OSI Model. 3 years of experience!</div>
                </div>
                <div className="ad-box-three"></div>
                <div className="ad-box-four">
                    <div className="ad-box-title">Automation Workflows</div>
                    <div className="ad-box-subtitle">Scripting Solutions</div>
                    <div className="ad-box-body">Automate the boring stuff! Skills in PowerShell, Python, C# and more. Experience with REST and COM API's and developing client solutions.</div>
                </div>
            </div>
            <div className="footer">
                Copyright TMCStudios LLC | Site Design by Tyler Chambers
            </div>
        </div>
    )
}

export default Home;