'use client';

import { Toaster } from "react-hot-toast";

interface pageProps {

}
const ToastProvider: React.FC<pageProps> = () => {
    return (<Toaster />)
}

export default ToastProvider;