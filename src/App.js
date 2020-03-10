import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage  from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
import Header  from './components/header/header.component';
import SignInAndSignUpPage  from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth } from './firebase/firebase.utils';



// const hatsPage=()=>(
// <div>
//     <h1>Hats page</h1>
// </div>
// )

// --------------------------start ----------------------
// const HomePage1=(props)=>{
//     console.log(props);
//
//     return(
//         <div>
//             <h1>Home page</h1>
//         </div>
//     )
// }
// const TopicList=(props)=>{
//     console.log(props);
//     return(
//         <div>
//             <h1>Topic List</h1>
//         </div>
//     )
// }
// const TopicListDetail=(props)=>{
//     console.log(props);
//     return(
//         <div>
//             <h1>Topic List Detail : {props.match.params.topicId}</h1>
//         </div>
//     )
// }
// function App() {
//     return (
//         <div>
//             <Route exact path='/' component={HomePage1}/>
//             <Route   path='/topics' component={TopicList}/>
//             <Route exact  path='/topic/:topicId' component={TopicListDetail}/>
//
//
//         </div>
//     );
// }

// --------------------------end ----------------------
class App extends React.Component{


    constructor(){
        super();


        this.state={
            currentUser:null
        }
    }


    componentDidMount() {
        auth.onAuthStateChanged(user=>{
           this.setState({currentUser:user})

            console.log(user);
        });
    }


    render() {
        return (
            <div>

                <Header/>
                {/*switch component : the moment when the route component find a match in the path it will not render anything else except that route*/}
                <Switch>
                    {/*Route component take couple of argumanet ,main one are exact path component*/}
                    {/*component is which will route will render*/}
                    {/*path is a string of path itself from current place*/}
                    {/*exact is boolean : true or false*/}
                    {/*when true , its mean path must be exaclty the same to render the component*/}
                    {/*    Any component whcih gets render by Router component receive 3 arguments,history ,location,match*/}


                    <Route exact path='/' component={HomePage}/>
                    <Route  path='/shop' component={ShopPage}/>
                    <Route  path='/signin' component={SignInAndSignUpPage}/>

                </Switch>

            </div>
        )}

}


export default App;
