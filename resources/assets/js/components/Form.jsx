import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            haveErrors: false,
            errors: {
                name: false,
                email: false,
                msg: false
            },
            name: 0,
            email: 0,
            msg: 0
        };
    }

    componentDidUpdate() {

        // Must verify if the form have errors

        if (!this.state.name && !this.state.email && !this.state.msg)
            this.props.toogleRocket("resting");
        else if (this.state.canSend)
            this.props.toogleRocket("takeoff");
        else 
            this.props.toogleRocket("initializing");
    }

    handleFormChange(e) {

        //Change the values of the inputs related with the state of the rocket

        switch(e.target.id) {
            case "name":
                this.setState({...this.state, name: e.target.value.length});
                break;

            case "email":
                this.setState({...this.state, email: e.target.value.length});
                break;

            default:
                this.setState({...this.state, msg: e.target.value.length});
                break;
        }

    }

    handleSubmit(e) {

        let input;
        let children = e.target.children;
        let error = 0;

        // Regexs
        let reName = /[\d,\._]/;
        let reEmail = /[\w._%+-]+@[\w.-]+.[A-Za-z]{2,4}/;

        for(let i = 0; i < children.length; i++) {
            input = children[i];

            if (!input.classList.contains("btn")) {

                // Basic validate: Can't exist empty inputs
                if (!input.value.length) {
                    
                    if (!input.classList.contains("error")) input.classList.add("error");
                    error++;
                }


                switch(input.id) {
                    case "name":
                        // String name validation
                        if (reName.test(input.value)){

                            if (!input.classList.contains("error")) input.classList.add("error");
                            console.log("No uses caracteres especiales");
                            error++;
                        }

                        break;
                    case "email":
                        // String email validation
                        if (!reEmail.test(input.value)){
                            
                            if (!input.classList.contains("error")) input.classList.add("error");
                            console.log("Introduce un formato válido para un correo");
                            error++;
                        }

                        break;
                    default:
                        // Textarea doesn't have more validations
                        break;
                }
            }
        }

        if (error) {

            // Errors advisors
            alert((error > 1) ? "Tienes " + error + " errores": "Tienes 1 error");
            this.setState({...this.state, haveErrors: true});
            e.preventDefault();

        } else {

            this.setState({...this.state, canSend: true});

            // axios help to send mail without reload the page
        }

        
    }

    render() {
        return (
            <section className="contact">
                <form className="center vertical" onChange={this.handleFormChange.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                
                    <input name="name" id="name" type="text" placeholder="Nombre" />
                    <input name="email" id="email" type="email" placeholder="Correo" />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Escribe tu mensaje"></textarea>

                    <div className="btn center">
                        <input type="submit" value="Enviar"/>
                        {this.props.children}
                    </div>

                </form>
            </section>
        );
    }
}