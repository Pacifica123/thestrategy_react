export class Column {
    constructor(
        public id: number,
            public taskboardId: number,
                public title: string,
                    public position: any,
                        public createdAt: Date,
                            public deletedAt: Date | null,
    ) {}

    static fromJson(json: any): Column {
        return new Column(
            json.id,
            json.taskboard_id,
            json.title,
            json.position,
            new Date(json.created_at),
                          json.deleted_at ? new Date(json.deleted_at) : null,
        );
    }
}
