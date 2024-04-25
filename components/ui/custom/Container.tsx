
interface pageProps {
    children: React.ReactNode;
}
const Container: React.FC<pageProps> = ({ children }) => {


    return (
        <div className='mx-auto max-w-7xl' >
            {children}
        </div>
    )

}

export default Container