import React, {
    Component
} from 'react';
import llogo from './img/commute.png';
import Background from '../tlsheet.js';
import './App.css';
import Map from './Map.js';


class Homepage extends Component {
    render() {
        return (
            <div class="Container">
              <header>
                <nav class="navbar sticky-top navbar-light bg-light">
                  <img src={llogo} class="img" width="100px" height="100px" />
                  <a class="display-1 text-primary">Commute.io</a>
                  <div class="row">
                    <div class="col">
                      <button class="rounded bg-primary p-2 pw-1 mr-2"><i class="fas fa-bell"></i></button>
                      <button class="rounded bg-primary p-2 pw-1 mr-2"><i class="fas fa-paper-plane"/></button>
                      <button class="rounded bg-primary p-2 pw-1 mr-2">Log in</button>
                    </div>
                  </div>
                </nav>
              </header>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-3 border-right border-bottom">
                    <h1 class="text-left pt-3 text-secondary">Employee Status</h1>
                    <div class="mt-3 row-3 border-top pb-2 pt-1 border-left border-right">
                      <a class="mt-1 pl-2 text-success" href="#">Jack Watters</a>
                      <a class="text-secondary ml-2">Co-Manager</a>
                    </div>
                    <div class="row-3 border-top pb-2 pt-1 border-left border-right">
                      <a class="mt-1 pl-2 text-success" href="#">Curtis Krommenhoek</a>
                      <a class="text-secondary ml-2">Clerk</a>
                    </div>
                    <div class="row-3 border-top pb-2 pt-1 border-left border-right">
                      <a class="mt-1 pl-2 text-success" href="#">Paul Doherty</a>
                      <a class="text-secondary ml-2">Barista</a>
                    </div>
                    <div class="row-3 border-top border-bottom pb-2 pt-1 border-left border-right">
                      <a class="mt-1 pl-2 text-success" href="#">Mitchel Osborne</a>
                      <a class="text-secondary ml-2">Manager</a>
                    </div>
                  </div>
                  <div class="col-9">
                    <h1 class="ml-4 pt-3 text-secondary">Dashboard</h1>
                    <div class="col w-100">
                      <Map></Map>
                    </div>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-3 border mt-4">
                    <div class="box" className="box-green"/><div class="ml-2 mt-2 text-success">On Time</div>
                    <div class="box" className="box-yellow"/><div class="ml-2 mt-2 text-warning">Running Late</div>
                    <div class="box" className="box-red"/><div class="ml-2 mt-2 mb-2 text-danger">Late</div>
                  </div>
                  <div class="col-9 mt-4">
                    <div class="text-left mb-5 ml-2 p-2 border">Employee name:</div>
                    <div class="text-left mb-5 ml-2 p-2 border">Job Title:</div>
                    <div class="text-left mb-5 ml-2 p-2 border">Schedule:</div>
                  </div>
                </div>
                <div>

                </div>
              </div>
              <footer class="footer static-bottom bg-secondary p-2">
                <div class="text-center">Copyright @ 2018 Commute.io All rights reserved</div>
              </footer>
            <Background />
          </div>
        )
    }
}


export default Homepage;
