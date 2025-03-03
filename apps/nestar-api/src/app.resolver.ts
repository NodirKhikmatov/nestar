<<<<<<< HEAD
 import { Query, Resolver } from '@nestjs/graphql';
=======
import { Query, Resolver } from '@nestjs/graphql';
>>>>>>> 0886ba8 (feat: integration GraphQLModule and build first GraphQL query API)

@Resolver()
export class AppResolver {
	@Query(() => String)
	public sayHello(): string {
		return 'GraphQL API Server';
	}
}
