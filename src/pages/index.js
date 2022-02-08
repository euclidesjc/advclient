import Meulogin from '../componentes/Meulogin';


function Home() {

    return <div>

        <center>
            <h1>Login</h1>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrgJnM9FLGc_bijjNnpD5Fxu6wd6QEwjP2g&usqp=CAU"
                alt="Perfil" width={"100"} ></img>
                <br></br>
                <br></br>
                     <Meulogin/>
            <br></br>
            <a href="/"> Esqueci minha Senha </a>

        </center>

    </div>
}

export default Home