import "./UploadPage.scss";
import publishIcon from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";


function UploadPage() {
    return (
        <div className="upload-page">

            <h1 className="upload__title">Upload Video</h1>
            <div className="upload">

                <div className="upload__input">
                    <div>
                        <h2 className="upload__header">VIDEO THUMBNAIL</h2>

                        {/* <div className="upload__input"> */}
                        <img className="imagePreview" src="src/assets/images/Upload-video-preview.jpg" alt="video preview" />
                    </div>
                    <div className="upload__text">
                        <h2 className="upload__header">TITLE YOUR VIDEO</h2>
                        <textarea id="msg" name="user_message" placeholder="Add a title to your video"></textarea>

                        <h2 className="upload__header">ADD A VIDEO DESCRIPTION</h2>
                        <textarea className="upload__form" name="user_message" placeholder="Add a description to your video"></textarea>
                    </div>
                </div>

                <div className="button-publish">
                    <Button text="PUBLISH" imageUrl={publishIcon} />
                </div>

                <h2 className="upload__header--cancel">CANCEL</h2>

            </div>
        </div>
    );
}

export default UploadPage;
