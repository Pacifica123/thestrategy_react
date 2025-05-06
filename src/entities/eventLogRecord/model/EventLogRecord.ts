import { EventType } from "../../../shared/types/EventType";

export class EventLogRecord {
    constructor(
        public id: number,
            public eventType: EventType,
                public comment: string,
                    public eventTimestamp: Date,
                        public payload: any,
    ) {}

    static fromJson(json: any): EventLogRecord {
        return new EventLogRecord(
            json.id,
            json.event_type,
            json.comment,
            new Date(json.event_timestamp),
                                  json.payload,
        );
    }
}
