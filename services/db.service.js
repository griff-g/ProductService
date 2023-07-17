class MongoService {
    constructor(model) {
        this.model = model;
    }

    /**
     * The function creates a new document using the provided data and saves it.
     * @param document - The `document` parameter is an object that represents the data you want to save
     * in the database. It should contain the necessary fields and values for creating a new document in
     * the database.
     * @returns a promise that resolves to the saved document.
     */
    async createDocument(document) {
        const doc = new this.model(document);
        return await doc.save();
    }
    /**
     * The function reads a document from a database based on a filter and select criteria.
     * @param filter - The filter parameter is an object that specifies the conditions that the document
     * must meet in order to be returned. It is used to query the database and retrieve documents that
     * match the specified criteria.
     * @param select - The `select` parameter is used to specify which fields should be included or
     * excluded in the returned document. It can be a string or an object.
     * @returns a document that matches the given filter and has the selected fields.
     */
    async readDocument(filter, select = {}) {
        const doc = await this.model.findOne(filter).select(select).lean();
        return doc;
    }
    /**
     * The function `updateDocument` updates a document in a MongoDB collection based on a filter and
     * an update query, and returns the updated document.
     * @param filter - The filter parameter is used to specify the criteria for selecting the
     * document(s) to be updated. It can be an object that contains key-value pairs representing the
     * fields and their values that the documents must match in order to be selected for update.
     * @param updateQuery - The `updateQuery` parameter is an object that specifies the changes to be
     * made to the document. It can include various update operators such as ``, ``, ``,
     * etc. For example, if you want to update the `name` field of a document, the `updateQuery
     * @param options - The `options` parameter is an object that can contain additional options for
     * the `findOneAndUpdate` method. Some common options include:
     * @returns The updated document is being returned.
     */
    async updateDocument(filter, updateQuery, options = {}) {
        const updatedDoc = await this.model.findOneAndUpdate(filter, updateQuery, {
            ...options,
            new: true,
            runValidators: true,
        });
        return updatedDoc;
    }

    async readAllDocuments(filter, {select, sort, skip, limit}, {page}) {
        /* The code `skip = skip ?? 0` is using the nullish coalescing operator (`??`) to assign a default
value of 0 to the `skip` variable if it is null or undefined. */
        // skip = skip ?? 0;
        // filter = filter ?? {};
        // select = select ?? {};
        // sort = sort ?? {};
        // limit = limit ?? 0;

        const documents = await this.model
            .find(filter)
            .select(select)
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .lean();
        return {documents};
    }
}

export default MongoService;
