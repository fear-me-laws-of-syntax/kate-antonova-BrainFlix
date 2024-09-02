import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadPage.scss";
import publishIcon from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";
import axios from "axios";
import { apiUrl } from "../../utils/const";
import { Link } from "react-router-dom";


function UploadPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        let formIsValid = true;

        if (title.trim() === "") {
            setTitleError(true);
            formIsValid = false;
        } else {
            setTitleError(false);
        }

        if (description.trim() === "") {
            setDescriptionError(true);
            formIsValid = false;
        } else {
            setDescriptionError(false);
        }

        if (formIsValid) {
            try {
                await axios.post(`${apiUrl}/videos`, { title, description });
            }
            catch (error) {
                console.log(error)
            }

            alert("Your video was successfully published! Please press OK to be redirected to the homepage.");
            navigate("/");
        }
    };




    return (
        <div className="upload-page">
            <h1 className="upload-page__title">Upload Video</h1>
            <div className="upload-page__content">
                <form className="upload-page__form" onSubmit={handleFormSubmit}>
                    <div className="upload-page__input">
                        <div>
                            <h2 className="upload-page__header">VIDEO THUMBNAIL</h2>
                            <img
                                className="upload-page__image-preview"
                                src="src/assets/images/Upload-video-preview.jpg"
                                alt="video preview"
                            />
                        </div>
                        <div className="upload-page__text">
                            <h2 className="upload-page__header">TITLE YOUR VIDEO</h2>
                            <textarea
                                className={`upload-page__textarea ${titleError ? "error" : ""}`}
                                name="title"
                                placeholder="Add a title to your video"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <h2 className="upload-page__header">ADD A VIDEO DESCRIPTION</h2>
                            <textarea
                                className={`upload-page__textarea upload-page__textarea--description ${descriptionError ? "error" : ""}`}
                                name="description"
                                placeholder="Add a description to your video"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="upload-page__button-publish">
                        <Button text="PUBLISH" imageUrl={publishIcon} />
                    </div>

                    {/* <h2 className="upload-page__header upload-page__header--cancel">CANCEL</h2> */}
                    <Link to="/">
                        <h2 className="upload-page__header upload-page__header--cancel">CANCEL</h2>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default UploadPage;
