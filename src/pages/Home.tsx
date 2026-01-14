import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonSearchbar } from '@ionic/react';
import './Home.css';
import CountryCard from '../components/CountryCard';
import { CountryI, countries as mockCountries } from '../data/countries';
import { useState, useEffect } from 'react';
import CountryCardSkeleton from '../components/CountryCardSkeleton';

const Home: React.FC = () => {
  const [countries, setCountries] = useState<CountryI[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    setTimeout((
    ) => {
      setCountries(mockCountries);
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cultural Guide</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ padding: '16px' }}>
          <IonText>
            <h2>Viaja con confianza</h2>
          </IonText>

          <IonText color="medium">
            <p>
              Descubre costumbres, consejos culturales y traduce frases
              importantes antes de visitar otro país.
            </p>
          </IonText>

        </div>
        <div style={{ padding: '16px' }}>
          <IonText>
            <h2>Encuentra tu destino</h2>
          </IonText>
          <IonSearchbar
            className="searchbar-modern"
            placeholder="Buscar país"
            value={search}
            onIonInput={(e) => setSearch(e.detail.value!)}
          />
        </div>
        <div style={{ padding: '16px' }}>
          {loading && <p>Cargando paises disponibles...</p>}
          <div className="cards-container">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                <CountryCardSkeleton key={i} />
              ))
              : filteredCountries.map(country => (
                <CountryCard
                  key={country.id}
                  {...country}
                />
              ))}
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
