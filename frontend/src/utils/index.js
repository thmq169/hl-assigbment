import {
  doc,
  getDocs,
  getDoc,
  collection,
  updateDoc,
} from "firebase/firestore";
import Cookies from "js-cookie";
import { db } from "../../firebase-config";

export async function getJokes() {
  const docRef = collection(db, "jokes");
  try {
    const response = await getDocs(docRef);

    const result = response.docs.map((doc) => {
      const joke = doc.data();
      joke.id = doc.id;
      return joke;
    });

    return result;
  } catch (err) {
    console.log(err);
  }
}

export function getOneJoke(jokes) {
  if (jokes.length === 0) return null;
  return jokes[Math.floor(Math.random() * jokes.length)];
}

export function filterJokes(jokes, votedJokes) {
  if (votedJokes === 0) return jokes;
  return jokes.filter((joke) => !votedJokes.includes(joke.id));
}

export function setCookie(name, value) {
  Cookies.set(name, value, { expires: 1 });
}

export function getCookie(name) {
  const votedJokes = Cookies.get(name);
  return votedJokes ? JSON.parse(votedJokes) : [];
}

export async function setVoteJokes(id, vote) {
  const docRef = doc(db, "jokes", id);
  const jokeData = await getDoc(docRef);

  if (vote) {
    const currentLikes = jokeData.data().like || 0;
    const newLikes = currentLikes + 1;
    console.log(newLikes);
    await updateDoc(docRef, { like: newLikes });
  } else {
    const currentDisLikes = jokeData.data().dislike || 0;
    const newDisLikes = currentDisLikes + 1;
    await updateDoc(docRef, { dislike: newDisLikes });
  }
}
