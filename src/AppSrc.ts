import { App } from './classes/app'
import 'bootstrap'
import '@popperjs/core'
import 'jquery'

const appInstance = App.getInstance()

appInstance.run()