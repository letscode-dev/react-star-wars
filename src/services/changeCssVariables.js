/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "light"
--theme-dark-УникальноеИмя    # для "dark"
--theme-neitral-УникальноеИмя # для "neitral"
*/

export const changeCssVariables = theme => {
    const root = document.querySelector(':root');

    const cssVariables = ['header', 'bgimage'];

    cssVariables.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`,
            `var(--theme-${theme}-${element})`
        );
    })
}
