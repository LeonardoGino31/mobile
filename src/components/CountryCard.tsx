import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonText, IonIcon, IonImg } from '@ionic/react';
import React from 'react';
import { useState } from 'react';
import './CountryCard.css'
import { globeOutline } from 'ionicons/icons';
import { useIonRouter } from '@ionic/react';






interface CountryCardProps {
    id: number;
    name: string;
    description: string;
    extraInfo?: string;
    image?: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ id, name, description, image }) => {
    const router = useIonRouter();

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

                <IonButton
                    expand="block"
                    color="dark"
                    onClick={() => {
                        router.push(`/country/${id}`, 'forward');;
                    }}
                >
                    Explorar
                </IonButton>



            </IonCardContent>
        </IonCard>
    );
}

export default CountryCard;