/**
 * @param { {children: import("react").ReactNode} } props
 */
export default function Title({ children }) {
    return <h2 className="p-1 font-semibold">{children}</h2>;
}
