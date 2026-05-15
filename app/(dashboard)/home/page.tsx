import HomePage from '@/page/dashboard/home';
// import { AuthGuard } from '@/hooks/useAuth';

function Page() {
    return (
    //AuthGuard proteje la pagina (sin token regresa a login)
        // <AuthGuard>
        <HomePage />
        // </AuthGuard>
    );
}

export default Page;