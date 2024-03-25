/**
 * Renders the scientific classification of a species.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.domain - The domain of the species.
 * @param {string} props.kingdom - The kingdom of the species.
 * @param {string} props.phylum - The phylum of the species.
 * @param {string} props.class - The class of the species.
 * @param {string} props.order - The order of the species.
 * @param {string} props.family - The family of the species.
 * @param {string} props.genus - The genus of the species.
 * @param {string} props.species - The species of the species.
 * @returns {JSX.Element} The rendered component.
 */
const ScientificClassification = ({ domain, kingdom, phylum, class: className, order, family, genus, species }) => {
    return (
        <div>
            <h4>Scientific Classification</h4>
            <p>Domain: {domain}</p>
            <p>Kingdom: {kingdom}</p>
            <p>Phylum: {phylum}</p>
            <p>Class: {className}</p>
            <p>Order: {order}</p>
            <p>Family: {family}</p>
            <p>Genus: {genus}</p>
            <p>Species: {species}</p>
        </div>
    )
}

export default ScientificClassification;