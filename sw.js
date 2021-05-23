//Instalacion de proceso
self.addEventListener('install', e =>{
    console.log('sw is installed')
})
//Activacion
self.addEventListener('activate', e=>{
    console.log('sw is activate')
})