import React, {Component} from 'react'
import tempDetails from './tempDetails'

class RecipeDetails extends Component{

  state = {
    recipe:tempDetails
  }

  componentDidMount = async () => {
    const detdata = await fetch(`https://www.food2fork.com/api/get?key=1f2d9f08e99cf5d4f25ac19d5baaec82&rId=${this.props.id}`)
                          .then((res) => {return(res.json())})

    this.setState({recipe:detdata.recipe})
  }

  render(){
    return(
      <>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-10 col-md-6 mx-auto my-3'>
            <button className='btn btn-warning text-capitalize mb-5' onClick={() => this.props.handleIndex(1)}>back to recipe list</button>
            <img src={this.state.recipe.image_url} alt='recipe' className='d-block w-100'/>
          </div>
          <div className='col-10 col-md-6 mx-auto my-3'>
            <h6 className='text-uppercase'>{this.state.recipe.title}</h6>
            <h6 className='text-warning mb-3'>Provided by {this.state.recipe.publisher}</h6>
            <a href={this.state.recipe.publisher_url} className='btn btn-primary text-capitalize' target='_blank' rel="noopener noreferrer">publisher webpage</a>
            <a href={this.state.recipe.source_url} className='btn btn-success text-capitalize mx-2' target='_blank' rel="noopener noreferrer">Recipe URL</a>
            <h2 className='mt-5 text-uppercase'>Ingredients</h2>
              {
                this.state.recipe.ingredients.map((ig) => {return(
                  <li className='list-group-item'>{ig}</li>
                )
              }
            )
              }
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default RecipeDetails
