import React, {TextareaHTMLAttributes} from 'react';
import './styles.css';
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  name: string;
  label: string;
}
// import { Container } from './styles';

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest}) => {
  return (
    <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea  id={name} name={name} {...rest} />
    </div>
  );
}

export default Textarea;