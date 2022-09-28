

export function HurufMutu(average) {
    var hurufmutu = ''
    if (average <= 100 && average >= 81) {
        return hurufmutu = 'A'
    } else if (average <= 80 && average >= 75) {
        return hurufmutu = 'B+'
    } else if (average <= 74 && average >= 70) {
        return hurufmutu = 'B'
    } else if (average <= 69 && average >= 65) {
        return hurufmutu = 'C+'
    } else if (average <= 64 && average >= 55) {
        return hurufmutu = 'C'
    } else if (average <= 54 && average >= 50) {
        return hurufmutu = 'D'
    } else if (average <= 49 && average >= 0) {
        return hurufmutu = 'E'
    } else {
        return hurufmutu = ''
    }
}

export function AngkaMutu(hurufmutu) {
    var angkamutu = ''
    if (hurufmutu == 'A') {
        return angkamutu = 4
    } else if (hurufmutu == 'B+') {
        return angkamutu = 3.5
    } else if (hurufmutu == 'B') {
        return angkamutu = 3
    } else if (hurufmutu == 'C+') {
        return angkamutu = 2.5
    } else if (hurufmutu == 'C') {
        return angkamutu = 2
    } else if (hurufmutu == 'D') {
        return angkamutu = 1
    } else if (hurufmutu == 'E') {
        return angkamutu = 0
    } else {
        return angkamutu = ''
    }
}