<div class="lightblue-bg">
  <section class="donations">
    <form action="" class="donation-form" autocomplete="on">
      <div class="donate-buttons">
        <div class="donate-button">
          <input type="text" name="25" value="" placeholder="$25" readonly>
        </div>
        <div class="donate-button">
          <input type="text" name="50" value="" placeholder="$50" readonly>
        </div>
        <div class="donate-button">
          <input type="text" name="100" value="" placeholder="$100" readonly>
        </div>
        <div class="donate-button">
          <input type="text" name="500" value="" placeholder="$500" readonly>
        </div>
        <div class="donate-button">
          <input type="text" name="1000" value="" placeholder="$1000" readonly>
        </div>
        <div class="donate-button other">
          <input type="text" name="100" value="" placeholder="Other">
        </div>
      </div>
      <div class="donate-timeframe">
        <input type="text" name="onetime" value="" placeholder="One-Time" readonly>
        <input type="text" name="monthly" value="" placeholder="Monthly" readonly>
      </div>
      <div class="calculator">
        <p>A $<span class="donation-amount">100</span> donation provides:</p>
        <div class="calculator-results">
          <div class="calculation apple">
            <img src="/assets/img/apple.png" />
            <p class="apple-number big-number">3</p>
            <p>One-on-one early childhood program sessions</p>
          </div>
          <div class="calculation bus">
            <img src="/assets/img/bus.png" />
            <p class="bus-number big-number">4</p>
            <p>Bus tickets for individuals seeking employent</p>
          </div>
          <div class="calculation lego">
            <img src="/assets/img/lego.png" />
            <p class="lego-number big-number">6</p>
            <p>Adaptive play toys to improve motor skills</p>
          </div>
        </div>
      </div>
      <div class="restriction">
        <div class="checkmark">
          <input type="checkbox" class="css-checkbox" name="restrict" checked="checked">
          <p>I'd like to restrict a portion of my gift to a non-profit of my choice</p>
        </div>
      </div>
      <div class="address">
        <div class="address-line">
          <label>Non-Profit Name</label>
          <input type="text" name="orgname" autocomplete="off">
        </div>
        <div class="address-line">
          <label>Address</label>
          <input type="text" name="address">
        </div>
        <div class="address-line">
          <label>Address 2</label>
          <input type="text" name="address2">
        </div>
        <div class="address-line">
          <label>City</label>
          <input type="text" name="city">
        </div>
        <div class="address-line">
          <label>State and Zip</label>
          <div class="state-zip"><input type="text" name="state" placeholder="State"><input type="text" name="zipcode" placeholder="Zip"></div>
        </div>
        <div class="address-line amount">
          <label>Amount</label>
          <input type="text" name="amount" placeholder="$"><span class="amount-sidetext">Out of $100</span>
        </div>
        <p class="admin-fees">Administrative Fees Apply. <a href="#">Learn More</a></p>
      </div>
      <div class="contact-information">
        <h2>Your Info</h2>
        <div class="address-line">
          <label>Name</label>
          <div class="name-entry">
            <input type="text" name="firstname" placeholder="First">
            <input type="text" name="lastname" placeholder="Last">
          </div>
        </div>
        <div class="address-line">
          <label>Email</label>
          <div class="email-sent">
            <input type="text" name="email">
            <span class="parenthetical">Your email will be sent here</span>
          </div>
        </div>
        <div class="address-line">
          <label>Phone <span class="parenthetical">(Optional)</span></label>
          <input type="text" name="phone">
        </div>
        <div class="checkmark no-bottom-margin">
          <input type="checkbox" name="newsletter" checked="checked">
          <label for="newsletter" class="css-label">Send me quarterly updates</label>
        </div>
        <div class="doner-name-box">
          <div class="radio-line">
            <div>
              <input type="radio" class="css-radio" id="donor" name="donor">
              <label for="leavename">It's fine to use my name</label>
            </div>
            <input type="text" name="donorname">
          </div>
          <div class="radio-line">
            <input type="radio" class="css-radio" id="ananymous" name="donor">
            <label for="anonymous">I'd like to remain anonymous</label>
          </div>
          <div class="radio-line">
            <input type="radio" class="dedicated" id="dedicate" name="donor">
            <label for="dedicate">Dedicate my gify to the memory of someone</label>
          </div>
          <input type="text" name="dedicatedto">
        </div>
        <div class="address-line">
          <label>Honorees' Name</label>
          <div class="name-entry">
            <input type="text" name="honoreefirst" placeholder="First">
            <input type="text" name="honoreelast" placeholder="Last">
          </div>
        </div>
        <div class="address-line">
          <label>Email</label>
          <input type="text" name="email">
        </div>
        <div class="address-line">
          <label>Message</label>
          <textarea rows="5" name="message"></textarea>
        </div>
      </div>
      <div class="payment-details">
        <div class="h-2-check">
          <h2>Payment Details</h2>
          <div class="checkmark">
            <input type="checkbox" class="css-checkbox" name="mailpay">
            <p>I'd prefer to pay by mail</p>
          </div>
        </div>
        <p>We'll send you mailing instructions once this form is submitted</p>
        <div class="address-line">
          <label>Name</label>
          <div class="name-entry">
            <input type="text" name="paymentfirst" placeholder="First">
            <input type="text" name="paymentlast" placeholder="Last">
          </div>
        </div>
        <div class="address-line">
          <label>Card Number</label>
          <input type="text" name="cardnumber">
        </div>
        <div class="address-line">
          <label>Expiration Date</label>
          <div class="expiry-date"><select name="month" placeholder="Month"></select><select type="select" name="year" placeholder="Year"></select></div>
        </div>
        <div class="address-line amount">
          <label>Amount</label>
          <input type="text" name="cvv">
        </div>
        <div class="address-line">
          <label>Address</label>
          <input type="text" name="cardaddress">
        </div>
        <div class="address-line">
          <label>Address 2</label>
          <input type="text" name="cardaddress2">
        </div>
        <div class="address-line">
          <label>City</label>
          <input type="text" name="cardcity">
        </div>
        <div class="address-line">
          <label>State and Zip</label>
          <div class="state-zip"><input type="text" name="cardstate" placeholder="State"><input type="text" name="cardzipcode" placeholder="Zip"></div>
        </div>
      </div>
      <div class="checkmark">
        <input type="checkbox" class="css-checkbox" name="restrict" checked="checked">
        <p>I'd like to restrict a portion of my gift to a non-profit of my choice</p>
      </div>
      <div class="final-amount">
        <p>Your <span class="regularity">Monthly/One-time</span> will be</p>
        <span class="final-number">$100</span>
      </div>
      <input type="submit">
    </form>
  </section>
</div>
