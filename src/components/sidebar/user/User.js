import { useState } from "react";

export default function User(props) {

    const [userName, setUserName] = useState('Catana');
    const [userImage, setUserImage] = useState('assets/img/catanacomics.svg');

    function changeUserName() {

        let userName;

        do {
            userName = prompt('Informe o novo nome: ');

            if (userName == "") {
                alert("Nome vazio!");
                userName = prompt('Informe o novo nome: ');
            }
        } while (userName == "");

        setUserName(userName)
    }

    function changeImage() {

        let userImage;

        do {
            userImage = prompt('Informe o link da nova imagem: ');

            if (userImage == "") {
                alert("Url vazio!");
                userImage = prompt('Informe o link da nova imagem: ');

            }
        } while (userImage == "");

        setUserImage(userImage)
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
