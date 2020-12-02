import React from 'react';

class CrearPregunta extends React.Component {

    constructor(){
        super();
        this.state = {
            nombre: '',
            pregunta: '',
            respuesta: '',
            op1: '',
            op2: '',
            op3: '',
            op4: '',
            op5: '',
            op6: '',
            op7: '',
            op8: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { value, name } = event.target;
        
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(event.target);
        console.log(this.state);

        /* Reemplazar **Practica03** por el nombre del proyecto a usar */
        const url = `http://localhost:8080/Practica03/Servlet?nombre=${this.state.nombre}&pregunta=${this.state.pregunta}&respuesta=${this.state.respuesta}&op1=${this.state.op1}&op2=${this.state.op2}&op3=${this.state.op3}&op4=${this.state.op4}&op5=${this.state.op5}&op6=${this.state.op6}&op7=${this.state.op7}&op8=${this.state.op8}`;
        
        fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            location.href = './index.html';
        });

    }

    render(){
        return(
            <div>
                <header className="header-center">
                    <h2>Crear Pregunta</h2>
                </header>
                <div className="form-center-pregunta">
                    <form name="crear" onSubmit={this.handleSubmit}>
                        Nombre de la pregunta: <input type='text' name='nombre' onChange={this.handleChange}/><br />
                        Pregunta: <input type='text' name='pregunta' onChange={this.handleChange}/><br />
                        Respuesta: <input type='text' name='respuesta' onChange={this.handleChange}/><br /><br />

                        Drag Opcion 1: <input type='text' name='op1' onChange={this.handleChange}/><br />
                        Drag Opcion 2: <input type='text' name='op2' onChange={this.handleChange}/><br />
                        Drag Opcion 3: <input type='text' name='op3' onChange={this.handleChange}/><br />
                        Drag Opcion 4: <input type='text' name='op4' onChange={this.handleChange}/><br /><br />

                        Target Opcion 1: <input type='text' name='op5' onChange={this.handleChange}/><br />
                        Target Opcion 2: <input type='text' name='op6' onChange={this.handleChange}/><br />
                        Target Opcion 3: <input type='text' name='op7' onChange={this.handleChange}/><br />
                        Target Opcion 4: <input type='text' name='op8' onChange={this.handleChange}/><br /><br />

                        <input type='submit' value='Crear Pregunta' />
                    </form>
                </div>
            </div>
        );
    }

}

export default CrearPregunta;