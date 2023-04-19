import * as Deezer from "./src/index.js"

// console.log()

(async()=>{
    let album = await Deezer.Album.getAlbum('302127');
    console.log(await album.title)


    // let favorite = await Deezer.Album.favoriteAlbum('302127');
    // console.log(await favorite)

    // let artist = await Deezer.Artist.getArtist(await album.artist.id);
    // console.log(await artist.name)
    // // console.log(await album.tracks.data[0].id)

    let track = await Deezer.Track.favoriteTrack(await album.tracks.data[0].id);
    console.log(await track.title)
})()