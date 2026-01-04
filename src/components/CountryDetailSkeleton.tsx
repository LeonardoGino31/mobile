import {
  IonContent,
  IonSkeletonText
} from '@ionic/react';

const CountryDetailSkeleton: React.FC = () => {
  return (
    <IonContent fullscreen>
      {/* Hero */}
      <IonSkeletonText animated style={{ height: '220px' }} />

      <div style={{ padding: '16px' }}>
        <IonSkeletonText animated style={{ width: '60%', height: '24px' }} />
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: '85%' }} />
      </div>
    </IonContent>
  );
};

export default CountryDetailSkeleton;
