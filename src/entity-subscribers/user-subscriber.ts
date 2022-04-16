import type { EntitySubscriberInterface } from 'typeorm';
import { EventSubscriber } from 'typeorm';

import { UserEntity } from '../modules/user/user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
    listenTo(): typeof UserEntity {
        return UserEntity;
    }

    // beforeInsert(event: InsertEvent<UserEntity>): void {
    //     if (event.entity.password) {
    //         event.entity.password = generateHash(event.entity.password);
    //     }
    // }

    // beforeUpdate(event: UpdateEvent<UserEntity>): void {
    //     // FIXME check event.databaseEntity.password
    //     const entity = event.entity as UserEntity;

    //     if (entity.password !== event.databaseEntity.password) {
    //         entity.password = generateHash(entity.password!);
    //     }
    // }
}
