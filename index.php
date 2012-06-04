<!Doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<link rel="stylesheet" type="text/css" media="screen" href="app-css/app-main.css" />
<link href='http://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700,700italic' rel='stylesheet' type='text/css'>
<link rel="icon" type="image/png" href="app-assets/favicon.png" />

<!--SCRIPT-->
<script src="app-js/app-jquery.js" type="application/javascript"></script>
<script src="app-js/app-raphael.js" type="application/javascript"></script>
<script src="app-js/app-main.js" type="application/javascript"></script>

<!--TITLE-->
<title>Dataviz</title>

<!--META-->
<meta name="language" content="fr" />
<meta http-equiv="X-UA-Compatible" content="IE=8" /> 

</head>
<body>
	
    <header>
	<input placeholder="hastags separate /w spaces" type="text" id="hashs" />
	<input type="button" id="button" value="SHAZAM !" />
        <ul>
            <li><span>Twimg</span><input type="radio" class="radio" name="service" value="twimg" /></li>
            <li><span>Instagram</span><input type="radio" class="radio" name="service" value="instagram" /></li>
            <li><span>twitter</span><input type="radio" class="radio" name="service" value="twitter" /></li>
            <li><span>Yfrog</span><input type="radio" class="radio" name="service" value="yfrog" /></li>
        </ul>
    </header>
    <div id="main"></div>

</body>
</html>