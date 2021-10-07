import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity('subCategoria')
export class subCategoriasEntity{

@PrimaryGeneratedColumn()
idsubCategoria: number;

@Column()
nombreSubCategoria: string;

@Column("text")
descripcionSubCategoria: string;


}