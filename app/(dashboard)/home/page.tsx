import HomePage from '@/page/dashboard/home';
import { AuthGuard } from '@/hooks/useAuth';

function Page() {
    return (
        <AuthGuard>
            <HomePage />
        </AuthGuard>
    );
}

export default Page;