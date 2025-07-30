import '../../styles/more-info-card.css'

function MoreInfoCard(props) {
    return (
        <div className='more-info-card'>
            <p>Stack: python, django, bootstrap, REST API, SQLite</p>
            <p>Description: This is a test website and one of the first websites that I ever built. It uses python django web framework for the backend, and the front-end is very bare bones using bootstrap.
                There are a couple of cool apps that will show movies, and a 20 questions game. Both of these send api requests to gather info.
                There is also authentication, you can register your account, login, etc. I still have to build out that functionality to be useful, but it works.
                There is also a guest book, feel free to sign it.
            </p>
        </div>
    )
}

export default MoreInfoCard;