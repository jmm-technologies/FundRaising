import React, {
    useState,
    createContext,
    useContext,
    useEffect,
    useCallback,
} from "react";
const sidebarContext = createContext();
export const useSidebar = () => useContext(sidebarContext);


export default function SidebarProvider(props) {
    const [sidebar, setSidebar] = useState('sidebar');
    const [content, setContent] = useState('content');
    const [width, setWidth] = useState(0);


    const updateSidebar = useCallback(
        (sidebar, content) => {
            setSidebar(sidebar);
            setContent(content);
        }, [width]
    );

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [width])

    return (
        <sidebarContext.Provider
            value={{ sidebar, updateSidebar, content, width }}
        >
            {props?.children}
        </sidebarContext.Provider>
    );
}
