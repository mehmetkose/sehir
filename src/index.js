import { sehirler } from './sehirler'

export const sehir = sorgu => {
	const sorguSehir = sorgu.toLowerCase()
	const sonuc = sehirler.filter(sehir => sehir.isimler.includes(sorguSehir) ? sehir : null)
	return sonuc && sonuc.length ? sonuc.pop().isim : sorguSehir
}