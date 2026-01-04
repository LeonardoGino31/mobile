import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/react';

import { Route, Redirect } from 'react-router';

import { homeOutline, languageOutline, settingsOutline } from 'ionicons/icons';

import Home from './Home';
import Translator from './Translator';
import Settings from './Settings';

const Tabs: React.FC = () => {
  return (
    <IonTabs>

      <IonRouterOutlet>
        <Route exact path="/tabs/home">
          <Home />
        </Route>

        <Route exact path="/tabs/translator">
          <Translator />
        </Route>

        <Route exact path="/tabs/settings">
          <Settings />
        </Route>

        <Route exact path="/tabs">
          <Redirect to="/tabs/home" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={homeOutline} />

        </IonTabButton>

        <IonTabButton tab="translator" href="/tabs/translator">
          <IonIcon icon={languageOutline} />

        </IonTabButton>

        <IonTabButton tab="settings" href="/tabs/settings">
          <IonIcon icon={settingsOutline} />

        </IonTabButton>
      </IonTabBar>

    </IonTabs>
  );
};

export default Tabs;
