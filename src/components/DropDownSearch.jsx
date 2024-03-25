import '../styles/DropDownSearch.css';

/**
 * Renders a dropdown search component.
 *
 * @param {string} name - The name of the animal.
 * @param {string} type - The type of the animal.
 * @param {string} image - The URL of the animal image.
 * @returns {JSX.Element} The rendered dropdown search component.
 */
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