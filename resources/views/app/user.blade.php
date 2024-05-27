<!doctype html>

<html lang="en">

<head>

    {{-- components --}}
    @include('component.components')

    {{-- app js --}}
    @vite('resources/js/user/app.js')

</head>

<body>

    {{-- body --}}
    @include('component.body')

</body>

    {{-- script --}}
    @include('component.script')

</html>
