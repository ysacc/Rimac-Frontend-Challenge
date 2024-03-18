import { ArrowIcon } from '../../components/Icons/ArrowIcon';
import { ForMeIcon } from '../../components/Icons/ForMeIcon';
import { ForSomeoneElseIcon } from '../../components/Icons/ForSomeoneElseIcon';
import { Layout } from '../../components/Layout';
import { Steps } from '../../components/Steps';
import { PlansCard } from './components/PlansCard';
import { Card } from './components/Card';
import { Subtitle } from './components/Subtitle';
import { Title } from './components/Title/Component';
import { usePlans } from '../../hooks/usePlans';
import './styles.scss';
import React, { useState, useEffect } from 'react';

function Plans() {
  const { handleSelectedPerson, selectedPerson, plansToShow } = usePlans();
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPages, setMaxPages] = useState(1);

  // Calcula el número máximo de tarjetas por página
  const cardsPerPage = window.matchMedia('(max-width: 700px)').matches ? 1 : 3;

  // Calcula el número máximo de páginas
  useEffect(() => {
    setMaxPages(Math.ceil(plansToShow.length / cardsPerPage));
  }, [plansToShow, cardsPerPage]);

  // Calcula el índice del último y primer plan en la página actual
  const indexOfLastCard = (currentPage + 1) * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = plansToShow.slice(indexOfFirstCard, indexOfLastCard);

  // Función para cambiar a la página siguiente
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

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
          <Card
            Icon={ForMeIcon}
            title="Para mi"
            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            selected={selectedPerson === 'me'}
            onClick={() => handleSelectedPerson('me')}
          />
          <Card
            Icon={ForSomeoneElseIcon}
            title="Para alguien más"
            description="Realiza una cotización para uno de tus familiares o cualquier persona."
            selected={selectedPerson === 'someone-else'}
            onClick={() => handleSelectedPerson('someone-else')}
          />
        </div>
        <div className="plans-container__plans-container">
          {currentCards.map(plan => (
            <PlansCard
              key={plan.age}
              title={plan.name}
              price={plan.price}
              descriptions={plan.description}
            />
          ))}
        </div>
        {/* Controles de paginación */}
        {maxPages > 1 && (
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 0}>
              <ArrowIcon width="20" height="20" color="white" />
            </button>
            <span>
              {currentPage + 1}/{maxPages}
            </span>
            <button
              onClick={nextPage}
              disabled={indexOfLastCard >= plansToShow.length}
              className="arrow-reversed"
            >
              <ArrowIcon width="20" height="20" color="white" />
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Plans;
