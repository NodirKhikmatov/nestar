import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { ViewService } from '../view/view.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PropertyService {
	constructor(@InjectModel('Property') private readonly propertyModel: Model<null>) {}
}
