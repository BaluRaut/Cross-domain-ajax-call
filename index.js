
  $.ajaxPrefilter(function(options) {
  if(options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});

$.get(
    'http://www.realtor.com/realestateandhomes-search?mlslid=81451382',
    function(response) {
      alert(response);
});
