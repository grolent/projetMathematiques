import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {FORM_PROVIDERS} from 'angular2/common';
import {StatusBar} from 'ionic-native';
import {AccueilPage} from './pages/accueil/accueil';
import {EquationDegre2} from './pages/equation-degre-2/equation-degre-2';
import {Matrices} from './pages/matrices/matrices';
import {Statistiques} from './pages/statistiques/statistiques';
import {Probas} from './pages/probas/probas';
import {MatricesFactory} from './factories/matricesFactory';
import {StatistiquesFactory} from './factories/statistiquesFactory';
import {ProbasFactory} from './factories/probasFactory';


@App({
  templateUrl: 'build/app.html',
  providers: [MatricesFactory, StatistiquesFactory, ProbasFactory],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform], [MenuController]];
  }

  constructor(app, platform, menu) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Accueil', component: AccueilPage},
      { title: 'Equation second degré', component: EquationDegre2},
      { title: 'Matrices', component: Matrices},
      { title: 'Statistiques', component: Statistiques},
      { title: 'Probabilités', component: Probas}
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = AccueilPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
