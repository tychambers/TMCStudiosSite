import '../styles/more-info-card.css'

function MoreInfoCard(props) {
    return (
        <div className='more-info-card'>
            <p>Stack: python, tkinter, c#, wpf </p>
            <p>Description: There are 3 different tools here. All of these tools are used with Globalscape's EFT software
                The first GUI Hammer is a c# tool made with WPF framework used to help with troubleshooting EFT when the Admin console hangs. The second tool
                AppenderGen is used to create logging appenders, this does not require any dependencies for use, it is a simple text manipulation program
                The last program is the disable tool, this is similiar to the GUI hammer just written on python's tkinter and has a few more features
            </p>
            <p>
                Note: GUI Hammer will require additional installs and EFT COM DLLs to be installed to properly work. EFT Disable tool requires EFT for login.
            </p>
        </div>
    )
}

export default MoreInfoCard;