let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Victoria Balderas')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Frontend JR')
    .pauseFor(2500)
    .start();


let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
        loop: true
});
    
typewriterFrase
    .typeString('"Im still standing, after all this time..."')
    .pauseFor(2500)
    .deleteAll()
    .start();    