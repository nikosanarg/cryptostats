const Grafico = (props) => {
    let max = 0
    let min = Infinity
    for (let i = 0; i < props.prices.length; i++) {
        if (props.prices[i] < min) min = props.prices[i]
        else if (props.prices[i] > max) max = props.prices[i]
    }

    console.log(props.prices)
    
    return (
        <div id="grafico-container">
            {props.prices.map((p, i) => {
                let h = max - min // altura del gráfico en escala
                let a = props.prices[i-1] // precio vela anterior
                let velaColor, velaSombra, velaStart
                let velaHeight = Math.abs((p - a) / h * 220)

                if (p - a < 0) {
                    velaColor = "red"
                    velaSombra = "salmon"
                    velaStart = (((a - min) / h) * 220)-220
                } else {
                    velaColor = "green"
                    velaSombra = "lime"
                    velaStart = (((p - min) / h) * 220 )-220
                }

                if (i !== 0) {
                    return <div 
                        className="vela" 
                        key={i}
                        style={{
                            background: velaColor,
                            height: velaHeight + "px",
                            bottom: velaStart + "px",
                            "box-shadow": "inset 0 0 0 2px " + velaSombra
                        }}>
                    </div>
                } 
            })}
        </div>
    )
}

export default Grafico
