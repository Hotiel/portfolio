import { Background } from "../components/graph/Background.jsx"
import { Clock } from "../components/mainboxes/Clock.jsx"
import { ColorSelector } from "../components/mainboxes/ColorSelector.jsx"
import { Contact } from "../components/mainboxes/Contact.jsx"
import { Hero } from "../components/mainboxes/Hero.jsx"
import { MadeWith } from "../components/mainboxes/MadeWith.jsx"
import { PinnedProject } from "../components/mainboxes/PinnedProject.jsx"
import { Skills } from "../components/mainboxes/Skills.jsx"
import { Button } from "../components/mainboxes/Button.jsx"
import { Weather } from "../components/mainboxes/Weather.jsx";
import { useContext } from "react"
import { LanguageContext } from "../components/utils/LanguageContext.jsx"

export function Home() {

    const { lang, updateLang } = useContext(LanguageContext);
  return(
    <>
      <Background />
      <div className="language-selector-cont">
        <label className="lang-switch">
          <input 
          type="checkbox" 
          className="lang-input__check"
          checked={lang === "es"}
          onChange={updateLang}
          />
        <span className="lang-slider"></span>
      </label>
      </div>
      <div className='gridcontainer'>
        <div className='griditem griditem1'><Hero/></div>
        <div className='griditem  griditem2'><Skills/></div>
        <div className='griditem  griditem3'><Contact/></div>
        <div className='griditem  griditem4'><Clock/></div>
        <div className='griditem  griditem5'><Button/></div>
        <div className='griditem  griditem6'><PinnedProject/></div>
        <div className='griditem  griditem7'><Weather/></div>
        <div className='griditem  griditem8'><ColorSelector/></div>
        <div className='griditem  griditem9'><MadeWith/></div>
      </div>

    </>
  )
}