function Meulogin() {
             return   <>
                <form className="form-group">
                <div className="form-group mb-2">
                    <input type="text" id="Usuario" placeholder="Usuário" className="border rounded" />
                </div>

                <div className="form-group mb-2">
                    <input type="text" id="Senha" placeholder="Senha" className="border rounded"  />
                </div>

               <div class="form-group">
                <button type="submit" id="botao" placeholder="Fazer Login" className='btn btn-primary btn-l'>Logar</button> 
               </div>
            </form>
            </>
}

export default Meulogin
            