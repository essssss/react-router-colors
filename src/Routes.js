import { Switch, Route, Redirect } from "react-router-dom";
import ColorPage from "./ColorPage";
import NewColorPage from "./NewColorPage";

const Routes = ({ colors, addColor }) => {
    return (
        <Switch>
            <Route exact path="/colors/new">
                <NewColorPage addColor={addColor} />
            </Route>
            <Route exact path="/colors/:color">
                <ColorPage />
            </Route>
            <Route exact path="/colors">
                <h1>Let's Have Some Color Fun</h1>
            </Route>
            <Redirect to="/colors" />
        </Switch>
    );
};
export default Routes;
