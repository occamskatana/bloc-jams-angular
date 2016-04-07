 (function() {
     function LandingCtrl() {
     	this.heroTitle = "turn the music up!"
     }
 
     angular
         .module('blocJams')
         .controller('LandingCtrl', LandingCtrl);
 })();