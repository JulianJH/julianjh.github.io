<ul class="rslides">
  <?php 
  for ($i=0; $i < 5; $i++) { 
        if (isset($paths[$i])) {
          echo "<li><img src=\"assets/img/$paths[$i]\" alt=\"\"></li>";
        }
      }
  ?>

</ul>

<div class="div">
  <ul class="rslides_tabs rslides1_tabs">
    <?php 
      for ($i=0; $i < 5; $i++) { 
        if (isset($paths[$i])) {
          $a = $i + 1;
          echo "<li class=\"rslides1_s$a rslides_here\"><a href=\"\#\" class=\"rslides1_s$a\">$a</a></li>";
        }
      }
    ?>
  </ul>
</div>