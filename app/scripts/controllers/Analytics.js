(function(){
	angular
		.module('blocJams')
		.service('Analytics', Analytics)

		function Analytics($rootScope){
			console.log("sex")

			var services = {};

			$rootScope.songPlays = [];

			services.songPlays = $rootScope.songPlays;

			services.registerSongPlays = function(songObj){
				songObj['playedAt'] = new Date();
				services.songPlays.push(songObj);
				console.log(services.songPlays)
			};

			services.listSongsPlayed = function(){
				var songs = [];
				angular.forEach($rootScope.songPlays, function(song){
					songs.push(song.title);
				});
				return songs;
			};


			return services;

		}
})();