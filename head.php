<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Everlast Singapore | www.everlastsg.com</title>
<meta name="description" content="" />
<meta name="keywords" content="everlast, everlast singapore, boxing, martial arts, boxing equipments, everlastsg, boxing gloves" />
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> 

<link href="css/global.css" rel="stylesheet" type="text/css" />
<link href="css/reset.css" rel="stylesheet" type="text/css" />
<link href="css/jcarousel-skin.css" rel="stylesheet" type="text/css" />
<link href="css/nivo-slider.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox-1.3.4.css" media="screen" />

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<!--<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
-->
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="js/maps.js"></script>
<script type="text/javascript" src="js/home.js"></script>
<script type="text/javascript" src="js/jquery.nivo.slider.pack.js"></script>
<script type="text/javascript" src="js/accordion.js"></script>
<script type="text/javascript" src="js/jquery.jcarousel.min.js"></script>
<script type="text/javascript" src="js/livevalidation.js"></script>
<script type="text/javascript" src="js/jquery.pajinate.js"></script>
<script type="text/javascript" src="fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<script type="text/javascript">
$(window).load(function() {
    $('#slider').nivoSlider({
        effect:'fade' //Specify sets like: 'fold,fade,sliceDown'
    });
});
</script>

<!--[if lte IE 6]>
<script type="text/javascript" src="js/supersleight.js"></script>
<![endif]-->

<script type="text/javascript">
	$(document).ready(function(){
		$('#paging_container').pajinate();
	});
</script>

</head>

<body>
<?php
$currentFile = $_SERVER["PHP_SELF"];
$parts = Explode('/', $currentFile);
$filename = $parts[count($parts) - 1];
//echo $filename;
?>
<div id="wrapper-home">
	<div id="wrap-content">
    	<div id="col-left">
        	<a href="index.php"><img src="images/logo.png" width="124" height="82" /></a>
<ul class="menu">
                <li <?php if((strpos($filename,"men", 0) !== false)&&(strpos($filename,"women", 0) === false)) {?> class="expand "<?php }?>>
                    <a href="#" class="navi-men">Men</a>
                    <ul class="acitem">
                        <li <?php if($filename=="men-polo.php") {?>class="active" <?php }?>><a href="men-polo.php">Polo Tees</a></li>
                        <li <?php if($filename=="men-graphic.php") {?>class="active" <?php }?>><a href="men-graphic.php">Graphic Tees</a></li>
                        <li <?php if($filename=="men-jackets.php") {?>class="active" <?php }?>><a href="men-jackets.php">Jackets</a></li>
                        <li <?php if($filename=="men-boxing.php") {?>class="active" <?php }?>><a href="men-boxing.php">Boxing Shorts</a></li>
                        <li <?php if($filename=="men-bottoms.php") {?>class="active" <?php }?>><a href="men-bottoms.php">Bottoms</a></li>
                        <li <?php if($filename=="men-shirts.php") {?>class="active" <?php }?>><a href="men-shirts.php">Shirts</a></li>
                     </ul>
                </li>
                <li <?php if(strpos($filename,"women") !== false) {?> class="expand "<?php }?>>
                  <a href="#" class="navi-women">Women</a>
                    <ul class="acitem">
                    <li <?php if($filename=="women-polo.php") {?>class="active" <?php }?>><a href="women-polo.php">Polo Tees</a></li>
                    <li <?php if($filename=="women-graphic.php") {?>class="active" <?php }?>><a href="women-graphic.php">Graphic Tees</a></li>
                    <li <?php if($filename=="women-bottoms.php") {?>class="active" <?php }?>><a href="women-bottoms.php">Bottoms</a></li>
                    <li <?php if($filename=="women-jackets.php") {?>class="active" <?php }?>><a href="women-jackets.php">Jackets</a></li>
                 </ul>
                </li>
                
                 <li <?php if(strpos($filename,"performance") !== false) {?> class="expand "<?php }?>>
                  <a href="#" class="navi-performance">Performance</a>
                    <ul class="acitem">
                    <li <?php if($filename=="performance-tops.php") {?>class="active" <?php }?>><a href="performance-tops.php">Tops</a></li>
                    <li <?php if($filename=="performance-pants.php") {?>class="active" <?php }?>><a href="performance-pants.php">Pants</a></li>
                 </ul>
                </li>
                  <li <?php if(strpos($filename,"muhdali") !== false) {?> class="expand "<?php }?>>
                  <a href="#" class="navi-muhdali">Muhammad Ali </a>
                    <ul class="acitem">
                    <li <?php if($filename=="muhdali-tops.php") {?>class="active" <?php }?>><a href="muhdali-tops.php">Tops</a></li>
                    <li <?php if($filename=="muhdali-pants.php") {?>class="active" <?php }?>><a href="muhdali-pants.php">Pants</a></li>
                 </ul>
                </li>
                
                <li  <?php if((strpos($filename,"equip") !== false)||($filename=="index.php" || $filename=="")) {?> class="expand "<?php }?>>
                  <a href="#" class="navi-equip">Equipments</a>
                    <ul class="acitem">
                        <li <?php if($filename=="equip-boxing.php") {?>class="active" <?php }?>><a href="equip-boxing.php">Boxing</a></li>
                        <li <?php if($filename=="equip-mma.php") {?>class="active" <?php }?>><a href="equip-mma.php">MMA</a></li>
                        <li <?php if($filename=="equip-accessories.php") {?>class="active" <?php }?>><a href="equip-accessories.php">Accessories</a></li>
                    </ul>
                    </li>
 <li><a href="bags.php" <?php if($filename=="bags.php") {?>class="navi-bags active" <?php } else {?> class="navi-bags" <?php }?>>Bags</a>
 </li>
        <li><a href="aboutus.php" <?php if($filename=="aboutus.php") {?>class="navi-aboutus active" <?php } else {?> class="navi-aboutus" <?php }?>>About Us</a>
 				</li>
                <li><a href="events.php"<?php if($filename=="events.php") {?>class="navi-events active" <?php } else {?> class="navi-events" <?php }?>>Events</a></li>
                <li><a href="findstore.php" <?php if($filename=="findstore.php") {?>class="navi-findstore active" <?php } else {?> class="navi-findstore" <?php }?>>Find a store</a></li>
                <li><a href="contactus.php" <?php if($filename=="contactus.php") {?>class="navi-contact active" <?php } else {?> class="navi-contact" <?php }?>>Contact Us</a></li>
            </ul><!-- end of menu navigation -->
            <div class="banner-box1"><hr /><a href="equip-boxing.php">				
			<?php 
			if(((strpos($filename,"men", 0) !== false)&&(strpos($filename,"women", 0) === false))||($filename=="contactus.php")||(strpos($filename,"mma") !== false))
			{
			?> 
            <img src="images/banner-3.png" width="128" height="346" />
			<?php 
			}else if((strpos($filename,"women") !== false)||$filename=="equip-boxing.php"||$filename=="equip-accessories.php"){
			?>
            <img src="images/banner-2.png" width="128" height="346" />
            <?php 
			}else{
			?>
            <img src="images/banner-1.png" width="128" height="346" />
            <?php } ?>
            </a></div><!-- end of banner 1 -->
        </div><!-- end of col-left -->
        <div id="col-main">
        	<div id="header">
                <ul id="socialmedia">
                    <li><a href="http://www.facebook.com/everlastsg/"><img src="images/icon-facebook.png" width="16" height="16" /></a></li>
                    <li><a href="http://www.twitter.com/everlastsg/"><img src="images/icon-twitter.png" width="16" height="16" /></a></li>
                </ul><!-- end of socialmedia -->
            