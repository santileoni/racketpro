interface Props {
  children: React.ReactNode;
}

export default function CardHeader({ children }: Props) {
  return <h5 className="my-2 text-headline-medium font-medium tracking-tight text-gray-800">{children}</h5>;
}
