import React from 'react';

class LeerPregunta extends React.Component {

    constructor(){
        super();
        this.state = {

        };
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect(){
        location.assign('./index.html');
        //window.location.href='./page/CrearPregunta';
    }

    render(){
        return(
            <div>
                <header className="header-center">
                    <h1>Leer Pregunta</h1>
                </header>
                <div className="form-center-pregunta">
                    <p>Nombre de la pregunta: </p>
                    <p>Pregunta: </p>
                    <p>Respuesta: </p><br/>

                    <p>Drag Opción 1: </p>
                    <p>Drag Opción 2: </p>
                    <p>Drag Opción 3: </p>
                    <p>Drag Opción 4: </p><br/>

                    <p>Target Opción 1: </p>
                    <p>Target Opción 2: </p>
                    <p>Target Opción 3: </p>
                    <p>Target Opción 4: </p>

                    <button onClick={this.handleRedirect}>Regresar</button>
                </div>
            </div>
        );
    }

}

export default LeerPregunta;