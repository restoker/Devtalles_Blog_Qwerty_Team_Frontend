
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
import { Search, PlusCircle, MoreHorizontal, FileDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';

export const metadata: Metadata = {
    title: 'Gestión de Usuarios',
    description: 'Administra todos los usuarios de tu plataforma.',
};

const users = [
  { id: 'usr_1', name: 'Alex Rivera', email: 'alex.rivera@devblog.com', role: 'Admin', joined: '2024-07-01', avatar: 'https://picsum.photos/seed/author/40/40' },
  { id: 'usr_2', name: 'Olivia Martin', email: 'olivia.martin@email.com', role: 'Member', joined: '2024-07-10', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: 'usr_3', name: 'Jackson Lee', email: 'jackson.lee@email.com', role: 'Member', joined: '2024-07-12', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
  { id: 'usr_4', name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', role: 'Member', joined: '2024-07-16', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
  { id: 'usr_5', name: 'William Kim', email: 'will@email.com', role: 'Member', joined: '2024-07-20', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d' },
];

const roleVariant = {
  Admin: 'default',
  Member: 'secondary',
} as const;

export default function UsersPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Usuarios" description="Gestiona los usuarios de tu plataforma." />
            
            <Card>
                <CardHeader>
                    <CardTitle>Lista de Usuarios</CardTitle>
                    <CardDescription>Busca, filtra y gestiona los perfiles de usuario.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center mb-4 gap-4">
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Buscar por nombre o email..." className="pl-10 bg-card" />
                        </div>
                        <div className="flex gap-2">
                           <Button variant="outline">
                                <FileDown className="mr-2 h-4 w-4" />
                                Exportar
                            </Button>
                            <Button>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Añadir Usuario
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[40px]">
                                      <Checkbox />
                                    </TableHead>
                                    <TableHead>Usuario</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Rol</TableHead>
                                    <TableHead>Fecha de Registro</TableHead>
                                    <TableHead className="w-[50px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>
                                          <Checkbox />
                                        </TableCell>
                                        <TableCell>
                                          <div className="flex items-center gap-3">
                                            <Avatar className="h-8 w-8">
                                              <AvatarImage src={user.avatar} alt={user.name} />
                                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">{user.name}</span>
                                          </div>
                                        </TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            <Badge variant={roleVariant[user.role as keyof typeof roleVariant] || 'secondary'} className="capitalize">{user.role}</Badge>
                                        </TableCell>
                                        <TableCell>{user.joined}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                                    <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
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
                        <div>Mostrando 1-5 de 5 usuarios</div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" disabled>Anterior</Button>
                            <Button variant="outline" size="sm" disabled>Siguiente</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
