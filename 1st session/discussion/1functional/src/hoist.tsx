function Hoist() {

    return <div>
        {hello()}        
    </div>

    function hello() {
        return "Hello"    
    }
    
    const old = () => {
        return "Old";
    }
}

export default Hoist;