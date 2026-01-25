interface Btn {
  name: string;
}
const Button = ({ name }: Btn) => {
  return (
    <button className="button-with-border hover:text-white  bg-teal-400 hover:bg-teal-500 text-black px-10 py-3 transition-all duration-300 hover:cursor-pointer">
      {name}
    </button>
  );
};

export default Button;
