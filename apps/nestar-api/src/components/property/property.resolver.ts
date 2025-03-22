import { Resolver } from '@nestjs/graphql';
import { PropertyService } from './property.service';

@Resolver()
export class PropertyResolver {
	constructor(private readonly propertyService: PropertyService) {}

	// @Mutation(() => Member)
	// public async signup(@Args('input') input: MemberInput): Promise<Member> {
	// 	try {
	// 		console.log('Mutation: signup');

	// 		return this.memberService.signup(input);
	// 	} catch (err) {
	// 		console.log('error signup', err);
	// 		throw new InternalServerErrorException(err);
	// 	}
	// }
}
