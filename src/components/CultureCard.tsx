import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import React from 'react';
import { useState } from 'react';

interface CultureCardProps {
    title: String;
    description: String;
    extraInfo?: String;
}

const CultureCard: React.FC<CultureCardProps> = ({ title, description, extraInfo})=> {
    const [showMore, setShowMore] = useState(false);
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>{description}</p>

                {showMore && <p><strong>{extraInfo}</strong></p>}

                {extraInfo && (
                    <IonButton
                        expand="block"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'Ver menos' : 'Ver más'}
                    </IonButton>
                )}
            </IonCardContent>
        </IonCard>
    );
};

export default CultureCard;