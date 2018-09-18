$(function() {

  $('.top-archive_item-text').hover(
    function() {
      $(this).find('.top-archive_item-image').addClass('image-active');
    },
    function() {
      $(this).find('.top-archive_item-image').removeClass('image-active');
    }
  );

  $('.top-archive_item-text').hover(
    function() {
      $(this).find('.top-archive_item').addClass('text-active');
    },
    function() {
      $(this).find('.top-archive_item').removeClass('text-active');
    }
  );

});
