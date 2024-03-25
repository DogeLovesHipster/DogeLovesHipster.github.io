/**
 * Renders a section for displaying briefings.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.briefings - An array of briefings to be displayed.
 * @returns {JSX.Element} The rendered BriefingSection component.
 */
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