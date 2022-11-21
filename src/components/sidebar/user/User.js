import { useState } from "react";

export default function User(props) {

    const [userName, setUserName] = useState('Catana');
    const [userImage, setUserImage] = useState('assets/img/catanacomics.svg');

    function changeUserName() {
        setUserName(prompt('Informe o novo nome: '));
    }

    function changeImage(){
        setUserImage(prompt('Informe a nova imagem'));
    }

    return (
        <div className="usuario" data-test="user">
            <img src={userImage} onClick={changeImage} data-test="profile-image"></img>
            <div className="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    {userName}
                    <ion-icon name="pencil" onClick={changeUserName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    );
}
