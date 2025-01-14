import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    const counters = document.querySelectorAll(".coun");
    const speed = 200; // The lower the slower

    counters.forEach((coun) => {
      const updateCount = () => {
        const target = +coun.getAttribute("data-target");
        const count = +coun.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        //console.log(inc);
        //console.log(count);
        //console.log(target);

        // Check if target is reached
        if (count < target) {
          // Add inc to count and output in counter
          coun.innerText = count + inc;
          // Call function every ms
          setTimeout(updateCount, 1);
        } else {
          coun.innerText = target;
          console.log(coun.innerText);
        }
      };

      updateCount();
    });
    return (
      /*  <div> 
        <section className="counters">
          <div className="container">
            <div>
              <i className="fab fa-youtube fa-4x" />
              <div className="counter" data-target={60000}>0</div>
              <h3>Subscribers</h3>
            </div>
            <div>
              <i className="fab fa-twitter fa-4x" />
              <div className="counter" data-target={15000}>0</div>
              <h3>Followers</h3>
            </div>
            <div>
              <i className="fab fa-facebook fa-4x" />
              <div className="counter" data-target={9000}>0</div>
              <h3>Likes</h3>
            </div>
            <div>
              <i className="fab fa-linkedin fa-4x" />
              <div className="counter" data-target={5000}>0</div>
              <h3>Connections</h3>
            </div>
          </div>
        </section>
        </div> */

      <div class="container">
        <section className="counters">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="counter">
                <div class="counter-icon">
                  <i class="fa fa-globe"></i>
                </div>
                <h2>Colleges Network</h2>

                <div className="coun" data-target={60000}></div>
                <span class="counter-value">800+</span>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="counter pink">
                <div class="counter-icon">
                  <i class="fa fa-layer-group"></i>
                </div>
                <h2>Offered Courses </h2>
                <div className="coun" data-target={25000}></div>
                <span class="counter-value">30+</span>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="counter sky">
                <div class="counter-icon">
                  <i class="fa fa-clock"></i>
                </div>
                <h2>Trusted <h3>Since 2003</h3></h2>
                <div className="coun" data-target={25000}></div>
                <span class="counter-value">19+</span>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="counter yellow">
                <div class="counter-icon">
                  <i class="fa fa-user-graduate"></i>
                </div>
                <h2>Happy students</h2>
                <div className="coun" data-target={25000}></div>
                <span class="counter-value">3500+</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
