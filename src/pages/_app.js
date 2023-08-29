import '../../styles/reset.css'
import '../../styles/global.css'
import { Provider } from 'react-redux'
import store from '@/Store/Redux/ReduxStore';

function RootLevel({ Component, pageProps }) {
    return (
        <>
            <Provider store={store} >
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

export default RootLevel;

// Here is where I will put the Providers from redux and authContext
// This page (_app.js) serves as the index.js file from the create-react-app format