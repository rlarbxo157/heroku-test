/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    // this.logger.log(req.ip, req.originalUrl);

    res.on('finish',()=> {
      this.logger.log(`${req.ip} ${req.method}`, req.originalUrl);
    })
    next();
  }
}
