import React from 'react';
import TablaPreguntas from './TablaPregutas';
import '../styles/styles.css';


class App extends React.Component {

    constructor (){
        super();
        this.state = {
            data: ''
        };
        this.handlResponse = this.handleResponse.bind(this);
        this.handlResponse();
        // this.imprimir = this.imprimir.bind(this);
        // this.imprimir();

    }
    // imprimir() {
    //     console.log("algosadasd");
    // }

    /* 
        **Este metodo es donde se cacha la respuesta del servidor
        **Se cambia el nombre de **Practica03** por el nombre del proyecto que usen
        **
     */
    
    handleResponse(){
        const url = `http://localhost:8080/Practica03/Servlet`;

        fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            this.setState({
                data: data
            });
            //console.log(this.state.data);
        });
    }

    render() {
        return(
            <div>
                <header className="header-center">
                    <h1>CREAR ALTAS, BAJAS Y CAMBIOS</h1>
                </header>
                <div className="space-left">
                    <a href='./crearPregunta.html'>Crear pregunta</a>
                </div>
                <br/>
                <TablaPreguntas className="table-space"
                    //datos= {this.state.data}
                />
            </div>
        );
    }

}

export default App;
