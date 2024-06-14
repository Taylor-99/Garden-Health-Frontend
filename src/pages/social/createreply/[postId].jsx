
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'
import withAuth from '../../components/withAuth';
import NavBar from '../../components/NavBar';
import ReplyPost from '../components/ReplyPost'

const CreateReply = () => {

    const backend_endpoint = process.env.NEXT_PUBLIC_BACKEND_URL

    const router = useRouter();
    const { postId } = router.query; // Get the dynamic id from the URL

    const [replyForm, setReplyForm] = useState({
        reply: "",
    });

    const [error, setError] = useState('');
    const [cookies] = useCookies(['token']);
    const [file, setFile] = useState(null);

    const navigate = useRouter();

    const handlePostReply = async () => {
        try {

            const formData = new FormData();
            formData.append('image', file);
            formData.append('post', replyForm.reply)

            const response = await fetch(`${backend_endpoint}/social/create/${postId}`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                },
                body: formData,
            });

            await response.json();

            if (response.ok) {
                // Redirect or perform an action on successful login
                navigate.replace(`/social/replies/${postId}`)
            } 

        } catch (err) {
            setError('Network error');
        }
    }

    const handleChange = (e) => {
        setReplyForm({
            ...replyForm, 
            [e.target.name]: e.target.value
        })
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Get the first file from the file input
      };


  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto" >
        <NavBar pageName="Social" />

        <br></br>

        <button onClick={() => router.back()} className="text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none">
            Go Back
        </button>

        <br></br>
        <br></br>

        <ReplyPost postid={postId} />

        <section className="mt-8">
            <h2 className="text-xl font-semibold mt-4 text-center">Create Reply</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form 
                encType = 'multipart/formdata'
                onSubmit={(e) => {
                e.preventDefault();
                setError('');
                handlePostReply()
            }} className="mt-4 space-y-4 mx-auto max-w-md">

                <textarea 
                name="reply"
                onChange={handleChange}
                placeholder="Reply to this post"
                value={replyForm.reply} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>

                <label htmlFor="image" className="block" >Upload an image (optional): </label>
                <input type="file" 
                name="image"
                onChange={handleFileChange} 
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-green-600"
                />

                <br></br>
                <br></br>

                <input type="submit" 
                value="Submit" className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 cursor-pointer mx-auto block" />

            </form>
        </section>


    </div>
  )
}

export default withAuth(CreateReply)