const FireEcologySection = ({ fireEcology }) => {

    return (
        <section className="fireEcologyText">
            <h4>Relationship to Fire Ecology</h4>
            {fireEcology && fireEcology[0] && fireEcology[0].text && fireEcology[0].text.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </section>
    );
};

export default FireEcologySection;