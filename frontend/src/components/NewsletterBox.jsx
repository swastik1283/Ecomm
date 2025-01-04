import { useState } from 'react';

const NewsletterBox = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (email.includes('@')) {
            setMessage('Thank you for subscribing!');
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <div className="text-center">
            <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
            <p className="text-gray-400 mt-3">Lorem ipsum</p>
            <form
                onSubmit={onSubmitHandler}
                className="w-full sm:w-1/2 flex items-center gap-4 mx-auto my-6"
            >
                <input
                    className="flex-grow outline-none px-3 py-2 border border-gray-300 rounded"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-black text-white text-xs px-6 py-2 rounded hover:bg-gray-800"
                >
                    SUBSCRIBE
                </button>
            </form>
            {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}
        </div>
    );
};

export default NewsletterBox;
