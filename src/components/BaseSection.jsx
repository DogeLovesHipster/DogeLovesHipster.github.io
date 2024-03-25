import React from 'react';
import '../styles/BaseSection.css';

/**
 * BaseSection component represents a section with a title, text, and optional figure.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the section.
 * @param {string} props.text - The text content of the section.
 * @param {string[]} props.figure - An array of image source URLs for the figure.
 * @param {boolean} props.break - Whether to display a horizontal line break after the title.
 * @param {React.Ref} ref - The ref object for the section element.
 * @returns {JSX.Element} The rendered BaseSection component.
 */
const BaseSection = React.forwardRef(({ title, text, figure, break: shouldBreak }, ref) => {
    return (
        <section ref={ref} className="baseSectionText">
            <h4>{title}</h4>
            {shouldBreak && <hr/>}
            <div className="content">
                {figure && 
                    <div className="figure">
                        {figure.map((imgSrc, index) => (
                            <img key={index} src={imgSrc} alt={`Figure ${index + 1}`} />
                        ))}
                    </div>
                }
                <div className={figure ? "textWithFigure" : "text"}>
                    {text && text.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default BaseSection;