
import Link from 'next/link';
import { useRouter } from 'next/router';
import withAuth from '../../components/withAuth';

const WellnessNavBar = () => {
    const router = useRouter();

    return (
            <nav>
                <ul className="flex justify-center" >
                    <li>
                        <Link href="/wellnessjournal/mood" className={`px-4 py-2 rounded ${router.pathname === '/wellnessjournal/mood' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-blue-500 hover:text-white'}`}>
                            Mood Log
                        </Link>
                    </li>
                    <li>
                        <Link href="/wellnessjournal/activity" className={`px-4 py-2 rounded ${router.pathname === '/wellnessjournal/activity' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-blue-500 hover:text-white'}`}>
                            Activity Log
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default withAuth(WellnessNavBar)