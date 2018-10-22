$(function() {

  $('.top-archive_item').hover(
    function() {
      $(this).find('.top-archive_item-image').addClass('image-active');
    },
    function() {
      $(this).find('.top-archive_item-image').removeClass('image-active');
    }
  );

  $('.top-archive_item-text-area').hover(
    function() {
      $(this).find('.top-archive_item-text').addClass('text-active');
    },
    function() {
      $(this).find('.top-archive_item-text').removeClass('text-active');
    }
  );

});
