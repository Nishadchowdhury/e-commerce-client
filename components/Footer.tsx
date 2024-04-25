
interface pageProps {

}
const Footer: React.FC<pageProps> = () => {


    return (
        <div className='bg-white border-t ' >
            <div className="mx-auto py-10">
                <p className="text-center text-xs text-black">
                    &copy; 2024 FakeStoreNameA, Inc. All right reserved.
                </p>
            </div>
        </div>
    )

}

export default Footer