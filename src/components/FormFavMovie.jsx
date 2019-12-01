import React from 'react';
import './FormFavMovie.css';

class FormFavMovie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            poster: '',
            comment:''
        }
        this.submitForm = this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }



    submitForm(e){
        e.preventDefault();
        const url = "https://post-a-form.herokuapp.com/api/movies/";
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };
    
    
        fetch(url, config)
    .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté avec l'ID ${res}!`);
        }
      }).catch(e => {
        console.error(e);
        alert("Erreur lors de l'ajout d'un film");
      });
    }



    render(){
        return (
            <div className="FormMovie">
                <h1>what's your favorite movie ?</h1>
    
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor='title'>Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                            />
                        </div>
    
                        <div className="form-data">
                            <label htmlFor="poster">Poster</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>
    
                        <div className="form-data">
                            <label htmlFor="comment">Comment</label>
                            <textarea
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Send"  />
                            </div> 
                    </fieldset>
                </form>
            </div>
        )
    }

}

export default FormFavMovie;
