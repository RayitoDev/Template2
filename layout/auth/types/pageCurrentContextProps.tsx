import { Dispatch, SetStateAction } from 'react';

type PageCurrentContextType = {
    namePageCurrent: string | null;
    setNamePageCurrent: Dispatch<SetStateAction<string | null>>;
}

export default PageCurrentContextType;