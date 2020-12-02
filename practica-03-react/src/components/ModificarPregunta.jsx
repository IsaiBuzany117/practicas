import React from 'react';

class ModificarPregunta extends React.Component {

    render(){
        return(
            <div>
                <header className="header-center">
                    <h2>Modificar Pregunta</h2>
                </header>
                <div className="form-center-pregunta">
                    <form name="crear">
                        Nombre de la pregunta: <input type='text' name='nombre' /><br />
                        Pregunta: <input type='text' name='pregunta' /><br />
                        Respuesta: <input type='text' name='respuesta' /><br /><br />

                        Drag Opcion 1: <input type='text' name='op1'/><br />
                        Drag Opcion 2: <input type='text' name='op2'/><br />
                        Drag Opcion 3: <input type='text' name='op3'/><br />
                        Drag Opcion 4: <input type='text' name='op4'/><br /><br />

                        Target Opcion 1: <input type='text' name='op5'/><br />
                        Target Opcion 2: <input type='text' name='op6'/><br />
                        Target Opcion 3: <input type='text' name='op7'/><br />
                        Target Opcion 4: <input type='text' name='op8'/><br /><br />

                        <input type='submit' value='Modificar Pregunta' />
                    </form>
                </div>
            </div>
        );
    }

}

export default ModificarPregunta;