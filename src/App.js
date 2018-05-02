import React from 'react';
import { Component } from 'react';
import { v4 } from 'uuid';

import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import './stylesheets/App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        // {
        //   'id': '0175d1f0-a8c6-41bf-8d02-df5734d829a4',
        //   'title': 'ocean at dusk',
        //   'color': '#00c4e2',
        //   'rating': 5
        // },
        // {
        //   'id': '83c7ba2f-7392-4d7d-9e23-35adbe186046',
        //   'title': 'lawn',
        //   'color': '#26ac56',
        //   'rating': 3
        // },
        // {
        //   'id': 'a11e3995-b0bd-4d58-8c48-5e49ae7f7f23',
        //   'title': 'bright red',
        //   'color': '#ff0000',
        //   'rating': 0
        // }
        {
          "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
          "title": "Ocean Blue",
          "color": "#0070ff",
          "rating": 3
        },
        {
          "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
          "title": "Tomato",
          "color": "#d10012",
          "rating": 2
        },
        {
          "id": "58d9caee-6ea6-4d7b-9984-65b145031979",
          "title": "Lawn",
          "color": "#67bf4f",
          "rating": 1
        },
        {
          "id": "a5685c39-6bdc-4727-9188-6c9a00bf7f95",
          "title": "Party Pink",
          "color": "#ff00f7",
          "rating": 5
        }
      ]
    };
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({ colors });
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(color => (color.id !== id) ? color : { ...color, rating });
    this.setState({ colors });
  }

  removeColor(id) {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({ colors });
  }

  render() {
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm onNewColor={ addColor }/>
        <ColorList colors={ colors } onRate={ rateColor } onRemove={ removeColor } />
      </div>
    );
  }
}
