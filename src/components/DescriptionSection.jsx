import "../styles/DescriptionSection.css";

/**
 * Renders a section with descriptions.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string[]} props.descriptions - An array of descriptions.
 * @returns {JSX.Element} The rendered component.
 */
const DescriptionSection = ({ descriptions }) => {
    return (
        <section className="description">
            <h4>Description</h4>
            {descriptions.map((descriptions, index) => (
                <p key={index}>{descriptions}</p>
            ))}
        </section>
    );
};

export default DescriptionSection;