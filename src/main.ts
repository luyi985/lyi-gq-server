console.log('running --ds')

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}