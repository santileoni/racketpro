interface Props {
  children: React.ReactNode;
}

export default function Content({ children }: Props) {
  return <main className="w-full">{children}</main>;
}
