import React, { useState } from 'react';
import { useParams} from 'react-router-dom';

function EditCar(props) 
{
    let { id } = useParams();
    const [carName, setCarName] = useState('');

    function addCar() {
        props.addNewCar({id: 0, name: carName});
    }

    function editExistingCar() {
        props.editCar({id: id, name: carName});
    }

    function updateName(e) {
        setCarName(e.target.value);
    }

    return (
        <div>
            <input value={carName} onChange={e => updateName(e)} type="text"></input>
            <button onClick={!id ? addCar : editExistingCar}>Save</button>
        </div>
    );
}

export default EditCar;