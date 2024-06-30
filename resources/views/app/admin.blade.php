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

    <script>

        window.core = {
            @if(\Illuminate\Support\Facades\Auth::guard('admins')->check())
                UserInfo: {!! \Illuminate\Support\Facades\Auth::guard('admins')->user() !!},
            @else
                UserInfo: null,
            @endif
            APP_NAME: 'Mimosa',
            APP_URL: '{{env('APP_URL')}}'
        };

        const loader = document.getElementById("preloader");
        window.addEventListener("load", function () {
                setTimeout( () => {
                    loader.style.display = "none";
                }, 3000);
            }
        );

    </script>

    {{-- bootstrap bundle js --}}
    <script src="{{asset('./source-code/bootstrap/dist/js/bootstrap.bundle.min.js')}}"></script>

</html>
