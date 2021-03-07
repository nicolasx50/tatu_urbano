import './App.css';
import imagenes from './assets/imagenes';

function App() {
  return (
    <div >
      <div>
      <h1>Tatu_urbano</h1>
      <div>
      <section id="recientes">
        <div>
          <h3>tatuajes recientes</h3>
        </div>
        <div className="carrusel">

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={imagenes.tatu1}  width="400px" height="500px" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={imagenes.tatu2} width="400px" height="500px" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={imagenes.tatu3} width="400px" height="500px" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={imagenes.tatu4} width="400px" height="500px" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={imagenes.tatu5} width="400px" height="500px" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={imagenes.tatu6} width="400px" height="500px" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={imagenes.tatu7} width="400px" height="500px" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  </div>
</div>
      </section>
      </div>
    <div>
      <div>
    <section id="estilos">
      <div>
        <h3>Estilos de tatuajes</h3>
      </div>
    </section>
      </div>
    <br/>
    <div>
    <h4>Tradicional</h4>
    </div>
    <div>
    <p>Un tatuaje cover up no es más que un diseño de tatuaje 
      especialmente pensado para cubrir un dibujo anterior que 
      ya no nos gusta, bien porque el tatuaje ha perdido calidad, en cuyo caso también podríamos repasarlo, bien porque representa algo que ya no queremos lucir sobre nuestra piel.</p>
    </div>
    <div>
      <h4>Estilo neo tradicional</h4>
    </div>
    
    <p>Realismo</p>
    </div>

    </div>
    <div className="container .img-fluid">
    <div className="tatuadores">
    <h2>tatuadores</h2>
      <img src={imagenes.img1} class="img-thumbnail" alt="..." width="400" />
      <img src={imagenes.img2} class="img-thumbnail" alt="..." width="400" />
    </div>
    </div>
    
    <div className="footer">
          <footer >
          <a href=""><i class="fab fa-whatsapp-square fa-5x"></i></a>
          <a href="https://instagram.com/tattoourbano_?igshid=ldq7m9xawcdg"><i class="fab fa-instagram-square fa-5x"></i></a>
          <a href="https://www.facebook.com/maximiliano.traslavina.3"><i class="fab fa-facebook fa-5x"></i></a>
          <p>tattoo_urbano 2021. Todos los derechos reservados a tatuarse.</p>
        </footer>  
    </div>
    </div>
        
  );
}

export default App;
