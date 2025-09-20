
import { Metadata } from 'next';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import PageHeader from '@/app/admin/components/page-header';
import { Input } from '@/components/ui/input';
import { Search, PlusCircle, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';

export const metadata: Metadata = {
    title: 'Gestión de Contenido',
    description: 'Administra todas las entradas de tu blog.',
};

const posts = [
  { id: 1, title: 'Desmitificando el Desarrollo de Software', author: 'Alex Rivera', category: 'Introducción', status: 'published', date: '2024-07-12' },
  { id: 2, title: 'JavaScript Moderno: Más Allá de ES6', author: 'Alex Rivera', category: 'Frontend', status: 'published', date: '2024-07-15' },
  { id: 3, title: 'El Poder de los Componentes en React', author: 'Alex Rivera', category: 'React', status: 'published', date: '2024-07-18' },
  { id: 4, title: 'Docker: Contenedores para un Desarrollo Consistente', author: 'Alex Rivera', category: 'DevOps', status: 'draft', date: '2024-07-20' },
  { id: 5, title: 'Styling con Tailwind CSS', author: 'Alex Rivera', category: 'CSS', status: 'published', date: '2024-07-22' },
  { id: 6, title: 'Bases de Datos SQL vs. NoSQL', author: 'Alex Rivera', category: 'Backend', status: 'archived', date: '2024-07-25' },
];

const statusVariant = {
  published: 'default',
  draft: 'secondary',
  archived: 'destructive'
} as const;


export default function ContentPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Contenido" description="Administra todas las entradas de tu blog." />
            
            <Card>
                <CardHeader>
                    <CardTitle>Entradas del Blog</CardTitle>
                    <CardDescription>Busca, filtra y gestiona las entradas de tu blog.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center mb-4 gap-4">
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Buscar por título..." className="pl-10 bg-card" />
                        </div>
                        <Button>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Crear Nuevo Post
                        </Button>
                    </div>

                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[40px]">
                                      <Checkbox />
                                    </TableHead>
                                    <TableHead className="max-w-[300px]">Título</TableHead>
                                    <TableHead>Autor</TableHead>
                                    <TableHead>Categoría</TableHead>
                                    <TableHead>Estado</TableHead>
                                    <TableHead>Fecha</TableHead>
                                    <TableHead className="w-[50px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {posts.map((post) => (
                                    <TableRow key={post.id}>
                                        <TableCell>
                                          <Checkbox />
                                        </TableCell>
                                        <TableCell className="font-medium truncate">{post.title}</TableCell>
                                        <TableCell>{post.author}</TableCell>
                                        <TableCell>
                                          <Badge variant="outline">{post.category}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={statusVariant[post.status as keyof typeof statusVariant] || 'default'} className="capitalize">{post.status}</Badge>
                                        </TableCell>
                                        <TableCell>{post.date}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                                    <DropdownMenuItem>Ver</DropdownMenuItem>
                                                    <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                     <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                        <div>Mostrando 1-6 de 6 entradas</div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">Anterior</Button>
                            <Button variant="outline" size="sm">Siguiente</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
