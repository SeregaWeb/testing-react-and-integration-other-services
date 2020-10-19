import React, {Component} from 'react'

class Wikipedia extends Component {
  state = {
    data: [],
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Helter+Skelter&format=json&origin=*'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
      console.log(result);
        this.setState({
          data: result[1],
        })
      })
  }

  render() {
    const {data} = this.state;

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    });

    return <ul>{result}</ul>
  }
}

export default Wikipedia