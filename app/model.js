
var homeContent = `<div class="home">
<div class="home-text">
  <h1>Best Destinations around the world</h1>
  <h3>Travel, enjoy and live a new and full life</h3>
  <p>
    Built Wicket longer admire do barton vanity itself do in it.
    Preferred to sportsmen it engrossed listening. Park gate sell they
    west hard for the.
  </p>
  <div class="buttons">
    <div class="more"><img src="images/CTA.png" alt="" /></div>
    <div class="play">
      <img src="images/Play button.png" alt="" />
      <p>Play Demo</p>
    </div>
  </div>
</div>
<div class="hero-img"><img src="images/Traveller 1.png" alt="" /></div>
</div>`
var destinationsContent = ` <div class="destinations">
<div class="des-title">
  <p>Top Selling</p>
  <h3>Top Destinations</h3>
</div>
<div class="des-imgs">
  <div class="destination1">
    <img src="images/rome.png" alt="" />
    <div class="white-block">
      <img src="images/rectangle.png" alt="" />
      <div class="top-text">
        <p>Rome, Italy</p>
        <p>$5,42k</p>
      </div>
      <div class="bottom-text">
        <img src="images/navigation 1.png" alt="" />
        <p>10 Days Trip</p>
      </div>
    </div>
  </div>
  <div class="destination1">
    <img src="images/london.jpg" alt="" />
    <div class="white-block">
      <img src="images/rectangle.png" alt="" />
      <div class="top-text">
        <p>London, England</p>
        <p>$4.2k</p>
      </div>
      <div class="bottom-text">
        <img src="images/navigation 1.png" alt="" />
        <p>12 Days Trip</p>
      </div>
    </div>
  </div>
  <div class="destination1">
    <img src="images/fullEurope.png" alt="" />
    <div class="white-block">
      <img src="images/rectangle.png" alt="" />
      <div class="top-text">
        <p>Full Europe</p>
        <p>$15k</p>
      </div>
      <div class="bottom-text">
        <img src="images/navigation 1.png" alt="" />
        <p>28 Days Trip</p>
      </div>
    </div>
  </div>
</div>
</div>`
var bookingsContent = `  <div class="bookings">
<div class="book-info">
  <p>Easy and Fast</p>
  <h3>Book Your Next Trip In 3 Easy Steps</h3>
  <div class="steps">
    <div class="step-img"><img src="images/Group 7.png" alt="" /></div>
    <div class="step-text">
      <p class="header">Choose Destination</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
        tortor tempus.
      </p>
    </div>
  </div>
  <div class="steps">
    <div class="step-img"><img src="images/Group 11.png" alt="" /></div>
    <div class="step-text">
      <p class="header">Make Payment</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
        tortor tempus.
      </p>
    </div>
  </div>
  <div class="steps">
    <div class="step-img"><img src="images/Group 12.png" alt="" /></div>
    <div class="step-text">
      <p class="header">Reach Airport on Selected Date</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
        tortor tempus.
      </p>
    </div>
  </div>
</div>
<div class="book-img">
  <img src="images/Image (7).png" alt="" />
</div>
</div>`
var contactContent = `<div class="contact">
<div class="subscribe-box">
  <h3>
    Subscribe to get information, latest news and other interesting
    offers from Jaboo
  </h3>

  <div class="text-box">
    <div class="text">
      <div>
        <input placeholder="Your Email" type="text" />
      </div>
    </div>
    <div class="submit-button"><a href="#">Subscribe</a></div>
  </div>
</div>
</div>`

function setCurrentPageContent(pageID) {
  let contentName = pageID + "Content";
    $("#app").html(eval(contentName));
    
}

export { setCurrentPageContent };