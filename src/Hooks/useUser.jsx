import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { user, loading } = useAuth();
  const axiosCommon = useAxiosCommon();

  const { data: userData = {}, isLoading } = useQuery({
    enabled: !loading,
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/user/${user?.email}`);
      return data;
    },
  });

  return { userData, isLoading };
};

export default useUser;
