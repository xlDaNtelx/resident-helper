import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import moment from "moment";

class App extends React.Component {
  state = {
    isLoading: false,
    data: [],
    isError: false
  };

  componentDidMount() {
    setInterval(
      () =>
        axios
          .get(
            "https://practice-bizico-api.herokuapp.com/api/ifttt/v1/actions/testaction"
          )
          .then(data => this.setState({ data: data.data })),
      3000
    );
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="App">
        <h2>Resident notices</h2>
        <hr/>
        {data.map(item => (
          <div
          className="notice"
          key={item.noticeCreationDate}
            style={{
              backgroundColor: "#28a745",
              width: "400px",
              margin: "0 auto",
              borderRadius: '15px',
              padding: '5px',
              marginTop: '15px',
              marginBottom: '15px',
              boxShadow: '3px 3px 3px rgba(0, 0, 0, .25)',
              fontSize: '16px',
              fontFamily: 'Comic Sans MS',
              color: 'white',
            }}
          >
            <p>Central wing, Room 209</p>
          <p>Nick Morris</p>
          <p>{moment(item.noticeCreationDate).format('LT')}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
