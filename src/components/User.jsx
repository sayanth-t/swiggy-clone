import { useEffect } from 'react';

const User = () => {
  useEffect(() => {
    // const timer = setInterval(()=>{
    //     console.log('heyy hello')
    // },1000)

    console.log('Use Effect');

    return () => {
        // clearInterval(timer)
      console.log('Use Effect Returned');
    };
  }, []);

  console.log('component rendered') ;

  return (
    <div className="user-card">
      <h3>Name : Sayanth t</h3>
      <h5>Place : Kanur , Payyannur</h5>
      <h5>Contact : sayy@gmail.com</h5>
    </div>
  );
};

export default User;
