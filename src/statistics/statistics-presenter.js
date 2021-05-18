import {countBy} from 'lodash';

export function ageStatistics(data) {
    const ages = countBy(data, 'age');
    return {
        labels: ['< 18', '18 - 22', '23 - 27', '28 - 33', '34 - 39', '40+'],
        datasets: [
            {
                data: [
                    (ages[18] || 0),
                    (ages[23] || 0),
                    (ages[28] || 0),
                    (ages[33] || 0),
                    (ages[39] || 0),
                    (ages[40] || 0),
                ],
                label: '# of Votes',
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 0)',
                    'rgba(255, 255, 255, 0)',
                    'rgba(255, 255, 255, 0)',
                    'rgba(255, 255, 255, 0)',
                    'rgba(255, 255, 255, 0)',
                    'rgba(255, 255, 255, 0)',
                ],
                borderWidth: 1,
            },
        ],
    };
};

export function genderStatistics(data) {
    const genders = countBy(data, 'gender');
    return {
        labels: ['MAN', 'WOMAN', 'UNDEFINED'],
        datasets: [
            {
                data: [
                    (genders['man'] || 0),
                    (genders['woman'] || 0),
                    (genders['unknown'] || 0),
                ],
                label: '# of Votes',
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)'
                ],
                borderWidth: 1,
            },
        ],
    };
};

export function levelStatistics(data) {
    const levels = countBy(data, 'level');

    return {
        labels: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'ALREADY WORK'],
        datasets: [
            {
                data: [
                    (levels['monday'] || 0),
                    (levels['tuesday'] || 0),
                    (levels['wednesday'] || 0),
                    (levels['thursday'] || 0),
                    (levels['friday'] || 0),
                    (levels['saturday'] || 0),
                    (levels['finished'] || 0),
                ],
                label: '# of Votes',
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(25, 229, 99, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                    'rgba(75, 192, 192, 0)',
                    'rgba(153, 102, 255, 0)',
                    'rgba(255, 159, 64, 0)',
                ],
                borderWidth: 1,
            },
        ],
    };
};