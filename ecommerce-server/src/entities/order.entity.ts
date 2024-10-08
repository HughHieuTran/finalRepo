import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';  // Import the User entity
import { OrderItem } from './orderItem.entity';  // Import the OrderItem entity

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderDate: string;

  @Column({ default: '' })
  contactPhoneNumber: string;

  @Column({ default: '' })
  address: string;

  @Column({ default: false })
  IsOrdered: boolean;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  orderItems: OrderItem[];

}
