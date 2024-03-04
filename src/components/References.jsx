import '../styles/References.css';

const References = ({ referencesList }) => {
    return (
        <div className="ReferencesContainer">
            <h4>References</h4>
            <hr className="ReferencesSeperator"></hr>
            <ul>
                {referencesList && referencesList.map((reference, index) => (
                    <li key={index}>
                        {reference.author}. ({reference.year}). {reference.title}. 
                        {reference.journal && <><em>{reference.journal}</em>. </>}
                        {reference.volume && <>Volume {reference.volume}. </>}
                        {reference.pages && <>Pages {reference.pages}. </>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default References;