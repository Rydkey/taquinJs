<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Taquin le Tacin</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.css">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/personal/css/style.css">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" integrity="sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
        <link rel="script" href="assets/bootstrap/js/bootstrap.js">
<!--        function taquin-->
        <link rel="script" href="divide.js">
    </head>

    <body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Taquin le Tacin</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="https://www.facebook.com/remy.risser"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a></li>
                <li><a href="https://twitter.com/Rydkey1"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a></li>
                <li><a href="https://plus.google.com/104642158137325184777?hl=fr"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a></li>
                <li><a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a></li>
            </ul>
        </div>
    </nav>

    <div class="container center-block text-center">
        <div class="col-lg-8 col-md-offset-2">
            <form name="chronoForm">
                <input type="text" name="chronotime" id="chronotime" value="0:00:00:00"/>
                <input type="button" name="startstop" value="start!" onClick="chronoStart()" />
                <input type="button" name="reset" value="reset!" onClick="chronoReset()" />
            </form>
        </div>
    </div>

    <div class="container center-block text-center">
        <div class="col-lg-8 col-md-offset-2" id="image">

        </div>
    </div>
    <hr>
    <input id="btn-shuffle" type="button" class="btn btn-success btn-lg center-block" value="mélanger">

    <script src="taquin.js"></script>
    <script src="chrono.js"></script>
    </body>
</html>