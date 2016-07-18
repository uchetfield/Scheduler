(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        'rxjs': 'lib/js/rxjs',
        'angular2-in-memory-web-api': 'lib/js/angular2-in-memory-web-api',
        '@angular': 'lib/js/@angular',
        'jquery': 'lib/jquery/',
        'lodash': 'lib/js/lodash.js',
        'moment': 'lib/js/moment.js',
        'ng2-bootstrap': 'lib/js/ng2-bootstrap',
        'ng2-datetime': 'lib/js/ng2-datetime/',
        'ng2-slim-loading-bar': 'lib/js/ng2-slim-loading-bar',
        'ng2-bs3-modal': 'lib/js/ng2-bs3-modal',
        'rxjs': 'lib/js/rxjs',

    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
        'moment': { main: 'moment.js', defaultExtension: 'js' },
        'ng2-bootstrap': { main: 'ng2-bootstrap.js', defaultExtension: 'js' },
        'ng2-datetime': { main: 'index.js', defaultExtension: 'js' },
        'ng2-slim-loading-bar': { defaultExtension: 'js' },
        'ng2-bs3-modal': { defaultExtension: 'js' },
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