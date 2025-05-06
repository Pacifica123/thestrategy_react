import { EntityType } from "../../../shared/types/EntityType";

export class HistoryRecord {
    constructor(
        public id: number,
            public entityType: EntityType,
                public recordId: number,
                    public comment: string,
                        public eventTimestamp: Date,
                            public payload: any,
    ) {}

    static fromJson(json: any): HistoryRecord {
        return new HistoryRecord(
            json.id,
            json.entity_type,
            json.record_id,
            json.comment,
            new Date(json.event_timestamp),
                                 json.payload,
        );
    }
}
