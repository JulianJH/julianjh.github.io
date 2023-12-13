  <footer>
    <div class="container">
      <h4>&copy; GEFIM <?php echo date('Y') ?></h4>
    </div>
  </footer>

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
  <script src="assets/js/responsiveslides.min.js"></script>
  <script src="assets/js/main.js"></script>
  <script>
    $(function() {
      $(".rslides").responsiveSlides({
        auto: true,             // Boolean: Animate automatically, true or false
        speed: 500,            // Integer: Speed of the transition, in milliseconds
        timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
        pager: true,           // Boolean: Show pager, true or false
        nav: true,             // Boolean: Show navigation, true or false
        random: false,          // Boolean: Randomize the order of the slides, true or false
        pause: false,           // Boolean: Pause on hover, true or false
        pauseControls: false,    // Boolean: Pause when hovering controls, true or false
        prevText: "<",   // String: Text for the "previous" button
        nextText: ">",       // String: Text for the "next" button
        maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
        navContainer: ".div",       // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: ".div",     // Selector: Declare custom pager navigation
        namespace: "rslides",   // String: Change the default namespace used
        before: function(){},   // Function: Before callback
        after: function(){}     // Function: After callback
      });
    });
  </script>
</body>
</html>