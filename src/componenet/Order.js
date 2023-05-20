import React from 'react'
import { useState, useEffect } from 'react';

function Order() {
    const [isPopupVisible, setPopupVisibility] = useState(false);

    useEffect(() => {
        setPopupVisibility(true);
      }, []);
    
      const closePopup = () => {
        setPopupVisibility(false);
      };

  return (
    <div>

    {isPopupVisible && (
      <div className="popup">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <span class="p-3 bg-info bg-opacity-10 border border-info rounded w-100">
    <div class="modal-content">
      <div class="modal-header">
      <div class="p-2 mb-3 mt-0 bg-primary text-white rounded w-100 bg-gradient bg-opacity-75">Order Details</div>
        
      </div>
      <div class="modal-body">
        <div class="row">
  <div class="col-sm-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Date</span>
  </div>
  <div class="col-sm-9">
    <div class="input-group mb-3">
      <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Order Number</span>
  </div>
  <div class="col-sm-9">
    <div class="input-group mb-3">
      <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Customer</span>
  </div>
  <div class="col-sm-9">
    <div class="input-group mb-3">
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Part Number</span>
  </div>
  <div class="col-sm-9">
    <div class="input-group mb-3">
      <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Planner Name</span>
  </div>
  <div class="col-sm-9">
    <div class="input-group mb-3">
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Deadline</span>
  </div>
  <div class="col-sm-9">
    <div class="input-group mb-3">
      <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Batch Control#</span>
  </div>
  <div class="col-sm-9">
    <div class="input-group mb-3">
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Quantity</span>
  </div>
  <div class="col-sm-9">
    <div class="input-group mb-3">
      <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    </div>
  </div>
</div>
      </div>
      <div class="modal-footer">
        
        <button type="button" onClick={closePopup} class="btn btn-primary">Submit</button>
      </div>
    </div></span>
  </div>
        </div>
      )}
    </div>
  )
}

export default Order
