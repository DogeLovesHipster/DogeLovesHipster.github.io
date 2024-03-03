import '../styles/HeadingSection.css';

const HeadingSection = ({ name = "Placeholder" }) => {
    return (
        <div className='HeadingSection'>
            <h2>{name}</h2>
            <hr />
        </div>
    );
};

export default HeadingSection;