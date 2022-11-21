import Storie from "./Storie";

export default function ListStories() {

    const stories = [
        { name: '9gag', image: `assets/img/9gag.svg` },
        { name: 'meowed', image: `assets/img/meowed.svg` },
        { name: 'barked', image: `assets/img/barked.svg` },
        { name: 'nathanwpylestrangeplanet', image: `assets/img/nathanwpylestrangeplanet.svg` },
        { name: 'wawawicomics', image: `assets/img/wawawicomics.svg` },
        { name: 'respondeai', image: `assets/img/respondeai.svg` },
        { name: 'filomoderna', image: `assets/img/filomoderna.svg` },
        { name: 'memeriagourmet', image: `assets/img/memeriagourmet.svg` },
    ]

    return (
        <div className="stories">
            {stories.map((storie) => <Storie name={storie.name} image={storie.image}></Storie>)}
        </div>
    );
}