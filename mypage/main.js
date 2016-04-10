(function () {
    $(document).ready(function () {
        $('.setting').on('click', function () {
            showMask();
            setTimeout(hideMask, 3000);
        });
    });

    function showMask() {
        $('.mask')
            .removeClass('mask-inactive')
            .addClass('mask-active');
    }

    function hideMask() {
        $('.mask')
            .removeClass('mask-active')
            .addClass('mask-inactive');
    }
}());