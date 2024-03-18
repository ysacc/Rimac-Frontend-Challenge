import { Layout } from '../../components/Layout';
import familyImage from '../../assets/family_cover.png';
import './styles.scss';
import { Divider } from '../../components/Divider';
import { TitleForm } from './components/TitleForm';
import { DescriptionForm } from './components/DescriptionForm';
import { Form } from './components/Form';

function Home() {
  return (
    <Layout>
      <div className="home-container">
        <div className="home-container__right">
          <img src={familyImage} alt="Family Image" />
          <div className="right__texts">
            <TitleForm />
          </div>
        </div>
        <div className="home-container__divider">
          <Divider />
        </div>
        <div className="home-container__left">
          <div className="left__texts">
            <TitleForm />
          </div>
          <DescriptionForm />
          <div className="left__form-container">
            <Form />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
