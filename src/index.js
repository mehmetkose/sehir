
import {sehirler} from './sehirler';

const sehir = (sorgu) => {
    const sorguSehir = sorgu.toLowerCase();
    for (const sehir of sehirler) {
        if (sehir.isimler.includes(sorguSehir)) {
            return sehir.isim;
        }
    }
    return sorguSehir;
}

export { sehir };
