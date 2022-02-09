import React from "react";

function  Cardprocesso(propos){

return <>
<div className="estilo p-3 mb-2 bg-info text-white col-mb-4 text-align:left">
<h3>Nr. Processo : {propos.numprocesso}</h3>
<p>Cliente : {propos.nomecliente}</p>
<p>Data Prazo : {propos.proximoprazo}</p>
<p>Tipo da Ação : {propos.tipo}</p>
<p>Partes : {propos.parte}</p>
</div>
</>

}

export default Cardprocesso