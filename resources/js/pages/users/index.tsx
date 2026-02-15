import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: "/users",
    },
];

export default function Users() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <div>      
                <div>
                    <h1>Users</h1>
                    <h2>Find all the Users here</h2>
                </div>
        </div>
        </AppLayout>
    );
}