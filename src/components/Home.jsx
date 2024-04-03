import React, { useState } from "react";
import './style.scss'
import trash from './trash.png'
import plus from './plus.png'

function Home() {
    const [toDo, setToDo] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [count, setCount] = useState(0)

    const handleClear = () => setToDo([])
    
    const handleAddTODO = () => {
        if(inputValue){
            setCount(count + 1)
            setToDo([...toDo, {
                id: count,
                name: inputValue
            }])
            setInputValue('')
        }
    }

    const handleDelete = (id) => {
        const deletedData = toDo.filter((item) => item.id !== id)
        setToDo(deletedData)
    }
    
    return (
        <div className="container">
            <div className="hero">
                <h1 className="title">Todo app</h1>
                <div className="bnt__inp">
                    <input 
                        className="inp" type="text" 
                        placeholder="Add tour new todo" 
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <img className="img__plus" src={plus} onClick={handleAddTODO}/>
                </div>

                {toDo.map((item) => 
                    <div className="btn__inp-item">
                        <button className="btn__item2">{item.name}</button>
                        <img className="img__trash" src={trash} onClick={() => handleDelete(item.id)}/>
                    </div>
                )}

                {toDo.length ? (
                    <div className="sub__display">
                    <h1 className="sub__titile">You have {toDo.length} pending tasks</h1>
                    <button className="sub__button" onClick={handleClear}>Clear All</button>
                </div>
                ) : ""}
            </div>
        </div>
    )
}
export default Home