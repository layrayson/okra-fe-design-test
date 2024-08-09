type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

export const TextArea = (props: Props) => {
  return (
    <textarea
      {...props}
      className={`p-3 rounded-md w-full bg-black-on-neutral text-13px text-black-900 placeholder:text-black-subdued font-medium outline-[1.5px] outline-transparent focus:outline-primary-border focus:ring-4 focus:ring-primary-ring h-40 ${props.className}`}
    />
  );
};
