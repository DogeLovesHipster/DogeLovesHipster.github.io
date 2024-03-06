import React from 'react';
import '../styles/BaseSection.css';

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