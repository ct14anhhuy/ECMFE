import { connect } from "react-redux";
import { Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const employee = props.employee;

  return (
    <Route render={() => (employee.id > 0 ? props.children : null)}></Route>
  );
};

const mapStateToProps = (state) => {
  return {
    employee: state.employeeReducers,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);