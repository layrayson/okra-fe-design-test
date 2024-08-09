export const FormErrorText = ({ text }: { text: string }) => {
  return (
    <div className="relative">
      <div className="absolute top-0.5">
        <p className="text-red-500 text-[0.6rem] font-normal">{text}</p>
      </div>
    </div>
  );
};
