"use client"
import React, {useRef} from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import coordinates from "./coordinates.json"
import * as THREE from 'three'
import {OrbitControls} from "@react-three/drei";

function convertVertex(latitude: number, longitude: number, quantization?: number) {
	if (quantization) {
		latitude = (latitude / quantization - 0.5) * 360
		longitude = (longitude / quantization - 0.5) * 180
	}
	const lambda = latitude * Math.PI / 180, phi = longitude * Math.PI / 180
	return [
		Math.cos(phi) * Math.sin(lambda),
		Math.sin(phi),
		Math.cos(phi) * Math.cos(lambda),
	];
}

const Earth=(props: {
	radius: number
	lineMaterial: React.ReactNode
}) =>{
	const country = coordinates
	const country_v = country.map(v => v.map(v => convertVertex(v[0], v[1], 0xffff)))
	const global_v = new Float32Array(country_v.flat(2))
	const indices = country.map(v => v.length).map((v, i, a) => {
		const offset = a.slice(0, i).reduce((a, b) => a + b, 0)
		return [...Array(v - 1)].map((_, i) => [offset + i, offset + i + 1])
	}).flat()
	const global_i = new Uint32Array(indices.flat())
	//Material with color = 'white' is not white https://github.com/pmndrs/react-three-fiber/discussions/1290#discussioncomment-668649
	//使いたい　https://github.com/spite/THREE.MeshLine?tab=readme-ov-file
	return (
		<>
			<lineSegments scale={props.radius}>
				<bufferGeometry>
					<bufferAttribute
						attach='attributes-position'
						array={global_v}
						count={global_v.length / 3}
						itemSize={3}
					/>
					<bufferAttribute
						attach='index'
						array={global_i}
						count={global_i.length}
						itemSize={1}
					/>
				</bufferGeometry>
				{props.lineMaterial}
			</lineSegments>
			<Horizon
				radius={props.radius}
				lineMaterial={props.lineMaterial}
			/>
		</>
	);
}

const Horizon = (props: {
	radius: number,
	lineMaterial: React.ReactNode
}) => {
	const ref = useRef<THREE.Group>(null);
	const three = useThree();
	useFrame((state) => {
		if (ref.current) {
			const camera_to_object = ref.current.position.clone().sub(state.camera.position)
			const angle_cos = Math.min(props.radius / camera_to_object.length(), 1)
			const angle_sin = Math.sqrt(1 - angle_cos * angle_cos)
			ref.current.scale.set(props.radius * angle_sin, props.radius * angle_sin, props.radius * angle_cos)
			ref.current.lookAt(state.camera.position);
		}
	})
	const size = 60
	const circle_vector = [[0, 0, 0], ...[...Array(size)].map((_, i, a) => i / a.length * 2 * Math.PI).map(v => [Math.cos(v), Math.sin(v), 1])]
	const line_index = [...Array(size)].map((_, i, a) => [i + 1, (i + 1) % a.length + 1]).flat()
	const face_index = [...Array(size)].map((_, i, a) => [0, i + 1, (i + 1) % a.length + 1]).flat()
	return <group ref={ref}>
		<mesh>
			<bufferGeometry>
				<bufferAttribute
					attach='attributes-position'
					array={new Float32Array(circle_vector.flat())}
					count={circle_vector.length}
					itemSize={3}
				/>
				<bufferAttribute
					attach='index'
					array={new Uint32Array(face_index)}
					count={face_index.length}
					itemSize={1}
				/>
			</bufferGeometry>
			{(three.scene.background instanceof THREE.Color) &&
				<meshBasicMaterial color={three.scene.background} side={2}/>}
		</mesh>
		<lineSegments>
			<bufferGeometry>
				<bufferAttribute
					attach='attributes-position'
					array={new Float32Array(circle_vector.flat())}
					count={circle_vector.length}
					itemSize={3}
				/>
				<bufferAttribute
					attach='index'
					array={new Uint32Array(line_index)}
					count={line_index.length}
					itemSize={1}
				/>
			</bufferGeometry>
			{props.lineMaterial}
		</lineSegments>
	</group>
}
function normalDistribution(){
	const x = Math.random();
	const y = Math.random();
	const z1 = Math.sqrt(-2*Math.log(x))*Math.cos(2 * Math.PI  * y);
	const z2 = Math.sqrt(-2*Math.log(x))*Math.sin(2 * Math.PI  * y);
	return z1
}
const Green=(props:{radius: number})=>{
	const v=[...Array(10000)].map(()=>{
		const x=normalDistribution()
		const y=normalDistribution()
		const z=normalDistribution()
		const d=Math.sqrt(x*x+y*y+z*z)
		const ret = [x/d,y/d,z/d]
		return [...ret, ...ret.map(v=>v*(1+Math.random()*0.05))]
	}).flat(2)
	const i=v.map((_,i)=>i)
	return <>
		<lineSegments scale={[props.radius,props.radius,props.radius]}>
			<bufferGeometry>
				<bufferAttribute
					attach='attributes-position'
					array={new Float32Array(v)}
					count={v.length / 3}
					itemSize={3}
				/>
				<bufferAttribute
					attach='index'
					array={new Uint32Array(i)}
					count={i.length}
					itemSize={1}
				/>
				<bufferAttribute
					attach='attributes-color'
					array={new Float32Array(v.map(()=>Math.random()))}
					count={v.length / 3}
					itemSize={3}
				/>
			</bufferGeometry>
			<lineBasicMaterial vertexColors={true}/>
		</lineSegments>
	</>
}

const EarthUI = (props: {}) => {
	const radius = 1
	return <Canvas
		style={{left: 0, right: 0, top: 0, bottom: 0, position: "absolute", zIndex: -1}}
		linear
		flat
		camera={{near: 0.001, fov: 45, position: [1.8, 1.8, -1.8]}}
		gl={{antialias: false}}
	>
		<OrbitControls
			autoRotate
			autoRotateSpeed={0.1}  // 数字を小さくするとゆっくり、大きくすると速くなる
		/>
		<Earth radius={radius} lineMaterial={<lineBasicMaterial color={"#ddd"}/>}/>
		<Green radius={10}/>
	</Canvas>
}
export default EarthUI