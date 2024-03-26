import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSetting as updateSettingApi } from '../../services/apiSettings';
import toast from 'react-hot-toast';

export function useUpdateSetting() {
  const query = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Setting succesfully updated');
      query.invalidateQueries({
        queryKey: ['settings'],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return {
    updateSetting,
    isUpdating,
  };
}
