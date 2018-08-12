<?php
session_start();
var_dump($_SESSION);

// intitilize braintree in production or sandbox setting in below file
require_once("init_braintree.php");

$BrainID =  $_SESSION['BrainID'];

$bt_token = Braintree_ClientToken::generate([
    "customerId" => $BrainID,
    "options" => [
            "makeDefault" => true
    ]
]);

var_dump($bt_token)
?>
<html>
    <head>
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

 <body>

<form id="checkout" method="post" action="do_update_payment.php">
  <div id="payment-form"></div>
  <button  type="submit"><span>Submit Transaction</span></button>
</form>

<script>
  // Submits payment form to braintree if user navigates away from the page for whatever reason
  $( document ).ready( function(){
    $( window ).unload(function() {
      $("#checkout").submit();
    });
  });
</script>
<script src="https://js.braintreegateway.com/js/braintree-2.32.1.min.js"></script>
<script>

var client_token = "<?php echo($bt_token); ?>";

braintree.setup(client_token, "dropin", {
  container: "payment-form"
});
</script>

</body>
</html>
