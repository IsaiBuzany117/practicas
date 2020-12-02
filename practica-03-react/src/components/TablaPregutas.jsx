import React from 'react';
import Pregunta from './Pregunta';


class TablaPreguntas extends React.Component {

    constructor(){
        super();
        this.state={
            data: ''
        }
    }

    render() {
        // this.setState({
        //     data: this.props.data
        // });
        // const datos = this.state.data.map((pregunta) => {
        //     return (
        //         <Pregunta
        //         nompregunta= {pregunta.nombre}
        //         />
        //     );
        // });
        return(
            <div className="table-space">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre de la pregunta</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Pregunta
                            nompregunta= "Pregunta 1"
                        />
                        <Pregunta
                            nompregunta= "Pregunta 2"
                        />
                        <Pregunta
                            nompregunta= "Pregunta 3"
                        />
                    </tbody>
                </table>
            </div>
        );
    }

}

export default TablaPreguntas; 