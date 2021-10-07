import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { subCategoriasEntity } from './subCategorias.entity';
import { SubCategoriasController } from './sub-categorias.controller';
import { SubCategoriasService} from './sub-categorias.service';


@Module({

    imports: [TypeOrmModule.forFeature([subCategoriasEntity])],
    providers: [SubCategoriasService],
    controllers: [SubCategoriasController]

})
export class SubCategoriasModule {}




