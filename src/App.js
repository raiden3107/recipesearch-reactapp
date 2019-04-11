import React, {Component} from 'react'
import RecipeList from './RecipeList'
import RecipeDetails from './RecipeDetails'
import tempList from './tempList'

class App extends Component{

  state = {
    recipe:tempList,
    load:true,
    details_id:35385,
    pageIndex:1,
    search:'',
    query:'&q=',
    base_url:'https://www.food2fork.com/api/search?key=1f2d9f08e99cf5d4f25ac19d5baaec82',
    url:'https://www.food2fork.com/api/search?key=1f2d9f08e99cf5d4f25ac19d5baaec82'
  }

  getRecipe = async () => {
    const data = await fetch(this.state.url)
                      .then((response) => {return(response.json())})

    this.setState({recipe:data.recipes,load:false})
  }

  componentDidMount = () => {
    this.getRecipe()
  }

  displayPage = (index) => {
    switch(index){
      case 1:
      return(<RecipeList list={this.state.recipe}
                         handleDetail={this.handleDetail}
                         value={this.state.search}
                         handleSubmit={this.handleSubmit}
                         handleChange={this.handleChange}/>)
      case 0:
      return(<RecipeDetails id={this.state.details_id}
                            handleIndex={this.handleIndex}/>)
    }
  }

  handleIndex = (index) => {
    this.setState({pageIndex:index})
  }

  handleDetail = (index,id) => {
    this.setState({details_id:id,pageIndex:index})
  }

  handleChange = (e) => {
    this.setState({search:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({url:`${this.state.base_url}${this.state.query}${this.state.search}`,search:''},() => {this.getRecipe()})
  }

  render(){
    return(
      this.displayPage(this.state.pageIndex)
    )
  }
}

export default App
