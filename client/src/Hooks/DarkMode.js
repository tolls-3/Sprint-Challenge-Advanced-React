import {useLocalStorage} from "./LocalStorage";
import { useEffect } from 'react'

export default function useDarkMode(key) {
  const [inputValue, setInputValue] = useLocalStorage(key)

  useEffect(()=>{
    if (inputValue){
        document.querySelector('body').classList.add('dark-mode')
    }else{
        document.querySelector('body').classList.remove('dark-mode')
    }
  },[inputValue])

  return [inputValue, setInputValue]
}