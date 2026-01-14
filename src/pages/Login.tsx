import { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonText,
  useIonRouter
} from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useIonRouter();

  const handleLogin = () => {
    router.push('/tabs/home', 'forward', 'replace');
  };

  return (
    <IonPage>
      <IonContent className="login-content" fullscreen>
        <div className="login-container">
          {/* Header section */}
          <div className="login-header">
            <IonText>
              <h1>Bienvenido</h1>
            </IonText>
            <IonText color="medium">
              <p>Inicia sesión para continuar</p>
            </IonText>
          </div>

          {/* Form section */}
          <div className="login-form">
            {/* Email input */}
            <IonInput
              type="email"
              label="Correo electrónico"
              labelPlacement="floating"
              fill="outline"
              placeholder="tu@email.com"
              value={email}
              onIonInput={(e) => setEmail(e.detail.value!)}
            />

            {/* Password input */}
            <IonInput
              type="password"
              label="Contraseña"
              labelPlacement="floating"
              fill="outline"
              placeholder="••••••••"
              value={password}
              onIonInput={(e) => setPassword(e.detail.value!)}
            />

            {/* Login button */}
            <IonButton expand="block" onClick={handleLogin}>
              Iniciar Sesión
            </IonButton>

            {/* Optional: Register link */}
            <IonText color="medium" className="register-link">
              <p>¿No tienes cuenta? <span>Regístrate</span></p>
            </IonText>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
