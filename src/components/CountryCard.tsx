import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonText,IonIcon , IonImg  } from '@ionic/react';
import React from 'react';
import { useState } from 'react';
import './CountryCard.css'
import { globeOutline } from 'ionicons/icons';




interface CountryCardProps {
    name: string;
    description: string;
    extraInfo?: string;
    image?: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, description, extraInfo, image }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <IonCard className={`country-card ${name.toLowerCase()}`}>
            <IonImg src={image} alt={name} className="country-hero" />
            <IonCardHeader className="country-card-header">
                <div className="title-row">
                    <IonIcon icon={globeOutline} className="country-icon" />
                    <IonCardTitle>{name}</IonCardTitle>
                </div>
            </IonCardHeader>
            <IonCardContent>
                <IonText color="medium">
                    <p>{description}</p>
                </IonText>
                {showMore && <p><strong>{extraInfo}</strong></p>}
                {extraInfo && (
                    <IonButton
                        expand="block"
                        className="explore-button"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'Cerrar' : 'Explorar'}
                    </IonButton>

                )}
            </IonCardContent>
        </IonCard>
    );
}

export default CountryCard;