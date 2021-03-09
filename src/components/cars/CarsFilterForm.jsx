import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Form, Row } from 'react-bootstrap';
import InputRange from 'react-input-range';
import { carsApi } from 'api/api';
import { setCars } from 'redux/cars-reducer';
import 'react-input-range/lib/css/index.css';
import { LoadingButton } from 'components/common/LoadingButton';

const initialState = {
  data: {
    producer: '',
    model: '',
    transmission: '',
    issue_year__gt: 1950
  },
  loading: null
};

class CarsFilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmit.bind(this);
    this.handleChange.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    carsApi.getCars(this.state.data).then((data) => {
      this.props.setCars(data);
      this.setState({ loading: false });
    });
  };
  handleChange = (event) => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value }
    });
  };
  render() {
    return (
      <div className="col-12 border rounded p-3 mb-2">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Producer
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="producer"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Model
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="model"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Transmission
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                as="select"
                name="transmission"
                onChange={this.handleChange}
              >
                <option value="">...</option>
                <option value={1}>Mechanic</option>
                <option value={2}>Automatic</option>
                <option value={3}>Robot</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mt-4">
            <Form.Label column sm={3}>
              Issue year after
            </Form.Label>
            <Col sm={9} className="px-4 pt-3 pt-sm-2">
              <InputRange
                maxValue={2020}
                minValue={1950}
                value={this.state.data.issue_year__gt}
                onChange={(value) =>
                  this.setState({
                    data: { ...this.state.data, issue_year__gt: value }
                  })
                }
              />
            </Col>
          </Form.Group>
          <div className="d-flex">
            <LoadingButton
              variant="success"
              text="Search"
              disabled={this.state.loading}
              className="ml-auto"
            />
          </div>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCars
};

export default connect(null, mapDispatchToProps)(CarsFilterForm);
