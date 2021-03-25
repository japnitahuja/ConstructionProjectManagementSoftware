import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser, selectCurrentUserFirstName } from './redux/user/user.selectors';
import AllProjects from './pages/all-projects/all-projects';
import Project from './pages/project/project.page';
import Task from './pages/task/task.page';
import Step from './pages/step/step.page'
import PurchaseOrder from './pages/task-purchase-orders/task-purchase-orders.page'
import IndividualPurchaseOrder from './pages/individual-purchase-order/individual-purchase-order.page';
import projectPurchaseOrders from './pages/project-purchase-orders/project-purchase-orders';


function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact render = {() => 
          props.currentUser ? (<Redirect to='/all-projects' />): (<SignInAndSignUpPage />)
        } />
        <Route path='/all-projects' exact component={AllProjects} />
        <Route path='/project/:projectId' exact component={Project}/>
        <Route path='/task/:taskId' exact component={Task} />
        <Route path='/step/:stepId' exact component={Step} />
        <Route path='/purchaseOrders/:taskId' exact component={PurchaseOrder} /> 
        <Route path='/purchaseOrder/:POid' exact component={IndividualPurchaseOrder} />
        <Route path='/projectpurchaseorders/:projectId' exact component={projectPurchaseOrders}/>
      </Switch>
    </BrowserRouter>
    
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUserFirstName
})


export default connect(mapStateToProps, null)( App);
