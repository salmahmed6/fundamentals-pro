import { Controller , Get, Post, Put, Delete, Body} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService){}
    @Post()
    create(@Body() createSongDTO: CreateSongDTO){
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
