interface IProps {
  message: string;
}
function NotFound({ message }: IProps) {
  return (
    <div>
      <p className="text-center text-white font-semibold text-[34px]">
        {message}
      </p>
    </div>
  );
}

export default NotFound;
