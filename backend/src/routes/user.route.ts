import { UserController } from '../controllers/user.controller'
import { BaseRoutes } from './routes'

export class UserRoute extends BaseRoutes<UserController> {
	constructor() {
		super(UserController)
	}

	routes(): void {
		this.router.get('/user', (req, res) => {
			this.controller.getUsers(req, res)
		})
	}
}
