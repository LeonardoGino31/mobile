import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonText,
    IonImg
} from '@ionic/react';
import './CountryDetail.css'
import CulturalTipCard from '../components/CulturalTipCard';


import { useParams } from 'react-router';
import { countries } from '../data/countries';
import CountryDetailSkeleton from '../components/CountryDetailSkeleton';

interface RouteParams {
    id: string;
}

const CountryDetail: React.FC = () => {
    const { id } = useParams<RouteParams>();

    const country = countries.find(c => c.id === Number(id));


    if (!country) {
        return <CountryDetailSkeleton />;
    }


    return (
        <IonPage>
            {/* HEADER NORMAL */}
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tabs/home" />
                    </IonButtons>
                    <IonTitle>{country.name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {/* HERO GRANDE */}
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{country.name}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonImg
                    src={country.image}
                    alt={country.name}
                    style={{ height: '260px', objectFit: 'cover' }}
                />

                <div style={{ padding: '16px' }}>
                    <p>{country.description}</p>
                    <p>{country.extraInfo}</p>
                </div>
                <div style={{ padding: '16px' }}>
                    <IonText>
                        <h2>Consejos culturales</h2>
                    </IonText>

                    {country.tips.map(tip => (
                        <CulturalTipCard
                            key={tip.id}
                            title={tip.title}
                            description={tip.description}
                        />
                    ))}
                </div>
            </IonContent>
        </IonPage>

    );
};

export default CountryDetail;
