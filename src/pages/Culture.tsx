import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonText
} from '@ionic/react';
import CultureCard from '../components/CultureCard';
import { CultureI, cultures as mockCultures } from '../data/cultures';
import { useEffect, useState } from 'react';
import { C } from 'vitest/dist/reporters-5f784f42';

const Culture: React.FC = () => {
    const [cultures, setCultures] = useState<CultureI[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setCultures(mockCultures);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Viajes y Cultura</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                {loading && <p>Cargando información cultural...</p>}
                {!loading && 
                  cultures.map(culture => (
                    <CultureCard
                        key={culture.id}
                        title={culture.title}
                        description={culture.description}
                        extraInfo={culture.extraInfo}
                    />
                ))}
            </IonContent>

        </IonPage>
    )
}

export default Culture;