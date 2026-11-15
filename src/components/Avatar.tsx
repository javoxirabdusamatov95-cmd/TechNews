interface Props {
  name: string;
  src?: string;
  className?: string;
}

function Avatar({ name, src, className = "" }: Props) {
  return (
    <span className={`avatar ${className}`}>
      {src ? <img src={src} alt={name} /> : name[0]?.toUpperCase()}
    </span>
  );
}

export default Avatar;