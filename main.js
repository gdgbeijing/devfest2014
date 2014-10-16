
window.addEventListener('polymer-ready', init);

function init(){
  window.onhashchange = hash_nav;
  hash_nav();
}

/**
 * A simple hash navigation.
 * sync nav_menu, content_pages, browser address bar and forward/back button.
 */
function hash_nav() { 
  var nav_links = document.querySelectorAll('core-menu core-item a');
  for(var i = 0; i < nav_links.length; i++){
    var link_hash = nav_links[i].hash == "" ? "#" : nav_links[i].hash;
    var window_hash = window.location.hash == "" ? "#" : window.location.hash;
    if(link_hash === window_hash){
      document.querySelector('#nav_menu').selected = i;
      document.querySelector('#content-pages').selected = i;
      document.querySelector('#scaffold').closeDrawer();
      
      // fix content area correctly set size
      if(i == 1) {
        var list = document.querySelector('session-list');
        list.async(function(){list.$.scroll_panel.measureHeaderHeight();});
      } else if(i == 3) {
        var map = document.querySelector('event-map').$.map;
        map.async(function(){
          map.resize();
          if(map.map) { // map has ready
            map.map.setCenter(new google.maps.LatLng(31.274677,120.738121),1)
          }
        });
      }

      break;
    }
  }
};

// Google analytics code. don't forget to replace yours.
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-55033471-2', 'auto');
ga('send', 'pageview');