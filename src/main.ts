import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//if (environment.production) {
  enableProdMode();
//}

let platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule).then((ref)=> {
  window['debugStuff'] = {
    app: ref,
    platform: platform

  };
});
