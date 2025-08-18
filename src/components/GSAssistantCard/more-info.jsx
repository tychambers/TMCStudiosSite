import '../../styles/more-info-card.css'

function MoreInfoCard(props) {
    return (
        <div className='more-info-card'>
            <p>Stack: Python FastAPI backend, React Frontend, OpenAI api, Pinecone DB</p>
            <p>Description: I created this as an assistant for my support job at Fortra. It uses AI to formulate answers for questions based on our knowledge base. I used a webscraper (python script) to scrape the data off of our Knowledge Base websites, then formatted and stored this in the Pinecone database.
                Afterwards, I set up a python backend to handle the request to the OpenAI api and forward the info to the frontend. I deployed all of this on render.com using the free tier. I had some dependency issues originally using github for the main repository, so I containerized the backend using docker and stored the container image on docker's website.
                After this everything spun up like a charm. Ask it any questions about EFT.
            </p>
        </div>
    )
}

export default MoreInfoCard;