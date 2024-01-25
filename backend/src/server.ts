import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { UserRoute } from './routes/user.route'

class Server {
	public app: express.Application = express()
	private port: number = 5000

	constructor() {
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(morgan('dev'))
		this.app.use(cors())
		this.app.use('/api', this.routes())

		this.listen()
	}

	public routes(): Array<express.Router> {
		return [new UserRoute().router]
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`Server listening to port ${this.port}`)
		})
	}
}

try {
	new Server()
} catch (e) {
	console.log(e)
}
