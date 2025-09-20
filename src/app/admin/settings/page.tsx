
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import PageHeader from '@/app/admin/components/page-header';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UploadCloud } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Configuración',
    description: 'Ajusta la configuración de tu blog y perfil.',
};

export default function SettingsPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Configuración" description="Ajusta la configuración de tu blog y perfil de administrador." />
            
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-lg">
                    <TabsTrigger value="profile">Perfil</TabsTrigger>
                    <TabsTrigger value="appearance">Apariencia</TabsTrigger>
                    <TabsTrigger value="integrations">Integraciones</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile">
                    <Card>
                        <CardHeader>
                            <CardTitle>Perfil de Administrador</CardTitle>
                            <CardDescription>Actualiza tu información personal y foto de perfil.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-6">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src="https://picsum.photos/seed/author/128/128" />
                                    <AvatarFallback>AR</AvatarFallback>
                                </Avatar>
                                <Button variant="outline">
                                  <UploadCloud className="mr-2 h-4 w-4" /> Cambiar foto
                                </Button>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nombre</Label>
                                    <Input id="name" defaultValue="Alex Rivera" className="bg-card" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" defaultValue="admin@devblog.com" className="bg-card"/>
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="bio">Biografía</Label>
                                <Textarea id="bio" defaultValue="Desarrollador y escritor apasionado por la tecnología y la creación de comunidades." className="min-h-[100px] bg-card" />
                            </div>
                        </CardContent>
                        <CardFooter className="border-t pt-6">
                            <Button>Guardar Cambios</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="appearance">
                    <Card>
                        <CardHeader>
                            <CardTitle>Apariencia del Sitio</CardTitle>
                            <CardDescription>Personaliza el nombre y el logo de tu blog.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="site-name">Nombre del Sitio</Label>
                                <Input id="site-name" defaultValue="{Dev/Blog}" className="bg-card" />
                            </div>
                            <div className="space-y-2">
                                <Label>Logo del Sitio</Label>
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 flex items-center justify-center rounded-md bg-muted text-2xl font-bold">
                                        {"{DB}"}
                                    </div>
                                    <Button variant="outline">
                                      <UploadCloud className="mr-2 h-4 w-4" /> Subir Logo
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t pt-6">
                            <Button>Guardar Cambios</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="integrations">
                    <Card>
                        <CardHeader>
                            <CardTitle>Integraciones</CardTitle>
                            <CardDescription>Conecta servicios de terceros a tu blog.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="analytics-id">Google Analytics ID</Label>
                                <Input id="analytics-id" placeholder="UA-XXXXX-Y" className="bg-card" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="mailchimp-key">Clave API de Mailchimp</Label>
                                <Input id="mailchimp-key" type="password" placeholder="••••••••••••••••••••••••••••••••-usX" className="bg-card" />
                            </div>
                        </CardContent>
                         <CardFooter className="border-t pt-6">
                            <Button>Guardar Cambios</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

            </Tabs>
        </div>
    );
}
