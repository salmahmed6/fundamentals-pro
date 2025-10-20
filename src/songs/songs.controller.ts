import { Controller , Get, Post, Put, Delete} from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService){}
    @Post()
    create(){
        return this.songsService.create('Anims by martin garrix');
    }

    @Get()
    findAll() {
        return this.songsService.findAll();
    }

    @Get(':id')
        findOne(){
            return 'fetch song on the based on id';
        }

    @Put(':id')
    update(){
        return 'update a song on the based on id';
    }

    @Delete(':id')
    delete(){
        return 'delete a song on the based on id';
    }
}
