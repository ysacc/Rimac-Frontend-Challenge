import { CheckIcon } from '../../../../components/Icons/CheckIcon';
import { SmallCardProps } from './interfaces';
import './styles.scss';

export const SmallCard = ({
  Icon,
  title,
  description,
  selected,
  onClick,
}: SmallCardProps) => {
  return (
    <button
      className={`smallcard-container ${selected ? 'selected' : 'unselected'}`}
      onClick={onClick}
    >
      <div className="smallcard-container__checkbox-container">
        {selected ? (
          <CheckIcon />
        ) : (
          <div className="checkbox-container__unchecked"></div>
        )}
      </div>
      <div className="smallcard-container__title-container">
        <Icon />
        <h3>{title}</h3>
      </div>
      <p className="smallcard-container__description">{description}</p>
    </button>
  );
};
