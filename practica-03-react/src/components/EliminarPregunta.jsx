import React from 'react';

class EliminarPregunta extends React.Component {

    render(){
        return(
            <div>
                <h1>Eliminar Pregunta</h1>
                <form name="eliminar">
                    <label>¿Estas seguro de que quieres eliminar esta pregunta?</label>
                    <input type="submit" value="SI"/>
                    <input type="submit" value="NO"/>
                </form>
            </div>
        );
    }

}

export default EliminarPregunta;