import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Scene } from 'three';

export default function Firstload(){
const scene = new Scene();

const loader = new GLTFLoader();

loader.load( '../models/office.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

}