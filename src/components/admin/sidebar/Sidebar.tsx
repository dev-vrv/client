import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">

            </div>
            <div className="sidebar__nav">
                <ul className="list">
                    <li>
                        <Link href="#">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="#">Users</Link>
                    </li>
                    <li>
                        <Link href="#">Posts</Link>
                    </li>
                    <li>
                        <Link href="#">Comments</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}