import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Data from './data/berlin.json'
import Greetings from './components/Grettings';
import Random from './components/Random'
import BoxColor from './components/BoxColor';

class App extends Component {

  state = {
    data: [...Data]
  }

  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
          <IdCard 
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="en">English</Greetings>
        <Greetings lang="es">Spanish</Greetings>
        <Greetings lang="tk">Rolf</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <h1>CreditCard</h1>

        <h1>Rating</h1>

        <h1>DrivingCard</h1>

        <h1>ClickablePicture</h1>

        <h1>Dice</h1>

        <h1>Carousel</h1>

        <h1>NumbersTable</h1>

      </div>
    );
  }
}

export default App;
