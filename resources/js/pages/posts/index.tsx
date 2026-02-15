import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: "/posts",
    },
];

export default function Posts() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <div>      
                <div>
                    <h1>Posts</h1>
                    <h2>Find all the posts here</h2>
                </div>
        </div>
        </AppLayout>
    );
}