import React from 'react';

import Member from './Member';

const getFakeMembers = count => new Promise((resolves, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`;
  const request = new XMLHttpRequest();
  request.open('GET', api);
  request.onload = () => (request.status === 200) ? resolves(JSON.parse(request.response).results) : rejects(Error(request.statusText));
  request.onerror = err => rejects(err);
  request.send();
});

export default class MemberList extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
      loading: false,
      error: null
    }
    console.log('constructor');
  }

  componentWillMount() {
    this.setState({ loading: true });
    getFakeMembers(this.props.count).then(
      members => { 
        this.setState({ members, loading: false });   // rerender
      },
      error => {
        this.setState({ error, loading: false });     // rerender
      }
    );
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount: just after the component has rendered');
    console.log('componentDidMount: initialize 3rd party JavaScript which require a DOM');
    console.log('componentDidMount: start background process like intervals or timers');
    console.log('componentDidMount: initialize 3rd party JavaScript which require a DOM');
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount: clean up');
  }

  componentWillUpdate() {
    console.log('updating lifecycle');
  }

  render() {
    const { members, loading, error } = this.state;
    console.log('render');
    return(
      <div className="member-list">
        { loading ? <span>Loading Members</span> : members.length ? members.map((user, i) => <Member key={ i } {...user} />) : <span>0 members loaded</span> }
        { error ? <p>Error Loading Members: {error.message} </p> : "" }        
      </div>
    );
  }
}