import {atom} from 'nanostores';

export const fragmentStore = atom(
`precision highp float;
varying vec2 vUv;
void main() {
    gl_FragColor = vec4(vUv, 0.0, 1.0);
}
`)