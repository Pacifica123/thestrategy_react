import { PermissionKey } from "../../../shared/types/PermissionKeys";

export class ProjectMember {
    constructor(
        public id: number,
            public userId: number,
                public projectId: number,
                    public invitedAt: Date,
                        public permissions: PermissionKey[],
    ) {}

    static fromJson(json: any): ProjectMember {
        return new ProjectMember(
            json.id,
            json.user_id,
            json.project_id,
            new Date(json.invited_at),
                                 json.permissions || [],
        );
    }
}
