import React from "react";
import kikiImage from '../../pic/KikiPic.jpg';

function ProfilePic() {
    return (
        <div className="text-center">
            <img id="profilePicture" src={kikiImage}
                className="rounded float-left img-fluid" alt="JPG of Keiana Hanson" />
        </div>
    )
};

export default ProfilePic;