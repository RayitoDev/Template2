import { systems } from '@/apis';

const endpoint = {
    auth: {
        login: `${systems.template}/auth/login`,
        logout: `${systems.template}/auth/logout`,
        user: `${systems.template}/auth/user`
    },
    example: {
        index: `${systems.template}/example`,
        show: `${systems.template}/example`,
    }
};

export default endpoint;
