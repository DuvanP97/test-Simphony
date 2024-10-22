import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    name: string;

    @Column()
    @ApiProperty()
    email: string;

    @Column({ default: true })
    @ApiProperty()
    isActive: boolean;
}