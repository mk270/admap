
var container, stats;

var camera, scene, renderer;

var geometry, group;

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var baseLength = 50;

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

init();
animate();

function randomOffset() {
    var pos = Math.floor(Math.random() * 20) - 10;
    return pos * baseLength;
}

function position(l) {
    return l * 2 * baseLength;
}

function makeLink(material, source, destination) {
    var dir = new THREE.Vector3(
        destination[0] - source[0],
        destination[1] - source[1],
        destination[2] - source[2]
    );

    dir.normalize();

    var origin = new THREE.Vector3(
        position(source[0]),
        position(source[1]),
        position(source[2])
    );
    var length = Math.sqrt(Math.pow((destination[0] - source[0]), 2) +
        Math.pow((destination[1] - source[1]), 2) +
        Math.pow((destination[2] - source[2]), 2)) * baseLength * 2;
    var hex = 0xffff00;

    var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
    return arrowHelper;
}

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

    var far = 10000;

	camera = new THREE.PerspectiveCamera( 
        60,
        window.innerWidth / window.innerHeight, 1, far );
	camera.position.z = 500;

	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0xffffff, 1, far );

	var geometry = new THREE.BoxGeometry( baseLength, baseLength, baseLength );
	var material = new THREE.MeshNormalMaterial();

	group = new THREE.Group();

    var rooms = getRooms();
    var locations = new Object();
    var collisions = new Object();

	rooms.forEach(function (room) {

        var location = [-1 * room[0], room[1], room[2]];
        locations[room[3]] = location;
        if(collisions[location] !== undefined) {
            console.log("Collision at: " + location + ", " + room[3]);
        }
        collisions[location] = room[3];

		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = -1 * position(room[0]);
		mesh.position.y = position(room[1]);
		mesh.position.z = position(room[2]);

		//mesh.rotation.x = Math.random() * 2 * Math.PI;
		//mesh.rotation.y = Math.random() * 2 * Math.PI;

		mesh.matrixAutoUpdate = false;
		mesh.updateMatrix();

		group.add( mesh );

	});

    var links = getLinks();

    links.forEach(function (link) {
        if(locations[link[0]] === undefined) {
            console.log("Missing " + link[0]);
        } else if(locations[link[1]] === undefined) {
            console.log("Missing " + link[1]);
        } else {
            var l = makeLink(material, locations[link[0]], locations[link[1]]);
            group.add(l)
        }
    });


	scene.add( group );

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0xffffff );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.sortObjects = false;

	container.appendChild( renderer.domElement );

	stats = new Stats();
	container.appendChild( stats.dom );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove(event) {

	mouseX = ( event.clientX - windowHalfX ) * 10;
	mouseY = ( event.clientY - windowHalfY ) * 10;

}

//

function animate() {

	requestAnimationFrame( animate );

	render();
	stats.update();

}

function render() {

	var time = Date.now() * 0.001;

	var rx = Math.sin( time * 0.09 ) * 0.5,
		ry = Math.sin( time * 0.08 ) * 0.5,
		rz = Math.sin( time * 0.2 ) * 1;

	camera.position.x += ( mouseX - camera.position.x ) * .5;
	camera.position.y += ( - mouseY - camera.position.y ) * .5;

	camera.lookAt( scene.position );

	//group.rotation.x = rx;
	//group.rotation.y = ry;
	group.rotation.z = rz;

	renderer.render( scene, camera );

}

