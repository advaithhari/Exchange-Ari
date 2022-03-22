
// paypal.configure({
//     'mode': 'sandbox', //sandbox or live
//     'client_id': 'ASqoNJ95T5DyXjttd8HtJ9fZG6MpI7ZytL8E8zMAH03oDGvoqSNyTj_MLs8gB5wh9fSUfLCaDtkJ9gy9',
//     'client_secret': 'EO6BSdjpozoAr1LUdTQNDmDrJQ8wO3Rad5GS4SdP3rwxRo4xQRdNWerkMJAxIG_v5chOZC-K6gnGGp3c'
//   });

  paypal.Buttons({

    // Sets up the transaction when a payment button is clicked
    createOrder: function(data, actions) {
  return actions.order.create({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: '0.01'
      },
      payee: {
        email_address: 'ahari-22@peddie.org'
      }
    }]
  });
},

    // Finalize the transaction after payer approval
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        // Successful capture! For dev/demo purposes:
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            var transaction = orderData.purchase_units[0].payments.captures[0];
            alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');

        // When ready to go live, remove the alert and show a success message within this page. For example:
        // var element = document.getElementById('paypal-button-container');
        // element.innerHTML = '';
        // element.innerHTML = '<h3>Thank you for your payment!</h3>';
        // Or go to another URL:  actions.redirect('thank_you.html');
      });
    }
  }).render('#paypal-button-container');