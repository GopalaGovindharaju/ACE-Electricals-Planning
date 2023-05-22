import React from 'react';

const Popup = ({ onSubmit }) => {
  return (
    <div><center>
      <form class="bg-info bg-opacity-10 border border-info rounded w-50" onSubmit={onSubmit}>
        <div class="p-2">
      <div class="modal-header">
      <div class="p-2 mb-3 custom-text-color rounded w-100">Order Details</div>
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
        
        <button type="submit" class="btn custom-text-color">Submit</button>
      </div></div>
      </form>
      </center>
    </div>
  );
};

export default Popup;
