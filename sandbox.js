$(document).ready(function(){
    // Creare un oggetto che descriva uno studente con le
    // seguenti proprietà: nome, cognome e età. Stampare a
    // schermo attraverso il for in tutte le proprietà.
    var customers = {
        name: 'Luca',
        surname: 'Neri',
        age: '35'
    };

    // console.log(customers);

    var studentInfo = '';
    for (var key in customers) {
        // console.log(key);
        // console.log(customers[key]);

        studentInfo += customers[key] + ' ';
    }
    console.log(studentInfo);

    // Creare un array di oggetti di studenti. Ciclare su tutti gli
    // studenti e stampare per ognuno nome e cognome
    var schoolBook = [
        {
            name: 'Giorgio',
            surname: 'Rossi',
            age: '35'
        },
        {
            name: 'Andrea',
            surname: 'Bianchi',
            age: '30'
        },
        {
            name: 'Luigi',
            surname: 'Verdi',
            age: '25'
        },
    ];

    // console.log(schoolBook);

    for (var i = 0; i < schoolBook.length; i++) {
        var student = schoolBook[i];

        var schoolStudentInfo = '';
        for (var key in student) {

            if (key == 'name' || key == 'surname') {
                var studentName = student.name;
                var studentSurname = student.surname;
            }
        }
        console.log(studentName + ' ' + studentSurname);
    };

    // Dare la possibilità all’utente attraverso 3 prompt di
    // aggiungere un nuovo oggetto studente inserendo
    // nell’ordine: nome, cognome e età.

    var inputNumber = 3;
    var userInput = {
        name: '',
        surname: '',
        age: ''
    };

    // console.log(userInput);

    var input;
    for (var key in userInput) {

        if (key == 'name') {
            input = prompt('Please insert your name');
            userInput[key] = input;
        } else if (key == 'surname'){
            input = prompt('Please insert your surname');
            userInput[key] = input;
        } else if (key == 'age'){
            input = prompt('Please insert your age');
            userInput[key] = input;
        }

    }

    // console.log(userInput);

    schoolBook.push(userInput);
    console.log(schoolBook);
});
