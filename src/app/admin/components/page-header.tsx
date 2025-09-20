
import { Button } from "@/components/ui/button";

export default function PageHeader({ title, description }: { title: string, description?: string }) {
    return (
        <div className="flex items-center justify-between space-y-2">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                {description && <p className="text-muted-foreground">{description}</p>}
            </div>
            <div className="flex items-center space-x-2">
                <Button>Download</Button>
            </div>
        </div>
    )
}
