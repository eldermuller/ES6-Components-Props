import './app.css';
import CookieImage from './assets/cookie.svg';
import AlertImage from './assets/alert.svg';
import Card from './components/Card';

function App() {
  return (
    <div className='container-app'>
      <Card
        image={CookieImage}
        btnColor="red"
        btnText="Tudo bem!"
      >

        <span>Nós utilizamos cookies para melhorar
          <br />
          nossa UX, analytics e marketing.</span>

      </Card>
      <Card
        image={AlertImage}
        btnColor="blue"
        btnText="Extender login"
      >

        <span>Você será deslogado
          <br />
          imediatamente!</span>

      </Card>
    </div>
  );
}

export default App;
