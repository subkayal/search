import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Search {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column({ type: 'timestamptz' })
  dateLastEdited: Date;
}
