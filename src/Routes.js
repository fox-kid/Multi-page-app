import { Switch, Route } from "react-router-dom";
import ROUTES_CONFIG from "./config/routes";

function Routes() {
  return (
    <Switch>
      {ROUTES_CONFIG.map((route) => {
        const Page = route.page;
        const Guard = route.guard;

        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Page {...props} />
              </Guard>
            )}
          />
        );
      })}
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  );
}

export default Routes;
