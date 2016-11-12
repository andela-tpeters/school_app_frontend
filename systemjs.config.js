/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'jquery': 'npm:jquery',
      'faker': 'npm:faker',
      'selectize': 'npm:selectize',
      'sifter': "npm:sifter",
      'microplugin': "npm:microplugin",
      'owlcarousel': "npm:owlcarousel",
      'icheck': "npm:icheck",
      'googlemaps': 'npm:googlemaps',
      'markerwithlabel': 'npm:markerwithlabel',
      'bootstrapslider': 'npm:bootstrap-slider',
      'ng2-pagination': 'npm:ng2-pagination',
      'angular2-notifications': 'npm:angular2-notifications',
      'ng2-cloudinary': 'npm:ng2-cloudinary',
      'ng2-file-upload': 'npm:ng2-file-upload'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      jquery: {
        main: './dist/jquery.js',
        defaultExtension: 'js'
      },
      faker: {
        main: './build/build/faker.js',
        defaultExtension: 'js'
      },
      selectize: {
        main: "./dist/js/selectize.js",
        defaultExtension: "js"
      },
      sifter: {
        main: "./sifter.js",
        defaultExtension: "js"
      },
      microplugin: {
        main: "./src/microplugin.js",
        defaultExtension: "js"
      },
      owlcarousel: {
        main: "./owl-carousel/owl.carousel.js",
        defaultExtension: "js"
      },
      icheck: {
        main: "./icheck.min.js",
        defaultExtension: "js"
      },
      googlemaps: {
        main: "./lib/index",
        defaultExtension: "js"
      },
      markerwithlabel: {
        main: "./index.js",
        defaultExtension: "js"
      },
      bootstrapslider: {
        main: "./dist/bootstrap-slider.js",
        defaultExtension: 'js'
      },
      'ng2-pagination': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'angular2-notifications': { main: 'components.js', defaultExtension: 'js' },
      'ng2-file-upload': { main: './ng2-file-upload.js', defaultExtension: 'js' },
      'ng2-cloudinary': { main: './ng2-cloudinary.js', defaultExtension: 'js'}
    }
  });
})(this);
