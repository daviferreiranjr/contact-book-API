import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm"
import { User } from "./user.entite"

@Entity("contacts")

class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number
    @Column()
    name: string
    @Column({ unique: true })
    email: string
    @Column()
    phone: string
    @CreateDateColumn()
    dateRegister: Date

    @ManyToOne(() => User)
    user: User
}

export { Contact }