import '../styles/HeadingSection.css';

/**
 * Renders a heading section with a name and a horizontal line.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.name="Placeholder"] - The name to be displayed in the heading.
 * @returns {JSX.Element} The rendered heading section.
 */
const HeadingSection = ({ name = "Placeholder" }) => {
    return (
        <div className='HeadingSection'>
            <h2>{name}</h2>
            <hr />
        </div>
    );
};

export default HeadingSection;