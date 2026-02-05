interface Btn {
  name: string;
  onClick?: () => void; 
}

const Button = ({ name, onClick }: Btn) => {
  return (
    <button 
      onClick={onClick} 
      className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors"
    >
      {name}
    </button>
  );
};

export default Button;