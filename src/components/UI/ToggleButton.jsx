import Button from "./Button";
import toggleIcon from '../../assets/toggle-icon.svg';
import { AnimatePresence } from "framer-motion";

export default function ToggleButton({className, isOpen, ...props}){
  const rotaingClass = !isOpen ? ' rotate-180 transition' : ' transition '

  return (
    <Button className={className + rotaingClass} {...props}>
      <img className="h-full" src={toggleIcon}/>
    </Button>
  )
}