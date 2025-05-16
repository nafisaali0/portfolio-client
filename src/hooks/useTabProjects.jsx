import { useEffect, useState } from "react";
import useProjectsCategory from "./useProjectsCategory";
import useProjects from "./useProjects";

const useTabProjects = (selectedTab) => {

    const [filteredProjects, setFilteredProjects] = useState([]);
    const uniqueCategory = useProjectsCategory();
    const [fetchProjects] = useProjects()

    useEffect(() => {
        if (uniqueCategory.length === 0 || fetchProjects.length === 0) return;

        const selectedCategory = uniqueCategory[selectedTab];

        const filtered = fetchProjects.filter(project =>
            project.category?.some(tag => tag === selectedCategory)
        );

        setFilteredProjects(filtered);
    }, [selectedTab, fetchProjects, uniqueCategory]);

    return filteredProjects;
}

export default useTabProjects
