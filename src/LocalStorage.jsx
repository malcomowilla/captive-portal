import {useState} from 'react'


export const useLocalStorage = (localItem)=> {
    const [localstorage, setlocalstorage]
     = useState(localStorage.getItem(localItem));
function setLocalStorage(newItem) {
localStorage.setItem(localItem, newItem)
setlocalstorage(newItem)
}
return [localstorage, setLocalStorage]

  }