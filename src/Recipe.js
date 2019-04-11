import React from 'react'

const Recipe = (props) => {
  return(
    <>
    <div className='col-11 mx-auto col-md-4 mb-3'>
      <div className='card'>
        <img className='img-card-top'
             src={props.recipe.image_url}
             style={{height:'14rem'}}
             alt='recipe'/>
        <div className='card-body text-capitalize'>
          <h6>{props.recipe.title}</h6>
          <div className='text-warning'>
            <h6>Provided by : {props.recipe.publisher}</h6>
          </div>
        </div>
        <div className='card-footer'>
          <button className='btn btn-primary' onClick={() => props.hd(0,props.recipe.recipe_id)}>Details</button>
          <a href={props.recipe.source_url} target='_blank' rel="noopener noreferrer" className='btn btn-success text-capitalize mx-2'>recipe url</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Recipe
