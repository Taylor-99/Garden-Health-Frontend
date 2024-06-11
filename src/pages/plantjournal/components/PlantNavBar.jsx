
import Link from 'next/link';
import { useRouter } from 'next/router';
import withAuth from '../../components/withAuth';

const PlantNavBar = () => {
    const router = useRouter();

    return (
            <nav>
                <ul className="flex justify-center" >
                    <li>
                        <Link href="/plantjournal/garden" className={`px-4 py-2 rounded ${router.pathname === '/plantjournal/garden' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-blue-500 hover:text-white'}`}>
                            Your garden
                        </Link>
                    </li>
                    <li>
                        <Link href="/plantjournal/library" className={`px-4 py-2 rounded ${router.pathname === '/plantjournal/library' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-blue-500 hover:text-white'}`}>
                            Plant Library
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default withAuth(PlantNavBar)