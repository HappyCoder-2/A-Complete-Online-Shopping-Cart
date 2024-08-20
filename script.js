// PProject - Shopping Cart

// Function to display the order summary and update its content
function nextDiv() {
        document.querySelector('.order-container').style.display = 'block';
        document.querySelector('.main-container').style.display = 'none';
      
        // Assuming you will get the price of the clicked plan
        const selectedPlan = event.target.closest('.main-cart-1, .main-cart-2, .main-cart-3');
        const price = selectedPlan.querySelector('.spans span:nth-child(2)').textContent;
      
        document.getElementById('items-empty').textContent = `$${price}`;
        document.getElementById('total-empty').textContent = `$${parseInt(price) + 5}`;
      }
      
      // Function to go back to the cart selection view
      document.getElementById('back-btn').addEventListener('click', function() {
        document.querySelector('.order-container').style.display = 'none';
        document.querySelector('.main-container').style.display = 'flex';
      });
      
      // Function to continue to the address form
      document.getElementById('continue-btn').addEventListener('click', function() {
        document.querySelector('.order-container').style.display = 'none';
        document.querySelector('.address-container-main').style.display = 'block';
      });
      
      // Function to continue to the payment form
      document.getElementById('continue').addEventListener('click', function() {
        document.querySelector('.address-container-main').style.display = 'none';
        document.querySelector('.payment-part').style.display = 'block';
      });
      
      // Function to handle the payment
      document.getElementById('payment-btn').addEventListener('click', function() {
        alert('Payment successful!');
        // You can add more logic here for actual payment processing
      });
      
      // Event listeners for "Buy now" buttons
      document.querySelectorAll('.btn-container button').forEach(function(button) {
        button.addEventListener('click', nextDiv);
      });