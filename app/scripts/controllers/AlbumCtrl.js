(function() {
	function AlbumCtrl(Fixtures, SongPlayer){
		this.albumData = Fixtures.getAlbum();
		console.log(this.albumData)
		this.songs = this.albumData.songs;
		this.songPlayer = SongPlayer;
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl',['Fixtures', 'SongPlayer', AlbumCtrl]);

})();