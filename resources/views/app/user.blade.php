<!doctype html>

<html lang="en">

<head>

    {{-- components --}}
    @include('component.components')

    {{-- extra components --}}
    @include('component.extra-components')

    {{-- app js --}}
    @vite('resources/js/user/app.js')

</head>

<body>

    {{-- preloader --}}
    <div id="preloader"> <div class="loader"></div> </div>

    {{-- body content --}}
    <div id="app"></div>

</body>

    {{-- script --}}
    @include('component.script')

</html>
