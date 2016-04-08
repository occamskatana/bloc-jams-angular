(function(){
	function SongPlayer($rootScope, Fixtures) {
		var SongPlayer = {};
		var currentAlbum = Fixtures.getAlbum();
		var currentBuzzObject = null;

		var getSongIndex = function(song){
			return currentAlbum.songs.indexOf(song)
		}

		var setSong = function(song){
			if (currentBuzzObject){
					currentBuzzObject.stop();
					SongPlayer.currentSong.playing = null;

				}


				currentBuzzObject = new buzz.sound(song.audioUrl, {
					formats: ['mp3'],
					preload: true
				});

				currentBuzzObject.bind('timeupdate', function() {
					$rootScope.$apply(function() {
						SongPlayer.currentTime = currentBuzzObject.getTime();
					});
				});

				SongPlayer.currentSong = song
		}
		// Public variables
		SongPlayer.currentSong = null;
		SongPlayer.currentAlbum = Fixtures.getAlbum();
		SongPlayer.currentTime = null;

		var playSong = function(song){
			currentBuzzObject.play();

			song.playing = true
		}

		SongPlayer.setCurrentTime = function(time) {
			if (currentBuzzObject) {
				currentBuzzObject.setTime(time)
			}
		}


		SongPlayer.play = function(song) {
			song = song || SongPlayer.currentSong;
			if (SongPlayer.currentSong !== song){

					setSong(song);
					playSong(song);

			} else if (SongPlayer.currentSong === song) {

				if (currentBuzzObject.isPaused()) {

				playSong(song);

				}
			}
			console.log(SongPlayer.currentAlbum)
		};


		SongPlayer.pause = function(song) {
			song = song || SongPlayer.currentSong;
			currentBuzzObject.pause();
			song.playing = false;
		};


		SongPlayer.previous = function() {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex--;

			if (currentSongIndex < 0) {
				currentBuzzObject.stop();
				SongPlayer.currentSong.playing = null;
			} else {
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song);
			}
		};

		SongPlayer.next = function() {
			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			currentSongIndex++;

			if(currentSongIndex >= currentAlbum.songs.length) {
				currentBuzzObject.stop();
				SongPlayer.currentSong.playing = null;
				alert("End of Album, bitches")
			} else {
				var song = currentAlbum.songs[currentSongIndex];
				setSong(song);
				playSong(song);
			}
		}


		return SongPlayer;
	}

	angular
		.module('blocJams')
		.factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer])

})();