//Instalacion de proceso
self.addEventListener('install', e =>{
    console.log('sw is installed')
})
//Activacion
self.addEventListener('activate', e=>{
    console.log('sw is activate')
})

//Fecth
self.addEventListener('fetch', e=>{
    console.log('sw fetch event',e)
})