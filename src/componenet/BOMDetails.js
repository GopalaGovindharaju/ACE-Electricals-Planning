import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';
import {Row,Col,container} from "react-bootstrap";
import MoreInputForm from './BOMMorespecs';
import './CustomStyles.css';
function Gridlay(){
    return(
        <container>
            <div class="row">
                <div class="col">

                <div class="card p-1 border">
                    <center>
                    <div class="card-header custom-text-color"><h3>BOM Details</h3> </div>
                        <div class="card-body">
                        
                        <form>
                        <div class="input-group input-group-sm custom-bcolor">    
                            <label class="col-sm-6 col-form-label custom-input-color">No of Bends</label>
                            <div class="col-sm-6">
                                <input value="10" type="number" id="bends" class="form-control" />   
                            </div>
                        </div><br></br>
                        <div class="input-group input-group-sm custom-bcolor">    
                            <label class="col-sm-6 col-form-label custom-input-color">No of pieces</label>
                            <div class="col-sm-6">
                                <input value="0" type="number" id="pieces" class="form-control" />   
                            </div>
                        </div><br></br>
                        <div class="input-group input-group-sm custom-bcolor">    
                            <label class="col-sm-6 col-form-label custom-input-color">Time-per-part</label>
                            <div class="col-sm-6">
                                <input value="00:00" type="time" id="time_req" class="form-control" />   
                            </div>
                        </div><br></br>

                        <MoreInputForm />
                        </form>
                        </div>
                    </center>
                </div>

                </div>
                <div class="col-md-9">
                    <div class="col">
                        <div class="row-sm">
                        <div class="card p-1 border">
                        <center>
                        <div class="card-header-sm custom-text-color w-60"><h3>Required Effort</h3> </div>
                        <div class="card-body-sm">
                        
                        
                        <form>
                        <div class="row">
                            <div class="col-sm">
                                <div class="input-group input-group-sm custom-bcolor">    
                                <label class="col-sm-6 col-form-label custom-input-color">Time Required</label>
                                <div class="col-sm-6">
                                <input value="00:00" type="time" id="time_req" class="form-control" />   
                                </div>
                                </div>
                            </div>

                            <div class="col-sm">
                                <div class="input-group input-group-sm custom-bcolor">    
                                <label class="col-sm-6 col-form-label custom-input-color">No of Bends</label>
                                <div class="col-sm-6">
                                <input value=" " type="number" id="n_bends" class="form-control" />   
                                </div>
                                </div>
                             </div>

                             <div class="col-sm">
                                <div class="input-group input-group-sm custom-bcolor">    
                                <label class="col-sm-6 col-form-label custom-input-color">Machine Req</label>
                                <div class="col-sm-6">
                                <input value=" " type="number" id="mech_req" class="form-control" />   
                                </div>
                                </div>
                            </div>
                            </div><br></br>

                            <div class="row input-group input-group-sm">
                                <label for="inputPassword" class="col-sm-5 col-form-label"><h4 class="custom-font">Available Lead Time</h4></label>
                                <div class="col-sm-5">
                                    <input type="time" class="form-control" id="inputPassword" placeholder=" "/>
                                </div>
                            </div>
                            
                        </form>
                        
                        </div>
                    </center>
                </div>
                        
                        
                        </div>
                    </div>

                </div>
                    
            </div>
        </container>
    );
}
export default Gridlay;