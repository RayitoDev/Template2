
import { MainSection } from '@/layout/core/components';
import type DashboardMainProps from '@/layout/dashboard/components/dashboardMain/types';
import { DashboardContent } from '@/layout/dashboard/components';

function DashboardMain({ children, slotProps }: DashboardMainProps) {
    return (
        <MainSection {...slotProps}>
            <DashboardContent>
                {children}
            </DashboardContent>
        </MainSection>
    );
}

export default DashboardMain;