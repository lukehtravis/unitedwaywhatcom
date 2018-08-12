
var postalcodeCallError = '';
var timezoneCallError = '';


// Geonames function
$(".coords-button").on("click", function() {
    // Stores zip in postalCode variable
    var postalCode = $("input[name='zipcode']").val();
    var countryCode = $("select[name='countrycode']").val();

    //error if countrycode blank
    if (!postalCode){
        $('.coords-button').css('color','red');
        alert("Please enter your postal code and try again");
        $("input[name=badpostal]").val("bad");
    } else {
        // Sets url for geonames api call
        var geonameUrl = 'https://secure.geonames.org/findNearbyPostalCodesJSON?postalcode=' + postalCode + '&country=' + countryCode + '&username=alerts4nightsky';
        // Makes a call to geonames api. Looks for the zip code typed in by user, finds lat and long corresponding to zip, and if successful, fills the lat and long fields in for the user
        $.ajax({
            // Necessary to add "&callback=?" whenever the api call is to a page not on our server
            url: geonameUrl + "&callback=?",
            // Must set dataType to jsonp for all calls to external server
            dataType: "jsonp",
            // if call is successful, do this
            success: function (data) {
               if (data.hasOwnProperty('status') == true) {
                    $('.coords-button').css('color','red');
                    alert("That coordinate lookup wasn't succesful. Please Check your Country and Postal Code and try again");
                    $("input[name=badpostal]").val("bad");
               }
               // data is the returned object from the call. here we access the data object and put the values into our text fields
               $("input[name='lat']").val(data['postalCodes'][0]['lat']);
               $("input[name='long']").val(data['postalCodes'][0]['lng']);
               $("input[name='countrycode']").val(data['postalCodes'][0]['countryCode']);
               $("input[name='statename']").val(data['postalCodes'][0]['adminName1']);
               lat = data['postalCodes'][0]['lat'];
               lon = data['postalCodes'][0]['lng'];
               geonameUrl  = 'https://secure.geonames.org/timezoneJSON?lat=' + lat + '&lng=' + lon + '&username=alerts4nightsky';
               $.ajax({
                    // Necessary to add "&callback=?" whenever the api call is to a page not on our server
                    url: geonameUrl + "&callback=?",
                    // Must set dataType to jsonp for all calls to external server
                    dataType: "jsonp",
                    // if call is successful, do this
                    success: function (data) {
                       // data is the returned object from the call. here we access the data object and put the values into our text fields
                       $("input[name='timezone']").val(data['timezoneId']);
                       $("input[name='countryName']").val(data['countryName']);
                       $("input[name='dstOffset']").val(data['dstOffset']);
                       $("input[name='gmtOffset']").val(data['gmtOffset']);
                       $("input[name='rawOffset']").val(data['rawOffset']);
                       $('.coords-button').css('color','white');
                       $("input[name=badpostal]").val("");

                    },
                    // if call fails, return an error message
                    error: function(xhr){
                        timezoneCallError = 'Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText;
                        $('.coords-button').css('color','red');
                        alert("That coordinate lookup wasn't succesful. Please Check your Country and Postal Code and try again");
                        $("input[name=badpostal]").val("bad");
                    }
               });
            },
            // if call fails, return an error message
            error: function(xhr){
                postalcodeCallError = 'Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText;
                $('.coords-button').css('color','red');
                alert("That coordinate lookup wasn't succesful. Please Check your Country and Postal Code and try again");
                $("input[name=badpostal]").val("bad");
            }
        });
    }
});

// Password Verification and function to ensure safari recognizes required fields
$('.reg-form form').submit( function ( event ) {

    // JS hack necessay because safari does not recognize required attributes of input fields
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        var ref = $(this).find("[required]");
        $(ref).each(function(){
            if ( $(this).val() == '' ) {
                alert("Required field should not be blank.");

                $(this).focus();

                e.preventDefault();
                return false;
            }
        });
    };

// Checks to make sure passwords match
if ($(".passwordenter").val() !== $(".passwordconfirm").val()) {
        event.preventDefault();
        $('.passwordenter, .passwordconfirm').addClass("red");
        alert("passwords don't match. Please make sure everything matches");
    }
});

// Checks for the presence of ie11 and adds a class to dashboard page header to let css fix some strangeness
var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
if (isIE11 == true) {
    $(".header-container").addClass("ie11");
}

// Functions returns version number of ie
function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

// Function alerts users of ancient browsers that they should switch.
if (isIE () && isIE () < 11) {
    alert("If you are using a version of Internet Explorer earlier than 11, you may find that some of our pages have a post-modern feel to them. For a more coherent experience, a switch to a more modern browser will be a good choice.");
}

// Function lets users know if the username they chose is taken
// event listener listens for every time user hits a keystroke
$("input[name='username']").keyup(function() {
    //gets value of the username input
    var username = $("input[name='username']").val();
    if (username !== '') {
        // sends typed user inut to check_user file. which echoes false if the username is not in the database, true if it is already there
        $.post('https://nightskyalerts.com/check_user.php', {UserLogin:username}, function(data){
            var data = data.replace(/[^\x20-\x7E]+/g, '');
            // check if returned data from ajax call to check_user is false
            if (data === "false") {
                // fills verify-text span with text
                $('.verify-text').text('USERNAME AVAILABLE');
                // checks if .verify-text text has no color class assigned or if it has already been assigned a class
                if ($('.verify-text').hasClass('red') === false && $('.verify-text').hasClass('green') === false) {
                    // assigns color class to text
                    $('.verify-text').addClass('green');
                }
                // if verify-text color assigned needs to change, change it
                if ($('.verify-text').hasClass('red')) {
                    $('.verify-text').removeClass('red');
                    $('.verify-text').addClass('green');
                }
            } else {
                // if returned data from ajax call is true...
                $('.verify-text').text('USERNAME UNAVAILABLE');
                if ($('.verify-text').hasClass('red') === false && $('.verify-text').hasClass('green') === false) {
                    $('.verify-text').addClass('red');
                }
                if ($('.verify-text').hasClass('green')) {
                    $('.verify-text').removeClass('green');
                    $('.verify-text').addClass('red');
                }
            }
        });
    } else {
        $("input[name='username']").val('');
    }
});

// Function makes call to twilio api (through the file specified in $.post) to check validity of the phone number they entered. Stores a valid or invalid response in hidden field twilio
$(".reg-form form").on('submit', function(e) {
    var phonenumber = $("input[name='AlertPhone']").val();
    if (phonenumber !== '') {
        $.ajax({
            type: 'POST',
            url: 'https://nightskyalerts.com/phone_validity_check.php',
            data: {PhoneNumber:phonenumber},
            success: function(data) {
                data = data.replace(/[^\x20-\x7E]+/g, '');
                if (data === "valid") {
                    $("input[name='twilio']").val("valid");
                } else {
                    $("input[name='twilio']").val("invalid");
                }
            },
            error: function(xhr) {
                console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
            },
            async:false
        });
        if ($("input[name='twilio']").val() === "invalid") {
            e.preventDefault();
            alert("Phone number is invalid. Please use a valid phone number\n\nIf your number is international please add a + to the beginning of the number");
            $("input[name='AlertPhone']").addClass('red');
        }
    }
});

// Function is necessary because autofill browser feature obviates the usercheck function above
$(".reg-form form").on('submit', function(e) {
    var usercheck = $("input[name='username']").val();
    var taken = "";
    $.ajax({
        type: 'POST',
        url: 'https://nightskyalerts.com/check_user.php',
        data: {UserLogin:usercheck},
        success: function(data) {
            data = data.replace(/[^\x20-\x7E]+/g, '');
            if (data === "false") {
                taken = "false";
            } else {
                taken = "true";
            }
        },
        error: function(xhr) {
            console.log('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
        },
        async:false
    });
    if (taken === "true") {
        e.preventDefault();
        alert("seems that username is already taken. Please choose another");
        $("input[type='username']").focus().addClass("red");
    }
});

function ValidateEmail(inputText)  {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat)) {
        return true;
    }  else  {
        return false;
    }
};

// Function checks to make sure user submits valid email
$(".reg-form form").on('submit', function(e) {
    var emailAddy = $("input[type='email']").val();
    var result = ValidateEmail(emailAddy);
    if (result === false) {
        e.preventDefault();
        alert("You have entered an invalid email address!");
        $("input[type='email']").focus().addClass("red");
    }
});

// Submits payment form to braintree if user navigates away from the page for whatever reason
$( window ).unload(function() {
  $("#checkout").submit();
});
