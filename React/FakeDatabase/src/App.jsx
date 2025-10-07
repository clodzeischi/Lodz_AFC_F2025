import {monsters} from "./util/database.js";
import {Card, CardBody, CardTitle, Button} from 'reactstrap';
import reactImage from './assets/react.svg';

const App = () => {

    const monsterCards = monsters.map((e, i) => {
        return (
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Race: {e.race}</CardTitle>
                    <Button color="primary">Click Me</Button>
                </CardBody>
            </Card>
        );
    });


    return ( <>
            <h1>My fake database</h1>
            {monsterCards}
    </>);
}

export default App;