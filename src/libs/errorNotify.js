export default function QuasarNotify(q, msg) {
  q.notify({
    color: 'negative',
    position: 'top',
    message: msg,
    icon: 'report_problem',
  })
}
// const foo = Math.PI + Math.SQRT2;
// var graph = {
//     options:{
//         color:'white',
//         thickness:'2px'
//     },
//     draw: function(){
//         console.log('From graph draw function');
//     }
// }

// export { cube, foo, graph }
