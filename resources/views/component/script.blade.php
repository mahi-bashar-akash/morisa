<script type="application/javascript">
    window.core = {
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
<script src="{{asset('./source-code/bootstrap/dist/js/bootstrap.bundle.min.js')}}" type="application/javascript"></script>
