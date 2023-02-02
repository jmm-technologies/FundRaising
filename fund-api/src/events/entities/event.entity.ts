import { IsNotEmpty } from "class-validator";
import { FileEntity } from "src/files/entities/file.entity";
import { EntityHelper } from "src/utils/entity-helper";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// import { FileEntity } from "src/files/entities/file.entity";

@Entity()
export class Event  extends EntityHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  name: string | null;

  @Column()
  @IsNotEmpty()
  description: string | null;

  @ManyToOne(() => FileEntity, {
    eager: true,
  })
  photoId?: string | null;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}