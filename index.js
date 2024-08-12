import express from 'express'
import cors from 'cors'
import connection from './src/db/connection.js'
import ir from './index.routes.js'
import { deleteFolder, deleteFromDB, glopalErrorHandler } from './src/app/utils/asyncHandler.js'
import main from './src/app/services/sendEmail.js'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
setTimeout(() => {
    app.use('/user', ir.userRouter)
    app.use('/category', ir.categoryRouter)
    app.use('/brand', ir.brandRouter)
    app.use('/products', ir.productRouter)
    app.use('/coupon', ir.couponRouter)
    app.use('/cart', ir.cartRouter)
    app.use('/order', ir.orderRouter)
    app.use('/wishList', ir.wishListRouter)
}, 5000);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {

    console.log(`Example app listening on port ${port}!`)
    main("alihgad2@gmail.com", '<h1>start</h1>', 'run')
}
)

app.use(glopalErrorHandler, deleteFolder, deleteFromDB)


