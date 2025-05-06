export class Taskboard {
    constructor(
        public id: number,
            public ownerId: number,
                public projectId: number | null,
                    public title: string,
                        public description: string | null,
                            public isPrivate: boolean,
                                public accessLink: string,
                                    public position: any,
                                        public createdAt: Date,
                                            public deletedAt: Date | null,
                                                public columnIds: number[],
    ) {}

    static fromJson(json: any): Taskboard {
        return new Taskboard(
            json.id,
            json.owner_id,
            json.project_id ?? null,
            json.title,
            json.description ?? null,
            json.is_private,
            json.access_link,
            json.position,
            new Date(json.created_at),
                             json.deleted_at ? new Date(json.deleted_at) : null,
                             json.column_ids || [],
        );
    }
}
