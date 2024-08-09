type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  outlineClassName?: string;
  error?: boolean;
};

export const TextArea = (props: Props) => {
  return (
    <div
      className={`p-1 rounded-md bg-black-on-neutral text-13px flex items-center transition-all duration-200 ease-in-out border-[1.5px] border-transparent ${
        !props.error
          ? "focus-within:border-primary-border focus-within:ring-primary-ring focus-within:ring-4"
          : "border-danger-500 ring-danger-100 ring-4"
      } h-40 ${props.outlineClassName}`}
    >
      <textarea
        {...props}
        className={`p-2 w-full text-13px text-black-900 placeholder:text-black-subdued font-medium h-full bg-transparent border-none focus:outline-none ${props.className}`}
      />
    </div>
  );
};
