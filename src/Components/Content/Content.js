import './Content.css'
import Grafico from './Grafico'
import Selector from "./Selector"

const Content = () => {
    let prices = []
    let scale = Math.random() * 400 + 1
    let prev = 0
    let num
    for (let i = 0; i < 15; i++) {
        if (!prev) {
            num = Math.round(Math.random() * scale + 10) 
        } else {
            num = Math.round(Math.random() * scale + 10)
            if (Math.random() > 0.5 && prev - num > 0) num *= -1
        }
        prices.push(prev + num)
        prev = num
    }

    return (
        <div className="container">
            <Selector />
            <Grafico prices={prices}/>
        </div>
    )
}

export default Content
