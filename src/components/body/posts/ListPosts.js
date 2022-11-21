import Post from "./Post";

export default function ListPosts() {
    const posts = [
        { userImage: 'assets/img/meowed.svg', userName: 'meowed', conteudo: 'assets/img/gato-telefone.svg', userLike: 'assets/img/respondeai.svg', },
        { userImage: 'assets/img/barked.svg', userName: 'barked', conteudo: 'assets/img/dog.svg', userLike: 'assets/img/adorable_animals.svg', },
        { userImage: 'assets/img/meowed.svg', userName: 'meowed', conteudo: 'assets/img/gato-telefone.svg', userLike: 'assets/img/respondeai.svg', },
    ]

    return (
        <div className="posts">
            {posts.map((post) => <Post userImage={post.userImage} userName={post.userName} conteudo={post.conteudo} userLike={post.userLike}></Post>)}
        </div>
    );

}
