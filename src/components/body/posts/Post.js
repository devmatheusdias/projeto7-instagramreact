import { useState } from "react";

export default function Post(props) {
    let timeClicked = 0;
    let clicks = 0;
    
    const [bookmark, setBookmark] = useState('bookmark-outline');
    const [like, setLike] = useState('heart-outline');
    const [AmountLikes, setAmountLikes] = useState(Math.floor(Math.random() * 10000));
    const [animationHeartIcon, setAnimationHeartIcon] = useState('heart-icon');
    const [classLike, setClassLike] = useState('blackLike');

    function fillIcon(icon) {

        if (icon == 'savePost') {
            bookmark == 'bookmark' ? setBookmark('bookmark-outline') : setBookmark('bookmark');
        }

        else if (icon == 'likePost') {

            function likePost() {
                setLike('heart')
                setClassLike('redLike')
                setAmountLikes(AmountLikes + 1);
            }

            function unLikePost() {
                setLike('heart-outline')
                setClassLike('blackLike')
                setAmountLikes(AmountLikes - 1);
            }
            like == 'heart-outline' ? likePost() : unLikePost();
        }
    }

    function doubleCLick() {
        clicks++;
        setInterval(() => {
            timeClicked++;
            if (timeClicked <= 1.5 && clicks == 2 && like != 'heart') {
                setAnimationHeartIcon('animation-heart-icon');
                setLike('heart');
                setClassLike('redLike');
                setAmountLikes(AmountLikes+1);
            } else {
                timeClicked = 0;
                clicks = 0;
            }
        }, 1000);

        setAnimationHeartIcon('heart-icon');
    }

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userImage} />
                    {props.userName}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <ion-icon class={animationHeartIcon} name="heart"></ion-icon>
                <img src={props.conteudo} onClick={doubleCLick} data-test="post-image"/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon class={classLike} name={like} onClick={() => fillIcon('likePost')} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmark} onClick={() => fillIcon('savePost')} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.userLike} />
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras <span data-test="likes-number">{AmountLikes}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
