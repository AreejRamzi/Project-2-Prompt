import React from 'react';

//  class SearchBar extends Component {

    // state = {
    //  filter: "all",
    //   animals: this.props.animals
    // }


//   handleFilterClick = (filter) => {
//     this.setState({
//       filter: filter,
//     })
//     console.log("Setting filter to " + filter);

//     if (filter === 'all') {
//       this.setState({animals: this.props.animals})
//     }
//     else if (filter === 'faves') {
//       this.setState({animals: this.props.faves})

    // }
   

//   render() {

    //  const animals = this.props.animals.map((animal) => {
    //   return (<animals cats={animal} key={animal.id} isFave={this.props.faves.includes(animal)}
    //     onFaveToggle={() => this.props.onFaveToggle(animal)} onDetailsClick={() => this.props.onDetailsClick(animal)} />)
    // })


//     const allChange = (this.state.filter) === 'all' ? 'is-active' : '';
//     const faveChange = (this.state.filter) === 'App' ? 'is-active' : '';

const SearchBar = (props) => {
    
  return (
    <div>
      <input name="search"  onChange={props.change}/>
        {/* <button onClick={props.submit}>add cat</button> */}

    </div>
  )

  }

export default SearchBar;
