import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonSkeletonText
} from '@ionic/react';

import './CountryCardSkeleton.css';

const CountryCardSkeleton: React.FC = () => {
  return (
    <IonCard className="country-card skeleton-card">
      <IonSkeletonText animated className="skeleton-hero" />

      <IonCardHeader>
        <IonSkeletonText animated style={{ width: '70%', height: '20px' }} />
      </IonCardHeader>

      <IonCardContent>
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: '90%' }} />
        <IonSkeletonText animated style={{ width: '60%', height: '36px', marginTop: '12px' }} />
      </IonCardContent>
    </IonCard>
  );
};

export default CountryCardSkeleton;
