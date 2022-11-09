import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import filter from "../../assests/image/filter.png"
const Dropdown = () => {
  return (
    <div className="d-lg-block d-xl-block d-sm-none d-md-block d-none ">
      <div className="bg-light mb-4 container-fluid">
        <h5 className="text-muted">
          <img src={filter} alt="filter" className="px-2"/>
          Filter By</h5>

        <div className="justify-content- row d-flex col-12 ">
          <div className="col-lg-3 col-md-3 col-4 mt-2">
            <label>Category</label>
            <Form.Select size="lg">
              <option className="text-muted "  selected disabled >
                select category
              </option>
              <option>Large select</option>
              <option> select</option>
              <option>1 select</option>
            </Form.Select>
          </div>
          <div className="col-lg-3 col-md-3 col-4 mt-2">
            <label>Sub-Category</label>
            <Form.Select size="lg">
              <option  selected disabled>
                Sub-Category
              </option>
              <option>Large select</option>
              <option> select</option>
              <option>1 select</option>
            </Form.Select>
          </div>
          <div className="col-lg-3 col-md-3 col-4 mt-2">
            <label>Delivery Time</label>
            <Form.Select size="lg">
              <option  selected disabled>
                Delivery Time
              </option>
              <option>Large select</option>
              <option> select</option>
              <option>1 select</option>
            </Form.Select>
          </div>
          <div className="col-lg-3 col-md-3 col-4 mt-2">
            <label>Country</label>
            <Form.Select size="lg">
              <option selected disabled>
                Country
              </option>
              <option>Large select</option>
              <option> select</option>
              <option>1 select</option>
            </Form.Select>
          </div>
          <div className="col-lg-3 col-md-3 col-4 mt-2">
            <label>Post Day</label>
            <Form.Select size="lg">
              <option selected disabled>
                Post Day
              </option>
              <option>Large select</option>
              <option> select</option>
              <option>1 select</option>
            </Form.Select>
          </div>
          <div className="col-lg-3 col-md-3 col-4 mt-2">
            <label>Pricing</label>
            <Form.Select size="lg">
              <option  selected disabled>
                Pricing
              </option>
              <option>Large select</option>
              <option> select</option>
              <option>1 select</option>
            </Form.Select>
          </div>

          <div className="col-lg-3 col-md-3 col-4 mt-2">
            <div className="d-flex mt-4">
              <h6 className="text-muted m-3">Clear Filter</h6>
              <Button variant="dark">Apply</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
