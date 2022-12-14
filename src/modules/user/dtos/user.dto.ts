import { AbstractDto } from '@common/dto/abstract.dto';
import { RoleType } from '@constants/index';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import type { UserEntity } from '../user.entity';
import { UserContactDto } from './user-contact.dto';

// TODO, remove this class and use constructor's second argument's type
export type UserDtoOptions = Partial<{
    isActive: boolean;
    excludeFields: boolean;
}>;

export class UserDto extends AbstractDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    logo: string;

    @ApiProperty()
    background_banner: string;

    @ApiProperty()
    bio: string;

    @ApiProperty()
    email?: string;

    @ApiPropertyOptional()
    contact: UserContactDto;

    @ApiPropertyOptional({ enum: RoleType })
    role: RoleType;

    @ApiPropertyOptional()
    isActive?: boolean;

    constructor(user: UserEntity, options?: UserDtoOptions) {
        super(user, options);

        this.role = user.role;
        this.address = user.address;
        this.logo = user.logo;
        this.background_banner = user.background_banner;
        this.bio = user.bio;
        this.email = user.email;
        this.isActive = options?.isActive;
        this.username = user.username;
        this.contact = user.contact?.toDto({ excludeFields: true });
    }
}
