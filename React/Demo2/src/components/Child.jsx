const Child = ({myChildren}) => {

    let results = myChildren.map( (el) => {
        return (
            <p>My child: {el}</p>
        )
    });

    return (
        <>
            <h3>My children are:</h3>

            {myChildren.map( (el, i) => {
                return (
                    <p key={i}>My child: {el}</p>
                )}
            )}
        </>
        );
}

export default Child;