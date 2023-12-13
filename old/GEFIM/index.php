<?php
  $title = "GEFIM - Inicio";

  $def1 = "Los invertebrados son animales que no tienen (o no desarrollan) una columna vertebral. Constituyen aproximadamente el 97% de todas las especies animales conocidas, y muchos tienen importantes funciones ecológicas o cumplen roles de gran valor económico para el hombre (algunos ejemplos son los corales, abejas, gusanos parásitos, etc).";

  $def2 = "En ecología el término función hace referencia al papel que las especies tienen en el ecosistema. Esta función queda definida por la utilización de recursos por parte de la especie en cuestión, y por su importancia en la transferencia de energía a niveles tróficos superiores.";

  $def3 = "El conjunto de las poblaciones de organismos (componente biótico, como plantas, animales, hongos y bacterias) y los componentes no vivos del ambiente (componente abiótico, como el aire, agua y minerales del suelo), que interactúan a través de los ciclos de nutrientes y flujos de energía.";

  $def4 = "Cuando dos especies compiten por un recurso, la competencia afecta negativamente a ambas especies (es una interacción amensalista), pero cuando una de las especies se alimenta de la otra se beneficia a expensas de la presa (herbivoría, depredación, parasitismo son interacciones antagonistas). Otras veces una especie puede beneficiar a la otra (facilitación), con efectos positivos (mutualismo) o neutros (comensalismo) para sí misma.";

  $def5 = "Pequeños invertebrados herbívoros que como adultos o juveniles miden menos de 2.5 cm de longitud, y que en ecosistemas marinos bentónicos son representados principalmente por varias especies de anfípodos, isópodos y gasterópodos.";

  $def6 = "Los pastos marinos son angioespermas (plantas con flores) que suelen propagarse vegetativamente en las zonas litorales templadas y tropicales del globo, formando clones. Son considerados especies fundadoras o ingenieras porque sus praderas subacuáticas conforman la base del ecosistema, que alberga a una gran diversidad de flora y fauna que no existiría en la ausencia de la vegetación.";

  require_once('header.php');
?>

<div class="container box slides-box">
 <?php
   $paths[0] = "IMG_2312.jpg";
   $paths[1]= "Pelican.jpg";
   $paths[2]= "Boxes.jpg";
   require_once('slideshow.php');
 ?>
</div>

<div class="container box" id="investigacion">
  <h1 class="box-title"><a href="">Investigación</a></h1>
  <p>En el GEFIM estudiamos a especies de <span class="definition">invertebrados<span><?php the_def(1); ?></span></span> con fuertes <span class="definition">funciones<span><?php the_def(2) ;?></span></span> en el <span class="definition">ecosistema<span><?php the_def(3); ?></span></span>, y buscamos comprender cómo varía su papel en un ambiente cambiante. Creemos que si logramos entender cómo éstas especies <span class="definition">interactúan<span><?php the_def(4); ?></span></span>, con el medio físico y con otras especies, podremos preservar mejor a los ecosistemas y lograr un aprovechamiento más sustentable de los bienes y servicios que generan.</p>
  <p>Por ejemplo, poblaciones de pequeños invertebrados herbívoros (<span class="definition">mesoherbívoros<span><?php the_def(5); ?></span></span>) pueden controlar el crecimiento de algas que afectan a <span class="definition">pastos marinos<span><?php the_def(6); ?></span></span>), promoviendo la persistencia de las praderas. Pero el efecto neto del pastoreo de los mesoherbívoros sobre la vegetación marina puede variar según la especie, o modificarse en respuesta a los cambios de abundancia relativa de las fuentes de alimento alternativas.</p>
  <p>Entonces, dependiendo del contexto ambiental, el efecto indirecto positivo sobre el pasto marino de las especies de mesoherbívoros que se alimentan del macroalgas y epifitas puede ser superado por el efectos negativo de especies que pastorean directamente sobre tejidos del pasto marino <a href="">(más…).</a></p>
</div>

<div class="container box" id="docencia">
  <h1 class="box-title"><a href="">Docencia</a></h1>
  <p>Aparte de los cursos que ofrecemos en el programa de Licenciatura de la Carrera …, periódicamente impartimos cursos extracurriculares. Ofrecemos además oportunidades para realizar Tesis de Licenciatura o Posgrado, Servicios Sociales y Prácticas Profesionales. Por lo diverso de las actividades propuestas los estudiantes que reclutaremos tendrán una formación muy diferente, ya que procederán tanto de la Carrera de Biología, como de Matemática Aplicada, Oceanología o Computación, entre otras.Las oportunidades están abiertas a estudiantes de la República mexicana o del exterior (consulte programas de intercambio, pasantías, etc) <a href="">(más…).</a></p>
</div>

<div class="container box" id="extension">
  <h1 class="box-title"><a href="">Extensión (Servicios a la Comunidad)</a></h1>
  <p>Nuestro objetivo es facilitar la transferencia del conocimiento adquirido a usuarios de Bahía San Quintín, como acuicultores, pescadores y operadores turísticos. Una inquietud común manifestada por los usuarios es la falta del acceso a la información generada en las investigaciones que se realizan en la bahía. En este sentido, nuestra propuesta buscará subsanar este carencia a través de la implementación de esta página web donde incluimos la información relevante en un lenguaje claro y accesible a los interesados y un blog como un canal para el intercambio de información, consultas, o comentarios <a href="">(más…).</a></p>
</div>

<?php require_once('footer.php') ?>