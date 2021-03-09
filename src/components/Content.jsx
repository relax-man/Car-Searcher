import React, { Component } from 'react';
import CarsFilterForm from 'components/cars/CarsFilterForm';
import CarsList from 'components/cars/CarsList';

function ToggleFitlerFormBtn(props) {
  return (
    <button
      onClick={props.onClick}
      className="col-12 btn btn-white border mb-2"
    >
      {props.text}
    </button>
  );
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { isFilterFormVisiable: false };
  }
  toggleForm = () => {
    this.setState({ isFilterFormVisiable: !this.state.isFilterFormVisiable });
  };
  render() {
    return (
      <div className="container px-4 px-md-0 py-4">
        <div className="row">
          {this.state.isFilterFormVisiable ? (
            <>
              <ToggleFitlerFormBtn
                onClick={this.toggleForm}
                text="Hide filter form"
              />
              <CarsFilterForm />
            </>
          ) : (
            <ToggleFitlerFormBtn
              onClick={this.toggleForm}
              text="Open filter form"
            />
          )}
        </div>
        <CarsList />
      </div>
    );
  }
}

export default Content;
