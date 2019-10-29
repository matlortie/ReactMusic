import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'Adrien visite Ford à Detroit',
    artist: 'Adrien Pouliot nous en raconte une bonne sur sa visite d\'usines automobiles à Detroit.',
    albumArtUrl: "https://cdn001.podboxx.com/images/poe70c24d285.png",
    audioUrl: "https://cdn001.podboxx.com/audios/poae286cd852.mp3",
  },
  {
    title: 'RX05 - Gerry et Potins',
    artist: 'Gerry raconte le contenu de sa boîte et on potine.',
    albumArtUrl: "https://cdn001.podboxx.com/images/po61cf1ffdf7.gif",
    audioUrl: 'https://cdn001.podboxx.com/audios/po558034b035.mp3',
  },
  {
    title: 'RP02 - (2019-10-29)',
    artist: 'Carl Samson raconte une histoire rockambolesque (encore), Stéph Bruyère discute immobilier (toujours) et Gerry ouvre une boîte (ben pleine).',
    albumArtUrl: 'https://cdn001.podboxx.com/images/po21caf2f069.gif',
    audioUrl: 'https://cdn001.podboxx.com/audios/poe9f41fc1a2.mp3',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


