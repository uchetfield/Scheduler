(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        'rxjs': 'lib/js/rxjs',
        'angular2-in-memory-web-api': 'lib/js/angular2-in-memory-web-api',
        '@angular': 'lib/js/@angular',
        'jquery': 'node_modules/jquery/',
        'lodash': 'node_modules/lodash/lodash.js',
        'moment': 'node_modules/moment/',
        'ng2-bootstrap': 'node_modules/ng2-bootstrap',
        'ng2-datetime': 'node_modules/ng2-datetime/',
        'ng2-slim-loading-bar': 'node_modules/ng2-slim-loading-bar',
        'ng2-bs3-modal': 'node_modules/ng2-bs3-modal',
        'rxjs': 'node_modules/rxjs',
        'symbol-observable': 'node_modules/symbol-observable'

    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'app.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
    };

    var packageNames = [
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/router-deprecated',
      '@angular/testing',
      '@angular/upgrade',
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);