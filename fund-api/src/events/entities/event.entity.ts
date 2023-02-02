import { IsNotEmpty } from "class-validator";
import { EntityHelper } from "src/utils/entity-helper";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

  @ManyToOne(() => Event, (event) => event.id)
  @JoinColumn({ name: 'photo_id' })
  parent: Event | null;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}