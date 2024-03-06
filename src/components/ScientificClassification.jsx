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