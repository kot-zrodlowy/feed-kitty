import feedparser from 'feedparser-promised';
import { shell } from 'electron';
import Feed from './views/Feed.js';

const url = 'http://kot-zrodlowy.pl/feeds/feed.xml';
const root = document.querySelector( '#root');

feedparser.parse(url)
.then( (items) => {
	items.forEach(item => root.appendChild(new Feed(item.title, item.link, item.date, item.description).renderFeed()))
  }).catch(error => console.error('error: ', error));
