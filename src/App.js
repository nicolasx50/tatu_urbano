import './App.css';
import imagenes from './assets/imagenes';

function App() {
  return (
    <div >
    <div className="container .img-fluid">

      <img src={imagenes.img1} class="img-thumbnail" alt="..." width="400"></img>
      <img src={imagenes.img2} class="img-thumbnail" alt="..." width="400"></img>
    </div>
    
    <div className="footer">
          <footer >
          <a href=""><i class="fab fa-whatsapp-square fa-5x"></i></a>
          <a href="https://www.instagram.com/maxi.tattoo_/?hl=es-la"><i class="fab fa-instagram-square fa-5x"></i></a>
          <a href="https://www.facebook.com/maximiliano.traslavina.3"><i class="fab fa-facebook fa-5x"></i></a>
          <p>tattoo_urbano 2021. Todos los derechos reservados a tatuarse.</p>
        </footer>  
    </div>
    </div>
        
  );
}

export default App;
