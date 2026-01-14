import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonSelect,
  IonSelectOption,
  IonItemDivider,
  IonButton
} from '@ionic/react';

import { useSettings } from '../context/SettingsContext';

const Settings: React.FC = () => {
  const { settings, updateSetting } = useSettings();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configuraciones</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        {/* ================= APARIENCIA ================= */}
        <IonList inset>
          <IonItemDivider>Apariencia</IonItemDivider>

          <IonItem>
            <IonLabel>
              <h2>Modo oscuro</h2>
              <p>Mejora la experiencia nocturna</p>
            </IonLabel>

            <IonToggle
              checked={settings.darkMode}
              onIonChange={e =>
                updateSetting('darkMode', e.detail.checked)
              }
            />
          </IonItem>
        </IonList>

        {/* ================= IDIOMA ================= */}
        <IonList inset>
          <IonItemDivider>Idioma</IonItemDivider>

          <IonItem>
            <IonLabel>
              <h2>Idioma por defecto</h2>
              <p>Usado en el traductor</p>
            </IonLabel>

            <IonSelect
              interface="alert"
              interfaceOptions={{
                cssClass: 'language-alert'
              }}
              value={settings.defaultLanguage}
              onIonChange={e =>
                updateSetting('defaultLanguage', e.detail.value)
              }
            >
              <IonSelectOption value="es">Español</IonSelectOption>
              <IonSelectOption value="en">Inglés</IonSelectOption>
              <IonSelectOption value="fr">Francés</IonSelectOption>
              <IonSelectOption value="tr">Turco</IonSelectOption>
            </IonSelect>

          </IonItem>
        </IonList>

        {/* ================= TRADUCTOR ================= */}
        <IonList inset>
          <IonItemDivider>Traductor</IonItemDivider>

          <IonItem>
            <IonLabel>
              <h2>Copiar automáticamente</h2>
              <p>Copia la traducción al finalizar</p>
            </IonLabel>

            <IonToggle
              checked={settings.autoCopy}
              onIonChange={e =>
                updateSetting('autoCopy', e.detail.checked)
              }
            />
          </IonItem>

          <IonItem>
            <IonLabel>
              <h2>Vibración</h2>
              <p>Respuesta táctil al traducir</p>
            </IonLabel>

            <IonToggle
              checked={settings.vibration}
              onIonChange={e =>
                updateSetting('vibration', e.detail.checked)
              }
            />
          </IonItem>

          <IonItem>
            <IonLabel>
              <h2>Entrada por voz</h2>
              <p>Usar micrófono para traducir</p>
            </IonLabel>

            <IonToggle
              checked={settings.microphone}
              onIonChange={e =>
                updateSetting('microphone', e.detail.checked)
              }
            />
          </IonItem>
        </IonList>

        {/* ================= DATOS ================= */}
        <IonList inset>
          <IonItemDivider>Datos</IonItemDivider>

          <IonItem lines="none">
            <IonButton
              expand="block"
              color="danger"
              fill="outline"
              onClick={() => {
                localStorage.removeItem('translationHistory');
                alert('Historial eliminado');
              }}
            >
              Borrar historial de traducciones
            </IonButton>
          </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Settings;
