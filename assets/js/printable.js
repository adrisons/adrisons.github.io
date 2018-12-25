var print = 0;
function changeColor() {
    let root = document.documentElement;

    if (print) {
        document.body.style.background = 'var(--main-bg-dark)';
        document.body.style.color = 'var(--main-bg-light)';
        root.style.setProperty('--card-color', 'var(--card-light)');
        root.style.setProperty('--card-bg', 'var(--card-dark)');

        root.style.setProperty('--timeline-color', 'var(--main-bg-light)');

        root.style.setProperty('--timeline-item-border', 'var(--main-bg-dark)');
    } else {
        document.body.style.background = 'var(--main-bg-light)';
        document.body.style.color = 'var(--main-bg-dark)';
        root.style.setProperty('--card-color', 'var(--card-dark)');
        root.style.setProperty('--card-bg', 'var(--card-light)');

        root.style.setProperty('--timeline-color', 'var(--main-bg-dark)');
        root.style.setProperty(
            '--timeline-item-border',
            'var(--main-bg-light)'
        );
    }
    print = !print;
}
