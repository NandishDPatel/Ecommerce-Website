interface Btn {
  name: string;
  onClick?: () => void;
}

const Button = ({ name, onClick }: Btn) => {
  return (
    <button
      onClick={onClick}
      className="button-with-border bg-teal-400 w-fit bg-black text-white py-3 px-6 hover:bg-teal-600"
    >
      {name}
    </button>
  );
};

export default Button;
