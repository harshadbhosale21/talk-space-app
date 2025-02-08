import Messenger from './pages/messenger.jsx';
import HomePage from "./pages/homePage.jsx"

export const RoutesLinks = [
    {
        layout: "chat",
        pages: [
            {
                name: "Home",
                path: "/",
                element: <HomePage />
            },
            {
                name: "Messenger",
                path: "/messenger",
                element: <Messenger />
            }
        ]
    }
];

export default RoutesLinks;