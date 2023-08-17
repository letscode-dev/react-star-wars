import { IPeopleModel } from '../services/people/types';
import { ICharactersList } from '../types/people';
import { getPeopleImage, getPeopleId } from './getPeopleData';

export const getPeopleResponse = (res: IPeopleModel): ICharactersList[] => {
    const peopleList = res.results.map(({ name, url}) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
            id,
            name,
            img,
        }
    });

    return peopleList;
}
