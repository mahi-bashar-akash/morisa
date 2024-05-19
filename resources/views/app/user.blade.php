<!doctype html>
<html lang="en">
<head>

    {{-- meta --}}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    {{-- title --}}
    <title> Mimosa </title>

    {{-- bootstrap css --}}
    <link rel="stylesheet" href="{{asset('./source-code/bootstrap/dist/css/bootstrap.min.css')}}">

    {{-- bootstrap icons css --}}
    <link rel="stylesheet" href="{{asset('./source-code/bootstrap-icons/font/bootstrap-icons.min.css')}}">

    {{-- owl carousel css --}}
    <link rel="stylesheet" href="{{asset('./source-code/owl.carousel/dist/assets/owl.carousel.min.css')}}">

    {{-- owl carousel default css --}}
    <link rel="stylesheet" href="{{asset('./source-code/owl.carousel/dist/assets/owl.theme.default.min.css')}}">

    {{-- jquery js --}}
    <script src="{{asset('./source-code/jquery/dist/jquery.min.js')}}" type="application/javascript"></script>

    {{-- owl carousel js --}}
    <script src="{{asset('./source-code/owl.carousel/dist/owl.carousel.min.js')}}" type="application/javascript"></script>

    {{-- app js --}}
    @vite('resources/js/user/app.js')

    {{-- style sheet --}}
    @vite('resources/scss/style-sheet.scss')

</head>

    <body>
        <div id="preloader">
            <div class="loader"></div>
        </div>
        <div id="app"></div>
    </body>

    <script type="application/javascript">

        window.core = {
            APP_NAME: 'Mimosa',
            APP_URL: '{{env('APP_URL')}}',
        };

        const loader = document.getElementById("preloader");

        window.addEventListener("load", function () {
            setTimeout(() => {
                loader.style.display = "none";
            },3000);
        });

    </script>

    {{-- bootstrap bundle js --}}
    <script src="{{asset('./source-code/bootstrap/dist/js/bootstrap.bundle.min.js')}}" type="application/javascript"></script>

</html>
