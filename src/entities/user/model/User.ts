// entities/user/model/User.ts
export class User {
    constructor(
        public id: number,
            public username: string,
                public email: string,
                    public isBlocked: boolean,
                        public createdAt: Date,
    ) {}

    static fromJson(json: any): User {
        return new User(
            json.id,
            json.username,
            json.email,
            json.is_blocked,
            new Date(json.created_at),
        );
    }
}
