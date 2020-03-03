export default class Song{
	constructor({id,mid,singer,name,album,image}){
		this.id = id
		this.mid = mid
		this.singer = singer
		this.name = name
		this.album = album
		this.image = image
	}
}

export function settingSong(musicData){
	return new Song({
		id: musicData.id,
		singer: musicData.ar[0].name,
		name: musicData.name,
		album: musicData.name,
		image: musicData.al.picUrl
	})
}
