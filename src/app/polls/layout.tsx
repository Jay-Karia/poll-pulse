interface PollsLayoutProps {
    children: React.ReactNode;
}

export default function PollsLayout({ children }: PollsLayoutProps) {
    return (
        <div className="w-full">
            {children}
        </div>
    )
}