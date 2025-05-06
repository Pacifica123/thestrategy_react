import { PermissionKey } from "../../../shared/types/PermissionKeys";

export class ProjectMemberPermission {
    constructor(
        public id: number,
            public projectMemberId: number,
                public permissionKey: PermissionKey,
    ) {}

    static fromJson(json: any): ProjectMemberPermission {
        return new ProjectMemberPermission(
            json.id,
            json.project_member_id,
            json.permission_key,
        );
    }
}
