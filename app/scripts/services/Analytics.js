(function(){
	angular
		.module('blocJams')
		.service('Analytics', Analytics)

		function Analytics($rootScope){
			console.log("sex")

			var services = {};

			$rootScope.songPlays = [];


			services.registerSongPlays = function(songObj){
				songObj['playedAt'] = new Date();
				$rootScope.songPlays.push(songObj);
			};

			services.listSongsPlayed = function(){
				var songs = [];
				angular.forEach($rootScope.songPlays, function(song){
					songs.push({key: song.title, y: 3});
				});
				return songs;
				console.log(songs)
			};

			console.log($rootScope.songPlays)

			return services;

		}
})();