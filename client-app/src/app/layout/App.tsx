import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/activities/dashboard/home/HomePage';
import ActivityForm from '../../features/activities/dashboard/form/ActivityForm';
import NavBar from './NavBar';
import { Route, useLocation } from 'react-router-dom';
import ActivityDetails from '../../features/activities/dashboard/details/ActivityDetails';

function App() {
  const loacation = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>

              <Route exact path='/activities' component={ActivityDashboard} />
              <Route path='/activities/:id' component={ActivityDetails} />
              <Route key={loacation.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
            </Container>
          </>
        )}
      />

    </>
  );
}

export default observer(App);
