import Scope from '@/apis/api/auth/types/scope';

const SCOPE_REDIRECT_PRIORITY: { scope: Scope; path: string }[] = [
    { scope: '', path: '/home' },
    { scope: '', path: '/xd' },
];

export default SCOPE_REDIRECT_PRIORITY;