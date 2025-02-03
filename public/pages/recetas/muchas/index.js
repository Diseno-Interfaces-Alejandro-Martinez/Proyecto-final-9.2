$(function() {
    $('#searchInput').on('keyup', function() {
        const searchInput = $(this).val().toLowerCase();
        $('.recipe-card').each(function() {
            const title = $(this).find('h5').text().toLowerCase();
            if (title.includes(searchInput)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});