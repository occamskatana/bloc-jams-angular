(function() {
	function AlbumCtrl(Fixtures){
		this.albumData = Fixtures.getAlbum;
		this.songs = albumPicasso.songs;
		
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl',['Fixtures', AlbumCtrl]);

})();