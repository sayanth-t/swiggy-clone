import React from 'react';

class UserClass extends React.Component {

    state = {
      name  : "",
      avatar_url : null
    }

    // for fetching data 
    async componentDidMount(){
      const data = await fetch('https://api.github.com/users/sayanth-t') ;
      const jsonData = await data.json() ;

      this.setState({ name : jsonData.login , avatar_url : jsonData.avatar_url }) ;



     
    }

    componentWillUnmount(){
      clearInterval(this.timer) ;
    }
  

  render() {

    const {name,avatar_url} = this.state ;

    return (
      <div className="user-card">

       <h3>{name}</h3>
       <img src={avatar_url} alt='avatar' className='userAvatar'></img>
        
      </div>
    );
  }
}


export default UserClass ;