import React from 'react'

function UploadedImages({ images }) {
    const baseUrl = "http://localhost:5000";
    const api_version = "api/v1";

const handleDelete = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/${api_version}/uploads/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert('Image deleted successfully');
            window.location.reload(); // Reload the page to reflect changes
        } else {
            alert('Failed to delete the image');
        }
    } catch (error) {
        console.error('Error deleting the image:', error);
        alert('An error occurred while deleting the image');
    }
};

return (
    <div>
        <h1 className="text-center my-5 text-2xl font-bold">All Images</h1>
        <div className="uploaded-images flex flex-wrap gap-5 justify-center">
            {images.map((image) => (
                <div 
                    key={image._id} 
                    className="image-card w-72 border border-gray-300 rounded-lg shadow-md overflow-hidden text-center bg-white transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
                >
                    <img 
                        src={`${baseUrl}/${image.filePath}`} 
                        alt={image.filename} 
                        className="w-full h-52 object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-medium mb-2">{image.filename}</h3>
                        <button 
                            className="delete-button px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                            onClick={() => handleDelete(image._id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>  
    </div>
);
}

export default UploadedImages
