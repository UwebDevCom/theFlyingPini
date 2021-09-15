
var vertexShaderText = [
    'precision mediump float;',
    '',
    'attribute vec2 vertPosiotn;',
    '',
    'void main()',
    '{',
    ' gl_Position = vec4(vertPosition, 0.0,1.0)', 
    '}'
].join('\n')

var InitDemo = function(){
    console.log('this is working');


var canvas = document.getElementById('gameSurface');
var gl = canvas.getContext('webgl');

if(!gl){
    console.log('webGL not supported , faling back on experimental');
}
if(!gl){
    alert('your browser does not support webGL');
}
gl.clearColor(0.75,0.85,0.8,1.0);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function vertexShader(vertPosition,vertColor) {
    return {
        fregColor : vertColor,
        gl_Position : [vertPosition.x, vertPosition.y , 0.0,1.0]
    }
};