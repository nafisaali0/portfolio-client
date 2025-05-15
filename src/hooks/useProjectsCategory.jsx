import { useMemo } from "react";
import useProjects from "./useProjects";

const useProjectsCategory = () => {
    const [fetchProjects] = useProjects()

    const category = useMemo(() => {
        if (!fetchProjects) return [];

        const allCategories = fetchProjects
            .map(project => project.category)
            .flatMap(item => item.split(',').map(eachCategory => eachCategory.trim().toLowerCase()));

        return [...new Set(allCategories)];
    }, [fetchProjects]);

    return category;
}

export default useProjectsCategory
