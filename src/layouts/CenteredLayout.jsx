import { Outlet } from "react-router";
export default function CenteredLayout() {
    return (
        <main className="font-figtree bg-yellow flex min-h-screen items-center
justify-center p-6">
            <Outlet />
        </main>
    );
}
