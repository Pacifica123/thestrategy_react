export class Task {
    constructor(
        public id: number,
            public columnId: number,
                public title: string,
                    public position: any,
                        public startAt: Date | null,
                            public dueAt: Date | null,
                                public metadataJson: any | null,
                                    public createdAt: Date,
                                        public deletedAt: Date | null,
    ) {}

    static fromJson(json: any): Task {
        return new Task(
            json.id,
            json.column_id,
            json.title,
            json.position,
            json.start_at ? new Date(json.start_at) : null,
                        json.due_at ? new Date(json.due_at) : null,
                        json.metadata_json ?? null,
                        new Date(json.created_at),
                        json.deleted_at ? new Date(json.deleted_at) : null,
        );
    }
}
