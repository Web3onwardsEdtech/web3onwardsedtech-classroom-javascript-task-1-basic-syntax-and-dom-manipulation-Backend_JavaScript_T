let Name = process.argv[2];
let student = process.argv[4] === 'true';
function printMessage(name, isStudent) 
{
    let message = `Hello, my name is ${name}${isStudent ? ' and I am a student.' : ''}`;
    console.log(message);
}
printMessage(Name, student);
