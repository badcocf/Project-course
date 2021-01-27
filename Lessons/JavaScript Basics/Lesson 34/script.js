// touchstart - касание к элементу
// touchmove - движение пальца
// touchend - отрыв от элемента
// touchenter - движение до элемента
// touchleave - за пределы элемента
// touchcancel - точка передвижения не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);

    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });
});

// touches - список пальцев при взаимодействии с экраном
// targetTouches - список пальцев при взаимодействии с конкретным эеле
// changedTouches - список пальцев учавствующих в текущем событии