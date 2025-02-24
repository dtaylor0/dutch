interface TitleProps {
    children: React.ReactNode;
}
export default function Title({ children }: TitleProps) {
    return <h2 className="p-1 font-semibold">{children}</h2>;
}
