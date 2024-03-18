import { ArrowIcon } from '../../components/Icons/ArrowIcon';
import { ForMeIcon } from '../../components/Icons/ForMeIcon';
import { ForSomeoneElseIcon } from '../../components/Icons/ForSomeoneElseIcon';
import { Layout } from '../../components/Layout';
import { Steps } from '../../components/Steps';
import { PlanCard } from './components/PlanCard';
import { SmallCard } from './components/SmallCard';
import { Subtitle } from './components/Subtitle';
import { Title } from './components/Title/Component';
import { usePlans } from '../../hooks/usePlans';
import './styles.scss';

function Plans() {
  const { handleSelectedPerson, selectedPerson, plansToShow } = usePlans();

  return (
    <Layout withFooter={false} withBackground={false}>
      <Steps step="one" />
      <div className="plans-container">
        <button
          className="plans-container__arrow-container"
          onClick={() => window.history.back()}
        >
          <ArrowIcon width="20" height="20" color="#4F4FFF" />
          <div>Volver</div>
        </button>
        <Title />
        <Subtitle />
        <div className="plans-container__cards-container">
          <SmallCard
            Icon={ForMeIcon}
            title="Para mi"
            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            selected={selectedPerson === 'me'}
            onClick={() => handleSelectedPerson('me')}
          />
          <SmallCard
            Icon={ForSomeoneElseIcon}
            title="Para alguien más"
            description="Realiza una cotización para uno de tus familiares o cualquier persona."
            selected={selectedPerson === 'someone-else'}
            onClick={() => handleSelectedPerson('someone-else')}
          />
        </div>
        <div className="plans-container__plans-container">
          {plansToShow.map(plan => (
            <PlanCard
              key={plan.age}
              title={plan.name}
              price={plan.price}
              descriptions={plan.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Plans;
