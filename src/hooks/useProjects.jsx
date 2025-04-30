import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProjects = () => {

    const axiosPublic = useAxiosPublic();

    const { data: fetchProjects = [], isPending: loading, refetch} = useQuery ({
        queryKey: ['fetchProjects'],
        queryFn: async () => {
            const res = await axiosPublic.get('/projects');
            return res.data
        }
    })

    return [fetchProjects, loading , refetch]
}

export default useProjects