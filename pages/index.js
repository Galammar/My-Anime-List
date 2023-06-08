import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [animeList, setAnimeList] = useState([{}]);
  const [animeName, setAnimeName] = useState('One Piece');
  const [animeSOEpisodes, setAnimeSOEpisodes] = useState(24);
  const [totalSOs, setTotalSOs] = useState(1);
  //
  const [displayer, setDisplayer] = useState({});
  const [sight, setSight] = useState(1);
  //
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState('User');
  const [userPassword, setUserPassword] = useState('1234');
  const [currentUserID, setCurrentUserID] = useState(0);

  return (
    <div>
      <Head>
        <title>My Anime List</title>
      </Head>
      <h1>My Anime List</h1>
      <main>
        <div>
          <RegistryCard></RegistryCard>
          <LogInCard></LogInCard>
          <AnimeForm></AnimeForm>
          <MyAnimeList></MyAnimeList>
          <button
            onClick={() => {
              users[currentUserID].animeList = animeList;
            }}
          >
            Save
          </button>
          <Displayer></Displayer>
          {/* input fails to add more than one character at a time */}
          <br />
          Notes . . .
          <br />
          <textarea name="textarea" id="123" cols="30" rows="10"></textarea>
        </div>
      </main>
    </div>
  );

  function getElementPositionByName(list, elementName) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name == elementName) {
        return i;
      }
    }
  }

  function LogInCard() {
    return (
      <div>
        <h2>Log In</h2>
        <span>Username </span>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <span>Passward </span>
        <input
          type="text"
          value={userPassword}
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            let loggin = false;
            for (let i = 0; i < users.length; i++) {
              if (
                userName == users[i].name &&
                userPassword == users[i].password
              ) {
                setAnimeList(users[i].animeList);
                alert('You have succesfully logged in!');
                setCurrentUserID(i);
                loggin = true;
              }
            }
            if (!loggin) {
              alert('ERROR');
            }
          }}
        >
          Log In
        </button>
      </div>
    );
  }

  function RegistryCard() {
    return (
      <div>
        <h2>Sign Up</h2>
        <span>Username: </span>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <span>Password: </span>
        <input
          type="text"
          value={userPassword}
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            let double = false;
            for (let i = 0; i < users.length; i++) {
              if (userName == users[i].name) {
                double = true;
              }
            }
            if (double) {
              alert('Name already taken');
            } else {
              setUsers(
                users,
                users.push({
                  name: userName,
                  password: userPassword,
                  animeList: [{}],
                })
              );
            }
          }}
        >
          Sign Up
        </button>
      </div>
    );
  }

  function Displayer() {
    if (displayer.name) {
      return (
        <div>
          <h2>{displayer.name}</h2>
          <span>Seasons: </span> {displayer.seasons}
          <br />
          <span>Episodes / Season: </span>
          {displayer.episodesPerSO}
        </div>
      );
    }
  }

  function MyAnimeList() {
    let output = '';
    for (let i = 1; i < animeList.length; i++) {
      output += i + '. ' + animeList[i].name + '<br/>';
    }
    if (animeList.length > 1) {
      return (
        <div>
          <h2>My Anime List</h2>
          <div dangerouslySetInnerHTML={{ __html: output }}></div>
          <br />
          <input
            type="number"
            value={sight}
            onChange={(e) => setSight(e.target.value)}
          />
          <button onClick={() => setDisplayer(animeList[sight])}>View</button>
        </div>
      );
    }
  }

  function AnimeForm() {
    return (
      <div>
        <h2>Add Anime</h2>
        <div>Name:</div>
        <input
          type="text"
          value={animeName}
          onChange={(e) => {
            setAnimeName(e.target.value);
          }}
        />
        <br />
        <div>Total SOs</div>
        <input
          type="number"
          value={totalSOs}
          onChange={(e) => setTotalSOs(e.target.value)}
        />
        <br />
        <div>EP / SO:</div>
        <input
          type="number"
          value={animeSOEpisodes}
          onChange={(e) => setAnimeSOEpisodes(e.target.value)}
        />
        <br />
        <button
          onClick={() => {
            setAnimeList(
              animeList,
              animeList.push({
                name: animeName,
                episodesPerSO: animeSOEpisodes,
                seasons: totalSOs,
              })
            ),
              setAnimeName(''),
              setAnimeSOEpisodes(24),
              setTotalSOs(1);
          }}
        >
          Confirm
        </button>
        <br />
      </div>
    );
  }
}
