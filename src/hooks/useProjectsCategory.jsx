import { useMemo } from "react";
import useProjects from "./useProjects";

const useProjectsCategory = () => {
    const [fetchProjects] = useProjects();

    const uniqueCategory = useMemo(() => {
        if (!fetchProjects) return [];

        const allCategories = fetchProjects.flatMap(project => project?.category);

        return [...new Set(allCategories)];
    }, [fetchProjects]);

    return uniqueCategory;
}

export default useProjectsCategory
