var dts = require("dts-bundle");

dts.bundle({
    baseDir: 'code-tree/product/js',
    exclude: /typings/,
    externals: false,
    main: 'code-tree/product/js/guild.d.ts',
    name: 'tst',
    referenceExternals: false,
    verbose: true
});