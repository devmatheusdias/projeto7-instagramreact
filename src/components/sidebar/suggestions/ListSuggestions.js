import Suggestion from "./Suggestion"

export default function ListSuggestions(params) {

    const suggestions = [
        { userImage: 'assets/img/bad.vibes.memes.svg', userName: 'bad.vibes.memes' },
        { userImage: 'assets/img/chibirdart.svg', userName: 'chibirdart' },
        { userImage: 'assets/img/razoesparaacreditar.svg', userName: 'razoesparaacreditar' },
        { userImage: 'assets/img/adorable_animals.svg', userName: 'adorable_animals' },
        { userImage: 'assets/img/smallcutecats.svg', userName: 'smallcutecats' },
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map((suggestion) => <Suggestion userImage={suggestion.userImage} userName={suggestion.userName}></Suggestion>)}

        </div>
    )
}