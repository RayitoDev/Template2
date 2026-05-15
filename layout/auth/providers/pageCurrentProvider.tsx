import { FC } from 'react';
import usePageCurrent from '@/layout/auth/hooks';
import { PageCurrentProviderProps } from '@/layout/auth/types';
import { PageCurrentContext } from '@/layout/auth/contexts';

const PageCurrentProvider: FC<PageCurrentProviderProps> = ({ children }) => {
    const { namePageCurrent, setNamePageCurrent } = usePageCurrent();

    return (
        <PageCurrentContext.Provider value={{ namePageCurrent, setNamePageCurrent }}>
            {children}
        </PageCurrentContext.Provider>
    );
};

export default PageCurrentProvider;
