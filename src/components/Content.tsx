interface Props {
  children: React.ReactNode;
}

export default function Content({ children }: Props) {
  return <div className="w-full">{children}</div>;
}
