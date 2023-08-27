import '../../styles/globals.css'; // Global styles

function RootLevel({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    );
}

export default RootLevel;

// Here is where I will put the Providers from redux and authContext
// This page (_app.js) serves as the index.js file from the create-react-app format