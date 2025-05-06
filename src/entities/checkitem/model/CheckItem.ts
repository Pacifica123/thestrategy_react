export class CheckItem {
    constructor(
        public id: number,
            public checklistId: number,
                public title: string,
                    public isChecked: boolean,
                        public createdAt: Date,
                            public deletedAt: Date | null,
    ) {}

    static fromJson(json: any): CheckItem {
        return new CheckItem(
            json.id,
            json.checklist_id,
            json.title,
            json.is_checked,
            new Date(json.created_at),
                             json.deleted_at ? new Date(json.deleted_at) : null,
        );
    }
}
