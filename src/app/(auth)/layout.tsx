interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({children} : AuthLayoutProps) {
    return (
        <div className={"h-full flex items-center justify-center"}>
            {children}
        </div>
    )
}