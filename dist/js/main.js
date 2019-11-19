const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
	const scrollPos = window.scrollY;
	if (scrollPos > 80) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});
M.AutoInit();
document.addEventListener("DOMContentLoaded", function() {
	var elems = document.querySelectorAll(".carousel");
	var instances = M.Carousel.init({
		fullWidth: true
	});
	// instance = M.Carousel.init({

	//   });
});

$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		items: 4,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 2000,
		smartSpeed: 750,
		autoplayHoverPause: true,
		animateOut: true,
		animateIn: true,
		loop: true,
		center: true,
		stagePadding: 20
		// nav: true
	});
});

const qepath = document.querySelector(".quote-engine-wrapper .first");
const qepathSecond = document.querySelector(".quote-engine-wrapper .second");
const qepathType = document.querySelector(".quote-engine-wrapper .type");
const qepathThird = document.querySelector(".quote-engine-wrapper .third");
const qepathFourth = document.querySelector(".quote-engine-wrapper .fourth");
const qepathLast = document.querySelector(".quote-engine-wrapper .last");
// let lists = document.querySelectorAll(".first-wrapper .first input");

const handleRadioClick = () => {
	qepath.classList.add("hide");
	qepathSecond.classList.remove("hide");
};

const handleSecond = () => {
	// e.preventDefault();
	qepathSecond.classList.add("hide");
	qepathType.classList.remove("hide");
};
const handleType = () => {
	qepathType.classList.add("hide");
	qepathThird.classList.remove("hide");
};
const handleThird = () => {
	qepathThird.classList.add("hide");
	qepathFourth.classList.remove("hide");
};
const handleFourth = () => {
	qepathFourth.classList.add("hide");
	qepathLast.classList.remove("hide");
};

// let city;
// document.querySelector('#ancor').preventDefault();
const change = e => {
	// alert(e.target.innerText);
	e.preventDefault();
	// window.history.pushState("html", "Rates", "/rates.html");
	// console.log(e.target.innerText);
	let cityName = e.target.innerText;
	// console.log(cityName);
	document.querySelector(".main-content").innerHTML = `<div class="page-header">
  <h3> <span class="city-name">${cityName}</span> , London <span class="city-postcode">E1</span> </h3>
</div>

<section class="pricing-table py-5">
            <div class="container">
                
               <div class="row">
                  
                  <div class="col s12 m6 l4">
                      <div class="card mb-5 mb-lg-0">
                      <div class="card-body">
                          <div class="card-header center-align">
                              <h5 class="card-title text-uppercase text-center">COMMERCIAL GAS ENGINEER</h5>
                              <h6 class="card-price text-center">£130<span class="period">/Hour</span></h6>
                              <p class="">
                                  7PM - 12AM £150 Per Hour <br>
                                  12AM - 7AM £180 Per Hour </br>
                                  Then 15 Minutes Increments</p>
                          </div>
                          <hr>
                          <ul class="fa-ul">
                              <li><span class="fa-li"></span>Boliers, Heating,  Sinks, Pipes & Drains</li>
                              <li><span class="fa-li"></span>Kitchen Refurbishment</li>
                              <li><span class="fa-li"></span>Overflows, Airlocks, Leaks</li>
                              <li><span class="fa-li"></span>Plumbing installations</li>
                              <li><span class="fa-li"></span>Water heater Repairs & Installs</li>
                              <li><span class="fa-li"></span>Bathroom Refurbishment</li>
                              <li><span class="fa-li"></span>Water softeners, Saniflo Systems</li>
                              <li><span class="fa-li"></span>Tap Repair & Replacement</li>
                              <li><span class="fa-li"></span>Emergency Plumber</li>

                          </ul>
                          <a class="price-btn" href="tel:020 8088 3641" > 020 8088 3641</a>
                      </div>
                      </div>
                  </div>
                  
                  <div class="col s12 m6 l4">
                      <div class="card mb-5 mb-lg-0">
                      <div class="card-body">
                          <div class="card-header center-align">
                              <h5 class="card-title text-uppercase text-center">GAS ENGINEER</h5>
                              <h6 class="card-price text-center">£80<span class="period">/Hour</span></h6>
                              <p class="text-center">
                                  7PM - 12AM £130 Per Hour <br>
                                  12AM - 7AM £150 Per Hour <br>
                                  Then 15 Minutes Increments</p>
                          </div>
                          <hr>
                          <ul class="fa-ul">
                              <li><span class="fa-li"></span>Flues, chimneys and air vents</li>
                              <li><span class="fa-li"></span>Appliance Safety check</li>
                              <li><span class="fa-li"></span>Gas pipework inspection and testing</li>
                              <li><span class="fa-li"></span>Gas fitting service</li>
                              <li><span class="fa-li"></span>Boiler Replacements</li>
                              <li><span class="fa-li"></span>New Boiler installation</li>
                              <li><span class="fa-li"></span>Central heating controls</li>
                              <li><span class="fa-li"></span>Central Heating installation</li>
                              <li><span class="fa-li"></span>Boiler Servicing</li>
                          </ul>
                          <a class="price-btn" href="tel:020 8088 3641" > 020 8088 3641</a>
                      </div>
                      </div>
                  </div>
                 
                  <div class="col s12 m6 l4">
                      <div class="card">
                      <div class="card-body">
                          <div class="card-header center-align">
                              <h5 class="card-title text-uppercase text-center">DRAINAGE</h5>
                              <h6 class="card-price text-center">£80<span class="period">/HOUR</span></h6>
                              <p class="text-center">
                                  7PM - 12AM £130 Per Hour <br>
                                  12AM - 7AM £150 Per Hour </br>
                                  Then 15 Minutes Increments</p>
                          </div>
                          <hr>
                          <ul class="fa-ul">
                              <li><span class="fa-li"></span>Blocked Gutters & Replacement</li>
                              <li><span class="fa-li"></span>Water overflows</li>
                              <li><span class="fa-li"></span>Drain cleaning & Flodding</li>
                              <li><span class="fa-li"></span>High Pressure Jetting</li>
                              <li><span class="fa-li"></span>Drain pipe replacement</li>
                              <li><span class="fa-li"></span>Blocked Toilets, Sinks, Bathroom</li>
                              <li><span class="fa-li"></span>Kitchen Outlet Blocked</li>
                              <li><span class="fa-li"></span>Root Removal</li>
                              <li><span class="fa-li"></span>Leaking Sink & Taps</li>
                          </ul>
                          <a class="price-btn" href="tel:020 8088 3641" > 020 8088 3641</a>
                      </div>
                      </div>
                  </div>
                </div>
                <div class="row center-align">
                  <div class="col s12">
                    <div class="pricing-plan-header">
                          <h1 class="text-center">TOTALLY TRANSPARENT PRICING POLICY</h1>
                          <p class="text-center lead">100% transparent rates and we have a clear, upfront, open and honest pricing system. Please contact our customer service representative to calculate approximate price for your repair or installation depending on peak or off peak hours. We do not charge for a call out, travelling, parking, congestion and there are no other hidden charges.</p>
                      </div>
                  </div>
                </div>
              </div>
</section>

<div class="seo">
  <h4>Heating and Plumbing Engineer | Electrician |  Electrician near me | Certified Engineer | Certified Electrician | Gas Heating Engineers |  Plumbers | Gas Engineer | 
  Local Gas Engineer | Gas Engineer Near Me | Gas Boiler Engineer | Heating Engineer | Plumber |  
  Qualified Experienced Engineers | Commercial Installations | Plumber Near Me | Heating Gas Engineer Near Me | 
  Catering Equipment Maintenance | Repair | Service | Gas Safe Registered |  Kitchen Design | Install | Gas Boiler Service | 
  Plumber London | Electrician London |  Boiler Installation | 
  Gas Safety Certificates |  Catering Company | Catering Gas Companies Near Me | 
  Boiler Service, repair and maintenance | Landlord Gas Safety Certificate | Gas Safe | | Local | Near Me | East London | 
  Central London | West London | East London | North London | West London | UK
  </h4>
</div>

<div class="safety-logos">
          <div class="container">
              <div class="row">
                  <div class="col s6 m3 l2 offset-l1">
                      <img src="./dist/img/gas-safe.jpg" alt="safety-logo" class="img-resposive">
                  </div>
                  <div class="col s6 m3 l2 ">
                      <img src="./dist/img/stay-safe.png" alt="safety-logo" class="img-resposive">
                  </div>
                  <div class="col s6 m3 l2 ">
                      <img src="./dist/img/Certified-Stamp.png" alt="safety-logo" class="img-resposive">
                  </div>
                  <div class="col s6 m3 l2 ">
                       <img src="./dist/img/NICEIC.png" alt="safety-logo" class="img-resposive">
                  </div>
                  <div class="col s6 m3 l2">
                      <img src="./dist/img/guaranteed-.png" alt="safety-logo" class="img-resposive">
                  </div>
              </div>
          </div>
</div>

<div class="form-map-wrapper">
  <div class="row">
    <div class="col s12 m7">
      <div class="map">
        <h2>Heating and Plumbing Expert in Aldgate London E1</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.98788934086!2d-0.07935988422981304!3d51.513438179636225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034c93ce51cd%3A0x839c60d47355ae7a!2sAldgate%2C%20London%2C%20UK!5e0!3m2!1sen!2sbd!4v1573589695385!5m2!1sen!2sbd"
          width="100%"
          height="350"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
    <div class="col s12 m5">
      <div class="form">
        <div class="text-wrapper">
          <h6>NEED HELP WITH HEATING AND PLUMBING?</h6>
          <h4>REQUEST A FREE QUOTE</h4>
        </div>
        <div class="rate-form">
          <div class="row">
            <form action="contact_me.php" method="POST">
              <div class="input-field col s12">
                <input
                  name="Name"
                  id="name"
                  type="text"
                  class="validate"
                />
                <label for="name">Name</label>
              </div>
              <div class="input-field col s12">
                <input
                  name="Email"
                  id="email"
                  type="email"
                  class="validate"
                />
                <label for="email">Email</label>
              </div>
              <div class="input-field col s12">
                <input
                  name="Phone"
                  id="phone"
                  type="text"
                  class="validate"
                />
                <label for="phone">Phone Number</label>
              </div>
              <div class="input-field col s12">
                <input
                  name="City"
                  id="city"
                  type="text"
                  class="validate"
                />
                <label for="city">Address</label>
              </div>
              <div class="input-field col s12">
                <textarea
                  name="Message"
                  id="textarea1"
                  class="materialize-textarea"
                ></textarea>
                <label for="textarea1">What can we help you with?</label>
              </div>
              <button
                class="btn waves-effect waves-light btn-large"
                type="submit"
                name="action"
              >
                Submit
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
	// window.stop();
	// window.location.replace("./rates.html");

	// let cityName = e.target.innerText;

	// return false;
};

// window.onpopstate = function() {
// 	document.querySelector(".main-content").innerHTML = "e.state.html";
// 	document.title = e.state.pageTitle;
// };
// console.log(cityName);
// document.querySelector(".page-header .city-name").innerText = "Shimul";
// $("#ancor").click(function() {
// 	window.history.pushState("html", "Rates", "/rates");
// 	// document.querySelector(body).innerHTML = rates.html;
// 	return false;
// });
