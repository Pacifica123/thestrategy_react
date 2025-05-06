// entities/project/model/Project.ts
export class Project {
    constructor(
        public id: number,
            public ownerId: number,
                public title: string,
                    public isPrivate: boolean,
                        public accessLink: string,  // UUID в виде строки
                            public createdAt: Date,
                                public deletedAt?: Date,
    ) {}

    static fromJson(json: any): Project {
        return new Project(
            json.id,
            json.owner_id,
            json.title,
            json.is_private,
            json.access_link,
            new Date(json.created_at),
                           json.deleted_at ? new Date(json.deleted_at) : undefined,
        );
    }
}
