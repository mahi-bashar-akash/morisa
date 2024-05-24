<!doctype html>

<html lang="en">

<head>

    @include('component.components')

    @include('component.extra-source')

    {{-- app js --}}
    @vite('resources/js/user/app.js')

</head>

<body>

    @include('component.body')

</body>

    @include('component.script')

</html>
