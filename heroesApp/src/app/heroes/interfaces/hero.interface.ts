export interface Hero {

    id?:                 string;
    superhero:          string;
    publisher:          Publisher;
    alter_ego:          string;
    first_appearance:   string;
    characters:         string;
    //Para una propieda opcional, añadir la ?
    alt_img?:            string;
}

//Para un objeto de tipo publisher
export enum Publisher{
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}