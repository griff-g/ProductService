class MongoService {
    constructor(model){
        this.model = model
    }

    async createDocument(document){
        const doc = new this.model(document);
        return await doc.save()
    }
}

export default MongoService