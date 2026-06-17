export function Skeleton () {
    return <div className="animate-pulse w-full rounded-3xl bg-slate-500 h-2"></div>
}
export default function Loading(){
    return <div className="w-3xl">
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        </div>
}