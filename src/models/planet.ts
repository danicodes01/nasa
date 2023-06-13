class Planet {
    id: string;
    date: string;
    description: string;
    media: string;
    title: string;
    url: string;

    constructor(id: string, date: string, description: string, media: string, title: string, url: string) {
        this.id = id
        this.date = date
        this.description = description
        this.media = media
        this.title = title
        this.url = url
    }
}

export default Planet