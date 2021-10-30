import sehirler from "./sehirler";

const sehir = (sorgu) => {
  if (sorgu) {
    const sorguSehir = sorgu.toLowerCase();
    const sonuc = sehirler.filter((sehir) =>
      sehir.isimler.includes(sorguSehir) ? sehir : null
    );
    return sonuc && sonuc.length ? sonuc.pop().isim : sorguSehir;
  }
  return sorgu;
};
export default sehir;
