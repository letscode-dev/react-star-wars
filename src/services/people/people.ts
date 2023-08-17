import { IPeopleModel, IPersonModel } from './types';
import { getApiResource } from '../../utils/network';
import { API_SEARCH, API_PERSON } from '../../constants/api';

export const getList = async (params: string): Promise<IPeopleModel | boolean> => {
    const data = await getApiResource<IPeopleModel>(params);

    return data;
};

export const search = async (params: string): Promise<IPeopleModel | boolean> => {
    const data = await getApiResource<IPeopleModel>(API_SEARCH+params);

    return data;
};

export const get = async (id: string): Promise<IPersonModel | boolean> => {
    const data = await getApiResource<IPersonModel>(`${API_PERSON}/${id}/`);

    return data;
};
