import '../styles/HomePage.css'
const HomePage = (props) => {

    return (
        <main className="holder">
            <h2>BIENVENIDOS</h2>
            <div className="foto1">
                <img src="images/aaa.PNG" alt="foto-ceramica"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>COMPRADORES</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex iure tenetur dolorem, quas
                        exercitationem eveniet repudiandae enim fuga dicta molestias qui, ducimus nostrum officiis ea aut,
                        dignissimos hic culpa?
                    </p>
                    <a href="iniciarsession.html" className="iniciosession">INICIAR SESSION</a>
                    <a href="registrar.html" className="iniciosession">REGISTRAR</a>

                </div>
                <div className="bienvenidos">
                    <h2>EMPRENDEDORES</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex iure tenetur dolorem, quas
                        exercitationem eveniet repudiandae enim fuga dicta molestias qui, ducimus nostrum officiis ea aut,
                        dignissimos hic culpa?
                    </p>
                    <a href="iniciarsession.html" className="iniciosession">INICIAR SESSION</a>
                    <a href="registrar.html" className="iniciosession">REGISTRAR</a>

                </div>
            </div>

            <h2>Podria Interesarte</h2>
            <div class="recomendado">
                <div class="productos">
                    <img src="images/aaa.PNG" alt=""/>
                    <h4>NOMBRE DEL PRODUCTO</h4>
                    <h5>NOMBRE DEL EMPRENDIMIENTO VENDEDOR</h5>
                    <div class="precio"> $777
                    </div>
                </div>
                
                <div class="productos">
                    <img src="images/aaa.PNG" alt=""/>
                    <h4>NOMBRE DEL PRODUCTO</h4>
                    <h5>NOMBRE DEL EMPRENDIMIENTO VENDEDOR</h5>
                    <div class="precio"> $777
                    </div>
                </div>

                <div class="productos">
                    <img src="images/aaa.PNG" alt=""/>
                    <h4>NOMBRE DEL PRODUCTO</h4>
                    <h5>NOMBRE DEL EMPRENDIMIENTO VENDEDOR</h5>
                    <div class="precio"> $777
                    </div>
                </div>

                <div class="productos">
                    <img src="images/aaa.PNG" alt=""/>
                    <h4>NOMBRE DEL PRODUCTO</h4>
                    <h5>NOMBRE DEL EMPRENDIMIENTO VENDEDOR</h5>
                    <div class="precio"> $777
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;