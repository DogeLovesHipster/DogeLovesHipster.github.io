import '../styles/References.css';

/**
 * Renders a list of references.
 *
 * @component
 * @param {Object[]} referencesList - The list of references to render.
 * @param {string} referencesList[].author - The author of the reference.
 * @param {number} referencesList[].year - The year of the reference.
 * @param {string} referencesList[].title - The title of the reference.
 * @param {string} [referencesList[].journal] - The journal of the reference (optional).
 * @param {string} [referencesList[].volume] - The volume of the reference (optional).
 * @param {string} [referencesList[].pages] - The pages of the reference (optional).
 * @param {string} [referencesList[].doi] - The DOI of the reference (optional).
 * @param {string} [referencesList[].url] - The URL of the reference (optional).
 * @returns {JSX.Element} The rendered References component.
 */
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
