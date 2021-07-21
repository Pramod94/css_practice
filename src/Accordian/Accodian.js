import React, { useState } from 'react';

const EachAccordian = ({ element, currentSelection, handleSelection }) => {
    return(
        <div>
            <div>
                <h3 onClick={() => handleSelection(element.id)}>{element.title}</h3>
            </div>
            { (currentSelection === element.id) && <div>{element.description}</div> }
        </div>
    )
}

const Accordian = ({ data }) => {

    const [currentSelection, setCurrentSelection] = useState(1);

    // Can also make use of index for item selection
    const handleSelection = (eleId) => {
        setCurrentSelection(eleId);
    }

    return (
        <div>
            <h3>Accordian</h3>
            {data && data.map(ele => (
                <div key={ele.id} >
                    <EachAccordian element={ele} currentSelection={currentSelection} handleSelection={handleSelection} />
                </div>
            ))}
        </div>
    )
}

export default Accordian;
