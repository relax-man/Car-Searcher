import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carsApi } from 'api/api';
import { setCars } from 'redux/cars-reducer';
import { SpinnerWithText } from 'components/common/Spinnners';
import LoadingImage from 'components/common/LoadingImage';

class CarsList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: null };
  }
  componentDidMount() {
    this.setState({ loading: true });
    carsApi.getCars().then((data) => {
      this.props.setCars(data);
      this.setState({ loading: false });
    });
  }
  render() {
    return (
      <div className="row border rounded p-3">
        <h4 className="col-12 mb-3">Cars:</h4>
        <div className="col-12">
          {!this.state.loading ? (
            this.props.cars.map((car, i) => (
              <div key={i} className="card w-100 mb-2">
                <div className="row no-gutters">
                  <LoadingImage
                    src={car.photo}
                    className="col-12 col-sm-4"
                    style={{ minHeight: '8em' }}
                  />
                  <div className="col-12 col-sm-8">
                    <div className="card-body">
                      <h5 className="card-title">{`${car.producer} ${car.model}`}</h5>
                      <p className="card-text m-0">
                        <span className="text-monospace">Issue Year:</span>{' '}
                        {car.issue_year}
                      </p>
                      <p className="card-text m-0">
                        <span className="text-monospace">Transmission:</span>{' '}
                        {car.transmission}
                      </p>
                      <div className="d-flex align-items-center">
                        <span className="text-monospace">Color:</span>
                        <div
                          className="rounded-circle border ml-1"
                          style={{
                            width: '1.1em',
                            height: '1.1em',
                            backgroundColor: car.color
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <SpinnerWithText className="my-3" />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.carsData;
};

const mapDispatchToProps = {
  setCars
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
