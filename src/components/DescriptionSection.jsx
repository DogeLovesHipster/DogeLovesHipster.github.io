import "../styles/DescriptionSection.css";

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