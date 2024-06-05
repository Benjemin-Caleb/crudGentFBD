let StartFunc = () => {
    const sidebar = document.querySelectorAll('.sidebar-item');
    sidebar.forEach(element => {
        element.addEventListener('click', () => {
            sidebar.forEach(item => item.classList.remove('active'));
            element.classList.add('active');
        });
    });

};

export { StartFunc };