import { Skeleton } from "@/components/ui/skeleton";

export const TabsSkeleton = () => {
    return (
        <div>
            <Skeleton className="w-full h-10 rounded-xl"/>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-6">
                {Array.from({ length: 6}, (item, index) => (
                    <div key={index}>
                        <Skeleton className="w-full h-32 rounded-xl"/>
                        <Skeleton className="w-full mt-2 h-7 rounded-xl"/>
                        <Skeleton className="w-16 mt-2 h-5 rounded-xl"/>
                        <Skeleton className="w-full mt-2 h-9 rounded-xl"/>
                    </div>
                ))}
            </div>
        </div>
    );
}