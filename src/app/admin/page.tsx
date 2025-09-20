
import { Metadata } from 'next';
import { Cards } from '@/app/admin/components/cards';
import PageHeader from '@/app/admin/components/page-header';
import { AreaChartComponent } from '@/app/admin/components/area-chart';
import { DataTable } from '@/app/admin/components/data-tables';
import { BarChartComponent } from './components/bar-chart';

export const metadata: Metadata = {
    title: 'Admin Dashboard',
    description: 'Manage your blog content, users, and settings.',
};

export default function AdminPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Resumen" description="Aquí tienes un resumen del rendimiento de tu blog." />
            <Cards />
            <div className="grid gap-8 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <AreaChartComponent />
                </div>
                <div className="lg:col-span-2">
                   <DataTable />
                </div>
            </div>
        </div>
    );
}
