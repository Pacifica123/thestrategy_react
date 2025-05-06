export type EventType =
| 'project_created'
| 'project_updated'
| 'project_deleted'
| 'member_invited'
| 'member_removed'
| 'permissions_changed'
| 'taskboard_created'
| 'taskboard_updated'
| 'taskboard_deleted'
| 'column_created'
| 'column_moved'
| 'column_updated'
| 'column_deleted'
| 'task_created'
| 'task_updated'
| 'task_moved'
| 'task_completed'
| 'task_reopened'
| 'task_deleted'
| 'checklist_created'
| 'checklist_updated'
| 'checklist_deleted'
| 'checkitem_toggled'
| 'checkitem_created'
| 'checkitem_deleted'
| 'custom_event';

// Для удобства и предотвращения опечаток можно также создать объект с константами:

export const EventTypes = {
    PROJECT_CREATED: 'project_created' as EventType,
    PROJECT_UPDATED: 'project_updated' as EventType,
    PROJECT_DELETED: 'project_deleted' as EventType,
    MEMBER_INVITED: 'member_invited' as EventType,
    MEMBER_REMOVED: 'member_removed' as EventType,
    PERMISSIONS_CHANGED: 'permissions_changed' as EventType,
    TASKBOARD_CREATED: 'taskboard_created' as EventType,
    TASKBOARD_UPDATED: 'taskboard_updated' as EventType,
    TASKBOARD_DELETED: 'taskboard_deleted' as EventType,
    COLUMN_CREATED: 'column_created' as EventType,
    COLUMN_MOVED: 'column_moved' as EventType,
    COLUMN_UPDATED: 'column_updated' as EventType,
    COLUMN_DELETED: 'column_deleted' as EventType,
    TASK_CREATED: 'task_created' as EventType,
    TASK_UPDATED: 'task_updated' as EventType,
    TASK_MOVED: 'task_moved' as EventType,
    TASK_COMPLETED: 'task_completed' as EventType,
    TASK_REOPENED: 'task_reopened' as EventType,
    TASK_DELETED: 'task_deleted' as EventType,
    CHECKLIST_CREATED: 'checklist_created' as EventType,
    CHECKLIST_UPDATED: 'checklist_updated' as EventType,
    CHECKLIST_DELETED: 'checklist_deleted' as EventType,
    CHECKITEM_TOGGLED: 'checkitem_toggled' as EventType,
    CHECKITEM_CREATED: 'checkitem_created' as EventType,
    CHECKITEM_DELETED: 'checkitem_deleted' as EventType,
    CUSTOM_EVENT: 'custom_event' as EventType,
} as const;
