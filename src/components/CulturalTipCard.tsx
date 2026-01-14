import {
  IonCard,
  IonCardContent,
  IonIcon,
  IonText
} from '@ionic/react';

import { sparklesOutline } from 'ionicons/icons';
import './CulturalTipCard.css';

interface Props {
  title: string;
  description: string;
  icon?: string;
}

const CulturalTipCard: React.FC<Props> = ({
  title,
  description,
  icon = sparklesOutline
}) => {
  return (
    <IonCard className="tip-card">
      <IonCardContent>
        <div className="tip-header">
          <div className="tip-icon">
            <IonIcon icon={icon} />
          </div>

          <IonText>
            <h3>{title}</h3>
          </IonText>
        </div>

        <IonText color="medium">
          <p>{description}</p>
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default CulturalTipCard;
