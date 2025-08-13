import '../../styles/more-info-card.css'

function MoreInfoCard(props) {
    return (
        <div className='more-info-card'>
            <p>Stack: Javascript, React</p>
            <p>Description: This is a web app created using React Javascript framework. It is a multi-track audio recording application. 
                You can record multiple tracks, layer audio and export the finished result. It uses an audio library that should only work in Google Chrome, Microsoft Edge, or Mozilla FIrefox. Sorry no safari.
            </p>
        </div>
    )
}

export default MoreInfoCard;