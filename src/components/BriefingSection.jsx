import "../styles/BriefingSection.css";

const BriefingSection = ({ briefings }) => {
    return (
        <section className="briefing">
            {briefings.map((briefing, index) => (
                <p key={index}>{briefing}</p>
            ))}
        </section>
    );
};

export default BriefingSection;