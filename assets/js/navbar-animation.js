$('#collapse-navbar').on('show.bs.collapse', () => {
    $('.topcasafina-banner').css('transform','translate(-50%, 10%)');
});

$('#collapse-navbar').on('hide.bs.collapse', () => {
    $('.topcasafina-banner').css('transform','translate(-50%, -50%)');
});