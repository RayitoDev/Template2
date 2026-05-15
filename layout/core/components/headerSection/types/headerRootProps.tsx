import type { HeaderSectionProps } from '@/layout/core/components/headerSection/types';

type HeaderRootProps = Pick<HeaderSectionProps, 'disableElevation'> & {
  isOffset: boolean;
};

export default HeaderRootProps;