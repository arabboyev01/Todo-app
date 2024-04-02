import React from "react";
import { Link } from "react-router-dom";
import './style.scss'
import trash from './trash.png'
import plus from './plus.png'

function Home() {
    return (
        <div className="container">
            <h1>Home</h1>
            <Link to="/service">Service</Link>

            <div className="hero">
                <h1 className="title">Todo app</h1>
                <div className="bnt__inp">
                    <input className="inp" type="text" placeholder="Add tour new todo" />
                    <img className="img__plus" src={plus} />
                </div>

                <button className="btn__item">Buy a new gaming laptop</button>

                <div className="btn__inp-item">
                    <button className="btn__item2">Complete a previous task</button>
                    <img className="img__trash" src={trash} />
                </div>

                <button className="btn__item">Create video for YouTube</button><br />
                <button className="btn__item">Create a portfolio site</button>

                <div className="sub__display">
                    <h1 className="sub__titile">You have 4 pending tasks</h1>
                    <button className="sub__button">Clear All</button>
                </div>
            </div>
        </div>
    )
}
export default Home