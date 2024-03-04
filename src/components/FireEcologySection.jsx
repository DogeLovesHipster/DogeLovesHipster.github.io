const FireEcologySection = ({ fireEcology }) => {
    return (
        <section className="fireEcologyText">
            <h4>Relationship to Fire Ecology</h4>
            {fireEcology && fireEcology.map((fireEcologyText, index) => (
                <p key={index}>{fireEcologyText}</p>
            ))}
        </section>
    );
};

export default FireEcologySection;