
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DataTable() {
  const recentComments = [
    {
      user: { name: "Olivia Martin", email: "olivia.martin@email.com", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
      comment: "¡Gran artículo! Muy informativo y bien escrito.",
      post: "Desmitificando el Desarrollo",
      status: "approved",
    },
    {
      user: { name: "Jackson Lee", email: "jackson.lee@email.com", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d" },
      comment: "No estoy de acuerdo con...",
      post: "SQL vs. NoSQL",
      status: "pending",
    },
    {
      user: { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d" },
      comment: "Excelente explicación...",
      post: "Componentes en React",
      status: "approved",
    },
    {
      user: { name: "William Kim", email: "will@email.com", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026707d" },
      comment: "Spam link",
      post: "JavaScript Moderno",
      status: "spam",
    },
  ]

  const popularPosts = [
    { title: "El Poder de los Componentes en React", views: "12,543" },
    { title: "Desmitificando el Desarrollo", views: "10,123" },
    { title: "Styling con Tailwind CSS", views: "8,765" },
    { title: "Bases de Datos SQL vs. NoSQL", views: "7,982" },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-1">
      <Card>
        <CardHeader>
          <CardTitle>Comentarios Recientes</CardTitle>
          <CardDescription>
            Una lista de los comentarios más recientes en tu blog.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuario</TableHead>
                <TableHead>Comentario</TableHead>
                <TableHead className="text-right">Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentComments.map((comment, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={comment.user.avatar} alt="Avatar" />
                        <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{comment.user.name}</div>
                    </div>
                  </TableCell>
                  <TableCell className="truncate max-w-xs">
                    {comment.comment}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant={comment.status === 'approved' ? 'default' : comment.status === 'pending' ? 'secondary' : 'destructive'} className="capitalize">
                      {comment.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contenido Popular</CardTitle>
          <CardDescription>
            Las entradas de blog con más interacción.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Post</TableHead>
                <TableHead className="text-right">Vistas</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {popularPosts.map((post, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="font-medium">{post.title}</div>
                  </TableCell>
                  <TableCell className="text-right">{post.views}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
