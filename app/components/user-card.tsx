// components/user-card.tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, User as UserIcon } from 'lucide-react'
import { User } from '@/app/actions/schemas'
import DeleteButton from './delete-button'
import { UserEditDialog } from './user-edit-dialog'

interface UserCardProps {
  user: User
}

console.log("UserCard module loaded");

export default function UserCard({ user }: UserCardProps) {
  if (!user || !user.name) {
    console.error("UserCard: Invalid user object", user);
    return <p>Error: Invalid user data</p>;
  }

  return (
    <Card className="w-full bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
      <CardHeader className="flex flex-row items-center gap-4 border-b border-blue-500/20 pb-4">
        <Avatar className="w-16 h-16 ring-2 ring-cyan-400/50">
          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-400 text-slate-900 font-bold">
            {user.name.split(' ').map((n) => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-2xl text-slate-100">{user.name}</CardTitle>
          <Badge className="w-fit mt-1 bg-blue-500/20 text-blue-300 border border-blue-500/50">ID: {user.id}</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 mt-4">
        {user.phoneNumber && (
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-blue-500/20 hover:border-cyan-500/50 transition-colors">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300">{user.phoneNumber}</span>
          </div>
        )}
        {user.email && (
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-blue-500/20 hover:border-cyan-500/50 transition-colors">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300">{user.email}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-2 border-t border-blue-500/20 pt-4">
        <DeleteButton userId={user.id} />
        <UserEditDialog user={user} /> 
      </CardFooter>
    </Card>
  );
}
