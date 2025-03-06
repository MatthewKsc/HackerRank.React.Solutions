import React, {useState} from "react";

function Input({ onCreatePostButtonClick }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const clearForm = () => {
        setTitle("");
        setDescription("");
    }

    const isFormValid = () => (!!title && !!description);

    const onCreatePost = () => {
        if (isFormValid()) {
            onCreatePostButtonClick({ title, description });
            clearForm();
        }
    }

    return (
        <>
            <div className="layout-column justify-content-center align-items-center">
                <input
                    className="w-100"
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    data-testid="title-input"/>
                <textarea
                    className="mt-10 w-100"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    data-testid="description-input"/>
            </div>

            <button data-testid="create-button" className="mt-10" onClick={onCreatePost}>
                Create Post
            </button>
        </>
    );
}

export default Input;
