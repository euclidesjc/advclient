/*React and Next */
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

/*My components */
import Meulogin from '../componentes/Meulogin';
import Cardprocesso from '../componentes/cardpasta';
import Menu from '../componentes/Menu';

function Home() {

    return <div>
        <div className="container-fluid">
            <Menu />
            <center>
                <h1>Login</h1>

                <img className="img-fluid img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWycf3dHrexxdtaD9ZSU4q2ZOQiF7aqmNFQ&usqp=CAU"
                    alt="Perfil" width={"100"} ></img>
                <br></br>
                <br></br>
                <Meulogin />
                <br></br>
                <Link href="/">
                    <a> Esqueci minha Senha </a>
                </Link>
                <br></br>
                <Cardprocesso />

            </center>
        </div>
    </div>
}

export default Home