// // import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Response, SerializeOptions, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
// import {  Controller, Delete, Get,  Param, Post, Response,  UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
// import { AliOssService } from 'nestjs-ali-oss';
// import { ConfigService } from '@nestjs/config';
// import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
// import { Roles } from 'src/roles/roles.decorator';
// import { RoleEnum } from 'src/roles/roles.enum';
// import { RolesGuard } from 'src/roles/roles.guard';
// import { AuthGuard } from '@nestjs/passport';
// import { FileInterceptor } from '@nestjs/platform-express';

// @ApiBearerAuth()
// @Roles(RoleEnum.admin)
// @UseGuards(AuthGuard('jwt'), RolesGuard)
// @ApiTags('Files')
// @Controller({
//   path: 'files',
// })
// export class FilesController {
//   constructor(
//     private readonly aliOssService: AliOssService,
//     private readonly configService: ConfigService,
//   ) {}


//   @ApiBearerAuth()
//   @UseGuards(AuthGuard('jwt'))
//   @Post('upload')
//   @ApiConsumes('multipart/form-data')
//   @ApiBody({
//     schema: {
//       type: 'object',
//       properties: {
//         file: {
//           type: 'string',
//           format: 'binary',
//         },
//       },
//     },
//   })
//   @UseInterceptors(FileInterceptor('file'))
//     async uploadFile(@UploadedFile() file: Express.Multer.File) {
//       const { originalname, buffer } = file;
//       const fileName = `${Date.now()}-${originalname}`;
//       const result = await this.aliOssService.put(fileName, buffer);
//       return result;
//   }

//   @ApiBearerAuth()
//   @UseGuards(AuthGuard('jwt'))
//   @Get('download/:fileName')
//   async downloadFile(@Param('fileName') fileName, @Response() res) {
//     const result = await this.aliOssService.get(fileName);
//     res.set({
//       'Content-Type': 'application/octet-stream',
//       'Content-Disposition': `attachment; filename=${fileName}`,
//     });
//     res.send(result);
//   }

//   @ApiBearerAuth()
//   @UseGuards(AuthGuard('jwt'))
//   @Delete('delete/:fileName')
//   async deleteFile(@Param('fileName') fileName) {
//     const result = await this.aliOssService.delete(fileName);
//     return result;
//   }
// }