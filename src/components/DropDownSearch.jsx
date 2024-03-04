import '../styles/DropDownSearch.css';

const DropDownSearch = (name, type, image) => {
    return (
        <div className="Container">
            <img src={image} alt="Animal Image" />
            <h4>{name}</h4>
            <p>{type}</p>
        </div>
    );
};

export default DropDownSearch;