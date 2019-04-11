import React from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

const RecipeList = (props) => {
  return(
    <>
    <RecipeSearch handleChange={props.handleChange} handleSubmit={props.handleSubmit} value={props.value}/>
    <div className='container my-5'>
      <div className='row'>
        <div className='col-10 col-md-4 mx-auto text-center text-uppercase mb-3'>
          <h1>recipe list</h1>
        </div>
      </div>
      <div className='row'>
        {
          props.list.map((li) => {return(<Recipe key={li.recipe_id} recipe={li} hd={props.handleDetail}/>)})
        }
      </div>
    </div>
    </>
  )
}

export default RecipeList
