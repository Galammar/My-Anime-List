import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [animeList, setAnimeList] = useState([{}]);
  const [displayer, setDisplayer] = useState({});
  const [animeName, setAnimeName] = useState('');
  const [animeSOEpisodes, setAnimeSOEpisodes] = useState(24);
  const [totalSOs, setTotalSOs] = useState(1);
  const [sight, setSight] = useState(1);
  return (
    <div>
      <Head>
        <title>My Anime List</title>
      </Head>
      <h1>My Anime List</h1>
      <br />
      Notes . . .
      <br />
      <textarea name="textarea" id="123" cols="30" rows="10"></textarea>
      <br />
      <AnimeForm></AnimeForm>
      <MyAnimeList></MyAnimeList>
      <Displayer></Displayer>
      {/* input fails to add more than one character */}
    </div>
  );

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
