// shared/factories/StructFactory.ts
import { User } from "../../entities/user/model/User";
import { Project } from "../../entities/project/model/Project";
import { Taskboard } from "../../entities/board/model/Taskboard";
import { Column } from "../../entities/column/model/Column";
import { Task } from "../../entities/task/model/Task";
import { Checklist } from "../../entities/checklist/model/Checklist";
import { CheckItem } from "../../entities/checkitem/model/CheckItem";
import { ProjectMember } from "../../entities/projectMember/model/ProjectMember";
import { ProjectMemberPermission } from "../../entities/projectMemberPermission/model/ProjectMemberPermission";
import { HistoryRecord } from "../../entities/historyRecord/model/HistoryRecord";
import { EventLogRecord } from "../../entities/eventLogRecord/model/EventLogRecord";

type Raw = { type: string; [key: string]: any };

export function deserializeStruct(data: Raw) {
    switch (data.type) {
        case "user":                 return User.fromJson(data);
        case "project":              return Project.fromJson(data);
        case "taskboard":            return Taskboard.fromJson(data);
        case "column":               return Column.fromJson(data);
        case "task":                 return Task.fromJson(data);
        case "checklist":            return Checklist.fromJson(data);
        case "checkitem":            return CheckItem.fromJson(data);
        case "project_member":       return ProjectMember.fromJson(data);
        case "project_permission":   return ProjectMemberPermission.fromJson(data);
        case "history_record":       return HistoryRecord.fromJson(data);
        case "event_log_record":     return EventLogRecord.fromJson(data);
        default:
            throw new Error(`Unknown struct type: ${data.type}`);
    }
}
