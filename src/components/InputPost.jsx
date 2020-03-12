import React from 'react';

class InputPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post: {
                message: "",
                title: "",
                file: "",
                topic: ""
            },
            step: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.state.step+1 == 4){
            this.setState({post: {
                message: "",
                title: "",
                file: "",
                topic: ""
            }, step: 0});
        }else{
            this.setState( (prev) => {
                return {
                    step: prev.step + 1,
                }
            })
        }
    }

    render () {
        const {post, step, stepName} = this.state;

        return <section className='InputPost container'> <div className='row'>
            <h6 className='col-4'>¿Deseas compartir tu opinión respecto a la calidad del aire en la ciudad o tu experiencia en el proyecto? </h6>
            {
                step === 0?
                    <input className='col'
                        type="text"
                        value={ post.message}
                        placeholder='Escribe una descripción mensaje'
                        onChange={ e => {
                            let temp = post;
                            temp.message = e.target.value;
                            this.setState( { post: temp } );
                        } }/>

                : step === 1?
                    <input className='col'
                        type="text"
                        placeholder= 'Escribe un titulo para la publicación max 200 caracteres'
                        value={ post.title }
                        onChange={ e => {
                            let temp = post;
                            temp.title = e.target.value;
                            this.setState( { post: temp } );
                        } }/>

                : step === 2?
                    <input className='col'
                        type="text"
                        placeholder='Opcional. Sube un archivo'
                        value={ post.file }
                        onChange={ e => {
                            let temp = post;
                            temp.file = e.target.value;
                            this.setState( { post: temp } );
                        } }/>
                : 
                    <select name="select" value={ post.topic } className='col'
                    onChange={ e => {
                        let temp = post;
                        temp.topic = e.target.value;
                        this.setState( { post: temp } );
                    }}>
                        {['Escoge un tema','Calidad del Aire', 'Infraestructura vial', 'Transporte sostenible'].map(
                            (item, i) => <option key={i} value={item}>{item}</option>
                        )}
                    </select>
            }

            <button onClick={this.handleClick}>Siguiente</button>
                
        </div></section>
    }
}

export default InputPost;