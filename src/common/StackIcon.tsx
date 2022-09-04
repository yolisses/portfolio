interface StackIconProps {
  name:string
  filename:string
}

export function StackIcon({ name, filename }:StackIconProps) {
  return (
    <figure className="flex flex-col items-center">
      <img
        width={56}
        alt={name}
        className="rounded-lg"
        src={`/stack/${filename}.svg`}
      />
      <figcaption>{name}</figcaption>
    </figure>
  );
}
