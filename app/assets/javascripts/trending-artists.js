(function($){
  $.fn.trendingArtists = function() {
    self = this;
    var number_of_artists = 40;
    
    $.getJSON('http://ws.audioscrobbler.com/2.0/?method=chart.gethypedartists&api_key=b25b959554ed76058ac220b7b2e0a026&limit=' + number_of_artists + '&format=json&callback=?', function(data) {
      $.each(data.artists.artist, function() {
        var artist = this;
        
        var artist_container = $('<div>');
        artist_container.addClass('artist-container');

        var image     = $('<img>');
        var image_src = artist.image[2]["#text"].replace("126", "126s");  
        
        var artist_name = $('<div>');
        artist_name.addClass('artist-name');
        
        artist_container.append(image.attr('src', image_src))
                        .append(artist_name.text(artist.name));

        $(self).append(artist_container);
        
        image.click(function() {
          self.fadeOut();
          $('#q').val(artist.name);
          just(artist.name);
        });
      });
    });
  };
})(jQuery);