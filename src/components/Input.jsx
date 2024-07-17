const Input = ({onChangeHandler}) => {

  const getValue = (event) => {
    onChangeHandler(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={getValue} />
    </div>
  );
};
export default Input;
