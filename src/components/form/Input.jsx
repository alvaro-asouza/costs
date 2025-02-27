import styles from "./Input.module.css";

function Input({ type, text, name, placeholder, hundleOnChange, value }) {
  return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        <input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        onChange={hundleOnChange} 
        value={value} />
    </div>
  );
}

export default Input;