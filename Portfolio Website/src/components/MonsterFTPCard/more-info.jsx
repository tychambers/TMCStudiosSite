import '../../styles/more-info-card.css'

function MoreInfoCard(props) {
    return (
        <div className='more-info-card'>
            <p>Stack: python, tkinter, paramiko sftp library, PostGreSQL</p>
            <p>Description: This is a monster-themed free-to-use FTP client software. Similiar to WinSCP or Filezilla. This supports both FTP and SFTP protocols for file transfers.
                There is also a way to connect to a PostGreSQL server which will track and log all of your transfers. This is a GUI app that was built using python and tkinter library.
            </p>
        </div>
    )
}

export default MoreInfoCard;