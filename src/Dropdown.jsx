import { useState } from "react";
function Dropdown([ selected, setSelected ]) {
    const [isActive, setIsActive] = useState(false);
    const options = ["React", "Vue", "Angular"];
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => 
            setIsActive(!isActive)}>
                Choose One 
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div onClick={(e) => {
                            setSelected(option)
                            setActive(false)
                        }
                    }className="dropdown-item">
                        {option}
                        </div>
                    ))}
                    </div>
            )}
        </div>
    );
}

export default Dropdown;