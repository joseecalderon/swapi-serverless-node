import { default as planetsave } from '@functions/planets/save';
import { default as planetgetall } from '@functions/planets/get-all';
import { default as planetgetone } from '@functions/planets/get-one';
import { default as planetput } from '@functions/planets/put';

import { default as peoplegetall } from '@functions/people/get-all';
import { default as peoplegetone } from '@functions/people/get-one';

import { default as filmsgetall } from '@functions/films/get-all';
import { default as filmsgetone } from '@functions/films/get-one';

export default {
    /** Planet functions */
    planetsave,
    planetgetall,
    planetgetone,
    planetput,

    /** People functions */
    peoplegetall,
    peoplegetone,

    /** Films functions */
    filmsgetall,
    filmsgetone
};
