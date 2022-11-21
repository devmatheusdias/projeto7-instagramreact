import User from "./user/User";
import ListSuggestions from "./suggestions/ListSuggestions";
import Links from "./links/Links";

export default function Sidebar() {
    return (
        <>
            <User></User>
            <ListSuggestions></ListSuggestions>
            <Links></Links>
        </>
    );
}