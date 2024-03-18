import { Divider } from '../../components/Divider';
import { ArrowIcon } from '../../components/Icons/ArrowIcon';
import { UserIcon } from '../../components/Icons/UserIcon';
import { Layout } from '../../components/Layout';
import { Steps } from '../../components/Steps';
import { useResume } from '../../hooks/useResume';
import './styles.scss';

function Resume() {
  const { userData, selectedPlan } = useResume();

  return (
    <Layout withFooter={false} withBackground={false}>
      <Steps step="two" />
      <div className="resume-container">
        <button
          className="resume-container__arrow-container"
          onClick={() => window.history.back()}
        >
          <ArrowIcon width="20" height="20" color="#4F4FFF" />
          <div>Volver</div>
        </button>
        <h1 className="resume-container__title">Resumen del seguro</h1>
        <div className="resume-container__details">
          <p className="details-card__subtitle">PRECIOS CALCULADOS PARA:</p>
          <div className="details-card__name">
            <UserIcon />
            <p>
              {userData?.name} {userData?.lastName}
            </p>
          </div>
          <Divider />
          <div>
            <p className="details-card__title">Responsable de pago</p>
            <p className="details-card__item">
              DNI: {userData?.documentNumber}
            </p>
            <p className="details-card__item">Celular: {userData?.cellphone}</p>
          </div>
          <div className="details-card__content">
            <p className="details-card__title">Plan elegido</p>
            <p className="details-card__item">{selectedPlan?.name}</p>
            <p className="details-card__item">
              Costo del Plan: ${selectedPlan?.price} al mes
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
