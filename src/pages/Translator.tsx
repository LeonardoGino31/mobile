import './Translator.css';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonButton,
  IonText,
  IonCard,
  IonCardContent,
  IonSkeletonText,
  IonToast
} from '@ionic/react';

import { micOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';


import { useState } from 'react';

interface HistoryItem {
  from: string;
  to: string;
  text: string;
  result: string;
}

const Translator: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [listening, setListening] = useState(false);
  const [sourceLang, setSourceLang] = useState('es');
  const [targetLang, setTargetLang] = useState('en');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleTranslate = () => {
    if (!inputText.trim()) return;

    setLoading(true);

    // Simulación de traducción
    setTimeout(() => {
      const result = `(${targetLang}) ${inputText}`;

      setTranslatedText(result);

      setHistory(prev => [
        {
          from: sourceLang,
          to: targetLang,
          text: inputText,
          result
        },
        ...prev
      ]);

      setInputText('');
      setLoading(false);
    }, 900);
  };
  const handleVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Tu navegador no soporta reconocimiento de voz');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = sourceLang;
    recognition.interimResults = false;

    setListening(true);

    recognition.start();

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Traductor</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="translator-content">


        <div className="form-section">
          <IonItem lines="none">
            <IonLabel position="stacked">Idioma origen</IonLabel>
            <IonSelect
              value={sourceLang}
              onIonChange={e => setSourceLang(e.detail.value)}
            >
              <IonSelectOption value="es">🇪🇸 Español</IonSelectOption>
              <IonSelectOption value="en">🇺🇸 Inglés</IonSelectOption>
              <IonSelectOption value="fr">🇫🇷 Francés</IonSelectOption>
              <IonSelectOption value="tr">🇹🇷 Turco</IonSelectOption>
            </IonSelect>
          </IonItem>
        </div>


        <div className="form-section">
          <IonItem lines="none">
            <IonLabel position="stacked">Idioma destino</IonLabel>
            <IonSelect
              value={targetLang}
              onIonChange={e => setTargetLang(e.detail.value)}
            >
              <IonSelectOption value="es">🇪🇸 Español</IonSelectOption>
              <IonSelectOption value="en">🇺🇸 Inglés</IonSelectOption>
              <IonSelectOption value="fr">🇫🇷 Francés</IonSelectOption>
              <IonSelectOption value="tr">🇹🇷 Turco</IonSelectOption>
            </IonSelect>
          </IonItem>
        </div>

        <div className="form-section">
          <IonItem lines="none">
            <IonLabel position="stacked">Texto a traducir</IonLabel>
            <IonTextarea
              value={inputText}
              placeholder="Escribe algo..."
              onIonInput={e => setInputText(e.detail.value!)}
            />
          </IonItem>

        </div>
        <div style={{ padding: '16px' }}>
          <IonButton
            expand="block"
            fill="outline"
            className={listening ? 'mic-button listening' : 'mic-button'}
            onClick={handleVoiceInput}
          >
            <IonIcon icon={micOutline} slot="start" />
            {listening ? 'Escuchando...' : 'Hablar'}
          </IonButton>
        </div>

        <div style={{ padding: '16px' }}>
          <IonButton
            expand="block"
            className="translate-button"
            disabled={loading}
            onClick={handleTranslate}
          >
            TRADUCIR
          </IonButton>
        </div>

        {loading && (
          <IonCard className="translation-card">
            <IonCardContent>
              <IonSkeletonText animated style={{ width: '60%' }} />
              <IonSkeletonText animated style={{ width: '100%' }} />
              <IonSkeletonText animated style={{ width: '80%' }} />
            </IonCardContent>
          </IonCard>
        )}

        {!loading && translatedText && (
          <IonCard className="translation-card fade-in">
            <IonCardContent>
              <IonText>
                <h2>Traducción</h2>
                <p>{translatedText}</p>
              </IonText>

              <IonButton
                fill="outline"
                expand="block"
                onClick={() => {
                  navigator.clipboard.writeText(translatedText);
                  setShowToast(true);
                }}
              >
                COPIAR
              </IonButton>
            </IonCardContent>
          </IonCard>
        )}

        {history.length > 0 && (
          <div className="history-section" style={{ padding: '16px' }}>
            <IonText>
              <h3>Historial</h3>
            </IonText>

            {history.map((item, index) => (
              <IonCard key={index} className="history-card">
                <IonCardContent>
                  <small>
                    {item.from} → {item.to}
                  </small>
                  <p>{item.text}</p>
                  <strong>{item.result}</strong>
                </IonCardContent>
              </IonCard>
            ))}
          </div>
        )}

        <IonToast
          isOpen={showToast}
          message="Texto copiado"
          duration={1500}
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Translator;
