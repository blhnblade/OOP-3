const output = document.querySelector('.output');

class Operations{
    static  getSign(){

    }
    static  getName(){

    }
    static  result(){

    }
}

class Addition extends Operations{
    static getSign(){
        console.log('+');
        return '+';
    }
    static getName(){
        console.log('Сложение');
        return 'Сложение';
    }
    static  result(a, b){
        console.log(`${a} + ${b} = ${a+b}`)
        return a+b;
    }
}

class Subtraction extends Operations{
    static getSign(){
        console.log('-');
        return '-';
    }
    static getName(){
        console.log('Вычитание');
        return 'Вычитание';
    }
    static result(a, b){
        console.log(`${a} - ${b} = ${a-b}`);
        return a-b;
    }
}

class Multiplication extends Operations{
    static getSign(){
        console.log('*');
        return '*';
    }
    static getName(){
        console.log('Умножение')
        return 'Умножение';
    }
    static result(a, b){
        console.log(`${a} * ${b} = ${a*b}`);
        return a*b;
    }
}


function paste(el){
    let temp = document.createElement('p');
    temp.textContent = el;
    return temp;
}

// Умножение
document.body.append(paste(Addition.getSign()))
document.body.append(paste(Addition.getName()))
document.body.append(paste(Addition.result(4,3)))

// Вычитание
document.body.append(paste(Subtraction.getSign()))
document.body.append(paste(Subtraction.getName()))
document.body.append(paste(Subtraction.result(10,3)))

// Умножение
document.body.append(paste(Multiplication.getSign()))
document.body.append(paste(Multiplication.getName()))
document.body.append(paste(Multiplication.result(7,3)))