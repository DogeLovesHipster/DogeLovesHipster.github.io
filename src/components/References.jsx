import '../styles/References.css';

const References = ({ referencesList }) => {
    return (
        <div className="ReferencesContainer">
            <h4>References</h4>
            <hr className="ReferencesSeparator"></hr>
            <ul>
                {referencesList && referencesList.map((reference, index) => (
                    <li key={index} className="ReferenceItem">
                        <span className="ReferenceAuthor">{reference.author}</span>
                        <span className="ReferenceYear"> ({reference.year}).</span>
                        <span className="ReferenceTitle"> {reference.title}</span>
                        {reference.journal && <span className="ReferenceJournal"> <em>{reference.journal}</em></span>}
                        {reference.volume && <span className="ReferenceVolume">, <em>{reference.volume}</em></span>}
                        {reference.pages && <span className="ReferencePages">, {reference.pages}</span>}
                        {reference.doi ? (
                            <span className="ReferenceDoi">. doi: <a href={`https://doi.org/${reference.doi}`} target="_blank" rel="noopener noreferrer">{reference.doi}</a></span>
                        ) : (
                            reference.url && <span className="ReferenceUrl">. <a href={reference.url} target="_blank" rel="noopener noreferrer">{reference.url}</a></span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default References;
