const Selector = () => {
    let selector

    const coins = {
        "none" : "sobala",
        "btc" : "Bitcoin (BTC)",
        "eth" : "Etherium (ETH)",
        "sol" : "Solana (SOL)",
        "rose" : "Rose (ROSE)",
        "mana" : "Descentraland (MANA)",
        "sand" : "Sandbox (SAND)",
        "dot" : "Polkadot (DOT)",
        "ada" : "Cardano (ADA)",
        "matic" : "Polygon (MATIC)",
        "luna" : "Terra (LUNA)",
        "avax" : "Avalanche (AVAX)",
        "sys" : "Syscoin (SYS)",
        "doge" : "Doge (DOGE)",
        "shib" : "Shiba Inu (SHIB)"
    }

    window.onload = () => { selector = document.querySelector('#selector-combo') }
    
    const searchCoin = () => {
        if (selector.value === "none") alert("Por favor, elija una criptomoneda")
        else alert("No implementado aún para " + coins[selector.value])
    }

    const enableButton = () => {
        document.querySelector('#selector-button').disabled = false
    }

    return (
        <div className="selector-container">
            <select id="selector-combo" defaultValue={"none"} onChange={enableButton}>
                <option value="none" disabled>--Seleccione una moneda--</option>
                <option value="btc">{coins["btc"]}</option>
                <option value="eth">{coins["eth"]}</option>
                <option value="sol">{coins["sol"]}</option>
                <option value="rose">{coins["rose"]}</option>
                <option value="mana">{coins["mana"]}</option>
                <option value="sand">{coins["sand"]}</option>
                <option value="dot">{coins["dot"]}</option>
                <option value="ada">{coins["ada"]}</option>
                <option value="matic">{coins["matic"]}</option>
                <option value="luna">{coins["luna"]}</option>
                <option value="avax">{coins["avax"]}</option>
                <option value="sys">{coins["sys"]}</option>
                <option value="doge">{coins["doge"]}</option>
                <option value="shib">{coins["shib"]}</option>
            </select>
            <button onClick={searchCoin} id="selector-button">Buscar</button>
        </div>
    )
}

export default Selector
