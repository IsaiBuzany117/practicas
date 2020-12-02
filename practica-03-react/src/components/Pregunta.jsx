import React from 'react';

class Pregunta extends React.Component {

    constructor(){
        super();
        this.state={

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log(event.target.value);
    }


    render(){
        const { nompregunta } = this.props;
        return(
            <tr>
                <td>{nompregunta}</td>
                <td>
                    <a href="./leerPregunta.html" onClick={this.handleSubmit}>Leer Pregunta</a>
                    <span>  ||  </span>
                    <a href="./modificarPregunta.html">Modificar Pregunta</a>
                    <span>  ||  </span>
                    <a href="./eliminarPregunta.html">Eliminar Pregunta</a>
                </td>
            </tr>
        );
    }

}

export default Pregunta;