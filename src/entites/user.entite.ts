import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm"
import { Contact } from "./contacts.entite"

@Entity("users")

class User {
    @PrimaryGeneratedColumn("increment")
    id: number
    @Column()
    name: string
    @Column({ unique: true })
    email: string
    @Column()
    password: string
    @Column()
    phone: string
    @CreateDateColumn()
    dateRegister: Date

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]
}

export { User }