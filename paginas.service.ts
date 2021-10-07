import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaginaDto } from './dto/create-paginas.dto';
import { EditPaginaDto } from './dto/edit-paginas.dto';
import { PaginasEntity } from './entity/paginas.entity';

@Injectable()
export class PaginasService {

    constructor(@InjectRepository(PaginasEntity) private readonly paginasRepository: Repository<PaginasEntity> ){}

    async getPaginas(){
        return await this.paginasRepository.find();
    }

    async getPaginaRelacionada(){

        const data = this.paginasRepository.createQueryBuilder('pagina')
                      .innerJoinAndSelect('pagina.idusuario','usuario')
                      .select([
                        "pagina.nombre",
                        "pagina.url",
                        "usuario.lastName",
                        "usuario.id"
                      ])
                      .getMany();
        
        return data;

    }

    async crearPagina(pagina:CreatePaginaDto){

        const data = this.paginasRepository.create(pagina)
        return await this.paginasRepository.save(data);

    }

    async editarPagina(id:number,dto:EditPaginaDto){

        const data = await this.paginasRepository.findOne(id)

        const paginaEditada = Object.assign(data,dto)

        return await this.paginasRepository.save(paginaEditada);

    }

    async eliminarPagina(id:number){
        return await this.paginasRepository.delete(id);
    }
}
