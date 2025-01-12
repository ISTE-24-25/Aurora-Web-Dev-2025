import { useState } from 'react';
import axios from 'axios';

const QRPayment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        registrationNumber: '',
        transactionId: '',
        image: null
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            image: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });

            await axios.post('http://localhost:8000/api/qr-payment', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                registrationNumber: '',
                transactionId: '',
                image: null
            });
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
                    Complete Your Payment
                </h2>

                {/* QR Code and UPI ID Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-700 text-center mb-4">
                        Scan the QR Code or Use the UPI ID to Pay
                    </h3>
                    <div className="flex flex-col items-center space-y-4">
                        {/* Replace the src with your actual QR code image */}
                        <img
                            src="/src/assets/qrcode.jpg"
                            alt="QR Code"
                            className="w-40 h-40 object-cover rounded-md shadow-lg"
                        />
                        <div className="text-center">
                            <p className="text-sm text-gray-700">UPI ID: <strong>aurora@upi</strong></p>
                            <p className="text-xs text-gray-500">Please complete the payment and upload the screenshot below.</p>
                        </div>
                    </div>
                </div>

                {success && (
                    <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
                        Payment submitted successfully!
                    </div>
                )}

                {error && (
                    <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Registration Number
                        </label>
                        <input
                            type="text"
                            name="registrationNumber"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Transaction ID
                        </label>
                        <input
                            type="text"
                            name="transactionId"
                            value={formData.transactionId}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Payment Screenshot
                        </label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                            accept="image/*"
                            required
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                            loading 
                                ? 'bg-indigo-400 cursor-not-allowed' 
                                : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        }`}
                    >
                        {loading ? 'Processing...' : 'Submit Payment'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default QRPayment;
