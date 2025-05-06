export class Checklist {
    constructor(
        public id: number,
            public taskId: number,
                public title: string,
                    public position: any,
                        public startAt: Date | null,
                            public dueAt: Date | null,
                                public createdAt: Date,
                                    public deletedAt: Date | null,
                                        public itemIds: number[],
    ) {}

    static fromJson(json: any): Checklist {
        return new Checklist(
            json.id,
            json.task_id,
            json.title,
            json.position,
            json.start_at ? new Date(json.start_at) : null,
                             json.due_at ? new Date(json.due_at) : null,
                             new Date(json.created_at),
                             json.deleted_at ? new Date(json.deleted_at) : null,
                             json.item_ids || [],
        );
    }
}
