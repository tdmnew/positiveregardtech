import React from "react"

const SelectedWork = () => (
    <div className="selected-work">
        <div className="selected-work__container">
            <span className="selected-work__container__header">Selected Work</span>
                <div className="selected-work__container__work">
                    <a className="selected-work__container__work--insightstation" href="https://insightstation.xyz/">
                    <span className="selected-work__container__work__title">Insight Station</span>
                    </a>
                    <a className="selected-work__container__work--chalettoitrouge" href="https://www.chalettoitrouge.fr/">
                    <span className="selected-work__container__work__title">Chalet Toit Rouge</span>
                    </a>
                    <a className="selected-work__container__work--github" href="https://github.com/tdmnew/">
                    <span className="selected-work__container__work__title">My GitHub Repos</span>
                    </a>
            </div>
        </div>
    </div>
)

export default SelectedWork 
