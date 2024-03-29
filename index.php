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
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyB_JMyRnHNPwsnCUhWAJTYhV3xx3VTdhWA&sensor=true" type="text/javascript"></script>
<script src="app-js/app-infobox_packed.js" type="application/javascript"></script>
<script src="app-js/app-jquery.js" type="application/javascript"></script>
<script src="app-js/app-raphael.js" type="application/javascript"></script>
<script src="app-js/app-geo.js" type="application/javascript"></script>
<script src="app-js/app-main.js" type="application/javascript"></script>
<script type="application/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-32846901-1']);
    _gaq.push(['_trackPageview']);

    (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
</script>

<!--TITLE-->
<title>DATA'GRAM - Search engine for local amateur photos!</title>

<!--META-->
<meta name="language" content="fr" />
<meta http-equiv="X-UA-Compatible" content="IE=8" /> 

</head>
<body>

    <header>
        <h1>DATA'GRAM</h1>
        <em>Search engine for local amateur photos</em>
        <a href="#" id="scrollDown"></a>
    </header>
	
    <div id="map">
    </div>

    <nav>
        <form id="search" action="javascript:getData();">
            <input placeholder="separate each tag w/ a space" type="text" id="hashs" />
            <ul>
                <li>
                    <div id="instagram" class="radio"></div>
                    <span>Insta</span>
                </li>
                <li>
                    <div id="foursquare" class="radio"></div>
                    <span>FoursQ</span>
                </li>
                <li>
                    <div id="twimg" class="radio"></div>
                    <span>Twimg</span>
                </li>
                <li>
                    <div id="yfrog" class="radio"></div>
                    <span>Yfrog</span>
                </li>
            </ul>
            <div style="clear:both;"></div>
        </form>
        <div id="diagram"></div>
    </nav>

    <div id="main"></div>

    <div id="bottom">
        <footer>
            <a href="#" id="scrollUp"></a>
        </footer>
    </div>
    
</body>
</html>