import Child from "./Child.jsx";

const Parent = (props) => {
    let children = ['Jack', 'Jill'];

    return (
        <>
            <h2>Mother: {props.mother}, Father: {props.father}</h2>
            <Child myChildren = {children} />
        </>
    );
}

export default Parent;