//  Formatter to funkcja, która zmienia sposób wyświetlania danych w widoku (XML)
//  Czyli:
// dane w modelu są np. "true"
// a Ty chcesz pokazać "Aktywny"
//  Formatter robi tę zamianę 
// poniższy formater łączy imię i nazwisko -> trzeba się odowłać do niego w controlrze i w xml 

sap.ui.define([], function  () {
    "use strict";
return {
    formatName: function (sFirstName, sLastName) {
        return sFirstName[0] + '.' + ' ' + sLastName;
    }
};
});
