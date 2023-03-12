import request from 'axios';
import { toast } from 'react-toastify';

import { HttpCode } from '../consts';

export const errorHandler = (error: unknown): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        toast.error(response.data.error);
        break;
      case HttpCode.NotFound:
        toast.warning('Nothing found, try another query');
        break;
      case HttpCode.Unauthorized:
        toast.warning(response.data.error);
        break;
      default:
        toast.info(response.data.error);
    }
  }
};
