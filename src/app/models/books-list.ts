export interface Author {
    key: string;
    name: string;
}

export interface BooksList {
    cover_id: number;
    first_publish_year: number;
    author_name: string[]; 
}
