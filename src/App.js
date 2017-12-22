import React, { Component }                                   from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition }  from 'griddle-react';
import _                                                      from 'lodash'
import { fromJS }                                             from 'immutable'
import logo                                                   from './logo.svg';
import './App.css';

const people = [
  {
    id: 0,
    gender: "unkonwn",
    name: "Really really super duper useless BitCoin",
    img:
      "https://pbs.twimg.com/profile_images/904957716980015105/fODBUR5k_400x400.jpg"
  },
  {
    id: 1,
    gender: "male",
    name: "Eric",
    img:
      "https://pbs.twimg.com/profile_images/822814575003389953/iC0kI8tf_400x400.jpg"
  },
  {
    id: 2,
    gender: "male",
    name: "Rob",
    img:
      "https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo_400x400.jpg"
  },
  {
    id: 3,
    gender: "male",
    name: "Stephen Grider",
    img:
      "https://pbs.twimg.com/profile_images/621845465496039428/SgXekq63_400x400.jpg"
  },
  {
    id: 4,
    gender: "female",
    name: "Sandi",
    img:
      "https://pbs.twimg.com/profile_images/2839753318/bbc02488eec4b91964375b0da9955be2_400x400.jpeg"
  },
  {
    id: 5,
    gender: "male",
    name: "Joe",
    img:
      "https://pbs.twimg.com/profile_images/625217739280396288/LI3MIbLg_400x400.jpg"
  },
  {
    id: 6,
    gender: "male",
    name: "Jose",
    img:
      "https://pbs.twimg.com/profile_images/667973757181431808/IdQgSAH__400x400.jpg"
  },
  {
    id: 7,
    gender: "female",
    name: "Sarah",
    img:
      "https://pbs.twimg.com/profile_images/900926526182445058/qOi3HTwf_400x400.jpg"
  },
  {
    id: 8,
    gender: "male",
    name: "Chris",
    img:
      "https://pbs.twimg.com/profile_images/745460792833773568/iOJ67Nsd_400x400.jpg"
  },
  {
    id: 9,
    gender: "female",
    name: "Veronica",
    img:
      "https://pbs.twimg.com/profile_images/909526324485570560/lGpNlIKx_400x400.jpg"
  },
  {
    id: 10,
    gender: "male",
    name: "Evan",
    img:
      "https://pbs.twimg.com/profile_images/443794371586977792/NxKUNpOQ_400x400.jpeg"
  },
  {
    id: 11,
    gender: "male",
    name: "Richard",
    img:
      "https://pbs.twimg.com/profile_images/635812303342956545/Fo4RyEgH_400x400.jpg"
  },
  {
    id: 12,
    gender: "female",
    name: "Terezka",
    img:
      "https://pbs.twimg.com/profile_images/824242201655910400/mY7NMaDE_400x400.jpg"
  },
  {
    id: 13,
    gender: "female",
    name: "Tessa",
    img:
      "https://pbs.twimg.com/profile_images/539600596605489153/lVz54JsS_400x400.jpeg"
  },
  {
    id: 14,
    gender: "male",
    name: "Kent",
    img:
      "https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg"
  },
  {
    id: 15,
    gender: "male",
    name: "Bas",
    img:
      "https://pbs.twimg.com/profile_images/84861127/2008_bas_smaller_400x400.jpg"
  },
  {
    id: 16,
    gender: "female",
    name: "Lauren",
    img:
      "https://pbs.twimg.com/profile_images/881535121484009472/mmPDDrHO_400x400.jpg"
  },
  {
    id: 17,
    gender: "female",
    name: "Tetiana",
    img:
      "https://pbs.twimg.com/profile_images/736564172742393856/3IcNfu1j_400x400.jpg"
  },
  {
    id: 18,
    gender: "male",
    name: "Luke",
    img: "https://2016.elm-conf.us/images/speakers/LukeWestby.jpg"
  },
  {
    id: 19,
    gender: "female",
    name: "Jessica",
    img:
      "https://pbs.twimg.com/profile_images/893202935009615872/ef-H8FtJ_400x400.jpg"
  },
  {
    id: 20,
    gender: "male",
    name: "Ossi",
    img: "https://2016.elm-conf.us/images/speakers/OssiHanhinen.jpg"
  },
  {
    id: 21,
    gender: "male",
    name: "Loic",
    img:
      "https://pbs.twimg.com/profile_images/1435690896/cowboy_hat_400x400.jpeg"
  }
];

const CustomImgComponent = (img) => {
  let profilePicStyle = {
    marginLeft: 27,
    marginTop: 20,
    width: 125,
    height: 125,
    borderRadius: "50%"
  }
  return (
    <img style={profilePicStyle} alt="profile pic" src={img.value} />
  );
}

const MyLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
  <div>
    <Filter />
    <Pagination />
    <Table />
  </div>
);
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */}
        <Griddle
          data={people}
          plugins={[plugins.LocalPlugin]}
          components={{
            Layout: MyLayout
          }}
        >
          <RowDefinition>
            <ColumnDefinition id="name" title="Name" order={1} />
            <ColumnDefinition id="img" title="Photo" customComponent={CustomImgComponent}/>
            {/*<ColumnDefinition id="gender" title="A really really dumb long column named 'Gender'" />*/}
            <ColumnDefinition id="gender" title="A really really dumb long column named 'Gender'" width={50} />
          </RowDefinition>
        </Griddle>
      </div>
    );
  }
}

export default App;
