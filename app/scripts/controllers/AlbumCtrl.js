(function() {
	function AlbumCtrl(){
		this.albumPicasso = albumPicasso;
		this.songs = albumPicasso.songs;
		
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', AlbumCtrl);

})();