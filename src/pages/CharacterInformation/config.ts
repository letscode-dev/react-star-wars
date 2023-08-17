import { IPersonModel } from '../../services/people/types';

interface IPersonConfig {
    title: string;
    name: string;
    value: string | undefined;
}

export const getPersonConfig = (personInfo: Partial<IPersonModel>): IPersonConfig[] => {
    const { height, mass, birth_year, gender } = personInfo;

    return [
        {
            title: 'Height',
            name: 'height',
            value: height,
        },
        {
            title: 'Mass',
            name: 'mass',
            value: mass,
        },
        {
            title: 'Birth Year',
            name: 'birth_year',
            value: birth_year,
        },
        {
            title: 'Gender',
            name: 'gender',
            value: gender,
        },
    ];
}
