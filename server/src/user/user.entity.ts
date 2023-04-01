import { BaseModelWithUUIDPrimary } from 'src/common/model';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseModelWithUUIDPrimary {
  @Column()
  mobile: string;
  @Column()
  password: string;
  @Column()
  name: string;
  @Column({ nullable: true })
  address: string;
}
