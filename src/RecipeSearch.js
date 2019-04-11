import React from 'react'

const RecipeSearch = (props) => {
  return(
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 text-center mt-5'>
          <h1 className='text-capitalize'>search for recipe with <strong className='text-danger'>Food2Fork</strong></h1>
            <form className='mt-4' onSubmit={props.handleSubmit}>
              <label htmlFor='search' className='text-capitalize'>type recipes seperated by comma</label>
                <div className='input-group'>
                  <input type='text' placeholder='chicken,onion,carrot' name='search' className='form-control' value={props.value} onChange={props.handleChange}/>
                    <div className='input-group-append'>
                      <button type='submit' className='input-group-text bg-primary text-white'><i className='fas fa-search'/></button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default RecipeSearch
