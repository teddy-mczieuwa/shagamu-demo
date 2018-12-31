const {app, BrowserWindow} = require('electron')
const path = require('path')
const {format } = require('url')


const isDevelopment = process.env.NODE_ENV !== 'production'

let windows = new Set()
let newWindow = null

const createWindow = () => {
    newWindow = new BrowserWindow({
        width: 900,
        height: 500,
        show: false,
        kiosk: true
    })
    newWindow.setTitle('Onibata Polytechnic')
    windows.add(newWindow)

    if(isDevelopment){
        newWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
    } else {
        newWindow.loadURL(format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        }))
    }



    newWindow.on('ready-to-show', () => {
        newWindow.show()
    })
    
    newWindow.once('closed', () => {
        windows.delete(newWindow)
        newWindow = null
    })
    
}

app.on('ready', () => {
    createWindow()
})