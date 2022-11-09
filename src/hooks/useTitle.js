import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Wildlia - ${title}`
    }, [title])
};

export default useTitle;