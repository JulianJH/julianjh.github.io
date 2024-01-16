<?php
$title = "Portfolio";
require_once('header.php');
?>

<section id="showcase">
	<div class="container">
		<img src="assets/img/profile2.png" alt="">
		<h1>Portfolio</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat minima sit natus ut vel atque neque vero omnis amet! Consectetur similique officia quos suscipit delectus vel, minima laudantium quod eius.</p>
	</div>
</section>

<div class="circle-divider-top" id="aboutdiv" style="background: #f1c40f;"></div>

<section id="about">
	<div class="container">
		<h1 class="title">About Me</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<!-- <p>I'm a 15 years old mexican born in Baja California, I've been deeping into programming for 4 years now and I have worked in different areas of development. From HTML, CSS and PHP for websites like this one to developing simple 2D games using Unity3D and C#.</p> -->
		<br>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<!-- <p>I'm looking into studying at the Buenos Aires University at Argentine and getting a degree in Computational Sciences.</p> -->
	</div>
</section>

<div class="circle-divider-bottom" id="projectsdiv" style="background: #f1c40f;"></div>

<section id="projects">
	<div class="container">
		<h1 class="title">My Projects</h1>
		<div class="box">
			<img src="assets/img/techIcon.png" alt="">
			<h3>Lorem</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nihil aliquam non recusandae, laborum maiores a labore similique, perspiciatis omnis iure quam facilis, vitae nam ab nulla incidunt optio, provident.</p>
		</div>
		<div class="box">
			<img src="assets/img/gameIcon.png" alt="">
			<h3>Ipsum</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam doloremque illum repudiandae facilis vero reiciendis impedit alias, rem modi, beatae a, vitae. Iure pariatur, alias veniam. Nostrum vero maiores quidem!</p>
		</div>
		<div class="box extra">
			<img src="assets/img/codeIcon.png" alt="">
			<h3>Dolor</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa voluptatem qui aut hic beatae necessitatibus repellendus fugiat, ipsam repudiandae explicabo quibusdam amet fuga cumque cum provident suscipit sequi, labore debitis.</p>
		</div>
	</div>
</section>

<div class="circle-divider-top" id="contactdiv" style="background: #f1c40f;"></div>

<section id="contact">
	<div class="container">
		<h1 class="title">Contact Me</h1>
		<form filled="" action="" method="" onsubmit="targetPopup(this)">
			<label><span>Your Name</span>
			<input class="required" type="text" name="name" placeholder="Name"></label>
			<label><span>Your Email</span>
			<input class="required" type="email" name="_replyto" placeholder="Email"></label>
			<label><span>Tell me something</span>
			<textarea class="required" name="message" rows="10"></textarea></label>
			<input type="submit" value="Send" onclick="checkForm(this)">
			<div class="errors">
				<label class="hidden">A name is required</label>
				<label class="hidden">An email is required</label>
				<label class="hidden">A message is required</label>
			</div>
		</form>
	</div>
</section>

<?php require_once('footer.php'); ?>
