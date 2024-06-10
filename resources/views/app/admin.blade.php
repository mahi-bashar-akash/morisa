<!doctype html>

<html lang="en">

<head>

    {{-- components --}}
    @include('component.components')

    {{-- app js --}}
    @vite('resources/js/admin/app.js')

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
