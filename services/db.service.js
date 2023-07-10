class MongoService {
	constructor(model) {
		this.model = model;
	}

	async createDocument(document) {
		const doc = new this.model(document);
		return await doc.save();
	}
	async readDocument(filter, select) {
		const doc = await this.model.findOne(filter).select(select).lean();
		return doc;
	}
}

export default MongoService;
