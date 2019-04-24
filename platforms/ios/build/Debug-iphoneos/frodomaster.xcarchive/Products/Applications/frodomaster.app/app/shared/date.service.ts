const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthNamesEs = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export class DateService {
    longDate(date: Date, lang: string) {
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        if (lang === 'en') {
            return `${day} ${monthNamesEn[monthIndex]} ${year}`;
        } else {
            return `${day} ${monthNamesEs[monthIndex]} ${year}`;
        }
    }

    shortDate(date: Date, lang: string) {
        const day = date.getDate();
        const monthIndex = date.getMonth();

        if (lang === 'en') {
            return `${day} ${monthNamesEn[monthIndex]}`;
        } else {
            return `${day} ${monthNamesEs[monthIndex]}`;
        }
    }
}