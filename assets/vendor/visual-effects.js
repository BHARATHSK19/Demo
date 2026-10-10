function ci(n){let t=n[0],e=n[1],i=n[2];return Math.sqrt(t*t+e*e+i*i)}function tr(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function Xl(n,t,e,i){return n[0]=t,n[1]=e,n[2]=i,n}function so(n,t,e){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n[2]=t[2]+e[2],n}function ro(n,t,e){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n[2]=t[2]-e[2],n}function ql(n,t,e){return n[0]=t[0]*e[0],n[1]=t[1]*e[1],n[2]=t[2]*e[2],n}function Yl(n,t,e){return n[0]=t[0]/e[0],n[1]=t[1]/e[1],n[2]=t[2]/e[2],n}function nr(n,t,e){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n}function Zl(n,t){let e=t[0]-n[0],i=t[1]-n[1],s=t[2]-n[2];return Math.sqrt(e*e+i*i+s*s)}function Jl(n,t){let e=t[0]-n[0],i=t[1]-n[1],s=t[2]-n[2];return e*e+i*i+s*s}function ao(n){let t=n[0],e=n[1],i=n[2];return t*t+e*e+i*i}function $l(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n}function Kl(n,t){return n[0]=1/t[0],n[1]=1/t[1],n[2]=1/t[2],n}function er(n,t){let e=t[0],i=t[1],s=t[2],r=e*e+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n}function oo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function lo(n,t,e){let i=t[0],s=t[1],r=t[2],a=e[0],o=e[1],l=e[2];return n[0]=s*l-r*o,n[1]=r*a-i*l,n[2]=i*o-s*a,n}function Ql(n,t,e,i){let s=t[0],r=t[1],a=t[2];return n[0]=s+i*(e[0]-s),n[1]=r+i*(e[1]-r),n[2]=a+i*(e[2]-a),n}function jl(n,t,e,i,s){let r=Math.exp(-i*s),a=t[0],o=t[1],l=t[2];return n[0]=e[0]+(a-e[0])*r,n[1]=e[1]+(o-e[1])*r,n[2]=e[2]+(l-e[2])*r,n}function tc(n,t,e){let i=t[0],s=t[1],r=t[2],a=e[3]*i+e[7]*s+e[11]*r+e[15];return a=a||1,n[0]=(e[0]*i+e[4]*s+e[8]*r+e[12])/a,n[1]=(e[1]*i+e[5]*s+e[9]*r+e[13])/a,n[2]=(e[2]*i+e[6]*s+e[10]*r+e[14])/a,n}function ec(n,t,e){let i=t[0],s=t[1],r=t[2],a=e[3]*i+e[7]*s+e[11]*r+e[15];return a=a||1,n[0]=(e[0]*i+e[4]*s+e[8]*r)/a,n[1]=(e[1]*i+e[5]*s+e[9]*r)/a,n[2]=(e[2]*i+e[6]*s+e[10]*r)/a,n}function nc(n,t,e){let i=t[0],s=t[1],r=t[2];return n[0]=i*e[0]+s*e[3]+r*e[6],n[1]=i*e[1]+s*e[4]+r*e[7],n[2]=i*e[2]+s*e[5]+r*e[8],n}function ic(n,t,e){let i=t[0],s=t[1],r=t[2],a=e[0],o=e[1],l=e[2],c=e[3],u=o*r-l*s,d=l*i-a*r,h=a*s-o*i,p=o*h-l*d,x=l*u-a*h,y=a*d-o*u,m=c*2;return u*=m,d*=m,h*=m,p*=2,x*=2,y*=2,n[0]=i+u+p,n[1]=s+d+x,n[2]=r+h+y,n}var sc=(function(){let n=[0,0,0],t=[0,0,0];return function(e,i){tr(n,e),tr(t,i),er(n,n),er(t,t);let s=oo(n,t);return s>1?0:s<-1?Math.PI:Math.acos(s)}})();function rc(n,t){return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]}var Ve=class n extends Array{constructor(t=0,e=t,i=t){return super(t,e,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,e=t,i=t){return t.length?this.copy(t):(Xl(this,t,e,i),this)}copy(t){return tr(this,t),this}add(t,e){return e?so(this,t,e):so(this,this,t),this}sub(t,e){return e?ro(this,t,e):ro(this,this,t),this}multiply(t){return t.length?ql(this,this,t):nr(this,this,t),this}divide(t){return t.length?Yl(this,this,t):nr(this,this,1/t),this}inverse(t=this){return Kl(this,t),this}len(){return ci(this)}distance(t){return t?Zl(this,t):ci(this)}squaredLen(){return ao(this)}squaredDistance(t){return t?Jl(this,t):ao(this)}negate(t=this){return $l(this,t),this}cross(t,e){return e?lo(this,t,e):lo(this,this,t),this}scale(t){return nr(this,this,t),this}normalize(){return er(this,this),this}dot(t){return oo(this,t)}equals(t){return rc(this,t)}applyMatrix3(t){return nc(this,this,t),this}applyMatrix4(t){return tc(this,this,t),this}scaleRotateMatrix4(t){return ec(this,this,t),this}applyQuaternion(t){return ic(this,this,t),this}angle(t){return sc(this,t)}lerp(t,e){return Ql(this,this,t,e),this}smoothLerp(t,e,i){return jl(this,this,t,e,i),this}clone(){return new n(this[0],this[1],this[2])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}transformDirection(t){let e=this[0],i=this[1],s=this[2];return this[0]=t[0]*e+t[4]*i+t[8]*s,this[1]=t[1]*e+t[5]*i+t[9]*s,this[2]=t[2]*e+t[6]*i+t[10]*s,this.normalize()}};var oc=new Ve,ju=1,td=1,lc=!1,ir=class{constructor(t,e={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=e,this.id=ju++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in e)this.addAttribute(i,e[i])}addAttribute(t,e){if(this.attributes[t]=e,e.id=td++,e.size=e.size||1,e.type=e.type||(e.data.constructor===Float32Array?this.gl.FLOAT:e.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),e.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,e.normalized=e.normalized||!1,e.stride=e.stride||0,e.offset=e.offset||0,e.count=e.count||(e.stride?e.data.byteLength/e.stride:e.data.length/e.size),e.divisor=e.instanced||0,e.needsUpdate=!1,e.usage=e.usage||this.gl.STATIC_DRAW,e.buffer||this.updateAttribute(e),e.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==e.count*e.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,e.count*e.divisor);this.instancedCount=e.count*e.divisor}else t==="index"?this.drawRange.count=e.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,e.count))}updateAttribute(t){let e=!t.buffer;e&&(t.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),e?this.gl.bufferData(t.target,t.data,t.usage):this.gl.bufferSubData(t.target,0,t.data),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((e,{name:i,type:s})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}let r=this.attributes[i];this.gl.bindBuffer(r.target,r.buffer),this.glState.boundBuffer=r.buffer;let a=1;s===35674&&(a=2),s===35675&&(a=3),s===35676&&(a=4);let o=r.size/a,l=a===1?0:a*a*4,c=a===1?0:a*4;for(let u=0;u<a;u++)this.gl.vertexAttribPointer(e+u,o,r.type,r.normalized,r.stride+l,r.offset+u*c),this.gl.enableVertexAttribArray(e+u),this.gl.renderer.vertexAttribDivisor(e+u,r.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:e=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((s,{name:r})=>{let a=this.attributes[r];a.needsUpdate&&this.updateAttribute(a)});let i=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(e,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(e,this.drawRange.start,this.drawRange.count)}getPosition(){let t=this.attributes.position;if(t.data)return t;if(!lc)return console.warn("No position buffer data found to compute bounds"),lc=!0}computeBoundingBox(t){t||(t=this.getPosition());let e=t.data,i=t.size;this.bounds||(this.bounds={min:new Ve,max:new Ve,center:new Ve,scale:new Ve,radius:1/0});let s=this.bounds.min,r=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;s.set(1/0),r.set(-1/0);for(let l=0,c=e.length;l<c;l+=i){let u=e[l],d=e[l+1],h=e[l+2];s.x=Math.min(u,s.x),s.y=Math.min(d,s.y),s.z=Math.min(h,s.z),r.x=Math.max(u,r.x),r.y=Math.max(d,r.y),r.z=Math.max(h,r.z)}o.sub(r,s),a.add(s,r).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());let e=t.data,i=t.size;this.bounds||this.computeBoundingBox(t);let s=0;for(let r=0,a=e.length;r<a;r+=i)oc.fromArray(e,r),s=Math.max(s,this.bounds.center.squaredDistance(oc));this.bounds.radius=Math.sqrt(s)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}};var ed=1,cc={},hi=class{constructor(t,{vertex:e,fragment:i,uniforms:s={},transparent:r=!1,cullFace:a=t.BACK,frontFace:o=t.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:u=t.LEQUAL}={}){t.canvas||console.error("gl not passed as first argument to Program"),this.gl=t,this.uniforms=s,this.id=ed++,e||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=r,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=u,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=t.createShader(t.VERTEX_SHADER),this.fragmentShader=t.createShader(t.FRAGMENT_SHADER),this.program=t.createProgram(),t.attachShader(this.program,this.vertexShader),t.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:e,fragment:i})}setShaders({vertex:t,fragment:e}){if(t&&(this.gl.shaderSource(this.vertexShader,t),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${hc(t)}`)),e&&(this.gl.shaderSource(this.fragmentShader,e),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${hc(e)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<i;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));let l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;let s=[],r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(s[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=s.join("")}setBlendFunc(t,e,i,s){this.blendFunc.src=t,this.blendFunc.dst=e,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=s,t&&(this.transparent=!0)}setBlendEquation(t,e){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=e}setStencilFunc(t,e,i){this.stencilRef=e,this.stencilFunc.func=t,this.stencilFunc.ref=e,this.stencilFunc.mask=i}setStencilOp(t,e,i){this.stencilOp.stencilFail=t,this.stencilOp.depthFail=e,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:t=!1}={}){let e=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((s,r)=>{let a=this.uniforms[r.uniformName];for(let o of r.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return uc(`Active uniform ${r.name} has not been supplied`);if(a&&a.value===void 0)return uc(`${r.name} uniform is missing a value parameter`);if(a.value.texture)return e=e+1,a.value.update(e),co(this.gl,r.type,s,e);if(a.value.length&&a.value[0].texture){let o=[];return a.value.forEach(l=>{e=e+1,l.update(e),o.push(e)}),co(this.gl,r.type,s,o)}co(this.gl,r.type,s,a.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}};function co(n,t,e,i){i=i.length?nd(i):i;let s=n.renderer.state.uniformLocations.get(e);if(i.length)if(s===void 0||s.length!==i.length)n.renderer.state.uniformLocations.set(e,i.slice(0));else{if(id(s,i))return;s.set?s.set(i):sd(s,i),n.renderer.state.uniformLocations.set(e,s)}else{if(s===i)return;n.renderer.state.uniformLocations.set(e,i)}switch(t){case 5126:return i.length?n.uniform1fv(e,i):n.uniform1f(e,i);case 35664:return n.uniform2fv(e,i);case 35665:return n.uniform3fv(e,i);case 35666:return n.uniform4fv(e,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?n.uniform1iv(e,i):n.uniform1i(e,i);case 35671:case 35667:return n.uniform2iv(e,i);case 35672:case 35668:return n.uniform3iv(e,i);case 35673:case 35669:return n.uniform4iv(e,i);case 35674:return n.uniformMatrix2fv(e,!1,i);case 35675:return n.uniformMatrix3fv(e,!1,i);case 35676:return n.uniformMatrix4fv(e,!1,i)}}function hc(n){let t=n.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function nd(n){let t=n.length,e=n[0].length;if(e===void 0)return n;let i=t*e,s=cc[i];s||(cc[i]=s=new Float32Array(i));for(let r=0;r<t;r++)s.set(n[r],r*e);return s}function id(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function sd(n,t){for(let e=0,i=n.length;e<i;e++)n[e]=t[e]}var ho=0;function uc(n){ho>100||(console.warn(n),ho++,ho>100&&console.warn("More than 100 program warnings - stopping logs."))}var uo=new Ve,rd=1,ui=class{constructor({canvas:t=document.createElement("canvas"),width:e=300,height:i=150,dpr:s=1,alpha:r=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:u=!1,powerPreference:d="default",autoClear:h=!0,webgl:p=2}={}){let x={alpha:r,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d};this.dpr=s,this.alpha=r,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=h,this.id=rd++,p===2&&(this.gl=t.getContext("webgl2",x)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",x)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(e,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,e){this.width=t,this.height=e,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=e*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:t+"px",height:e+"px"})}setViewport(t,e,i=0,s=0){this.state.viewport.width===t&&this.state.viewport.height===e||(this.state.viewport.width=t,this.state.viewport.height=e,this.state.viewport.x=i,this.state.viewport.y=s,this.gl.viewport(i,s,t,e))}setScissor(t,e,i=0,s=0){this.gl.scissor(i,s,t,e)}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,e,i,s){this.state.blendFunc.src===t&&this.state.blendFunc.dst===e&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===s||(this.state.blendFunc.src=t,this.state.blendFunc.dst=e,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=s,i!==void 0?this.gl.blendFuncSeparate(t,e,i,s):this.gl.blendFunc(t,e))}setBlendEquation(t,e){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===e)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=e,e!==void 0?this.gl.blendEquationSeparate(t,e):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}setStencilMask(t){this.state.stencilMask!==t&&(this.state.stencilMask=t,this.gl.stencilMask(t))}setStencilFunc(t,e,i){this.state.stencilFunc===t&&this.state.stencilRef===e&&this.state.stencilFuncMask===i||(this.state.stencilFunc=t||this.gl.ALWAYS,this.state.stencilRef=e||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(t||this.gl.ALWAYS,e||0,i||0))}setStencilOp(t,e,i){this.state.stencilFail===t&&this.state.stencilDepthFail===e&&this.state.stencilDepthPass===i||(this.state.stencilFail=t,this.state.stencilDepthFail=e,this.state.stencilDepthPass=i,this.gl.stencilOp(t,e,i))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:e=null}={}){this.state.framebuffer!==e&&(this.state.framebuffer=e,this.gl.bindFramebuffer(t,e))}getExtension(t,e,i){return e&&this.gl[e]?this.gl[e].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),e?this.extensions[t]?this.extensions[t][i].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:t.zDepth!==e.zDepth?t.zDepth-e.zDepth:e.id-t.id}sortTransparent(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.zDepth!==e.zDepth?e.zDepth-t.zDepth:e.id-t.id}sortUI(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:e.id-t.id}getRenderList({scene:t,camera:e,frustumCull:i,sort:s}){let r=[];if(e&&i&&e.updateFrustum(),t.traverse(a=>{if(!a.visible)return!0;a.draw&&(i&&a.frustumCulled&&e&&!e.frustumIntersectsMesh(a)||r.push(a))}),s){let a=[],o=[],l=[];r.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!e)&&(c.worldMatrix.getTranslation(uo),uo.applyMatrix4(e.projectionViewMatrix),c.zDepth=uo.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),r=a.concat(o,l)}return r}render({scene:t,camera:e,target:i=null,update:s=!0,sort:r=!0,frustumCull:a=!0,clear:o}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),s&&t.updateMatrixWorld(),e&&e.updateMatrixWorld(),this.getRenderList({scene:t,camera:e,frustumCull:a,sort:r}).forEach(c=>{c.draw({camera:e})})}};function dc(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function fc(n,t,e,i,s){return n[0]=t,n[1]=e,n[2]=i,n[3]=s,n}function pc(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=e*e+i*i+s*s+r*r;return a>0&&(a=1/Math.sqrt(a)),n[0]=e*a,n[1]=i*a,n[2]=s*a,n[3]=r*a,n}function mc(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function gc(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function xc(n,t,e){e=e*.5;let i=Math.sin(e);return n[0]=i*t[0],n[1]=i*t[1],n[2]=i*t[2],n[3]=Math.cos(e),n}function fo(n,t,e){let i=t[0],s=t[1],r=t[2],a=t[3],o=e[0],l=e[1],c=e[2],u=e[3];return n[0]=i*u+a*o+s*c-r*l,n[1]=s*u+a*l+r*o-i*c,n[2]=r*u+a*c+i*l-s*o,n[3]=a*u-i*o-s*l-r*c,n}function _c(n,t,e){e*=.5;let i=t[0],s=t[1],r=t[2],a=t[3],o=Math.sin(e),l=Math.cos(e);return n[0]=i*l+a*o,n[1]=s*l+r*o,n[2]=r*l-s*o,n[3]=a*l-i*o,n}function vc(n,t,e){e*=.5;let i=t[0],s=t[1],r=t[2],a=t[3],o=Math.sin(e),l=Math.cos(e);return n[0]=i*l-r*o,n[1]=s*l+a*o,n[2]=r*l+i*o,n[3]=a*l-s*o,n}function yc(n,t,e){e*=.5;let i=t[0],s=t[1],r=t[2],a=t[3],o=Math.sin(e),l=Math.cos(e);return n[0]=i*l+s*o,n[1]=s*l-i*o,n[2]=r*l+a*o,n[3]=a*l-r*o,n}function Mc(n,t,e,i){let s=t[0],r=t[1],a=t[2],o=t[3],l=e[0],c=e[1],u=e[2],d=e[3],h,p,x,y,m;return p=s*l+r*c+a*u+o*d,p<0&&(p=-p,l=-l,c=-c,u=-u,d=-d),1-p>1e-6?(h=Math.acos(p),x=Math.sin(h),y=Math.sin((1-i)*h)/x,m=Math.sin(i*h)/x):(y=1-i,m=i),n[0]=y*s+m*l,n[1]=y*r+m*c,n[2]=y*a+m*u,n[3]=y*o+m*d,n}function Sc(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=e*e+i*i+s*s+r*r,o=a?1/a:0;return n[0]=-e*o,n[1]=-i*o,n[2]=-s*o,n[3]=r*o,n}function bc(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=t[3],n}function wc(n,t){let e=t[0]+t[4]+t[8],i;if(e>0)i=Math.sqrt(e+1),n[3]=.5*i,i=.5/i,n[0]=(t[5]-t[7])*i,n[1]=(t[6]-t[2])*i,n[2]=(t[1]-t[3])*i;else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[s*3+s]&&(s=2);let r=(s+1)%3,a=(s+2)%3;i=Math.sqrt(t[s*3+s]-t[r*3+r]-t[a*3+a]+1),n[s]=.5*i,i=.5/i,n[3]=(t[r*3+a]-t[a*3+r])*i,n[r]=(t[r*3+s]+t[s*3+r])*i,n[a]=(t[a*3+s]+t[s*3+a])*i}return n}function Ec(n,t,e="YXZ"){let i=Math.sin(t[0]*.5),s=Math.cos(t[0]*.5),r=Math.sin(t[1]*.5),a=Math.cos(t[1]*.5),o=Math.sin(t[2]*.5),l=Math.cos(t[2]*.5);return e==="XYZ"?(n[0]=i*a*l+s*r*o,n[1]=s*r*l-i*a*o,n[2]=s*a*o+i*r*l,n[3]=s*a*l-i*r*o):e==="YXZ"?(n[0]=i*a*l+s*r*o,n[1]=s*r*l-i*a*o,n[2]=s*a*o-i*r*l,n[3]=s*a*l+i*r*o):e==="ZXY"?(n[0]=i*a*l-s*r*o,n[1]=s*r*l+i*a*o,n[2]=s*a*o+i*r*l,n[3]=s*a*l-i*r*o):e==="ZYX"?(n[0]=i*a*l-s*r*o,n[1]=s*r*l+i*a*o,n[2]=s*a*o-i*r*l,n[3]=s*a*l+i*r*o):e==="YZX"?(n[0]=i*a*l+s*r*o,n[1]=s*r*l+i*a*o,n[2]=s*a*o-i*r*l,n[3]=s*a*l-i*r*o):e==="XZY"&&(n[0]=i*a*l-s*r*o,n[1]=s*r*l-i*a*o,n[2]=s*a*o+i*r*l,n[3]=s*a*l+i*r*o),n}var Tc=dc,Ac=fc;var Cc=mc;var Rc=pc;var sr=class extends Array{constructor(t=0,e=0,i=0,s=1){super(t,e,i,s),this.onChange=()=>{},this._target=this;let r=["0","1","2","3"];return new Proxy(this,{set(a,o){let l=Reflect.set(...arguments);return l&&r.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set w(t){this._target[3]=t,this.onChange()}identity(){return gc(this._target),this.onChange(),this}set(t,e,i,s){return t.length?this.copy(t):(Ac(this._target,t,e,i,s),this.onChange(),this)}rotateX(t){return _c(this._target,this._target,t),this.onChange(),this}rotateY(t){return vc(this._target,this._target,t),this.onChange(),this}rotateZ(t){return yc(this._target,this._target,t),this.onChange(),this}inverse(t=this._target){return Sc(this._target,t),this.onChange(),this}conjugate(t=this._target){return bc(this._target,t),this.onChange(),this}copy(t){return Tc(this._target,t),this.onChange(),this}normalize(t=this._target){return Rc(this._target,t),this.onChange(),this}multiply(t,e){return e?fo(this._target,t,e):fo(this._target,this._target,t),this.onChange(),this}dot(t){return Cc(this._target,t)}fromMatrix3(t){return wc(this._target,t),this.onChange(),this}fromEuler(t,e){return Ec(this._target,t,t.order),e||this.onChange(),this}fromAxisAngle(t,e){return xc(this._target,t,e),this.onChange(),this}slerp(t,e){return Mc(this._target,this._target,t,e),this.onChange(),this}fromArray(t,e=0){return this._target[0]=t[e],this._target[1]=t[e+1],this._target[2]=t[e+2],this._target[3]=t[e+3],this.onChange(),this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t}};var ld=1e-6;function Pc(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function Ic(n,t,e,i,s,r,a,o,l,c,u,d,h,p,x,y,m){return n[0]=t,n[1]=e,n[2]=i,n[3]=s,n[4]=r,n[5]=a,n[6]=o,n[7]=l,n[8]=c,n[9]=u,n[10]=d,n[11]=h,n[12]=p,n[13]=x,n[14]=y,n[15]=m,n}function Lc(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Dc(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],x=t[12],y=t[13],m=t[14],f=t[15],T=e*o-i*a,A=e*l-s*a,M=e*c-r*a,w=i*l-s*o,b=i*c-r*o,C=s*c-r*l,_=u*y-d*x,E=u*m-h*x,P=u*f-p*x,L=d*m-h*y,N=d*f-p*y,z=h*f-p*m,R=T*z-A*N+M*L+w*P-b*E+C*_;return R?(R=1/R,n[0]=(o*z-l*N+c*L)*R,n[1]=(s*N-i*z-r*L)*R,n[2]=(y*C-m*b+f*w)*R,n[3]=(h*b-d*C-p*w)*R,n[4]=(l*P-a*z-c*E)*R,n[5]=(e*z-s*P+r*E)*R,n[6]=(m*M-x*C-f*A)*R,n[7]=(u*C-h*M+p*A)*R,n[8]=(a*N-o*P+c*_)*R,n[9]=(i*P-e*N-r*_)*R,n[10]=(x*b-y*M+f*T)*R,n[11]=(d*M-u*b-p*T)*R,n[12]=(o*E-a*L-l*_)*R,n[13]=(e*L-i*E+s*_)*R,n[14]=(y*A-x*w-m*T)*R,n[15]=(u*w-d*A+h*T)*R,n):null}function po(n){let t=n[0],e=n[1],i=n[2],s=n[3],r=n[4],a=n[5],o=n[6],l=n[7],c=n[8],u=n[9],d=n[10],h=n[11],p=n[12],x=n[13],y=n[14],m=n[15],f=t*a-e*r,T=t*o-i*r,A=t*l-s*r,M=e*o-i*a,w=e*l-s*a,b=i*l-s*o,C=c*x-u*p,_=c*y-d*p,E=c*m-h*p,P=u*y-d*x,L=u*m-h*x,N=d*m-h*y;return f*N-T*L+A*P+M*E-w*_+b*C}function mo(n,t,e){let i=t[0],s=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],d=t[8],h=t[9],p=t[10],x=t[11],y=t[12],m=t[13],f=t[14],T=t[15],A=e[0],M=e[1],w=e[2],b=e[3];return n[0]=A*i+M*o+w*d+b*y,n[1]=A*s+M*l+w*h+b*m,n[2]=A*r+M*c+w*p+b*f,n[3]=A*a+M*u+w*x+b*T,A=e[4],M=e[5],w=e[6],b=e[7],n[4]=A*i+M*o+w*d+b*y,n[5]=A*s+M*l+w*h+b*m,n[6]=A*r+M*c+w*p+b*f,n[7]=A*a+M*u+w*x+b*T,A=e[8],M=e[9],w=e[10],b=e[11],n[8]=A*i+M*o+w*d+b*y,n[9]=A*s+M*l+w*h+b*m,n[10]=A*r+M*c+w*p+b*f,n[11]=A*a+M*u+w*x+b*T,A=e[12],M=e[13],w=e[14],b=e[15],n[12]=A*i+M*o+w*d+b*y,n[13]=A*s+M*l+w*h+b*m,n[14]=A*r+M*c+w*p+b*f,n[15]=A*a+M*u+w*x+b*T,n}function Fc(n,t,e){let i=e[0],s=e[1],r=e[2],a,o,l,c,u,d,h,p,x,y,m,f;return t===n?(n[12]=t[0]*i+t[4]*s+t[8]*r+t[12],n[13]=t[1]*i+t[5]*s+t[9]*r+t[13],n[14]=t[2]*i+t[6]*s+t[10]*r+t[14],n[15]=t[3]*i+t[7]*s+t[11]*r+t[15]):(a=t[0],o=t[1],l=t[2],c=t[3],u=t[4],d=t[5],h=t[6],p=t[7],x=t[8],y=t[9],m=t[10],f=t[11],n[0]=a,n[1]=o,n[2]=l,n[3]=c,n[4]=u,n[5]=d,n[6]=h,n[7]=p,n[8]=x,n[9]=y,n[10]=m,n[11]=f,n[12]=a*i+u*s+x*r+t[12],n[13]=o*i+d*s+y*r+t[13],n[14]=l*i+h*s+m*r+t[14],n[15]=c*i+p*s+f*r+t[15]),n}function Nc(n,t,e){let i=e[0],s=e[1],r=e[2];return n[0]=t[0]*i,n[1]=t[1]*i,n[2]=t[2]*i,n[3]=t[3]*i,n[4]=t[4]*s,n[5]=t[5]*s,n[6]=t[6]*s,n[7]=t[7]*s,n[8]=t[8]*r,n[9]=t[9]*r,n[10]=t[10]*r,n[11]=t[11]*r,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function Uc(n,t,e,i){let s=i[0],r=i[1],a=i[2],o=Math.hypot(s,r,a),l,c,u,d,h,p,x,y,m,f,T,A,M,w,b,C,_,E,P,L,N,z,R,B;return Math.abs(o)<ld?null:(o=1/o,s*=o,r*=o,a*=o,l=Math.sin(e),c=Math.cos(e),u=1-c,d=t[0],h=t[1],p=t[2],x=t[3],y=t[4],m=t[5],f=t[6],T=t[7],A=t[8],M=t[9],w=t[10],b=t[11],C=s*s*u+c,_=r*s*u+a*l,E=a*s*u-r*l,P=s*r*u-a*l,L=r*r*u+c,N=a*r*u+s*l,z=s*a*u+r*l,R=r*a*u-s*l,B=a*a*u+c,n[0]=d*C+y*_+A*E,n[1]=h*C+m*_+M*E,n[2]=p*C+f*_+w*E,n[3]=x*C+T*_+b*E,n[4]=d*P+y*L+A*N,n[5]=h*P+m*L+M*N,n[6]=p*P+f*L+w*N,n[7]=x*P+T*L+b*N,n[8]=d*z+y*R+A*B,n[9]=h*z+m*R+M*B,n[10]=p*z+f*R+w*B,n[11]=x*z+T*R+b*B,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n)}function Oc(n,t){return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function go(n,t){let e=t[0],i=t[1],s=t[2],r=t[4],a=t[5],o=t[6],l=t[8],c=t[9],u=t[10];return n[0]=Math.hypot(e,i,s),n[1]=Math.hypot(r,a,o),n[2]=Math.hypot(l,c,u),n}function Bc(n){let t=n[0],e=n[1],i=n[2],s=n[4],r=n[5],a=n[6],o=n[8],l=n[9],c=n[10],u=t*t+e*e+i*i,d=s*s+r*r+a*a,h=o*o+l*l+c*c;return Math.sqrt(Math.max(u,d,h))}var xo=(function(){let n=[1,1,1];return function(t,e){let i=n;go(i,e);let s=1/i[0],r=1/i[1],a=1/i[2],o=e[0]*s,l=e[1]*r,c=e[2]*a,u=e[4]*s,d=e[5]*r,h=e[6]*a,p=e[8]*s,x=e[9]*r,y=e[10]*a,m=o+d+y,f=0;return m>0?(f=Math.sqrt(m+1)*2,t[3]=.25*f,t[0]=(h-x)/f,t[1]=(p-c)/f,t[2]=(l-u)/f):o>d&&o>y?(f=Math.sqrt(1+o-d-y)*2,t[3]=(h-x)/f,t[0]=.25*f,t[1]=(l+u)/f,t[2]=(p+c)/f):d>y?(f=Math.sqrt(1+d-o-y)*2,t[3]=(p-c)/f,t[0]=(l+u)/f,t[1]=.25*f,t[2]=(h+x)/f):(f=Math.sqrt(1+y-o-d)*2,t[3]=(l-u)/f,t[0]=(p+c)/f,t[1]=(h+x)/f,t[2]=.25*f),t}})();function zc(n,t,e,i){let s=ci([n[0],n[1],n[2]]),r=ci([n[4],n[5],n[6]]),a=ci([n[8],n[9],n[10]]);po(n)<0&&(s=-s),e[0]=n[12],e[1]=n[13],e[2]=n[14];let l=n.slice(),c=1/s,u=1/r,d=1/a;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=u,l[5]*=u,l[6]*=u,l[8]*=d,l[9]*=d,l[10]*=d,xo(t,l),i[0]=s,i[1]=r,i[2]=a}function Vc(n,t,e,i){let s=n,r=t[0],a=t[1],o=t[2],l=t[3],c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,x=r*d,y=a*u,m=a*d,f=o*d,T=l*c,A=l*u,M=l*d,w=i[0],b=i[1],C=i[2];return s[0]=(1-(y+f))*w,s[1]=(p+M)*w,s[2]=(x-A)*w,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(h+f))*b,s[6]=(m+T)*b,s[7]=0,s[8]=(x+A)*C,s[9]=(m-T)*C,s[10]=(1-(h+y))*C,s[11]=0,s[12]=e[0],s[13]=e[1],s[14]=e[2],s[15]=1,s}function kc(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=e+e,o=i+i,l=s+s,c=e*a,u=i*a,d=i*o,h=s*a,p=s*o,x=s*l,y=r*a,m=r*o,f=r*l;return n[0]=1-d-x,n[1]=u+f,n[2]=h-m,n[3]=0,n[4]=u-f,n[5]=1-c-x,n[6]=p+y,n[7]=0,n[8]=h+m,n[9]=p-y,n[10]=1-c-d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Gc(n,t,e,i,s){let r=1/Math.tan(t/2),a=1/(i-s);return n[0]=r/e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=(s+i)*a,n[11]=-1,n[12]=0,n[13]=0,n[14]=2*s*i*a,n[15]=0,n}function Hc(n,t,e,i,s,r,a){let o=1/(t-e),l=1/(i-s),c=1/(r-a);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*l,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*c,n[11]=0,n[12]=(t+e)*o,n[13]=(s+i)*l,n[14]=(a+r)*c,n[15]=1,n}function Wc(n,t,e,i){let s=t[0],r=t[1],a=t[2],o=i[0],l=i[1],c=i[2],u=s-e[0],d=r-e[1],h=a-e[2],p=u*u+d*d+h*h;p===0?h=1:(p=1/Math.sqrt(p),u*=p,d*=p,h*=p);let x=l*h-c*d,y=c*u-o*h,m=o*d-l*u;return p=x*x+y*y+m*m,p===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,x=l*h-c*d,y=c*u-o*h,m=o*d-l*u,p=x*x+y*y+m*m),p=1/Math.sqrt(p),x*=p,y*=p,m*=p,n[0]=x,n[1]=y,n[2]=m,n[3]=0,n[4]=d*m-h*y,n[5]=h*x-u*m,n[6]=u*y-d*x,n[7]=0,n[8]=u,n[9]=d,n[10]=h,n[11]=0,n[12]=s,n[13]=r,n[14]=a,n[15]=1,n}function _o(n,t,e){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n[2]=t[2]+e[2],n[3]=t[3]+e[3],n[4]=t[4]+e[4],n[5]=t[5]+e[5],n[6]=t[6]+e[6],n[7]=t[7]+e[7],n[8]=t[8]+e[8],n[9]=t[9]+e[9],n[10]=t[10]+e[10],n[11]=t[11]+e[11],n[12]=t[12]+e[12],n[13]=t[13]+e[13],n[14]=t[14]+e[14],n[15]=t[15]+e[15],n}function vo(n,t,e){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n[2]=t[2]-e[2],n[3]=t[3]-e[3],n[4]=t[4]-e[4],n[5]=t[5]-e[5],n[6]=t[6]-e[6],n[7]=t[7]-e[7],n[8]=t[8]-e[8],n[9]=t[9]-e[9],n[10]=t[10]-e[10],n[11]=t[11]-e[11],n[12]=t[12]-e[12],n[13]=t[13]-e[13],n[14]=t[14]-e[14],n[15]=t[15]-e[15],n}function Xc(n,t,e){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3]*e,n[4]=t[4]*e,n[5]=t[5]*e,n[6]=t[6]*e,n[7]=t[7]*e,n[8]=t[8]*e,n[9]=t[9]*e,n[10]=t[10]*e,n[11]=t[11]*e,n[12]=t[12]*e,n[13]=t[13]*e,n[14]=t[14]*e,n[15]=t[15]*e,n}var Tn=class extends Array{constructor(t=1,e=0,i=0,s=0,r=0,a=1,o=0,l=0,c=0,u=0,d=1,h=0,p=0,x=0,y=0,m=1){return super(t,e,i,s,r,a,o,l,c,u,d,h,p,x,y,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,e,i,s,r,a,o,l,c,u,d,h,p,x,y,m){return t.length?this.copy(t):(Ic(this,t,e,i,s,r,a,o,l,c,u,d,h,p,x,y,m),this)}translate(t,e=this){return Fc(this,e,t),this}rotate(t,e,i=this){return Uc(this,i,t,e),this}scale(t,e=this){return Nc(this,e,typeof t=="number"?[t,t,t]:t),this}add(t,e){return e?_o(this,t,e):_o(this,this,t),this}sub(t,e){return e?vo(this,t,e):vo(this,this,t),this}multiply(t,e){return t.length?e?mo(this,t,e):mo(this,this,t):Xc(this,this,t),this}identity(){return Lc(this),this}copy(t){return Pc(this,t),this}fromPerspective({fov:t,aspect:e,near:i,far:s}={}){return Gc(this,t,e,i,s),this}fromOrthogonal({left:t,right:e,bottom:i,top:s,near:r,far:a}){return Hc(this,t,e,i,s,r,a),this}fromQuaternion(t){return kc(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return Dc(this,t),this}compose(t,e,i){return Vc(this,t,e,i),this}decompose(t,e,i){return zc(this,t,e,i),this}getRotation(t){return xo(t,this),this}getTranslation(t){return Oc(t,this),this}getScaling(t){return go(t,this),this}getMaxScaleOnAxis(){return Bc(this)}lookAt(t,e,i){return Wc(this,t,e,i),this}determinant(){return po(this)}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this[4]=t[e+4],this[5]=t[e+5],this[6]=t[e+6],this[7]=t[e+7],this[8]=t[e+8],this[9]=t[e+9],this[10]=t[e+10],this[11]=t[e+11],this[12]=t[e+12],this[13]=t[e+13],this[14]=t[e+14],this[15]=t[e+15],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t[e+4]=this[4],t[e+5]=this[5],t[e+6]=this[6],t[e+7]=this[7],t[e+8]=this[8],t[e+9]=this[9],t[e+10]=this[10],t[e+11]=this[11],t[e+12]=this[12],t[e+13]=this[13],t[e+14]=this[14],t[e+15]=this[15],t}};function qc(n,t,e="YXZ"){return e==="XYZ"?(n[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(n[0]=Math.atan2(-t[9],t[10]),n[2]=Math.atan2(-t[4],t[0])):(n[0]=Math.atan2(t[6],t[5]),n[2]=0)):e==="YXZ"?(n[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(n[1]=Math.atan2(t[8],t[10]),n[2]=Math.atan2(t[1],t[5])):(n[1]=Math.atan2(-t[2],t[0]),n[2]=0)):e==="ZXY"?(n[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(n[1]=Math.atan2(-t[2],t[10]),n[2]=Math.atan2(-t[4],t[5])):(n[1]=0,n[2]=Math.atan2(t[1],t[0]))):e==="ZYX"?(n[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(n[0]=Math.atan2(t[6],t[10]),n[2]=Math.atan2(t[1],t[0])):(n[0]=0,n[2]=Math.atan2(-t[4],t[5]))):e==="YZX"?(n[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(n[0]=Math.atan2(-t[9],t[5]),n[1]=Math.atan2(-t[2],t[0])):(n[0]=0,n[1]=Math.atan2(t[8],t[10]))):e==="XZY"&&(n[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(n[0]=Math.atan2(t[6],t[5]),n[1]=Math.atan2(t[8],t[0])):(n[0]=Math.atan2(-t[9],t[10]),n[1]=0)),n}var Yc=new Tn,rr=class extends Array{constructor(t=0,e=t,i=t,s="YXZ"){super(t,e,i),this.order=s,this.onChange=()=>{},this._target=this;let r=["0","1","2"];return new Proxy(this,{set(a,o){let l=Reflect.set(...arguments);return l&&r.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set(t,e=t,i=t){return t.length?this.copy(t):(this._target[0]=t,this._target[1]=e,this._target[2]=i,this.onChange(),this)}copy(t){return this._target[0]=t[0],this._target[1]=t[1],this._target[2]=t[2],this.onChange(),this}reorder(t){return this._target.order=t,this.onChange(),this}fromRotationMatrix(t,e=this.order){return qc(this._target,t,e),this.onChange(),this}fromQuaternion(t,e=this.order,i){return Yc.fromQuaternion(t),this._target.fromRotationMatrix(Yc,e),i||this.onChange(),this}fromArray(t,e=0){return this._target[0]=t[e],this._target[1]=t[e+1],this._target[2]=t[e+2],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}};var ar=class{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Tn,this.worldMatrix=new Tn,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Ve,this.quaternion=new sr,this.scale=new Ve(1),this.rotation=new rr,this.up=new Ve(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(t,e=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,e&&t&&t.addChild(this,!1)}addChild(t,e=!0){~this.children.indexOf(t)||this.children.push(t),e&&t.setParent(this,!1)}removeChild(t,e=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),e&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let e=0,i=this.children.length;e<i;e++)this.children[e].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let e=0,i=this.children.length;e<i;e++)this.children[e].traverse(t)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,e=!1){e?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}};function Zc(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[4],n[4]=t[5],n[5]=t[6],n[6]=t[8],n[7]=t[9],n[8]=t[10],n}function Jc(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=e+e,o=i+i,l=s+s,c=e*a,u=i*a,d=i*o,h=s*a,p=s*o,x=s*l,y=r*a,m=r*o,f=r*l;return n[0]=1-d-x,n[3]=u-f,n[6]=h+m,n[1]=u+f,n[4]=1-c-x,n[7]=p-y,n[2]=h-m,n[5]=p+y,n[8]=1-c-d,n}function $c(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n}function Kc(n,t,e,i,s,r,a,o,l,c){return n[0]=t,n[1]=e,n[2]=i,n[3]=s,n[4]=r,n[5]=a,n[6]=o,n[7]=l,n[8]=c,n}function Qc(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=1,n[5]=0,n[6]=0,n[7]=0,n[8]=1,n}function jc(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=-u*r+o*l,p=c*r-a*l,x=e*d+i*h+s*p;return x?(x=1/x,n[0]=d*x,n[1]=(-u*i+s*c)*x,n[2]=(o*i-s*a)*x,n[3]=h*x,n[4]=(u*e-s*l)*x,n[5]=(-o*e+s*r)*x,n[6]=p*x,n[7]=(-c*e+i*l)*x,n[8]=(a*e-i*r)*x,n):null}function yo(n,t,e){let i=t[0],s=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],d=t[8],h=e[0],p=e[1],x=e[2],y=e[3],m=e[4],f=e[5],T=e[6],A=e[7],M=e[8];return n[0]=h*i+p*a+x*c,n[1]=h*s+p*o+x*u,n[2]=h*r+p*l+x*d,n[3]=y*i+m*a+f*c,n[4]=y*s+m*o+f*u,n[5]=y*r+m*l+f*d,n[6]=T*i+A*a+M*c,n[7]=T*s+A*o+M*u,n[8]=T*r+A*l+M*d,n}function th(n,t,e){let i=t[0],s=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],d=t[8],h=e[0],p=e[1];return n[0]=i,n[1]=s,n[2]=r,n[3]=a,n[4]=o,n[5]=l,n[6]=h*i+p*a+c,n[7]=h*s+p*o+u,n[8]=h*r+p*l+d,n}function eh(n,t,e){let i=t[0],s=t[1],r=t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],d=t[8],h=Math.sin(e),p=Math.cos(e);return n[0]=p*i+h*a,n[1]=p*s+h*o,n[2]=p*r+h*l,n[3]=p*a-h*i,n[4]=p*o-h*s,n[5]=p*l-h*r,n[6]=c,n[7]=u,n[8]=d,n}function nh(n,t,e){let i=e[0],s=e[1];return n[0]=i*t[0],n[1]=i*t[1],n[2]=i*t[2],n[3]=s*t[3],n[4]=s*t[4],n[5]=s*t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n}function ih(n,t){let e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],x=t[12],y=t[13],m=t[14],f=t[15],T=e*o-i*a,A=e*l-s*a,M=e*c-r*a,w=i*l-s*o,b=i*c-r*o,C=s*c-r*l,_=u*y-d*x,E=u*m-h*x,P=u*f-p*x,L=d*m-h*y,N=d*f-p*y,z=h*f-p*m,R=T*z-A*N+M*L+w*P-b*E+C*_;return R?(R=1/R,n[0]=(o*z-l*N+c*L)*R,n[1]=(l*P-a*z-c*E)*R,n[2]=(a*N-o*P+c*_)*R,n[3]=(s*N-i*z-r*L)*R,n[4]=(e*z-s*P+r*E)*R,n[5]=(i*P-e*N-r*_)*R,n[6]=(y*C-m*b+f*w)*R,n[7]=(m*M-x*C-f*A)*R,n[8]=(x*b-y*M+f*T)*R,n):null}var or=class extends Array{constructor(t=1,e=0,i=0,s=0,r=1,a=0,o=0,l=0,c=1){return super(t,e,i,s,r,a,o,l,c),this}set(t,e,i,s,r,a,o,l,c){return t.length?this.copy(t):(Kc(this,t,e,i,s,r,a,o,l,c),this)}translate(t,e=this){return th(this,e,t),this}rotate(t,e=this){return eh(this,e,t),this}scale(t,e=this){return nh(this,e,t),this}multiply(t,e){return e?yo(this,t,e):yo(this,this,t),this}identity(){return Qc(this),this}copy(t){return $c(this,t),this}fromMatrix4(t){return Zc(this,t),this}fromQuaternion(t){return Jc(this,t),this}fromBasis(t,e,i){return this.set(t[0],t[1],t[2],e[0],e[1],e[2],i[0],i[1],i[2]),this}inverse(t=this){return jc(this,t),this}getNormalMatrix(t){return ih(this,t),this}};var dd=0,di=class extends ar{constructor(t,{geometry:e,program:i,mode:s=t.TRIANGLES,frustumCulled:r=!0,renderOrder:a=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=dd++,this.geometry=e,this.program=i,this.mode=s,this.frustumCulled=r,this.renderOrder=a,this.modelViewMatrix=new Tn,this.normalMatrix=new or,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:t}));let e=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:e}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:t}))}};var sh=new Uint8Array(4);function rh(n){return(n&n-1)===0}var fd=1,cs=class{constructor(t,{image:e,target:i=t.TEXTURE_2D,type:s=t.UNSIGNED_BYTE,format:r=t.RGBA,internalFormat:a=r,wrapS:o=t.CLAMP_TO_EDGE,wrapT:l=t.CLAMP_TO_EDGE,wrapR:c=t.CLAMP_TO_EDGE,generateMipmaps:u=i===(t.TEXTURE_2D||t.TEXTURE_CUBE_MAP),minFilter:d=u?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:h=t.LINEAR,premultiplyAlpha:p=!1,unpackAlignment:x=4,flipY:y=i==(t.TEXTURE_2D||t.TEXTURE_3D),anisotropy:m=0,level:f=0,width:T,height:A=T,length:M=1}={}){this.gl=t,this.id=fd++,this.image=e,this.target=i,this.type=s,this.format=r,this.internalFormat=a,this.minFilter=d,this.magFilter=h,this.wrapS=o,this.wrapT=l,this.wrapR=c,this.generateMipmaps=u,this.premultiplyAlpha=p,this.unpackAlignment=x,this.flipY=y,this.anisotropy=Math.min(m,this.gl.renderer.parameters.maxAnisotropy),this.level=f,this.width=T,this.height=A,this.length=M,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(t=0){let e=!(this.image===this.store.image&&!this.needsUpdate);if((e||this.glState.textureUnits[t]!==this.id)&&(this.gl.renderer.activeTexture(t),this.bind()),!!e){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,this.level,this.internalFormat,this.format,this.type,this.image[i]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let i=0;i<this.image.length;i++)this.gl.compressedTexImage2D(this.target,i,this.internalFormat,this.image[i].width,this.image[i].height,0,this.image[i].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!rh(this.image.width)||!rh(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,sh);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,sh);this.store.image=this.image}}};var fi=class extends ir{constructor(t,{attributes:e={}}={}){Object.assign(e,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(t,e)}};var Rh=0,Qo=1,Ph=2;var Bs=1,Ih=2,jn=3,ti=0,Re=1,yn=2,Mn=0,ts=1,jo=2,tl=3,el=4,Lh=5;var bi=100,Dh=101,Fh=102,Nh=103,Uh=104,Oh=200,Bh=201,zh=202,Vh=203,nl=204,il=205,kh=206,Gh=207,Hh=208,Wh=209,Xh=210,qh=211,Yh=212,Zh=213,Jh=214,Pr=0,Ir=1,Lr=2,qi=3,Dr=4,Fr=5,Nr=6,Ur=7,aa=0,$h=1,Kh=2,ln=0,sl=1,rl=2,al=3,zs=4,ol=5,ll=6,cl=7;var hl=300,ei=301,wi=302,oa=303,la=304,Vs=306,Or=1e3,pn=1001,Br=1002,Te=1003,Qh=1004;var ks=1005;var Ae=1006,ca=1007;var ni=1008;var We=1009,ul=1010,dl=1011,es=1012,ha=1013,cn=1014,je=1015,hn=1016,ua=1017,da=1018,ns=1020,fl=35902,pl=35899,ml=1021,gl=1022,tn=1023,mn=1026,ii=1027,fa=1028,pa=1029,si=1030,ma=1031;var ga=1033,Gs=33776,Hs=33777,Ws=33778,Xs=33779,xa=35840,_a=35841,va=35842,ya=35843,Ma=36196,Sa=37492,ba=37496,wa=37488,Ea=37489,qs=37490,Ta=37491,Aa=37808,Ca=37809,Ra=37810,Pa=37811,Ia=37812,La=37813,Da=37814,Fa=37815,Na=37816,Ua=37817,Oa=37818,Ba=37819,za=37820,Va=37821,ka=36492,Ga=36494,Ha=36495,Wa=36283,Xa=36284,Ys=36285,qa=36286;var xs=2300,zr=2301,Cr=2302,Wo=2303,Xo=2400,qo=2401,Yo=2402;var jh=3200,xl=3201;var Zs=0,tu=1,Dn="",Ue="srgb",_s="srgb-linear",vs="linear",te="srgb";var Rr=7680;var eu=519,nu=512,iu=513,su=514,Ya=515,ru=516,au=517,Za=518,ou=519,lu=35044;var _l="300 es",an=2e3,Yi=2001;function pd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function md(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cu(){let n=ys("canvas");return n.style.display="block",n}var ah={},Zi=null;function vl(...n){let t="THREE."+n.shift();Zi?Zi("log",t,...n):console.log(t,...n)}function hu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pt(...n){n=hu(n);let t="THREE."+n.shift();if(Zi)Zi("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function It(...n){n=hu(n);let t="THREE."+n.shift();if(Zi)Zi("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function vi(...n){let t=n.join(" ");t in ah||(ah[t]=!0,Pt(...n))}function uu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var du={[Pr]:Ir,[Lr]:Nr,[Dr]:Ur,[qi]:Fr,[Ir]:Pr,[Nr]:Lr,[Ur]:Dr,[Fr]:qi},gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mo=Math.PI/180,Vr=180/Math.PI;function Js(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function gd(n,t){return(n%t+t)%t}function So(n,t,e){return(1-e)*n+e*t}function hs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],p=r[a+1],x=r[a+2],y=r[a+3];if(d!==y||l!==h||c!==p||u!==x){let m=l*h+c*p+u*x+d*y;m<0&&(h=-h,p=-p,x=-x,y=-y,m=-m);let f=1-o;if(m<.9995){let T=Math.acos(m),A=Math.sin(T);f=Math.sin(f*T)/A,o=Math.sin(o*T)/A,l=l*f+h*o,c=c*f+p*o,u=u*f+x*o,d=d*f+y*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+x*o,d=d*f+y*o;let T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+u*d+l*p-c*h,t[e+1]=l*x+u*h+c*d-o*p,t[e+2]=c*x+u*p+o*h-l*d,t[e+3]=u*x-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bo.copy(this).projectOnVector(t),this.sub(bo)}reflect(t){return this.sub(bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bo=new G,oh=new Qe,Nt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],x=i[8],y=s[0],m=s[3],f=s[6],T=s[1],A=s[4],M=s[7],w=s[2],b=s[5],C=s[8];return r[0]=a*y+o*T+l*w,r[3]=a*m+o*A+l*b,r[6]=a*f+o*M+l*C,r[1]=c*y+u*T+d*w,r[4]=c*m+u*A+d*b,r[7]=c*f+u*M+d*C,r[2]=h*y+p*T+x*w,r[5]=h*m+p*A+x*b,r[8]=h*f+p*M+x*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,x=e*d+i*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=d*y,t[1]=(s*c-u*i)*y,t[2]=(o*i-s*a)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wo.makeScale(t,e)),this}rotate(t){return vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wo=new Nt,lh=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xd(){let n={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?vs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_s]:{primaries:t,whitePoint:i,transfer:vs,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:i,transfer:te,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),n}var qt=xd();function Ln(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ii,kr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ii===void 0&&(Ii=ys("canvas")),Ii.width=t.width,Ii.height=t.height;let s=Ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ii}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ys("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ln(e[i]/255)*255):e[i]=Ln(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_d=0,Ji=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eo(s[a].image)):r.push(Eo(s[a]))}else r=Eo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Eo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var vd=0,To=new G,Ge=class n extends gn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=pn,s=pn,r=Ae,a=ni,o=tn,l=We,c=n.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Js(),this.name="",this.source=new Ji(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Or:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case Br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Or:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case Br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=hl;Ge.DEFAULT_ANISOTROPY=1;var fe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,M=(p+1)/2,w=(f+1)/2,b=(u+h)/4,C=(d+y)/4,_=(x+m)/4;return A>M&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=b/i,r=C/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=b/s,r=_/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=_/r),this.set(i,s,r,e),this}let T=Math.sqrt((m-x)*(m-x)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-x)/T,this.y=(d-y)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gr=class extends gn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ge(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ji(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends Gr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ms=class extends Ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hr=class extends Ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ie=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,u,d,h,p,x,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,d,h,p,x,y,m)}set(t,e,i,s,r,a,o,l,c,u,d,h,p,x,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,p=a*d,x=o*u,y=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+x*c,e[5]=h-y*c,e[9]=-o*l,e[2]=y-h*c,e[6]=x+p*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,x=c*u,y=c*d;e[0]=h+y*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-x,e[6]=y+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,x=c*u,y=c*d;e[0]=h-y*o,e[4]=-a*d,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,p=a*d,x=o*u,y=o*d;e[0]=l*u,e[4]=x*c-p,e[8]=h*c+y,e[1]=l*d,e[5]=y*c+h,e[9]=p*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,p=a*c,x=o*l,y=o*c;e[0]=l*u,e[4]=y-h*d,e[8]=x*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+x,e[10]=h-y*d}else if(t.order==="XZY"){let h=a*l,p=a*c,x=o*l,y=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+y,e[5]=a*u,e[9]=p*d-x,e[2]=x*d-p,e[6]=o*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,Md)}lookAt(t,e,i){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Bn.crossVectors(i,Xe),Bn.lengthSq()===0&&(Math.abs(i.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Bn.crossVectors(i,Xe)),Bn.normalize(),lr.crossVectors(Xe,Bn),s[0]=Bn.x,s[4]=lr.x,s[8]=Xe.x,s[1]=Bn.y,s[5]=lr.y,s[9]=Xe.y,s[2]=Bn.z,s[6]=lr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],x=i[2],y=i[6],m=i[10],f=i[14],T=i[3],A=i[7],M=i[11],w=i[15],b=s[0],C=s[4],_=s[8],E=s[12],P=s[1],L=s[5],N=s[9],z=s[13],R=s[2],B=s[6],W=s[10],H=s[14],nt=s[3],J=s[7],j=s[11],tt=s[15];return r[0]=a*b+o*P+l*R+c*nt,r[4]=a*C+o*L+l*B+c*J,r[8]=a*_+o*N+l*W+c*j,r[12]=a*E+o*z+l*H+c*tt,r[1]=u*b+d*P+h*R+p*nt,r[5]=u*C+d*L+h*B+p*J,r[9]=u*_+d*N+h*W+p*j,r[13]=u*E+d*z+h*H+p*tt,r[2]=x*b+y*P+m*R+f*nt,r[6]=x*C+y*L+m*B+f*J,r[10]=x*_+y*N+m*W+f*j,r[14]=x*E+y*z+m*H+f*tt,r[3]=T*b+A*P+M*R+w*nt,r[7]=T*C+A*L+M*B+w*J,r[11]=T*_+A*N+M*W+w*j,r[15]=T*E+A*z+M*H+w*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],x=t[3],y=t[7],m=t[11],f=t[15],T=l*p-c*h,A=o*p-c*d,M=o*h-l*d,w=a*p-c*u,b=a*h-l*u,C=a*d-o*u;return e*(y*T-m*A+f*M)-i*(x*T-m*w+f*b)+s*(x*A-y*w+f*C)-r*(x*M-y*b+m*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],x=t[12],y=t[13],m=t[14],f=t[15],T=e*o-i*a,A=e*l-s*a,M=e*c-r*a,w=i*l-s*o,b=i*c-r*o,C=s*c-r*l,_=u*y-d*x,E=u*m-h*x,P=u*f-p*x,L=d*m-h*y,N=d*f-p*y,z=h*f-p*m,R=T*z-A*N+M*L+w*P-b*E+C*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/R;return t[0]=(o*z-l*N+c*L)*B,t[1]=(s*N-i*z-r*L)*B,t[2]=(y*C-m*b+f*w)*B,t[3]=(h*b-d*C-p*w)*B,t[4]=(l*P-a*z-c*E)*B,t[5]=(e*z-s*P+r*E)*B,t[6]=(m*M-x*C-f*A)*B,t[7]=(u*C-h*M+p*A)*B,t[8]=(a*N-o*P+c*_)*B,t[9]=(i*P-e*N-r*_)*B,t[10]=(x*b-y*M+f*T)*B,t[11]=(d*M-u*b-p*T)*B,t[12]=(o*E-a*L-l*_)*B,t[13]=(e*L-i*E+s*_)*B,t[14]=(y*A-x*w-m*T)*B,t[15]=(u*w-d*A+h*T)*B,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,x=r*d,y=a*u,m=a*d,f=o*d,T=l*c,A=l*u,M=l*d,w=i.x,b=i.y,C=i.z;return s[0]=(1-(y+f))*w,s[1]=(p+M)*w,s[2]=(x-A)*w,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(h+f))*b,s[6]=(m+T)*b,s[7]=0,s[8]=(x+A)*C,s[9]=(m-T)*C,s[10]=(1-(h+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Li.set(s[0],s[1],s[2]).length(),o=Li.set(s[4],s[5],s[6]).length(),l=Li.set(s[8],s[9],s[10]).length();r<0&&(a=-a),en.copy(this);let c=1/a,u=1/o,d=1/l;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,e.setFromRotationMatrix(en),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=an,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s),x,y;if(l)x=r/(a-r),y=a*r/(a-r);else if(o===an)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Yi)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=an,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s),x,y;if(l)x=1/(a-r),y=a/(a-r);else if(o===an)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===Yi)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Li=new G,en=new ie,yd=new G(0,0,0),Md=new G(1,1,1),Bn=new G,lr=new G,Xe=new G,hh=new ie,uh=new Qe,xn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uh.setFromEuler(this),this.setFromQuaternion(uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sd=0,dh=new G,Di=new Qe,An=new ie,cr=new G,us=new G,bd=new G,wd=new Qe,fh=new G(1,0,0),ph=new G(0,1,0),mh=new G(0,0,1),gh={type:"added"},Ed={type:"removed"},Fi={type:"childadded",child:null},Ao={type:"childremoved",child:null},Ce=class n extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new G,e=new xn,i=new Qe,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Nt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(fh,t)}rotateY(t){return this.rotateOnAxis(ph,t)}rotateZ(t){return this.rotateOnAxis(mh,t)}translateOnAxis(t,e){return dh.copy(t).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fh,t)}translateY(t){return this.translateOnAxis(ph,t)}translateZ(t){return this.translateOnAxis(mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?cr.copy(t):cr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(us,cr,this.up):An.lookAt(cr,us,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(An),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gh),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ed),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gh),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new G(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _i=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Td={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Co(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ut=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=qt.workingColorSpace){if(t=gd(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Co(a,r,t+1/3),this.g=Co(a,r,t),this.b=Co(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function i(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let i=fu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return qt.workingToColorSpace(Le.copy(this),t),Math.round(Yt(Le.r*255,0,255))*65536+Math.round(Yt(Le.g*255,0,255))*256+Math.round(Yt(Le.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Le.copy(this),e);let i=Le.r,s=Le.g,r=Le.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ue){qt.workingToColorSpace(Le.copy(this),t);let e=Le.r,i=Le.g,s=Le.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(hr);let i=So(zn.h,hr.h,e),s=So(zn.s,hr.s,e),r=So(zn.l,hr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Ut;Ut.NAMES=fu;var yi=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},nn=new G,Cn=new G,Ro=new G,Rn=new G,Ni=new G,Ui=new G,xh=new G,Po=new G,Io=new G,Lo=new G,Do=new fe,Fo=new fe,No=new fe,Hn=class n{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),nn.subVectors(t,e),s.cross(nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){nn.subVectors(s,e),Cn.subVectors(i,e),Ro.subVectors(t,e);let a=nn.dot(nn),o=nn.dot(Cn),l=nn.dot(Ro),c=Cn.dot(Cn),u=Cn.dot(Ro),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Do.setScalar(0),Fo.setScalar(0),No.setScalar(0),Do.fromBufferAttribute(t,e),Fo.fromBufferAttribute(t,i),No.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Do,r.x),a.addScaledVector(Fo,r.y),a.addScaledVector(No,r.z),a}static isFrontFacing(t,e,i,s){return nn.subVectors(i,e),Cn.subVectors(t,e),nn.cross(Cn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),nn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ni.subVectors(s,i),Ui.subVectors(r,i),Po.subVectors(t,i);let l=Ni.dot(Po),c=Ui.dot(Po);if(l<=0&&c<=0)return e.copy(i);Io.subVectors(t,s);let u=Ni.dot(Io),d=Ui.dot(Io);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Ni,a);Lo.subVectors(t,r);let p=Ni.dot(Lo),x=Ui.dot(Lo);if(x>=0&&p<=x)return e.copy(r);let y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(Ui,o);let m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return xh.subVectors(r,s),o=(d-u)/(d-u+(p-x)),e.copy(s).addScaledVector(xh,o);let f=1/(m+y+h);return a=y*f,o=h*f,e.copy(i).addScaledVector(Ni,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_n=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ur.copy(i.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),dr.subVectors(this.max,ds),Oi.subVectors(t.a,ds),Bi.subVectors(t.b,ds),zi.subVectors(t.c,ds),Vn.subVectors(Bi,Oi),kn.subVectors(zi,Bi),pi.subVectors(Oi,zi);let e=[0,-Vn.z,Vn.y,0,-kn.z,kn.y,0,-pi.z,pi.y,Vn.z,0,-Vn.x,kn.z,0,-kn.x,pi.z,0,-pi.x,-Vn.y,Vn.x,0,-kn.y,kn.x,0,-pi.y,pi.x,0];return!Uo(e,Oi,Bi,zi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Oi,Bi,zi,dr))?!1:(fr.crossVectors(Vn,kn),e=[fr.x,fr.y,fr.z],Uo(e,Oi,Bi,zi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pn=[new G,new G,new G,new G,new G,new G,new G,new G],sn=new G,ur=new _n,Oi=new G,Bi=new G,zi=new G,Vn=new G,kn=new G,pi=new G,ds=new G,dr=new G,fr=new G,mi=new G;function Uo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){mi.fromArray(n,r);let o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ye=new G,pr=new Gt,Ad=0,Ye=class extends gn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=lu,this.updateRanges=[],this.gpuType=je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var bs=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ws=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Be=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},Cd=new _n,fs=new G,Oo=new G,Wn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Cd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(fs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(Oo)),this.expandByPoint(fs.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Rd=0,Ke=new ie,Bo=new Ce,Vi=new G,qe=new _n,ps=new _n,Ee=new G,on=class n extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pd(t)?ws:bs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Nt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,i){return Ke.makeTranslation(t,e,i),this.applyMatrix4(Ke),this}scale(t,e,i){return Ke.makeScale(t,e,i),this.applyMatrix4(Ke),this}lookAt(t){return Bo.lookAt(t),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(qe.min,ps.min),qe.expandByPoint(Ee),Ee.addVectors(qe.max,ps.max),qe.expandByPoint(Ee)):(qe.expandByPoint(ps.min),qe.expandByPoint(ps.max))}qe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ee.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(t,c),Ee.add(Vi)),s=Math.max(s,i.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new G,l[_]=new G;let c=new G,u=new G,d=new G,h=new Gt,p=new Gt,x=new Gt,y=new G,m=new G;function f(_,E,P){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,P),h.fromBufferAttribute(r,_),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,P),u.sub(c),d.sub(c),p.sub(h),x.sub(h);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(L),o[_].add(y),o[E].add(y),o[P].add(y),l[_].add(m),l[E].add(m),l[P].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let _=0,E=T.length;_<E;++_){let P=T[_],L=P.start,N=P.count;for(let z=L,R=L+N;z<R;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let A=new G,M=new G,w=new G,b=new G;function C(_){w.fromBufferAttribute(s,_),b.copy(w);let E=o[_];A.copy(E),A.sub(w.multiplyScalar(w.dot(E))).normalize(),M.crossVectors(b,E);let L=M.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,L)}for(let _=0,E=T.length;_<E;++_){let P=T[_],L=P.start,N=P.count;for(let z=L,R=L+N;z<R;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(t)for(let h=0,p=t.count;h<p;h+=3){let x=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new Ye(h,u,d)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var zo=new G,Pd=new G,Id=new Nt,rn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=zo.subVectors(i,e).cross(Pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(zo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Id.getNormalMatrix(t),s=this.coplanarPoint(zo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ld=0,vn=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=ts,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new rn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var In=new G,Vo=new G,mr=new G,gr=new G,Wr=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Vo.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),gr.copy(this.origin).sub(Vo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=gr.dot(this.direction),l=-gr.dot(mr),c=gr.lengthSq(),u=Math.abs(1-a*a),d,h,p,x;if(u>0)if(d=a*l-o,h=a*o-l,x=r*u,d>=0)if(h>=-x)if(h<=x){let y=1/u;d*=y,h*=y,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Vo).addScaledVector(mr,h),p}intersectSphere(t,e){if(t.radius<0)return null;In.subVectors(t.center,this.origin);let i=In.dot(this.direction),s=In.dot(In)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,p=t.z-a.z,x=e.x-a.x,y=e.y-a.y,m=e.z-a.z,f=i.x-a.x,T=i.y-a.y,A=i.z-a.z,M=Math.abs(l),w=Math.abs(c),b=Math.abs(u),C,_,E,P,L,N,z,R,B,W,H,nt;if(M>=w&&M>=b?(E=l,N=d,B=x,nt=f,l>=0?(C=c,_=u,P=h,L=p,z=y,R=m,W=T,H=A):(C=u,_=c,P=p,L=h,z=m,R=y,W=A,H=T)):w>=b?(E=c,N=h,B=y,nt=T,c>=0?(C=u,_=l,P=p,L=d,z=m,R=x,W=A,H=f):(C=l,_=u,P=d,L=p,z=x,R=m,W=f,H=A)):(E=u,N=p,B=m,nt=A,u>=0?(C=l,_=c,P=d,L=h,z=x,R=y,W=f,H=T):(C=c,_=l,P=h,L=d,z=y,R=x,W=T,H=f)),E===0)return null;let J=C/E,j=_/E,tt=1/E,_t=P-J*N,At=L-j*N,$t=z-J*B,Ht=R-j*B,Wt=W-J*nt,$=H-j*nt,et=Wt*Ht-$*$t,vt=_t*$-At*Wt,Lt=$t*At-Ht*_t;if(s){if(et<0||vt<0||Lt<0)return null}else if((et<0||vt<0||Lt<0)&&(et>0||vt>0||Lt>0))return null;let yt=et+vt+Lt;if(yt===0)return null;let Bt=tt*(et*N+vt*B+Lt*nt);return(yt>0?Bt<0:Bt>0)?null:this.at(Bt/yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xn=class extends vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_h=new ie,gi=new Wr,xr=new Wn,vh=new G,_r=new G,vr=new G,yr=new G,ko=new G,Mr=new G,yh=new G,Sr=new G,ue=class extends Ce{constructor(t=new on,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(ko.fromBufferAttribute(d,t),a?Mr.addScaledVector(ko,u):Mr.addScaledVector(ko.sub(e),u))}e.add(Mr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(xr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(xr,vh)===null||gi.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(_h.copy(r).invert(),gi.copy(t.ray).applyMatrix4(_h),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){let m=h[x],f=a[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,w=A;M<w;M+=3){let b=o.getX(M),C=o.getX(M+1),_=o.getX(M+2);s=br(this,f,t,i,c,u,d,b,C,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){let T=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);s=br(this,a,t,i,c,u,d,T,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){let m=h[x],f=a[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,w=A;M<w;M+=3){let b=M,C=M+1,_=M+2;s=br(this,f,t,i,c,u,d,b,C,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){let T=m,A=m+1,M=m+2;s=br(this,a,t,i,c,u,d,T,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Dd(n,t,e,i,s,r,a,o){let l;if(t.side===Re?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;Sr.copy(o),Sr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Sr);return c<e.near||c>e.far?null:{distance:c,point:Sr.clone(),object:n}}function br(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,_r),n.getVertexPosition(l,vr),n.getVertexPosition(c,yr);let u=Dd(n,t,e,i,_r,vr,yr,yh);if(u){let d=new G;Hn.getBarycoord(yh,_r,vr,yr,d),s&&(u.uv=Hn.getInterpolatedAttribute(s,o,l,c,d,new Gt)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,o,l,c,d,new Gt)),a&&(u.normal=Hn.getInterpolatedAttribute(a,o,l,c,d,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new G,materialIndex:0};Hn.getNormal(_r,vr,yr,h.normal),u.face=h,u.barycoord=d}return u}var Es=class extends Ge{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Te,u=Te,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ts=class extends Ye{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ki=new ie,Mh=new ie,wr=[],Sh=new _n,Fd=new ie,ms=new ue,gs=new Wn,Mi=class extends ue{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Fd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ki),Sh.copy(t.boundingBox).applyMatrix4(ki),this.boundingBox.union(Sh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ki),gs.copy(t.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(i),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),Mh.multiplyMatrices(i,ki),ms.matrixWorld=Mh,ms.raycast(t,wr);for(let a=0,o=wr.length;a<o;a++){let l=wr[a];l.instanceId=r,l.object=this,e.push(l)}wr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Es(new Float32Array(s*this.count),s,this.count,fa,je));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xi=new Wn,Nd=new Gt(.5,.5),Er=new G,Ki=class{constructor(t=new rn,e=new rn,i=new rn,s=new rn,r=new rn,a=new rn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=an,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],x=r[8],y=r[9],m=r[10],f=r[11],T=r[12],A=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,p-u,f-x,w-T).normalize(),s[1].setComponents(c+a,p+u,f+x,w+T).normalize(),s[2].setComponents(c+o,p+d,f+y,w+A).normalize(),s[3].setComponents(c-o,p-d,f-y,w-A).normalize(),i)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,p-h,f-m,w-M).normalize();else if(s[4].setComponents(c-l,p-h,f-m,w-M).normalize(),e===an)s[5].setComponents(c+l,p+h,f+m,w+M).normalize();else if(e===Yi)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);let e=Nd.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var As=class extends Ge{constructor(t=[],e=ei,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var qn=class extends Ge{constructor(t,e,i=cn,s,r,a,o=Te,l=Te,c,u=mn,d=1){if(u!==mn&&u!==ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ji(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xr=class extends qn{constructor(t,e=cn,i=ei,s,r,a=Te,o=Te,l,c=mn){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Cs=class extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yn=class n extends on{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,p=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(d,2));function x(y,m,f,T,A,M,w,b,C,_,E){let P=M/C,L=w/_,N=M/2,z=w/2,R=b/2,B=C+1,W=_+1,H=0,nt=0,J=new G;for(let j=0;j<W;j++){let tt=j*L-z;for(let _t=0;_t<B;_t++){let At=_t*P-N;J[y]=At*T,J[m]=tt*A,J[f]=R,c.push(J.x,J.y,J.z),J[y]=0,J[m]=0,J[f]=b>0?1:-1,u.push(J.x,J.y,J.z),d.push(_t/C),d.push(1-j/_),H+=1}}for(let j=0;j<_;j++)for(let tt=0;tt<C;tt++){let _t=h+tt+B*j,At=h+tt+B*(j+1),$t=h+(tt+1)+B*(j+1),Ht=h+(tt+1)+B*j;l.push(_t,At,Ht),l.push(At,$t,Ht),nt+=6}o.addGroup(p,nt,E),p+=nt,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Zn=class n extends on{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,p=[],x=[],y=[],m=[];for(let f=0;f<u;f++){let T=f*h-a;for(let A=0;A<c;A++){let M=A*d-r;x.push(M,-T,0),y.push(0,0,1),m.push(A/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){let A=T+c*f,M=T+c*(f+1),w=T+1+c*(f+1),b=T+1+c*f;p.push(A,M,b),p.push(M,w,b)}this.setIndex(p),this.setAttribute("position",new Be(x,3)),this.setAttribute("normal",new Be(y,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Rs=class n extends on{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new G,h=new G,p=[],x=[],y=[],m=[];for(let f=0;f<=i;f++){let T=[],A=f/i,M=a+A*o,w=t*Math.cos(M),b=Math.sqrt(t*t-w*w),C=0;f===0&&a===0?C=.5/e:f===i&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let E=_/e,P=s+E*r;d.x=-b*Math.cos(P),d.y=w,d.z=b*Math.sin(P),x.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(E+C,1-A),T.push(c++)}u.push(T)}for(let f=0;f<i;f++)for(let T=0;T<e;T++){let A=u[f][T+1],M=u[f][T],w=u[f+1][T],b=u[f+1][T+1];(f!==0||a>0)&&p.push(A,M,b),(f!==i-1||l<Math.PI)&&p.push(M,w,b)}this.setIndex(p),this.setAttribute("position",new Be(x,3)),this.setAttribute("normal",new Be(y,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ps=class extends vn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ut(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Ei(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(bh(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(bh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function De(n){let t={};for(let e=0;e<n.length;e++){let i=Ei(n[e]);for(let s in i)t[s]=i[s]}return t}function bh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ud(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function yl(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var pu={clone:Ei,merge:De},Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=Ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new fe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ie().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},qr=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Si=class extends vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Qi=class extends Si{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Is=class extends vn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=aa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ji=class extends vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yr=class extends vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Gi(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Go(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Jn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zr=class extends Jn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xo,endingEnd:Xo}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qo:r=t,o=2*e-i;break;case Yo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qo:a=t,l=2*i-e;break;case Yo:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(i-e)/(s-e),y=x*x,m=y*x,f=-h*m+2*h*y-h*x,T=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*x+1,A=(-1-p)*m+(1.5+p)*y+.5*x,M=p*m-p*y;for(let w=0;w!==o;++w)r[w]=f*a[u+w]+T*a[c+w]+A*a[l+w]+M*a[d+w];return r}},Jr=class extends Jn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},$r=class extends Jn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kr=class extends Jn{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let x=(i-e)/(s-e),y=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*x;return r}let h=o*2,p=t-1;for(let x=0;x!==o;++x){let y=a[c+x],m=a[l+x],f=p*h+x*2,T=d[f],A=d[f+1],M=t*h+x*2,w=u[M],b=u[M+1],C=Vd(i,e,T,w,s);r[x]=mu(C,y,A,b,m)}return r}};function mu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function zd(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Vd(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=mu(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=zd(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Je=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gi(e,this.TimeBufferType),this.values=Gi(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Gi(t.times,Array),values:Gi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Go(t.settings)&&(i.settings={inTangents:Gi(t.settings.inTangents,Array),outTangents:Gi(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $r(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Kr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xs:e=this.InterpolantFactoryMethodDiscrete;break;case zr:e=this.InterpolantFactoryMethodLinear;break;case Cr:e=this.InterpolantFactoryMethodSmooth;break;case Wo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Cr;case this.InterpolantFactoryMethodBezier:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Go(this.settings)&&(wh(this.settings.inTangents,t),wh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){It("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&md(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Cr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let x=0;x!==i;++x){let y=e[d+x];if(y!==e[h+x]||y!==e[p+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,h=a*i;for(let p=0;p!==i;++p)e[h+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Go(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Je.prototype.ValueTypeName="";Je.prototype.TimeBufferType=Float32Array;Je.prototype.ValueBufferType=Float32Array;Je.prototype.DefaultInterpolation=zr;var $n=class extends Je{constructor(t,e,i){super(t,e,i)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=xs;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Je{constructor(t,e,i,s){super(t,e,i,s)}};Qr.prototype.ValueTypeName="color";var jr=class extends Je{constructor(t,e,i,s){super(t,e,i,s)}};jr.prototype.ValueTypeName="number";var ta=class extends Jn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Qe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ls=class extends Je{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ta(this.times,this.values,this.getValueSize(),t)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Kn=class extends Je{constructor(t,e,i){super(t,e,i)}};Kn.prototype.ValueTypeName="string";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=xs;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends Je{constructor(t,e,i,s){super(t,e,i,s)}};ea.prototype.ValueTypeName="vector";var na=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gu=new na,ia=class{constructor(t){this.manager=t!==void 0?t:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ds=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Ho=new ie,Eh=new G,Th=new G,Fs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=We,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),Th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Th),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ho,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Yi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Tr=new G,Ar=new Qe,fn=new G,Ns=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Tr,Ar,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tr,Ar,fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Tr,Ar,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tr,Ar,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gn=new G,Ah=new Gt,Ch=new Gt,Oe=class extends Ns{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Ah,Ch),e.subVectors(Ch,Ah)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zo=class extends Fs{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0}},Us=class extends Ds{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Zo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Qn=class extends Ns{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jo=class extends Fs{constructor(){super(new Qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends Ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Jo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Hi=-90,Wi=1,sa=class extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(Hi,Wi,t,e);s.layers=this.layers,this.add(s);let r=new Oe(Hi,Wi,t,e);r.layers=this.layers,this.add(r);let a=new Oe(Hi,Wi,t,e);a.layers=this.layers,this.add(a);let o=new Oe(Hi,Wi,t,e);o.layers=this.layers,this.add(o);let l=new Oe(Hi,Wi,t,e);l.layers=this.layers,this.add(l);let c=new Oe(Hi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===an)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yi)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},ra=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ml="\\[\\]\\.:\\/",kd=new RegExp("["+Ml+"]","g"),Sl="[^"+Ml+"]",Gd="[^"+Ml.replace("\\.","")+"]",Hd=/((?:WC+[\/:])*)/.source.replace("WC",Sl),Wd=/(WCOD+)?/.source.replace("WCOD",Gd),Xd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),qd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),Yd=new RegExp("^"+Hd+Wd+Xd+qd+"$"),Zd=["material","materials","bones","map"],$o=class{constructor(t,e,i){let s=i||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},he=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kd,"")}static parseTrackName(t){let e=Yd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Zd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=$o;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zx=new Float32Array(1);var Ko=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function bl(n,t,e,i){let s=Jd(i);switch(e){case ml:return n*t;case fa:return n*t/s.components*s.byteLength;case pa:return n*t/s.components*s.byteLength;case si:return n*t*2/s.components*s.byteLength;case ma:return n*t*2/s.components*s.byteLength;case gl:return n*t*3/s.components*s.byteLength;case tn:return n*t*4/s.components*s.byteLength;case ga:return n*t*4/s.components*s.byteLength;case Gs:case Hs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _a:case ya:return Math.max(n,16)*Math.max(t,8)/4;case xa:case va:return Math.max(n,8)*Math.max(t,8)/2;case Ma:case Sa:case wa:case Ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ba:case qs:case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Na:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case za:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ka:case Ga:case Ha:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Wa:case Xa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ys:case qa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jd(n){switch(n){case We:case ul:return{byteLength:1,components:1};case es:case dl:case hn:return{byteLength:2,components:1};case ua:case da:return{byteLength:2,components:4};case cn:case ha:case je:return{byteLength:4,components:1};case fl:case pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Bu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Kd(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){let x=d[h],y=d[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){let y=d[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,am=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:Qd,alphahash_pars_fragment:jd,alphamap_fragment:tf,alphamap_pars_fragment:ef,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:rf,aomap_pars_fragment:af,batching_pars_vertex:of,batching_vertex:lf,begin_vertex:cf,beginnormal_vertex:hf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:xf,color_fragment:_f,color_pars_fragment:vf,color_pars_vertex:yf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:wf,displacementmap_pars_vertex:Ef,displacementmap_vertex:Tf,emissivemap_fragment:Af,emissivemap_pars_fragment:Cf,colorspace_fragment:Rf,colorspace_pars_fragment:Pf,envmap_fragment:If,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Df,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:Xf,envmap_vertex:Nf,fog_vertex:Uf,fog_pars_vertex:Of,fog_fragment:Bf,fog_pars_fragment:zf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:kf,lights_lambert_fragment:Gf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Jf,lights_physical_fragment:$f,lights_physical_pars_fragment:Kf,lights_fragment_begin:Qf,lights_fragment_maps:jf,lights_fragment_end:tp,lightprobes_pars_fragment:ep,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:rp,map_fragment:ap,map_pars_fragment:op,map_particle_fragment:lp,map_particle_pars_fragment:cp,metalnessmap_fragment:hp,metalnessmap_pars_fragment:up,morphinstance_vertex:dp,morphcolor_vertex:fp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:gp,normal_fragment_begin:xp,normal_fragment_maps:_p,normal_pars_fragment:vp,normal_pars_vertex:yp,normal_vertex:Mp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:Tp,opaque_fragment:Ap,packing:Cp,premultiplied_alpha_fragment:Rp,project_vertex:Pp,dithering_fragment:Ip,dithering_pars_fragment:Lp,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Up,shadowmap_vertex:Op,shadowmask_pars_fragment:Bp,skinbase_vertex:zp,skinning_pars_vertex:Vp,skinning_vertex:kp,skinnormal_vertex:Gp,specularmap_fragment:Hp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:qp,transmission_fragment:Yp,transmission_pars_fragment:Zp,uv_pars_fragment:Jp,uv_pars_vertex:$p,uv_vertex:Kp,worldpos_vertex:Qp,background_vert:jp,background_frag:tm,backgroundCube_vert:em,backgroundCube_frag:nm,cube_vert:im,cube_frag:sm,depth_vert:rm,depth_frag:am,distance_vert:om,distance_frag:lm,equirect_vert:cm,equirect_frag:hm,linedashed_vert:um,linedashed_frag:dm,meshbasic_vert:fm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:gm,meshmatcap_vert:xm,meshmatcap_frag:_m,meshnormal_vert:vm,meshnormal_frag:ym,meshphong_vert:Mm,meshphong_frag:Sm,meshphysical_vert:bm,meshphysical_frag:wm,meshtoon_vert:Em,meshtoon_frag:Tm,points_vert:Am,points_frag:Cm,shadow_vert:Rm,shadow_frag:Pm,sprite_vert:Im,sprite_frag:Lm},ft={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},bn={basic:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:De([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:De([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:De([ft.points,ft.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:De([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:De([ft.common,ft.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:De([ft.sprite,ft.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:De([ft.common,ft.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:De([ft.lights,ft.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};bn.physical={uniforms:De([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Ja={r:0,b:0,g:0},Dm=new ie,zu=new Nt;zu.set(-1,0,0,0,1,0,0,0,1);function Fm(n,t,e,i,s,r){let a=new Ut(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){let M=T.backgroundBlurriness>0;A=t.get(A,M)}return A}function x(T){let A=!1,M=p(T);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(T,A){let M=p(A);M&&(M.isCubeTexture||M.mapping===Vs)?(c===void 0&&(c=new ue(new Yn(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Ei(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zu),c.material.toneMapped=qt.getTransfer(M.colorSpace)!==te,(u!==M||d!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ue(new Zn(2,2),new Ze({name:"BackgroundMaterial",uniforms:Ei(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=qt.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,A){T.getRGB(Ja,yl(n)),e.buffers.color.setClear(Ja.r,Ja.g,Ja.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:x,addToRenderList:y,dispose:f}}function Nm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(L,N,z,R,B){let W=!1,H=d(L,R,z,N);r!==H&&(r=H,c(r.object)),W=p(L,R,z,B),W&&x(L,R,z,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(L,N,z,R),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,N,z,R){let B=R.wireframe===!0,W=i[N.id];W===void 0&&(W={},i[N.id]=W);let H=L.isInstancedMesh===!0?L.id:0,nt=W[H];nt===void 0&&(nt={},W[H]=nt);let J=nt[z.id];J===void 0&&(J={},nt[z.id]=J);let j=J[B];return j===void 0&&(j=h(l()),J[B]=j),j}function h(L){let N=[],z=[],R=[];for(let B=0;B<e;B++)N[B]=0,z[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:R,object:L,attributes:{},index:null}}function p(L,N,z,R){let B=r.attributes,W=N.attributes,H=0,nt=z.getAttributes();for(let J in nt)if(nt[J].location>=0){let tt=B[J],_t=W[J];if(_t===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(_t=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(_t=L.instanceColor)),tt===void 0||tt.attribute!==_t||_t&&tt.data!==_t.data)return!0;H++}return r.attributesNum!==H||r.index!==R}function x(L,N,z,R){let B={},W=N.attributes,H=0,nt=z.getAttributes();for(let J in nt)if(nt[J].location>=0){let tt=W[J];tt===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));let _t={};_t.attribute=tt,tt&&tt.data&&(_t.data=tt.data),B[J]=_t,H++}r.attributes=B,r.attributesNum=H,r.index=R}function y(){let L=r.newAttributes;for(let N=0,z=L.length;N<z;N++)L[N]=0}function m(L){f(L,0)}function f(L,N){let z=r.newAttributes,R=r.enabledAttributes,B=r.attributeDivisors;z[L]=1,R[L]===0&&(n.enableVertexAttribArray(L),R[L]=1),B[L]!==N&&(n.vertexAttribDivisor(L,N),B[L]=N)}function T(){let L=r.newAttributes,N=r.enabledAttributes;for(let z=0,R=N.length;z<R;z++)N[z]!==L[z]&&(n.disableVertexAttribArray(z),N[z]=0)}function A(L,N,z,R,B,W,H){H===!0?n.vertexAttribIPointer(L,N,z,B,W):n.vertexAttribPointer(L,N,z,R,B,W)}function M(L,N,z,R){y();let B=R.attributes,W=z.getAttributes(),H=N.defaultAttributeValues;for(let nt in W){let J=W[nt];if(J.location>=0){let j=B[nt];if(j===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){let tt=j.normalized,_t=j.itemSize,At=t.get(j);if(At===void 0)continue;let $t=At.buffer,Ht=At.type,Wt=At.bytesPerElement,$=Ht===n.INT||Ht===n.UNSIGNED_INT||j.gpuType===ha;if(j.isInterleavedBufferAttribute){let et=j.data,vt=et.stride,Lt=j.offset;if(et.isInstancedInterleavedBuffer){for(let yt=0;yt<J.locationSize;yt++)f(J.location+yt,et.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let yt=0;yt<J.locationSize;yt++)m(J.location+yt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let yt=0;yt<J.locationSize;yt++)A(J.location+yt,_t/J.locationSize,Ht,tt,vt*Wt,(Lt+_t/J.locationSize*yt)*Wt,$)}else{if(j.isInstancedBufferAttribute){for(let et=0;et<J.locationSize;et++)f(J.location+et,j.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let et=0;et<J.locationSize;et++)m(J.location+et);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let et=0;et<J.locationSize;et++)A(J.location+et,_t/J.locationSize,Ht,tt,_t*Wt,_t/J.locationSize*et*Wt,$)}}else if(H!==void 0){let tt=H[nt];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(J.location,tt);break;case 3:n.vertexAttrib3fv(J.location,tt);break;case 4:n.vertexAttrib4fv(J.location,tt);break;default:n.vertexAttrib1fv(J.location,tt)}}}}T()}function w(){E();for(let L in i){let N=i[L];for(let z in N){let R=N[z];for(let B in R){let W=R[B];for(let H in W)u(W[H].object),delete W[H];delete R[B]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;let N=i[L.id];for(let z in N){let R=N[z];for(let B in R){let W=R[B];for(let H in W)u(W[H].object),delete W[H];delete R[B]}}delete i[L.id]}function C(L){for(let N in i){let z=i[N];for(let R in z){let B=z[R];if(B[L.id]===void 0)continue;let W=B[L.id];for(let H in W)u(W[H].object),delete W[H];delete B[L.id]}}}function _(L){for(let N in i){let z=i[N],R=L.isInstancedMesh===!0?L.id:0,B=z[R];if(B!==void 0){for(let W in B){let H=B[W];for(let nt in H)u(H[nt].object),delete H[nt];delete B[W]}delete z[R],Object.keys(z).length===0&&delete i[N]}}}function E(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:T}}function Um(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Om(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==tn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==We&&C!==je&&!_&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Pt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:M,maxSamples:w,samples:b}}function Bm(n){let t=this,e=null,i=0,s=!1,r=!1,a=new rn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){let x=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||x===null||x.length===0||r&&!m)r?u(null):c();else{let T=r?0:i,A=T*4,M=f.clippingState||null;l.value=M,M=u(x,h,A,p);for(let w=0;w!==A;++w)M[w]=e[w];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,x){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,x!==!0||m===null){let f=p+y*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,M=p;A!==y;++A,M+=4)a.copy(d[A]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var ss=4,zm=6,Vm=20,km=256,$s=new Qn,xu=new Ut,wl=null,El=0,Tl=0,Al=!1,Gm=new G,Ti=new G,as=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Gm}=r;wl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wl,El,Tl),this._renderer.xr.enabled=Al,t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ei||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:hn,format:tn,colorSpace:_s,depthBuffer:!1},s=_u(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Hm(r)),this._blurMaterial=Xm(r,t,e),this._ggxMaterial=Wm(r,t,e)}return s}_compileMaterial(t){let e=new ue(new on,t);this._renderer.compile(e,$s)}_sceneToCubeUV(t,e,i,s,r){let l=new Oe(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(xu),d.toneMapping=ln,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new Yn,new Xn({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,f=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,f=!0):(m.color.copy(xu),f=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let w=this._cubeSize;is(s,M*w,A>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(y,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ei||t.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;is(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,$s)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,p=d*h,{_lodMax:x}=this,y=this._sizeLods[i],m=3*y*(i>x-ss?i-x+ss:0),f=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,is(r,m,f,3*y,2*y),s.setRenderTarget(r),s.render(o,$s),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,is(t,m,f,3*y,2*y),s.setRenderTarget(t),s.render(o,$s)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-ss?s-this._lodMax+ss:0),h=4*(this._cubeSize-u);is(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,$s)}};function Hm(n){let t=[],e=[],i=n,s=n-ss+1+zm;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,p=3,x=new Float32Array(p*h*d),y=new Float32Array(p*h*d);for(let f=0;f<d;f++){let T=f%3*2/3-1,A=f>2?0:-1,M=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];x.set(M,p*h*f);for(let w=0;w<h;w++){let b=u[w*2]*2-1,C=u[w*2+1]*2-1;f===0?Ti.set(1,C,b):f===1?Ti.set(-b,1,-C):f===2?Ti.set(-b,C,1):f===3?Ti.set(-1,C,-b):f===4?Ti.set(-b,-1,C):Ti.set(b,C,-1),Ti.toArray(y,(f*h+w)*p)}}let m=new on;m.setAttribute("position",new Ye(x,p)),m.setAttribute("outputDirection",new Ye(y,p)),e.push(new ue(m,null)),i>ss&&i--}return{lodMeshes:e,sizeLods:t}}function _u(n,t,e){let i=new He(n,t,e);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Wm(n,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:km,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Xm(n,t,e){return new Ze({name:"SphericalGaussianBlur",defines:{SAMPLES:Vm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function vu(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function yu(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ka=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new As(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yn(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:Ei(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:Mn});r.uniforms.tEquirect.value=e;let a=new ue(s,r),o=e.minFilter;return e.minFilter===ni&&(e.minFilter=Ae),new sa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function qm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===oa||p===la)if(t.has(h)){let x=t.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let y=new Ka(x.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,x=p===oa||p===la,y=p===ei||p===wi;if(x||y){let m=e.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new as(n)),m=x?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let T=h.image;return x&&T&&T.height>0||y&&T&&l(T)?(i===null&&(i=new as(n)),m=x?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===oa?h.mapping=ei:p===la&&(h.mapping=wi),h}function l(h){let p=0,x=6;for(let y=0;y<x;y++)h[y]!==void 0&&p++;return p===x}function c(h){let p=h.target;p.removeEventListener("dispose",c);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Ym(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&vi("WebGLRenderer: "+i+" extension not supported."),s}}}function Zm(n,t,e,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],n.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,x=d.attributes.position,y=0;if(x===void 0)return;if(p!==null){let T=p.array;y=p.version;for(let A=0,M=T.length;A<M;A+=3){let w=T[A+0],b=T[A+1],C=T[A+2];h.push(w,b,b,C,C,w)}}else{let T=x.array;y=x.version;for(let A=0,M=T.length/3-1;A<M;A+=3){let w=A+0,b=A+1,C=A+2;h.push(w,b,b,C,C,w)}}let m=new(x.count>=65535?ws:bs)(h,1);m.version=y;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Jm(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*a,p),e.update(h,i,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let y=0;for(let m=0;m<p;m++)y+=h[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function $m(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Km(n,t,e){let i=new WeakMap,s=new fe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],A=0;p===!0&&(A=1),x===!0&&(A=2),y===!0&&(A=3);let M=o.attributes.position.count*A,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let b=new Float32Array(M*w*4*d),C=new Ms(b,M,w,d);C.type=je,C.needsUpdate=!0;let _=A*4;for(let P=0;P<d;P++){let L=m[P],N=f[P],z=T[P],R=M*w*4*P;for(let B=0;B<L.count;B++){let W=B*_;p===!0&&(s.fromBufferAttribute(L,B),b[R+W+0]=s.x,b[R+W+1]=s.y,b[R+W+2]=s.z,b[R+W+3]=0),x===!0&&(s.fromBufferAttribute(N,B),b[R+W+4]=s.x,b[R+W+5]=s.y,b[R+W+6]=s.z,b[R+W+7]=0),y===!0&&(s.fromBufferAttribute(z,B),b[R+W+8]=s.x,b[R+W+9]=s.y,b[R+W+10]=s.z,b[R+W+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Gt(M,w)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Qm(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var jm={[sl]:"LINEAR_TONE_MAPPING",[rl]:"REINHARD_TONE_MAPPING",[al]:"CINEON_TONE_MAPPING",[zs]:"ACES_FILMIC_TONE_MAPPING",[ll]:"AGX_TONE_MAPPING",[cl]:"NEUTRAL_TONE_MAPPING",[ol]:"CUSTOM_TONE_MAPPING"};function tg(n,t,e,i,s,r){let a=new He(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new on;c.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Be([0,2,0,0,2,0],2));let u=new qr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ue(c,u),h=new Qn(-1,1,1,-1,0,1),p=null,x=null,y=!1,m,f=null,T=[],A=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let b=0;b<T.length;b++){let C=T[b];C.setSize&&C.setSize(M,w)}},this.setEffects=function(M){T=M,A=T.length>0&&T[0].isRenderPass===!0;let w=a.width,b=a.height;T.length>0&&o===null&&(o=new He(w,b,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new He(w,b,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<T.length;C++){let _=T[C];_.setSize&&_.setSize(w,b)}},this.begin=function(M,w){if(y||M.toneMapping===ln&&T.length===0)return!1;if(f=w,w!==null){let b=w.width,C=w.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return A===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=ln,!0},this.hasRenderPass=function(){return A},this.end=function(M,w){M.toneMapping=m,y=!0;let b=a,C=o;for(let _=0;_<T.length;_++){let E=T[_];E.enabled!==!1&&(E.render(M,C,b,w),E.needsSwap!==!1&&(b=C,C=C===o?l:o))}if(p!==M.outputColorSpace||x!==M.toneMapping){p=M.outputColorSpace,x=M.toneMapping,u.defines={},qt.getTransfer(p)===te&&(u.defines.SRGB_TRANSFER="");let _=jm[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(f),M.render(d,h),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Vu=new Ge,Pl=new qn(1,1),ku=new Ms,Gu=new Hr,Hu=new As,Mu=[],Su=[],bu=new Float32Array(16),wu=new Float32Array(9),Eu=new Float32Array(4);function os(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function to(n,t){let e=Su[t];e===void 0&&(e=new Int32Array(t),Su[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function eg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ng(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2fv(this.addr,t),Se(e,t)}}function ig(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;n.uniform3fv(this.addr,t),Se(e,t)}}function sg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4fv(this.addr,t),Se(e,t)}}function rg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;Eu.set(i),n.uniformMatrix2fv(this.addr,!1,Eu),Se(e,i)}}function ag(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;wu.set(i),n.uniformMatrix3fv(this.addr,!1,wu),Se(e,i)}}function og(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,i))return;bu.set(i),n.uniformMatrix4fv(this.addr,!1,bu),Se(e,i)}}function lg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2iv(this.addr,t),Se(e,t)}}function hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3iv(this.addr,t),Se(e,t)}}function ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4iv(this.addr,t),Se(e,t)}}function dg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2uiv(this.addr,t),Se(e,t)}}function pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3uiv(this.addr,t),Se(e,t)}}function mg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4uiv(this.addr,t),Se(e,t)}}function gg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Pl.compareFunction=e.isReversedDepthBuffer()?Za:Ya,r=Pl):r=Vu,e.setTexture2D(t||r,s)}function xg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Gu,s)}function _g(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hu,s)}function vg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ku,s)}function yg(n){switch(n){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function Mg(n,t){n.uniform1fv(this.addr,t)}function Sg(n,t){let e=os(t,this.size,2);n.uniform2fv(this.addr,e)}function bg(n,t){let e=os(t,this.size,3);n.uniform3fv(this.addr,e)}function wg(n,t){let e=os(t,this.size,4);n.uniform4fv(this.addr,e)}function Eg(n,t){let e=os(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Tg(n,t){let e=os(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ag(n,t){let e=os(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Cg(n,t){n.uniform1iv(this.addr,t)}function Rg(n,t){n.uniform2iv(this.addr,t)}function Pg(n,t){n.uniform3iv(this.addr,t)}function Ig(n,t){n.uniform4iv(this.addr,t)}function Lg(n,t){n.uniform1uiv(this.addr,t)}function Dg(n,t){n.uniform2uiv(this.addr,t)}function Fg(n,t){n.uniform3uiv(this.addr,t)}function Ng(n,t){n.uniform4uiv(this.addr,t)}function Ug(n,t,e){let i=this.cache,s=t.length,r=to(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Pl:a=Vu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Og(n,t,e){let i=this.cache,s=t.length,r=to(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gu,r[a])}function Bg(n,t,e){let i=this.cache,s=t.length,r=to(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hu,r[a])}function zg(n,t,e){let i=this.cache,s=t.length,r=to(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ku,r[a])}function Vg(n){switch(n){case 5126:return Mg;case 35664:return Sg;case 35665:return bg;case 35666:return wg;case 35674:return Eg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Fg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}var Il=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}},Ll=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vg(e.type)}},Dl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function Tu(n,t){n.seq.push(t),n.map[t.id]=t}function kg(n,t,e){let i=n.name,s=i.length;for(Cl.lastIndex=0;;){let r=Cl.exec(i),a=Cl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tu(e,c===void 0?new Il(o,n,t):new Ll(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Dl(o),Tu(e,d)),e=d}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);kg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Au(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Gg=37297,Hg=0;function Wg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Cu=new Nt;function Xg(n){qt._getMatrix(Cu,qt.workingColorSpace,n);let t=`mat3( ${Cu.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case vs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ru(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Wg(n.getShaderSource(t),o)}else return r}function qg(n,t){let e=Xg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Yg={[sl]:"Linear",[rl]:"Reinhard",[al]:"Cineon",[zs]:"ACESFilmic",[ll]:"AgX",[cl]:"Neutral",[ol]:"Custom"};function Zg(n,t){let e=Yg[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $a=new G;function Jg(){qt.getLuminanceCoefficients($a);let n=$a.x.toFixed(4),t=$a.y.toFixed(4),e=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Kg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Qg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Qs(n){return n!==""}function Pu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Iu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(n){return n.replace(jg,e0)}var t0=new Map;function e0(n,t){let e=kt[t];if(e===void 0){let i=t0.get(t);if(i!==void 0)e=kt[i],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fl(e)}var n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(n){return n.replace(n0,i0)}function i0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Du(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var s0={[Bs]:"SHADOWMAP_TYPE_PCF",[jn]:"SHADOWMAP_TYPE_VSM"};function r0(n){return s0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var a0={[ei]:"ENVMAP_TYPE_CUBE",[wi]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE_UV"};function o0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":a0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var l0={[wi]:"ENVMAP_MODE_REFRACTION"};function c0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":l0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var h0={[aa]:"ENVMAP_BLENDING_MULTIPLY",[$h]:"ENVMAP_BLENDING_MIX",[Kh]:"ENVMAP_BLENDING_ADD"};function u0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":h0[n.combine]||"ENVMAP_BLENDING_NONE"}function d0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function f0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=r0(e),c=o0(e),u=c0(e),d=u0(e),h=d0(e),p=$g(e),x=Kg(r),y=s.createProgram(),m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Qs).join(`
`),f.length>0&&(f+=`
`)):(m=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),f=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ln?"#define TONE_MAPPING":"",e.toneMapping!==ln?kt.tonemapping_pars_fragment:"",e.toneMapping!==ln?Zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),Jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Fl(a),a=Pu(a,e),a=Iu(a,e),o=Fl(o),o=Pu(o,e),o=Iu(o,e),a=Lu(a),o=Lu(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=T+m+a,M=T+f+o,w=Au(s,s.VERTEX_SHADER,A),b=Au(s,s.FRAGMENT_SHADER,M);s.attachShader(y,w),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(L){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(w)||"",R=s.getShaderInfoLog(b)||"",B=N.trim(),W=z.trim(),H=R.trim(),nt=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,b);else{let j=Ru(s,w,"vertex"),tt=Ru(s,b,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+j+`
`+tt)}else B!==""?Pt("WebGLProgram: Program Info Log:",B):(W===""||H==="")&&(J=!1);J&&(L.diagnostics={runnable:nt,programLog:B,vertexShader:{log:W,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(w),s.deleteShader(b),_=new rs(s,y),E=Qg(s,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,Gg)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=b,this}var p0=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ul(t),e.set(t,i)),i}},Ul=class{constructor(t){this.id=p0++,this.code=t,this.usedTimes=0}};function m0(n){return n===si||n===qs||n===Ys}function g0(n,t,e,i,s,r){let a=new Ss,o=new Nl,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,E,P,L,N,z){let R=L.fog,B=N.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,nt=t.get(_.envMap||W,H),J=nt&&nt.mapping===Vs?nt.image.height:null,j=p[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Pt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_t=tt!==void 0?tt.length:0,At=0;B.morphAttributes.position!==void 0&&(At=1),B.morphAttributes.normal!==void 0&&(At=2),B.morphAttributes.color!==void 0&&(At=3);let $t,Ht,Wt,$;if(j){let Mt=bn[j];$t=Mt.vertexShader,Ht=Mt.fragmentShader}else{$t=_.vertexShader,Ht=_.fragmentShader;let Mt=o.getVertexShaderStage(_),Ft=o.getFragmentShaderStage(_);o.update(_,Mt,Ft),Wt=Mt.id,$=Ft.id}let et=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Lt=N.isInstancedMesh===!0,yt=N.isBatchedMesh===!0,Bt=!!_.map,pe=!!_.matcap,Ot=!!nt,Zt=!!_.aoMap,ee=!!_.lightMap,zt=!!_.bumpMap&&_.wireframe===!1,se=!!_.normalMap,ge=!!_.displacementMap,be=!!_.emissiveMap,le=!!_.metalnessMap,me=!!_.roughnessMap,U=_.anisotropy>0,de=_.clearcoat>0,Kt=_.dispersion>0,S=_.retroreflectivity>0,g=_.iridescence>0,I=_.sheen>0,O=_.transmission>0,q=U&&!!_.anisotropyMap,it=de&&!!_.clearcoatMap,st=de&&!!_.clearcoatNormalMap,X=de&&!!_.clearcoatRoughnessMap,K=g&&!!_.iridescenceMap,at=g&&!!_.iridescenceThicknessMap,gt=I&&!!_.sheenColorMap,rt=I&&!!_.sheenRoughnessMap,lt=!!_.specularMap,bt=!!_.specularColorMap,Rt=!!_.specularIntensityMap,Dt=O&&!!_.transmissionMap,D=O&&!!_.thicknessMap,ht=!!_.gradientMap,Q=!!_.alphaMap,ct=_.alphaTest>0,dt=!!_.alphaHash,Z=!!_.extensions,ot=ln;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ot=n.toneMapping);let ut={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:$t,fragmentShader:Ht,defines:_.defines,customVertexShaderID:Wt,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:yt,batchingColor:yt&&N._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&N.instanceColor!==null,instancingMorph:Lt&&N.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Bt,matcap:pe,envMap:Ot,envMapMode:Ot&&nt.mapping,envMapCubeUVHeight:J,aoMap:Zt,lightMap:ee,bumpMap:zt,normalMap:se,displacementMap:ge,emissiveMap:be,normalMapObjectSpace:se&&_.normalMapType===tu,normalMapTangentSpace:se&&_.normalMapType===Zs,packedNormalMap:se&&_.normalMapType===Zs&&m0(_.normalMap.format),metalnessMap:le,roughnessMap:me,anisotropy:U,anisotropyMap:q,clearcoat:de,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:X,dispersion:Kt,retroreflection:S,iridescence:g,iridescenceMap:K,iridescenceThicknessMap:at,sheen:I,sheenColorMap:gt,sheenRoughnessMap:rt,specularMap:lt,specularColorMap:bt,specularIntensityMap:Rt,transmission:O,transmissionMap:Dt,thicknessMap:D,gradientMap:ht,opaque:_.transparent===!1&&_.blending===ts&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:ct,alphaHash:dt,combine:_.combine,mapUv:Bt&&x(_.map.channel),aoMapUv:Zt&&x(_.aoMap.channel),lightMapUv:ee&&x(_.lightMap.channel),bumpMapUv:zt&&x(_.bumpMap.channel),normalMapUv:se&&x(_.normalMap.channel),displacementMapUv:ge&&x(_.displacementMap.channel),emissiveMapUv:be&&x(_.emissiveMap.channel),metalnessMapUv:le&&x(_.metalnessMap.channel),roughnessMapUv:me&&x(_.roughnessMap.channel),anisotropyMapUv:q&&x(_.anisotropyMap.channel),clearcoatMapUv:it&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:rt&&x(_.sheenRoughnessMap.channel),specularMapUv:lt&&x(_.specularMap.channel),specularColorMapUv:bt&&x(_.specularColorMap.channel),specularIntensityMapUv:Rt&&x(_.specularIntensityMap.channel),transmissionMapUv:Dt&&x(_.transmissionMap.channel),thicknessMapUv:D&&x(_.thicknessMap.channel),alphaMapUv:Q&&x(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(se||U),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Bt||Q),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:At,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:Bt&&_.map.isVideoTexture===!0&&qt.getTransfer(_.map.colorSpace)===te,decodeVideoTextureEmissive:be&&_.emissiveMap.isVideoTexture===!0&&qt.getTransfer(_.emissiveMap.colorSpace)===te,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===yn,flipSided:_.side===Re,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Z&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&_.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)E.push(P),E.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(f(E,_),T(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function f(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function T(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let E=p[_.type],P;if(E){let L=bn[E];P=pu.clone(L.uniforms)}else P=_.uniforms;return P}function M(_,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new f0(n,E,_,s),c.push(P),u.set(E,P)),P}function w(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:C}}function x0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function _0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Fu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Nu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,y,m,f){let T=n[t];return T===void 0?(T={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:f},n[t]=T):(T.id=h.id,T.object=h,T.geometry=p,T.material=x,T.materialVariant=a(h),T.groupOrder=y,T.renderOrder=h.renderOrder,T.z=m,T.group=f),t++,T}function l(h,p,x,y,m,f,T){T.reversedDepth===!0&&(m=-m);let A=o(h,p,x,y,m,f);x.transmission>0?i.push(A):x.transparent===!0?s.push(A):e.push(A)}function c(h,p,x,y,m,f){let T=o(h,p,x,y,m,f);x.transmission>0?i.unshift(T):x.transparent===!0?s.unshift(T):e.unshift(T)}function u(h,p){e.length>1&&e.sort(h||_0),i.length>1&&i.sort(p||Fu),s.length>1&&s.sort(p||Fu)}function d(){for(let h=t,p=n.length;h<p;h++){let x=n[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function v0(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Nu,n.set(i,[a])):s>=r.length?(a=new Nu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function y0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Ut};break;case"SpotLight":e={position:new G,direction:new G,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function M0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var S0=0;function b0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function w0(n){let t=new y0,e=M0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let s=new G,r=new ie,a=new ie;function o(c){let u=0,d=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,x=0,y=0,m=0,f=0,T=0,A=0,M=0,w=0,b=0,C=0,_=0,E=0,P=0;c.sort(b0);for(let N=0,z=c.length;N<z;N++){let R=c[N],B=R.color,W=R.intensity,H=R.distance,nt=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===si?nt=R.shadow.map.texture:nt=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=B.r*W,d+=B.g*W,h+=B.b*W;else if(R.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(R.sh.coefficients[J],W);P++}else if(R.isSunLight){let J=t.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,tt=e.get(R);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[x]=tt,i.sunShadowMap[x]=nt;let _t=j.getViewportCount();for(let At=0;At<_t;At++)i.sunShadowMatrix[y+At]=j.getMatrix(At),i.sunShadowCascade[y+At]=j._cascadeData[At];y+=_t,x++}i.sun[p]=J,p++}else if(R.isDirectionalLight){let J=t.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,tt=e.get(R);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=R.shadow.matrix,w++}i.directional[m]=J,m++}else if(R.isSpotLight){let J=t.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(B).multiplyScalar(W),J.distance=H,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,i.spot[T]=J;let j=R.shadow;if(R.map&&(i.spotLightMap[_]=R.map,_++,j.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[T]=j.matrix,R.castShadow){let tt=e.get(R);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.spotShadow[T]=tt,i.spotShadowMap[T]=nt,C++}T++}else if(R.isRectAreaLight){let J=t.get(R);J.color.copy(B).multiplyScalar(W),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),i.rectArea[A]=J,A++}else if(R.isPointLight){let J=t.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),J.distance=R.distance,J.decay=R.decay,R.castShadow){let j=R.shadow,tt=e.get(R);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,i.pointShadow[f]=tt,i.pointShadowMap[f]=nt,i.pointShadowMatrix[f]=R.shadow.matrix,b++}i.point[f]=J,f++}else if(R.isHemisphereLight){let J=t.get(R);J.skyColor.copy(R.color).multiplyScalar(W),J.groundColor.copy(R.groundColor).multiplyScalar(W),i.hemi[M]=J,M++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==T||L.rectAreaLength!==A||L.hemiLength!==M||L.numSunShadows!==x||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==C||L.numSpotMaps!==_||L.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=m,i.spot.length=T,i.rectArea.length=A,i.point.length=f,i.hemi.length=M,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=T,L.rectAreaLength=A,L.hemiLength=M,L.numSunShadows=x,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=C,L.numSpotMaps=_,L.numLightProbes=P,i.version=S0++)}function l(c,u){let d=0,h=0,p=0,x=0,y=0,m=0,f=u.matrixWorldInverse;for(let T=0,A=c.length;T<A;T++){let M=c[T];if(M.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),h++}else if(M.isSpotLight){let w=i.spot[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),x++}else if(M.isRectAreaLight){let w=i.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function Uu(n){let t=new w0(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function E0(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Uu(n),t.set(s,[o])):r>=a.length?(o=new Uu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var T0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,C0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],R0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Ou=new ie,Ks=new G,Rl=new G;function P0(n,t,e){let i=new Ki,s=new Gt,r=new Gt,a=new fe,o=new ji,l=new Yr,c={},u=e.maxTextureSize,d={[ti]:Re,[Re]:ti,[yn]:yn},h=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:T0,fragmentShader:A0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let x=new on;x.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ue(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let f=this.type;this.render=function(b,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ih&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);let E=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Mn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=f!==this.type;z&&C.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(B=>B.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,B=b.length;R<B;R++){let W=b[R],H=W.shadow;if(H===void 0){Pt("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let nt=H.getFrameExtents();s.multiply(nt),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,H.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=J,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===jn){if(W.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new He(s.x,s.y,{format:si,type:hn,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new qn(s.x,s.y,je),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=mn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Te,H.map.depthTexture.magFilter=Te}else W.isPointLight?(H.map=new Ka(s.x),H.map.depthTexture=new Xr(s.x,cn)):(H.map=new He(s.x,s.y),H.map.depthTexture=new qn(s.x,s.y,cn)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=mn,this.type===Bs?(H.map.depthTexture.compareFunction=J?Za:Ya,H.map.depthTexture.minFilter=Ae,H.map.depthTexture.magFilter=Ae):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Te,H.map.depthTexture.magFilter=Te);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,_);for(let tt=0;tt<j;tt++){let _t=H.getCamera(tt);if(W.isPointLight){let At=H.camera,$t=H.matrix,Ht=W.distance||At.far;Ht!==At.far&&(At.far=Ht,At.updateProjectionMatrix()),Ks.setFromMatrixPosition(W.matrixWorld),At.position.copy(Ks),Rl.copy(At.position),Rl.add(C0[tt]),At.up.copy(R0[tt]),At.lookAt(Rl),At.updateMatrixWorld(),$t.makeTranslation(-Ks.x,-Ks.y,-Ks.z),Ou.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ou,At.coordinateSystem,At.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,tt),n.clear();else{tt===0&&(n.setRenderTarget(H.map),n.clear());let At=H.getViewport(tt);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),N.viewport(a)}i=H.getFrustum(tt),M(C,_,_t,W,this.type)}H.isPointLightShadow!==!0&&this.type===jn&&T(H,_),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,P,L)};function T(b,C){let _=t.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new He(s.x,s.y,{format:si,type:hn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,_,h,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,_,p,y,null)}function A(b,C,_,E){let P=null,L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)P=L;else if(P=_.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=P.uuid,z=C.uuid,R=c[N];R===void 0&&(R={},c[N]=R);let B=R[z];B===void 0&&(B=P.clone(),R[z]=B,C.addEventListener("dispose",w)),P=B}if(P.visible=C.visible,P.wireframe=C.wireframe,E===jn?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=n.properties.get(P);N.light=_}return P}function M(b,C,_,E,P){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===jn)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let z=t.update(b),R=b.material;if(Array.isArray(R)){let B=z.groups;for(let W=0,H=B.length;W<H;W++){let nt=B[W],J=R[nt.materialIndex];if(J&&J.visible){let j=A(b,J,E,P);b.onBeforeShadow(n,b,C,_,z,j,nt),n.renderBufferDirect(_,null,z,j,b,nt),b.onAfterShadow(n,b,C,_,z,j,nt)}}}else if(R.visible){let B=A(b,R,E,P);b.onBeforeShadow(n,b,C,_,z,B,null),n.renderBufferDirect(_,null,z,B,b,null),b.onAfterShadow(n,b,C,_,z,B,null)}}let N=b.children;for(let z=0,R=N.length;z<R;z++)M(N[z],C,_,E,P)}function w(b){b.target.removeEventListener("dispose",w);for(let _ in c){let E=c[_],P=b.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function I0(n,t){function e(){let D=!1,ht=new fe,Q=null,ct=new fe(0,0,0,0);return{setMask:function(dt){Q!==dt&&!D&&(n.colorMask(dt,dt,dt,dt),Q=dt)},setLocked:function(dt){D=dt},setClear:function(dt,Z,ot,ut,Mt){Mt===!0&&(dt*=ut,Z*=ut,ot*=ut),ht.set(dt,Z,ot,ut),ct.equals(ht)===!1&&(n.clearColor(dt,Z,ot,ut),ct.copy(ht))},reset:function(){D=!1,Q=null,ct.set(-1,0,0,0)}}}function i(){let D=!1,ht=!1,Q=null,ct=null,dt=null;return{setReversed:function(Z){if(ht!==Z){let ot=t.get("EXT_clip_control");Z?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),ht=Z;let ut=dt;dt=null,this.setClear(ut)}},getReversed:function(){return ht},setTest:function(Z){Z?et(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(Z){Q!==Z&&!D&&(n.depthMask(Z),Q=Z)},setFunc:function(Z){if(ht&&(Z=du[Z]),ct!==Z){switch(Z){case Pr:n.depthFunc(n.NEVER);break;case Ir:n.depthFunc(n.ALWAYS);break;case Lr:n.depthFunc(n.LESS);break;case qi:n.depthFunc(n.LEQUAL);break;case Dr:n.depthFunc(n.EQUAL);break;case Fr:n.depthFunc(n.GEQUAL);break;case Nr:n.depthFunc(n.GREATER);break;case Ur:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=Z}},setLocked:function(Z){D=Z},setClear:function(Z){dt!==Z&&(dt=Z,ht&&(Z=1-Z),n.clearDepth(Z))},reset:function(){D=!1,Q=null,ct=null,dt=null,ht=!1}}}function s(){let D=!1,ht=null,Q=null,ct=null,dt=null,Z=null,ot=null,ut=null,Mt=null;return{setTest:function(Ft){D||(Ft?et(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(Ft){ht!==Ft&&!D&&(n.stencilMask(Ft),ht=Ft)},setFunc:function(Ft,xe,xt){(Q!==Ft||ct!==xe||dt!==xt)&&(n.stencilFunc(Ft,xe,xt),Q=Ft,ct=xe,dt=xt)},setOp:function(Ft,xe,xt){(Z!==Ft||ot!==xe||ut!==xt)&&(n.stencilOp(Ft,xe,xt),Z=Ft,ot=xe,ut=xt)},setLocked:function(Ft){D=Ft},setClear:function(Ft){Mt!==Ft&&(n.clearStencil(Ft),Mt=Ft)},reset:function(){D=!1,ht=null,Q=null,ct=null,dt=null,Z=null,ot=null,ut=null,Mt=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,x=[],y=null,m=!1,f=null,T=null,A=null,M=null,w=null,b=null,C=null,_=new Ut(0,0,0),E=0,P=!1,L=null,N=null,z=null,R=null,B=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,nt=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=nt>=1):J.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=nt>=2);let j=null,tt={},_t=n.getParameter(n.SCISSOR_BOX),At=n.getParameter(n.VIEWPORT),$t=new fe().fromArray(_t),Ht=new fe().fromArray(At);function Wt(D,ht,Q,ct){let dt=new Uint8Array(4),Z=n.createTexture();n.bindTexture(D,Z),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<Q;ot++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(ht+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return Z}let $={};$[n.TEXTURE_2D]=Wt(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Wt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Wt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Wt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(n.DEPTH_TEST),a.setFunc(qi),zt(!1),se(Qo),et(n.CULL_FACE),Zt(Mn);function et(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function vt(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Lt(D,ht){return h[D]!==ht?(n.bindFramebuffer(D,ht),h[D]=ht,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ht),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function yt(D,ht){let Q=x,ct=!1;if(D){Q=p.get(ht),Q===void 0&&(Q=[],p.set(ht,Q));let dt=D.textures;if(Q.length!==dt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,ot=dt.length;Z<ot;Z++)Q[Z]=n.COLOR_ATTACHMENT0+Z;Q.length=dt.length,ct=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ct=!0);ct&&n.drawBuffers(Q)}function Bt(D){return y!==D?(n.useProgram(D),y=D,!0):!1}let pe={[bi]:n.FUNC_ADD,[Dh]:n.FUNC_SUBTRACT,[Fh]:n.FUNC_REVERSE_SUBTRACT};pe[Nh]=n.MIN,pe[Uh]=n.MAX;let Ot={[Oh]:n.ZERO,[Bh]:n.ONE,[zh]:n.SRC_COLOR,[nl]:n.SRC_ALPHA,[Xh]:n.SRC_ALPHA_SATURATE,[Hh]:n.DST_COLOR,[kh]:n.DST_ALPHA,[Vh]:n.ONE_MINUS_SRC_COLOR,[il]:n.ONE_MINUS_SRC_ALPHA,[Wh]:n.ONE_MINUS_DST_COLOR,[Gh]:n.ONE_MINUS_DST_ALPHA,[qh]:n.CONSTANT_COLOR,[Yh]:n.ONE_MINUS_CONSTANT_COLOR,[Zh]:n.CONSTANT_ALPHA,[Jh]:n.ONE_MINUS_CONSTANT_ALPHA};function Zt(D,ht,Q,ct,dt,Z,ot,ut,Mt,Ft){if(D===Mn){m===!0&&(vt(n.BLEND),m=!1);return}if(m===!1&&(et(n.BLEND),m=!0),D!==Lh){if(D!==f||Ft!==P){if((T!==bi||w!==bi)&&(n.blendEquation(n.FUNC_ADD),T=bi,w=bi),Ft)switch(D){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jo:n.blendFunc(n.ONE,n.ONE);break;case tl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case el:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:It("WebGLState: Invalid blending: ",D);break}else switch(D){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tl:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",D);break}A=null,M=null,b=null,C=null,_.set(0,0,0),E=0,f=D,P=Ft}return}dt=dt||ht,Z=Z||Q,ot=ot||ct,(ht!==T||dt!==w)&&(n.blendEquationSeparate(pe[ht],pe[dt]),T=ht,w=dt),(Q!==A||ct!==M||Z!==b||ot!==C)&&(n.blendFuncSeparate(Ot[Q],Ot[ct],Ot[Z],Ot[ot]),A=Q,M=ct,b=Z,C=ot),(ut.equals(_)===!1||Mt!==E)&&(n.blendColor(ut.r,ut.g,ut.b,Mt),_.copy(ut),E=Mt),f=D,P=!1}function ee(D,ht){D.side===yn?vt(n.CULL_FACE):et(n.CULL_FACE);let Q=D.side===Re;ht&&(Q=!Q),zt(Q),D.blending===ts&&D.transparent===!1?Zt(Mn):Zt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ct=D.stencilWrite;o.setTest(ct),ct&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){L!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),L=D)}function se(D){D!==Rh?(et(n.CULL_FACE),D!==N&&(D===Qo?n.cullFace(n.BACK):D===Ph?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),N=D}function ge(D){D!==z&&(H&&n.lineWidth(D),z=D)}function be(D,ht,Q){D?(et(n.POLYGON_OFFSET_FILL),(R!==ht||B!==Q)&&(R=ht,B=Q,a.getReversed()&&(ht=-ht),n.polygonOffset(ht,Q))):vt(n.POLYGON_OFFSET_FILL)}function le(D){D?et(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function me(D){D===void 0&&(D=n.TEXTURE0+W-1),j!==D&&(n.activeTexture(D),j=D)}function U(D,ht,Q){Q===void 0&&(j===null?Q=n.TEXTURE0+W-1:Q=j);let ct=tt[Q];ct===void 0&&(ct={type:void 0,texture:void 0},tt[Q]=ct),(ct.type!==D||ct.texture!==ht)&&(j!==Q&&(n.activeTexture(Q),j=Q),n.bindTexture(D,ht||$[D]),ct.type=D,ct.texture=ht)}function de(){let D=tt[j];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Kt(){try{n.compressedTexImage2D(...arguments)}catch(D){It("WebGLState:",D)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(D){It("WebGLState:",D)}}function g(){try{n.texSubImage2D(...arguments)}catch(D){It("WebGLState:",D)}}function I(){try{n.texSubImage3D(...arguments)}catch(D){It("WebGLState:",D)}}function O(){try{n.compressedTexSubImage2D(...arguments)}catch(D){It("WebGLState:",D)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(D){It("WebGLState:",D)}}function it(){try{n.texStorage2D(...arguments)}catch(D){It("WebGLState:",D)}}function st(){try{n.texStorage3D(...arguments)}catch(D){It("WebGLState:",D)}}function X(){try{n.texImage2D(...arguments)}catch(D){It("WebGLState:",D)}}function K(){try{n.texImage3D(...arguments)}catch(D){It("WebGLState:",D)}}function at(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function gt(D,ht){d[D]!==ht&&(n.pixelStorei(D,ht),d[D]=ht)}function rt(D){$t.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),$t.copy(D))}function lt(D){Ht.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ht.copy(D))}function bt(D,ht){let Q=c.get(ht);Q===void 0&&(Q=new WeakMap,c.set(ht,Q));let ct=Q.get(D);ct===void 0&&(ct=n.getUniformBlockIndex(ht,D.name),Q.set(D,ct))}function Rt(D,ht){let ct=c.get(ht).get(D);l.get(ht)!==ct&&(n.uniformBlockBinding(ht,ct,D.__bindingPointIndex),l.set(ht,ct))}function Dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,tt={},h={},p=new WeakMap,x=[],y=null,m=!1,f=null,T=null,A=null,M=null,w=null,b=null,C=null,_=new Ut(0,0,0),E=0,P=!1,L=null,N=null,z=null,R=null,B=null,$t.set(0,0,n.canvas.width,n.canvas.height),Ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:vt,bindFramebuffer:Lt,drawBuffers:yt,useProgram:Bt,setBlending:Zt,setMaterial:ee,setFlipSided:zt,setCullFace:se,setLineWidth:ge,setPolygonOffset:be,setScissorTest:le,activeTexture:me,bindTexture:U,unbindTexture:de,compressedTexImage2D:Kt,compressedTexImage3D:S,texImage2D:X,texImage3D:K,pixelStorei:gt,getParameter:at,updateUBOMapping:bt,uniformBlockBinding:Rt,texStorage2D:it,texStorage3D:st,texSubImage2D:g,texSubImage3D:I,compressedTexSubImage2D:O,compressedTexSubImage3D:q,scissor:rt,viewport:lt,reset:Dt}}function L0(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,u=new WeakMap,d=new Set,h,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,g){return x?new OffscreenCanvas(S,g):ys("canvas")}function m(S,g,I){let O=1,q=Kt(S);if((q.width>I||q.height>I)&&(O=I/Math.max(q.width,q.height)),O<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let it=Math.floor(O*q.width),st=Math.floor(O*q.height);h===void 0&&(h=y(it,st));let X=g?y(it,st):h;return X.width=it,X.height=st,X.getContext("2d").drawImage(S,0,0,it,st),Pt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+it+"x"+st+")."),X}else return"data"in S&&Pt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),S;return S}function f(S){return S.generateMipmaps}function T(S){n.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(S,g,I,O,q,it=!1){if(S!==null){if(n[S]!==void 0)return n[S];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let st;O&&(st=t.get("EXT_texture_norm16"),st||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=g;if(g===n.RED&&(I===n.FLOAT&&(X=n.R32F),I===n.HALF_FLOAT&&(X=n.R16F),I===n.UNSIGNED_BYTE&&(X=n.R8),I===n.UNSIGNED_SHORT&&st&&(X=st.R16_EXT),I===n.SHORT&&st&&(X=st.R16_SNORM_EXT)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.R8UI),I===n.UNSIGNED_SHORT&&(X=n.R16UI),I===n.UNSIGNED_INT&&(X=n.R32UI),I===n.BYTE&&(X=n.R8I),I===n.SHORT&&(X=n.R16I),I===n.INT&&(X=n.R32I)),g===n.RG&&(I===n.FLOAT&&(X=n.RG32F),I===n.HALF_FLOAT&&(X=n.RG16F),I===n.UNSIGNED_BYTE&&(X=n.RG8),I===n.UNSIGNED_SHORT&&st&&(X=st.RG16_EXT),I===n.SHORT&&st&&(X=st.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RG8UI),I===n.UNSIGNED_SHORT&&(X=n.RG16UI),I===n.UNSIGNED_INT&&(X=n.RG32UI),I===n.BYTE&&(X=n.RG8I),I===n.SHORT&&(X=n.RG16I),I===n.INT&&(X=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGB8UI),I===n.UNSIGNED_SHORT&&(X=n.RGB16UI),I===n.UNSIGNED_INT&&(X=n.RGB32UI),I===n.BYTE&&(X=n.RGB8I),I===n.SHORT&&(X=n.RGB16I),I===n.INT&&(X=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),I===n.UNSIGNED_INT&&(X=n.RGBA32UI),I===n.BYTE&&(X=n.RGBA8I),I===n.SHORT&&(X=n.RGBA16I),I===n.INT&&(X=n.RGBA32I)),g===n.RGB&&(I===n.UNSIGNED_SHORT&&st&&(X=st.RGB16_EXT),I===n.SHORT&&st&&(X=st.RGB16_SNORM_EXT),I===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),g===n.RGBA){let K=it?vs:qt.getTransfer(q);I===n.FLOAT&&(X=n.RGBA32F),I===n.HALF_FLOAT&&(X=n.RGBA16F),I===n.UNSIGNED_BYTE&&(X=K===te?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT&&st&&(X=st.RGBA16_EXT),I===n.SHORT&&st&&(X=st.RGBA16_SNORM_EXT),I===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function w(S,g){let I;return S?g===null||g===cn||g===ns?I=n.DEPTH24_STENCIL8:g===je?I=n.DEPTH32F_STENCIL8:g===es&&(I=n.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===cn||g===ns?I=n.DEPTH_COMPONENT24:g===je?I=n.DEPTH_COMPONENT32F:g===es&&(I=n.DEPTH_COMPONENT16),I}function b(S,g){return f(S)===!0||S.isFramebufferTexture&&S.minFilter!==Te&&S.minFilter!==Ae?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function C(S){let g=S.target;g.removeEventListener("dispose",C),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function _(S){let g=S.target;g.removeEventListener("dispose",_),L(g)}function E(S){let g=i.get(S);if(g.__webglInit===void 0)return;let I=S.source,O=p.get(I);if(O){let q=O[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(S),Object.keys(O).length===0&&p.delete(I)}i.remove(S)}function P(S){let g=i.get(S);n.deleteTexture(g.__webglTexture);let I=S.source,O=p.get(I);delete O[g.__cacheKey],a.memory.textures--}function L(S){let g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let q=0;q<g.__webglFramebuffer[O].length;q++)n.deleteFramebuffer(g.__webglFramebuffer[O][q]);else n.deleteFramebuffer(g.__webglFramebuffer[O]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)n.deleteFramebuffer(g.__webglFramebuffer[O]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let O=0;O<g.__webglColorRenderbuffer.length;O++)g.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[O]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let I=S.textures;for(let O=0,q=I.length;O<q;O++){let it=i.get(I[O]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),a.memory.textures--),i.remove(I[O])}i.remove(S)}let N=0;function z(){N=0}function R(){return N}function B(S){N=S}function W(){let S=N;return S>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,S}function H(S){let g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function nt(S,g){let I=i.get(S);if(S.isVideoTexture&&U(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&I.__version!==S.version){let O=S.image;if(O===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(I,S,g);return}}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function J(S,g){let I=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){vt(I,S,g);return}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function j(S,g){let I=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){vt(I,S,g);return}e.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function tt(S,g){let I=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&I.__version!==S.version){Lt(I,S,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}let _t={[Or]:n.REPEAT,[pn]:n.CLAMP_TO_EDGE,[Br]:n.MIRRORED_REPEAT},At={[Te]:n.NEAREST,[Qh]:n.NEAREST_MIPMAP_NEAREST,[ks]:n.NEAREST_MIPMAP_LINEAR,[Ae]:n.LINEAR,[ca]:n.LINEAR_MIPMAP_NEAREST,[ni]:n.LINEAR_MIPMAP_LINEAR},$t={[nu]:n.NEVER,[ou]:n.ALWAYS,[iu]:n.LESS,[Ya]:n.LEQUAL,[su]:n.EQUAL,[Za]:n.GEQUAL,[ru]:n.GREATER,[au]:n.NOTEQUAL};function Ht(S,g){if(g.type===je&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ae||g.magFilter===ca||g.magFilter===ks||g.magFilter===ni||g.minFilter===Ae||g.minFilter===ca||g.minFilter===ks||g.minFilter===ni)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,_t[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,_t[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,_t[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,At[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,At[g.minFilter]),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,$t[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Te||g.minFilter!==ks&&g.minFilter!==ni||g.type===je&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Wt(S,g){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",C));let O=g.source,q=p.get(O);q===void 0&&(q={},p.set(O,q));let it=H(g);if(it!==S.__cacheKey){q[it]===void 0&&(q[it]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),q[it].usedTimes++;let st=q[S.__cacheKey];st!==void 0&&(q[S.__cacheKey].usedTimes--,st.usedTimes===0&&P(g)),S.__cacheKey=it,S.__webglTexture=q[it].texture}return I}function $(S,g,I){return Math.floor(Math.floor(S/I)/g)}function et(S,g,I,O){let it=S.updateRanges;if(it.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,I,O,g.data);else{it.sort((gt,rt)=>gt.start-rt.start);let st=0;for(let gt=1;gt<it.length;gt++){let rt=it[st],lt=it[gt],bt=rt.start+rt.count,Rt=$(lt.start,g.width,4),Dt=$(rt.start,g.width,4);lt.start<=bt+1&&Rt===Dt&&$(lt.start+lt.count-1,g.width,4)===Rt?rt.count=Math.max(rt.count,lt.start+lt.count-rt.start):(++st,it[st]=lt)}it.length=st+1;let X=e.getParameter(n.UNPACK_ROW_LENGTH),K=e.getParameter(n.UNPACK_SKIP_PIXELS),at=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let gt=0,rt=it.length;gt<rt;gt++){let lt=it[gt],bt=Math.floor(lt.start/4),Rt=Math.ceil(lt.count/4),Dt=bt%g.width,D=Math.floor(bt/g.width),ht=Rt,Q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,Dt,D,ht,Q,I,O,g.data)}S.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,X),e.pixelStorei(n.UNPACK_SKIP_PIXELS,K),e.pixelStorei(n.UNPACK_SKIP_ROWS,at)}}function vt(S,g,I){let O=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(O=n.TEXTURE_3D);let q=Wt(S,g),it=g.source;e.bindTexture(O,S.__webglTexture,n.TEXTURE0+I);let st=i.get(it);if(it.version!==st.__version||q===!0){if(e.activeTexture(n.TEXTURE0+I),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Q=qt.getPrimaries(qt.workingColorSpace),ct=g.colorSpace===Dn?null:qt.getPrimaries(g.colorSpace),dt=g.colorSpace===Dn||Q===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let K=m(g.image,!1,s.maxTextureSize);K=de(g,K);let at=r.convert(g.format,g.colorSpace),gt=r.convert(g.type),rt=M(g.internalFormat,at,gt,g.normalized,g.colorSpace,g.isVideoTexture);Ht(O,g);let lt,bt=g.mipmaps,Rt=g.isVideoTexture!==!0,Dt=st.__version===void 0||q===!0,D=it.dataReady,ht=b(g,K);if(g.isDepthTexture)rt=w(g.format===ii,g.type),Dt&&(Rt?e.texStorage2D(n.TEXTURE_2D,1,rt,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,rt,K.width,K.height,0,at,gt,null));else if(g.isDataTexture)if(bt.length>0){Rt&&Dt&&e.texStorage2D(n.TEXTURE_2D,ht,rt,bt[0].width,bt[0].height);for(let Q=0,ct=bt.length;Q<ct;Q++)lt=bt[Q],Rt?D&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,lt.width,lt.height,at,gt,lt.data):e.texImage2D(n.TEXTURE_2D,Q,rt,lt.width,lt.height,0,at,gt,lt.data);g.generateMipmaps=!1}else Rt?(Dt&&e.texStorage2D(n.TEXTURE_2D,ht,rt,K.width,K.height),D&&et(g,K,at,gt)):e.texImage2D(n.TEXTURE_2D,0,rt,K.width,K.height,0,at,gt,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Rt&&Dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,rt,bt[0].width,bt[0].height,K.depth);for(let Q=0,ct=bt.length;Q<ct;Q++)if(lt=bt[Q],g.format!==tn)if(at!==null)if(Rt){if(D)if(g.layerUpdates.size>0){let dt=bl(lt.width,lt.height,g.format,g.type);for(let Z of g.layerUpdates){let ot=lt.data.subarray(Z*dt/lt.data.BYTES_PER_ELEMENT,(Z+1)*dt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Z,lt.width,lt.height,1,at,ot)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,K.depth,at,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,rt,lt.width,lt.height,K.depth,0,lt.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,K.depth,at,gt,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,rt,lt.width,lt.height,K.depth,0,at,gt,lt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Rt&&Dt&&e.texStorage2D(n.TEXTURE_2D,ht,rt,bt[0].width,bt[0].height);for(let Q=0,ct=bt.length;Q<ct;Q++)lt=bt[Q],g.format!==tn?at!==null?Rt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,lt.width,lt.height,at,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,rt,lt.width,lt.height,0,lt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?D&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,lt.width,lt.height,at,gt,lt.data):e.texImage2D(n.TEXTURE_2D,Q,rt,lt.width,lt.height,0,at,gt,lt.data)}else if(g.isDataArrayTexture)if(Rt){if(Dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,rt,K.width,K.height,K.depth),D)if(g.layerUpdates.size>0){let Q=bl(K.width,K.height,g.format,g.type);for(let ct of g.layerUpdates){let dt=K.data.subarray(ct*Q/K.data.BYTES_PER_ELEMENT,(ct+1)*Q/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,K.width,K.height,1,at,gt,dt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,at,gt,K.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,K.width,K.height,K.depth,0,at,gt,K.data);else if(g.isData3DTexture)Rt?(Dt&&e.texStorage3D(n.TEXTURE_3D,ht,rt,K.width,K.height,K.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,at,gt,K.data)):e.texImage3D(n.TEXTURE_3D,0,rt,K.width,K.height,K.depth,0,at,gt,K.data);else if(g.isFramebufferTexture){if(Dt)if(Rt)e.texStorage2D(n.TEXTURE_2D,ht,rt,K.width,K.height);else{let Q=K.width,ct=K.height;for(let dt=0;dt<ht;dt++)e.texImage2D(n.TEXTURE_2D,dt,rt,Q,ct,0,at,gt,null),Q>>=1,ct>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),K.parentNode!==Q){Q.appendChild(K),d.add(g),Q.onpaint=ct=>{let dt=ct.changedElements;for(let Z of d)dt.includes(Z.image)&&(Z.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let dt=n.RGBA,Z=n.RGBA,ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,dt,Z,ot,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(bt.length>0){if(Rt&&Dt){let Q=Kt(bt[0]);e.texStorage2D(n.TEXTURE_2D,ht,rt,Q.width,Q.height)}for(let Q=0,ct=bt.length;Q<ct;Q++)lt=bt[Q],Rt?D&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,at,gt,lt):e.texImage2D(n.TEXTURE_2D,Q,rt,at,gt,lt);g.generateMipmaps=!1}else if(Rt){if(Dt){let Q=Kt(K);e.texStorage2D(n.TEXTURE_2D,ht,rt,Q.width,Q.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at,gt,K)}else e.texImage2D(n.TEXTURE_2D,0,rt,at,gt,K);f(g)&&T(O),st.__version=it.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Lt(S,g,I){if(g.image.length!==6)return;let O=Wt(S,g),q=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+I);let it=i.get(q);if(q.version!==it.__version||O===!0){e.activeTexture(n.TEXTURE0+I);let st=qt.getPrimaries(qt.workingColorSpace),X=g.colorSpace===Dn?null:qt.getPrimaries(g.colorSpace),K=g.colorSpace===Dn||st===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let at=g.isCompressedTexture||g.image[0].isCompressedTexture,gt=g.image[0]&&g.image[0].isDataTexture,rt=[];for(let Z=0;Z<6;Z++)!at&&!gt?rt[Z]=m(g.image[Z],!0,s.maxCubemapSize):rt[Z]=gt?g.image[Z].image:g.image[Z],rt[Z]=de(g,rt[Z]);let lt=rt[0],bt=r.convert(g.format,g.colorSpace),Rt=r.convert(g.type),Dt=M(g.internalFormat,bt,Rt,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,ht=it.__version===void 0||O===!0,Q=q.dataReady,ct=b(g,lt);Ht(n.TEXTURE_CUBE_MAP,g);let dt;if(at){D&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Dt,lt.width,lt.height);for(let Z=0;Z<6;Z++){dt=rt[Z].mipmaps;for(let ot=0;ot<dt.length;ot++){let ut=dt[ot];g.format!==tn?bt!==null?D?Q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,ut.width,ut.height,bt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Dt,ut.width,ut.height,0,ut.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,ut.width,ut.height,bt,Rt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Dt,ut.width,ut.height,0,bt,Rt,ut.data)}}}else{if(dt=g.mipmaps,D&&ht){dt.length>0&&ct++;let Z=Kt(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Dt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(gt){D?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,rt[Z].width,rt[Z].height,bt,Rt,rt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Dt,rt[Z].width,rt[Z].height,0,bt,Rt,rt[Z].data);for(let ot=0;ot<dt.length;ot++){let Mt=dt[ot].image[Z].image;D?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,Mt.width,Mt.height,bt,Rt,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Dt,Mt.width,Mt.height,0,bt,Rt,Mt.data)}}else{D?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,bt,Rt,rt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Dt,bt,Rt,rt[Z]);for(let ot=0;ot<dt.length;ot++){let ut=dt[ot];D?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,bt,Rt,ut.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Dt,bt,Rt,ut.image[Z])}}}f(g)&&T(n.TEXTURE_CUBE_MAP),it.__version=q.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function yt(S,g,I,O,q,it){let st=r.convert(I.format,I.colorSpace),X=r.convert(I.type),K=M(I.internalFormat,st,X,I.normalized,I.colorSpace),at=i.get(g),gt=i.get(I);if(gt.__renderTarget=g,!at.__hasExternalTextures){let rt=Math.max(1,g.width>>it),lt=Math.max(1,g.height>>it);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?e.texImage3D(q,it,K,rt,lt,g.depth,0,st,X,null):e.texImage2D(q,it,K,rt,lt,0,st,X,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),me(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,q,gt.__webglTexture,0,le(g)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,q,gt.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(S,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer){let O=g.depthTexture,q=O&&O.isDepthTexture?O.type:null,it=w(g.stencilBuffer,q),st=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(g),it,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(g),it,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,it,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,S)}else{let O=g.textures;for(let q=0;q<O.length;q++){let it=O[q],st=r.convert(it.format,it.colorSpace),X=r.convert(it.type),K=M(it.internalFormat,st,X,it.normalized,it.colorSpace);me(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(g),K,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(g),K,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,K,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(S,g,I){let O=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=i.get(g.depthTexture);if(q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),O){if(q.__webglInit===void 0&&(q.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,g.depthTexture);let at=r.convert(g.depthTexture.format),gt=r.convert(g.depthTexture.type),rt;g.depthTexture.format===mn?rt=n.DEPTH_COMPONENT24:g.depthTexture.format===ii&&(rt=n.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,rt,g.width,g.height,0,at,gt,null)}}else nt(g.depthTexture,0);let it=q.__webglTexture,st=le(g),X=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,K=g.depthTexture.format===ii?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===mn)me(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,X,it,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,K,X,it,0);else if(g.depthTexture.format===ii)me(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,X,it,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,K,X,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(S){let g=i.get(S),I=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){let O=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),O){let q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,O.removeEventListener("dispose",q)};O.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=O}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let O=0;O<6;O++)pe(g.__webglFramebuffer[O],S,O);else{let O=S.texture.mipmaps;O&&O.length>0?pe(g.__webglFramebuffer[0],S,0):pe(g.__webglFramebuffer,S,0)}else if(I){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]===void 0)g.__webglDepthbuffer[O]=n.createRenderbuffer(),Bt(g.__webglDepthbuffer[O],S,!1);else{let q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,it)}}else{let O=S.texture.mipmaps;if(O&&O.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Bt(g.__webglDepthbuffer,S,!1);else{let q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,it)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(S,g,I){let O=i.get(S);g!==void 0&&yt(O.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ot(S)}function ee(S){let g=S.texture,I=i.get(S),O=i.get(g);S.addEventListener("dispose",_);let q=S.textures,it=S.isWebGLCubeRenderTarget===!0,st=q.length>1;if(st||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=g.version,a.memory.textures++),it){I.__webglFramebuffer=[];for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[X]=[];for(let K=0;K<g.mipmaps.length;K++)I.__webglFramebuffer[X][K]=n.createFramebuffer()}else I.__webglFramebuffer[X]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let X=0;X<g.mipmaps.length;X++)I.__webglFramebuffer[X]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(st)for(let X=0,K=q.length;X<K;X++){let at=i.get(q[X]);at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&me(S)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let X=0;X<q.length;X++){let K=q[X];I.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[X]);let at=r.convert(K.format,K.colorSpace),gt=r.convert(K.type),rt=M(K.internalFormat,at,gt,K.normalized,K.colorSpace,S.isXRRenderTarget===!0),lt=le(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,rt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,I.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(I.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,g);for(let X=0;X<6;X++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)yt(I.__webglFramebuffer[X][K],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else yt(I.__webglFramebuffer[X],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);f(g)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let X=0,K=q.length;X<K;X++){let at=q[X],gt=i.get(at),rt=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(rt=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,gt.__webglTexture),Ht(rt,at),yt(I.__webglFramebuffer,S,at,n.COLOR_ATTACHMENT0+X,rt,0),f(at)&&T(rt)}e.unbindTexture()}else{let X=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(X=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(X,O.__webglTexture),Ht(X,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)yt(I.__webglFramebuffer[K],S,g,n.COLOR_ATTACHMENT0,X,K);else yt(I.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,X,0);f(g)&&T(X),e.unbindTexture()}S.depthBuffer&&Ot(S)}function zt(S){let g=S.textures;for(let I=0,O=g.length;I<O;I++){let q=g[I];if(f(q)){let it=A(S),st=i.get(q).__webglTexture;e.bindTexture(it,st),T(it),e.unbindTexture()}}}let se=[],ge=[];function be(S){if(S.samples>0){if(me(S)===!1){let g=S.textures,I=S.width,O=S.height,q=n.COLOR_BUFFER_BIT,it=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=i.get(S),X=g.length>1;if(X)for(let at=0;at<g.length;at++)e.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let K=S.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let at=0;at<g.length;at++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,st.__webglColorRenderbuffer[at]);let gt=i.get(g[at]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,I,O,0,0,I,O,q,n.NEAREST),l===!0&&(se.length=0,ge.length=0,se.push(n.COLOR_ATTACHMENT0+at),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(se.push(it),ge.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let at=0;at<g.length;at++){e.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,st.__webglColorRenderbuffer[at]);let gt=i.get(g[at]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&l){let g=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function le(S){return Math.min(s.maxSamples,S.samples)}function me(S){let g=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(S){let g=a.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function de(S,g){let I=S.colorSpace,O=S.format,q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||I!==_s&&I!==Dn&&(qt.getTransfer(I)===te?(O!==tn||q!==We)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",I)),g}function Kt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.getTextureUnits=R,this.setTextureUnits=B,this.setTexture2D=nt,this.setTexture2DArray=J,this.setTexture3D=j,this.setTextureCube=tt,this.rebindTextures=Zt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function D0(n,t){function e(i,s=Dn){let r,a=qt.getTransfer(s);if(i===We)return n.UNSIGNED_BYTE;if(i===ua)return n.UNSIGNED_SHORT_4_4_4_4;if(i===da)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ul)return n.BYTE;if(i===dl)return n.SHORT;if(i===es)return n.UNSIGNED_SHORT;if(i===ha)return n.INT;if(i===cn)return n.UNSIGNED_INT;if(i===je)return n.FLOAT;if(i===hn)return n.HALF_FLOAT;if(i===ml)return n.ALPHA;if(i===gl)return n.RGB;if(i===tn)return n.RGBA;if(i===mn)return n.DEPTH_COMPONENT;if(i===ii)return n.DEPTH_STENCIL;if(i===fa)return n.RED;if(i===pa)return n.RED_INTEGER;if(i===si)return n.RG;if(i===ma)return n.RG_INTEGER;if(i===ga)return n.RGBA_INTEGER;if(i===Gs||i===Hs||i===Ws||i===Xs)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xa||i===_a||i===va||i===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ma||i===Sa||i===ba||i===wa||i===Ea||i===qs||i===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ma||i===Sa)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wa)return r.COMPRESSED_R11_EAC;if(i===Ea)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qs)return r.COMPRESSED_RG11_EAC;if(i===Ta)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Aa||i===Ca||i===Ra||i===Pa||i===Ia||i===La||i===Da||i===Fa||i===Na||i===Ua||i===Oa||i===Ba||i===za||i===Va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Aa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ca)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ra)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ia)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===La)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Da)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Na)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ua)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===za)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ka||i===Ga||i===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ka)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wa||i===Xa||i===Ys||i===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ys)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var F0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Cs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ze({vertexShader:F0,fragmentShader:N0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new Zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bl=class extends gn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null,y=typeof XRWebGLBinding<"u",m=new Ol,f={},T=e.getContextAttributes(),A=null,M=null,w=[],b=[],C=new Gt,_=null,E=null,P=new Oe;P.viewport=new fe;let L=new Oe;L.viewport=new fe;let N=[P,L],z=new ra,R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=w[$];return et===void 0&&(et=new $i,w[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=w[$];return et===void 0&&(et=new $i,w[$]=et),et.getGripSpace()},this.getHand=function($){let et=w[$];return et===void 0&&(et=new $i,w[$]=et),et.getHandSpace()};function W($){let et=b.indexOf($.inputSource);if(et===-1)return;let vt=w[et];vt!==void 0&&(vt.update($.inputSource,$.frame,c||a),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",nt);for(let $=0;$<w.length;$++){let et=b[$];et!==null&&(b[$]=null,w[$].disconnect(et))}R=null,B=null,m.reset();for(let $ in f)delete f[$];if(t.setRenderTarget(A),p=null,h=null,d=null,s=null,M=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),E!==null){let $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",H),s.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Lt=null,yt=null;T.depth&&(yt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=T.stencil?ii:mn,Lt=T.stencil?ns:cn);let Bt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Bt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new He(h.textureWidth,h.textureHeight,{format:tn,type:We,depthTexture:new qn(h.textureWidth,h.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let vt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new He(p.framebufferWidth,p.framebufferHeight,{format:tn,type:We,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt($){for(let et=0;et<$.removed.length;et++){let vt=$.removed[et],Lt=b.indexOf(vt);Lt>=0&&(b[Lt]=null,w[Lt].disconnect(vt))}for(let et=0;et<$.added.length;et++){let vt=$.added[et],Lt=b.indexOf(vt);if(Lt===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=b.length){b.push(vt),Lt=Bt;break}else if(b[Bt]===null){b[Bt]=vt,Lt=Bt;break}if(Lt===-1)break}let yt=w[Lt];yt&&yt.connect(vt)}}let J=new G,j=new G;function tt($,et,vt){J.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);let Lt=J.distanceTo(j),yt=et.projectionMatrix.elements,Bt=vt.projectionMatrix.elements,pe=yt[14]/(yt[10]-1),Ot=yt[14]/(yt[10]+1),Zt=(yt[9]+1)/yt[5],ee=(yt[9]-1)/yt[5],zt=(yt[8]-1)/yt[0],se=(Bt[8]+1)/Bt[0],ge=pe*zt,be=pe*se,le=Lt/(-zt+se),me=le*-zt;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(me),$.translateZ(le),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),yt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let U=pe+le,de=Ot+le,Kt=ge-me,S=be+(Lt-me),g=Zt*Ot/de*U,I=ee*Ot/de*U;$.projectionMatrix.makePerspective(Kt,S,g,I,U,de),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _t($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,vt=$.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),z.near=L.near=P.near=et,z.far=L.far=P.far=vt,(R!==z.near||B!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),R=z.near,B=z.far),z.layers.mask=$.layers.mask|6,P.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let Lt=$.parent,yt=z.cameras;_t(z,Lt);for(let Bt=0;Bt<yt.length;Bt++)_t(yt[Bt],Lt);yt.length===2?tt(z,P,L):z.projectionMatrix.copy(P.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),At($,z,Lt)};function At($,et,vt){vt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return f[$]};let $t=null;function Ht($,et){if(u=et.getViewerPose(c||a),x=et,u!==null){let vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Lt=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,Lt=!0);for(let Ot=0;Ot<vt.length;Ot++){let Zt=vt[Ot],ee=null;if(p!==null)ee=p.getViewport(Zt);else{let se=d.getViewSubImage(h,Zt);ee=se.viewport,Ot===0&&(t.setRenderTargetTextures(M,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(M))}let zt=N[Ot];zt===void 0&&(zt=new Oe,zt.layers.enable(Ot),zt.viewport=new fe,N[Ot]=zt),zt.matrix.fromArray(Zt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Zt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ee.x,ee.y,ee.width,ee.height),Ot===0&&(z.matrix.copy(zt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Lt===!0&&z.cameras.push(zt)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Ot=d.getDepthInformation(vt[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(yt&&yt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let Ot=0;Ot<vt.length;Ot++){let Zt=vt[Ot].camera;if(Zt){let ee=f[Zt];ee||(ee=new Cs,f[Zt]=ee);let zt=d.getCameraImage(Zt);ee.sourceTexture=zt}}}}for(let vt=0;vt<w.length;vt++){let Lt=b[vt],yt=w[vt];Lt!==null&&yt!==void 0&&yt.update(Lt,et,c||a)}$t&&$t($,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),x=null}let Wt=new Bu;Wt.setAnimationLoop(Ht),this.setAnimationLoop=function($){$t=$},this.dispose=function(){}}},U0=new ie,Wu=new Nt;Wu.set(-1,0,0,0,1,0,0,0,1);function O0(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,yl(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,A,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Re&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Re&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T=t.get(f),A=T.envMap,M=T.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(U0.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Wu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=A*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function B0(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let b=w.program;i.uniformBlockBinding(M,b)}function c(M,w){let b=s[M.id];b===void 0&&(m(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",T));let C=w.program;i.updateUBOMapping(M,C);let _=t.render.frame;r[M.id]!==_&&(h(M),r[M.id]=_)}function u(M){let w=d();M.__bindingPointIndex=w;let b=n.createBuffer(),C=M.__size,_=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let w=s[M.id],b=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,E=b.length;_<E;_++){let P=b[_];if(Array.isArray(P))for(let L=0,N=P.length;L<N;L++)p(P[L],_,L,C);else p(P,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,w,b,C){if(y(M,w,b,C)===!0){let _=M.__offset,E=M.value;if(Array.isArray(E)){let P=0;for(let L=0;L<E.length;L++){let N=E[L],z=f(N);x(N,M.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,M.__data)}}function x(M,w,b){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,b)}function y(M,w,b,C){let _=M.value,E=w+"_"+b;if(C[E]===void 0)return typeof _=="number"||typeof _=="boolean"?C[E]=_:ArrayBuffer.isView(_)?C[E]=_.slice():C[E]=_.clone(),!0;{let P=C[E];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return C[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(M){let w=M.uniforms,b=0,C=16;for(let E=0,P=w.length;E<P;E++){let L=Array.isArray(w[E])?w[E]:[w[E]];for(let N=0,z=L.length;N<z;N++){let R=L[N],B=Array.isArray(R.value)?R.value:[R.value];for(let W=0,H=B.length;W<H;W++){let nt=B[W],J=f(nt),j=b%C,tt=j%J.boundary,_t=j+tt;b+=tt,_t!==0&&C-_t<J.storage&&(b+=C-_t),R.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=J.storage}}}let _=b%C;return _>0&&(b+=C-_),M.__size=b,M.__cache={},this}function f(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",M),w}function T(M){let w=M.target;w.removeEventListener("dispose",T);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null;function V0(){return Sn===null&&(Sn=new Es(z0,16,16,si,hn),Sn.name="DFG_LUT",Sn.minFilter=Ae,Sn.magFilter=Ae,Sn.wrapS=pn,Sn.wrapT=pn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}var Qa=class{constructor(t={}){let{canvas:e=cu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=We}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let y=p,m=new Set([ga,ma,pa]),f=new Set([We,cn,es,ns,ua,da]),T=new Uint32Array(4),A=new Int32Array(4),M=new G,w=null,b=null,C=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,N=null,z=null,R=null,B=null;this._outputColorSpace=Ue;let W=0,H=0,nt=null,J=-1,j=null,tt=new fe,_t=new fe,At=null,$t=new Ut(0),Ht=0,Wt=e.width,$=e.height,et=1,vt=null,Lt=null,yt=new fe(0,0,Wt,$),Bt=new fe(0,0,Wt,$),pe=!1,Ot=new Ki,Zt=!1,ee=!1,zt=new ie,se=new G,ge=new fe,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function me(){return nt===null?et:1}let U=i;function de(v,F){return e.getContext(v,F)}let Kt,S,g,I,O,q,it,st,X,K,at,gt,rt,lt,bt,Rt,Dt,D,ht,Q,ct,dt,Z;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",xe,!1),U===null){let F="webgl2";if(U=de(F,v),U===null)throw de(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(v){throw e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",xe,!1),It("WebGLRenderer: "+v.message),v}function ot(){Kt=new Ym(U),Kt.init(),ct=new D0(U,Kt),S=new Om(U,Kt,t,ct),g=new I0(U,Kt),S.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),z=U.createFramebuffer(),R=U.createFramebuffer(),B=U.createFramebuffer(),I=new $m(U),O=new x0,q=new L0(U,Kt,g,O,S,ct,I),it=new qm(P),st=new Kd(U),dt=new Nm(U,st),X=new Zm(U,st,I,dt),K=new Qm(U,X,st,dt,I),D=new Km(U,S,q),bt=new Bm(O),at=new g0(P,it,Kt,S,dt,bt),gt=new O0(P,O),rt=new v0,lt=new E0(Kt),Dt=new Fm(P,it,g,K,x,l),Rt=new P0(P,K,S),Z=new B0(U,I,S,g),ht=new Um(U,Kt,I),Q=new Jm(U,Kt,I),I.programs=at.programs,P.capabilities=S,P.extensions=Kt,P.properties=O,P.renderLists=rt,P.shadowMap=Rt,P.state=g,P.info=I}y!==We&&(E=new tg(y,e.width,e.height,o,s,r));let ut=new Bl(P,U);this.xr=ut,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=Kt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Kt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(v){v!==void 0&&(et=v,this.setSize(Wt,$,!1))},this.getSize=function(v){return v.set(Wt,$)},this.setSize=function(v,F,Y=!0){if(ut.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=v,$=F,e.width=Math.floor(v*et),e.height=Math.floor(F*et),Y===!0&&(e.style.width=v+"px",e.style.height=F+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(Wt*et,$*et).floor()},this.setDrawingBufferSize=function(v,F,Y){Wt=v,$=F,et=Y,e.width=Math.floor(v*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(y===We){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(tt)},this.getViewport=function(v){return v.copy(yt)},this.setViewport=function(v,F,Y,V){v.isVector4?yt.set(v.x,v.y,v.z,v.w):yt.set(v,F,Y,V),g.viewport(tt.copy(yt).multiplyScalar(et).round())},this.getScissor=function(v){return v.copy(Bt)},this.setScissor=function(v,F,Y,V){v.isVector4?Bt.set(v.x,v.y,v.z,v.w):Bt.set(v,F,Y,V),g.scissor(_t.copy(Bt).multiplyScalar(et).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(v){g.setScissorTest(pe=v)},this.setOpaqueSort=function(v){vt=v},this.setTransparentSort=function(v){Lt=v},this.getClearColor=function(v){return v.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,Y=!0){let V=0;if(v){let k=!1;if(nt!==null){let mt=nt.texture.format;k=m.has(mt)}if(k){let mt=nt.texture.type,wt=f.has(mt),pt=Dt.getClearColor(),Et=Dt.getClearAlpha(),Ct=pt.r,Vt=pt.g,Xt=pt.b;wt?(T[0]=Ct,T[1]=Vt,T[2]=Xt,T[3]=Et,U.clearBufferuiv(U.COLOR,0,T)):(A[0]=Ct,A[1]=Vt,A[2]=Xt,A[3]=Et,U.clearBufferiv(U.COLOR,0,A))}else V|=U.COLOR_BUFFER_BIT}F&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",xe,!1),Dt.dispose(),rt.dispose(),lt.dispose(),O.dispose(),it.dispose(),K.dispose(),dt.dispose(),Z.dispose(),at.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",oi),ut.removeEventListener("sessionend",En),Fe.stop()};function Mt(v){v.preventDefault(),vl("WebGLRenderer: Context Lost."),L=!0}function Ft(){vl("WebGLRenderer: Context Restored."),L=!1;let v=I.autoReset,F=Rt.enabled,Y=Rt.autoUpdate,V=Rt.needsUpdate,k=Rt.type;ot(),I.autoReset=v,Rt.enabled=F,Rt.autoUpdate=Y,Rt.needsUpdate=V,Rt.type=k}function xe(v){It("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function xt(v){let F=v.target;F.removeEventListener("dispose",xt),re(F)}function re(v){un(v),O.remove(v)}function un(v){let F=O.get(v).programs;F!==void 0&&(F.forEach(function(Y){at.releaseProgram(Y)}),v.isShaderMaterial&&at.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,Y,V,k,mt){F===null&&(F=be);let wt=k.isMesh&&k.matrixWorld.determinantAffine()<0,pt=$u(v,F,Y,V,k);g.setMaterial(V,wt);let Et=Y.index,Ct=1;if(V.wireframe===!0){if(Et=X.getWireframeAttribute(Y),Et===void 0)return;Ct=2}let Vt=Y.drawRange,Xt=Y.attributes.position,Tt=Vt.start*Ct,jt=(Vt.start+Vt.count)*Ct;mt!==null&&(Tt=Math.max(Tt,mt.start*Ct),jt=Math.min(jt,(mt.start+mt.count)*Ct)),Et!==null?(Tt=Math.max(Tt,0),jt=Math.min(jt,Et.count)):Xt!=null&&(Tt=Math.max(Tt,0),jt=Math.min(jt,Xt.count));let ve=jt-Tt;if(ve<0||ve===1/0)return;dt.setup(k,V,pt,Y,Et);let ce,ae=ht;if(Et!==null&&(ce=st.get(Et),ae=Q,ae.setIndex(ce)),k.isMesh)V.wireframe===!0?(g.setLineWidth(V.wireframeLinewidth*me()),ae.setMode(U.LINES)):ae.setMode(U.TRIANGLES);else if(k.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),g.setLineWidth(Pe*me()),k.isLineSegments?ae.setMode(U.LINES):k.isLineLoop?ae.setMode(U.LINE_LOOP):ae.setMode(U.LINE_STRIP)}else k.isPoints?ae.setMode(U.POINTS):k.isSprite&&ae.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Pe=k._multiDrawStarts,St=k._multiDrawCounts,Ne=k._multiDrawCount,Jt=Et?st.get(Et).bytesPerElement:1,$e=O.get(V).currentProgram.getUniforms();for(let dn=0;dn<Ne;dn++)$e.setValue(U,"_gl_DrawID",dn),ae.render(Pe[dn]/Jt,St[dn])}else if(k.isInstancedMesh)ae.renderInstances(Tt,ve,k.count);else if(Y.isInstancedBufferGeometry){let Pe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,St=Math.min(Y.instanceCount,Pe);ae.renderInstances(Tt,ve,St)}else ae.render(Tt,ve)};function wn(v,F,Y,V){N!==null&&v.isNodeMaterial&&N.setObject(V,v),Zt===!0&&bt.setState(v,Y,!1),v.transparent===!0&&v.side===yn&&v.forceSinglePass===!1?(v.side=Re,v.needsUpdate=!0,js(v,F,V),v.side=ti,v.needsUpdate=!0,js(v,F,V),v.side=yn):js(v,F,V)}this.compile=function(v,F,Y=null){Y===null&&(Y=v),N!==null&&N.renderStart(v,F,Y),b=lt.get(Y),b.init(F),_.push(b),Y.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),v!==Y&&v.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),ee=this.localClippingEnabled,Zt=bt.init(this.clippingPlanes,ee),Zt===!0&&bt.setGlobalState(this.clippingPlanes,F),N!==null&&Rt.render(b.state.shadowsArray,Y,F);let V=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let mt=k.material;if(mt)if(Array.isArray(mt))for(let wt=0;wt<mt.length;wt++){let pt=mt[wt];wn(pt,Y,F,k),V.add(pt)}else wn(mt,Y,F,k),V.add(mt)}),b=_.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(v,F,Y=null){let V=this.compile(v,F,Y);return new Promise(k=>{function mt(){if(V.forEach(function(wt){let Et=O.get(wt).currentProgram;(Et===void 0||Et.isReady())&&V.delete(wt)}),V.size===0){k(v);return}setTimeout(mt,10)}Kt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let we=null;function ai(v){we&&we(v)}function oi(){Fe.stop()}function En(){Fe.start()}let Fe=new Bu;Fe.setAnimationLoop(ai),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(v){we=v,ut.setAnimationLoop(v),v===null?Fe.stop():Fe.start()},ut.addEventListener("sessionstart",oi),ut.addEventListener("sessionend",En),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(v,F);let Y=ut.enabled===!0&&ut.isPresenting===!0,V=E!==null&&(nt===null||Y)&&E.begin(P,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(F),F=ut.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,F,nt),b=lt.get(v,_.length),b.init(F),b.state.textureUnits=q.getTextureUnits(),_.push(b),zt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ot.setFromProjectionMatrix(zt,an,F.reversedDepth),ee=this.localClippingEnabled,Zt=bt.init(this.clippingPlanes,ee),w=rt.get(v,C.length),w.init(),C.push(w),ut.enabled===!0&&ut.isPresenting===!0){let wt=P.xr.getDepthSensingMesh();wt!==null&&li(wt,F,-1/0,P.sortObjects)}li(v,F,0,P.sortObjects),w.finish(),N!==null&&N.updateLights(b.state.lightsArray),P.sortObjects===!0&&w.sort(vt,Lt),le=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,le&&Dt.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&bt.beginShadows();let k=b.state.shadowsArray;if(Rt.render(k,v,F),Zt===!0&&bt.endShadows(),(V&&E.hasRenderPass())===!1){let wt=w.opaque,pt=w.transmissive;if(b.setupLights(),F.isArrayCamera){let Et=F.cameras;if(pt.length>0)for(let Ct=0,Vt=Et.length;Ct<Vt;Ct++){let Xt=Et[Ct];Ci(wt,pt,v,Xt)}le&&Dt.render(v);for(let Ct=0,Vt=Et.length;Ct<Vt;Ct++){let Xt=Et[Ct];Ai(w,v,Xt,Xt.viewport)}}else pt.length>0&&Ci(wt,pt,v,F),le&&Dt.render(v),Ai(w,v,F)}nt!==null&&H===0&&(q.updateMultisampleRenderTarget(nt),q.updateRenderTargetMipmap(nt)),V&&E.end(P),v.isScene===!0&&v.onAfterRender(P,v,F),dt.resetDefaultState(),J=-1,j=null,_.pop(),_.length>0?(b=_[_.length-1],q.setTextureUnits(b.state.textureUnits),Zt===!0&&bt.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,N!==null&&N.renderEnd()};function li(v,F,Y,V){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)Y=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Ot)){V&&ge.setFromMatrixPosition(v.matrixWorld).applyMatrix4(zt);let wt=K.update(v),pt=v.material;pt.visible&&w.push(v,wt,pt,Y,ge.z,null,F)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Ot))){let wt=K.update(v),pt=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ge.copy(v.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ge.copy(wt.boundingSphere.center)),ge.applyMatrix4(v.matrixWorld).applyMatrix4(zt)),Array.isArray(pt)){let Et=wt.groups;for(let Ct=0,Vt=Et.length;Ct<Vt;Ct++){let Xt=Et[Ct],Tt=pt[Xt.materialIndex];Tt&&Tt.visible&&w.push(v,wt,Tt,Y,ge.z,Xt,F)}}else pt.visible&&w.push(v,wt,pt,Y,ge.z,null,F)}}let mt=v.children;for(let wt=0,pt=mt.length;wt<pt;wt++)li(mt[wt],F,Y,V)}function Ai(v,F,Y,V){let{opaque:k,transmissive:mt,transparent:wt}=v;b.setupLightsView(Y),Zt===!0&&bt.setGlobalState(P.clippingPlanes,Y),V&&g.viewport(tt.copy(V)),k.length>0&&ze(k,F,Y),mt.length>0&&ze(mt,F,Y),wt.length>0&&ze(wt,F,Y),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ci(v,F,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let Tt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new He(1,1,{generateMipmaps:!0,type:Tt?hn:We,minFilter:ni,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let mt=b.state.transmissionRenderTarget[V.id],wt=V.viewport||tt;mt.setSize(wt.z*P.transmissionResolutionScale,wt.w*P.transmissionResolutionScale);let pt=P.getRenderTarget(),Et=P.getActiveCubeFace(),Ct=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor($t),Ht=P.getClearAlpha(),Ht<1&&P.setClearColor(16777215,.5),P.clear(),le&&Dt.render(Y);let Vt=P.toneMapping;P.toneMapping=ln;let Xt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),Zt===!0&&bt.setGlobalState(P.clippingPlanes,V),ze(v,Y,V),q.updateMultisampleRenderTarget(mt),q.updateRenderTargetMipmap(mt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let jt=0,ve=F.length;jt<ve;jt++){let ce=F[jt],{object:ae,geometry:Pe,material:St,group:Ne}=ce;if(St.side===yn&&ae.layers.test(V.layers)){let Jt=St.side;St.side=Re,St.needsUpdate=!0,Vl(ae,Y,V,Pe,St,Ne),St.side=Jt,St.needsUpdate=!0,Tt=!0}}Tt===!0&&(q.updateMultisampleRenderTarget(mt),q.updateRenderTargetMipmap(mt))}P.setRenderTarget(pt,Et,Ct),P.setClearColor($t,Ht),Xt!==void 0&&(V.viewport=Xt),P.toneMapping=Vt}function ze(v,F,Y){let V=F.isScene===!0?F.overrideMaterial:null;for(let k=0,mt=v.length;k<mt;k++){let wt=v[k],{object:pt,geometry:Et,group:Ct}=wt,Vt=wt.material;Vt.allowOverride===!0&&V!==null&&(Vt=V),pt.layers.test(Y.layers)&&Vl(pt,F,Y,Et,Vt,Ct)}}function Vl(v,F,Y,V,k,mt){N!==null&&k.isNodeMaterial&&N.setObject(v,k),v.onBeforeRender(P,F,Y,V,k,mt),v.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(P,F,Y,V,v,mt),k.transparent===!0&&k.side===yn&&k.forceSinglePass===!1?(k.side=Re,k.needsUpdate=!0,P.renderBufferDirect(Y,F,V,k,v,mt),k.side=ti,k.needsUpdate=!0,P.renderBufferDirect(Y,F,V,k,v,mt),k.side=yn):P.renderBufferDirect(Y,F,V,k,v,mt),v.onAfterRender(P,F,Y,V,k,mt)}function js(v,F,Y){F.isScene!==!0&&(F=be);let V=O.get(v),k=b.state.lights,mt=b.state.shadowsArray,wt=k.state.version,pt=at.getParameters(v,k.state,mt,F,Y,b.state.lightProbeGridArray),Et=at.getProgramCacheKey(pt),Ct=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let Vt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=it.get(v.envMap||V.environment,Vt),V.envMapRotation=V.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,Ct===void 0&&(v.addEventListener("dispose",xt),Ct=new Map,V.programs=Ct);let Xt=Ct.get(Et);if(Xt!==void 0){if(V.currentProgram===Xt&&V.lightsStateVersion===wt)return Gl(v,pt),Xt}else pt.uniforms=at.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,Y,pt),v.onBeforeCompile(pt,P),Xt=at.acquireProgram(pt,Et),Ct.set(Et,Xt),V.uniforms=pt.uniforms;let Tt=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Tt.clippingPlanes=bt.uniform),Gl(v,pt),V.needsLights=Qu(v),V.lightsStateVersion=wt,V.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.sunLights.value=k.state.sun,Tt.sunLightShadows.value=k.state.sunShadow,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.sunShadowMatrix.value=k.state.sunShadowMatrix,Tt.sunShadowCascade.value=k.state.sunShadowCascade,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=Xt,V.uniformsList=null,Xt}function kl(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=rs.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function Gl(v,F){let Y=O.get(v);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Ju(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let Y=0,V=v.length;Y<V;Y++){let k=v[Y];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function $u(v,F,Y,V,k){F.isScene!==!0&&(F=be),q.resetTextureUnits();let mt=F.fog,wt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,pt=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:qt.workingColorSpace,Et=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ct=it.get(V.envMap||wt,Et),Vt=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xt=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Tt=!!Y.morphAttributes.position,jt=!!Y.morphAttributes.normal,ve=!!Y.morphAttributes.color,ce=ln;V.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ce=P.toneMapping);let ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Pe=ae!==void 0?ae.length:0,St=O.get(V),Ne=b.state.lights;if(Zt===!0&&(ee===!0||v!==j)){let oe=v===j&&V.id===J;bt.setState(V,v,oe)}let Jt=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Ne.state.version||St.outputColorSpace!==pt||k.isBatchedMesh&&St.batching===!1||!k.isBatchedMesh&&St.batching===!0||k.isBatchedMesh&&St.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&St.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&St.instancing===!1||!k.isInstancedMesh&&St.instancing===!0||k.isSkinnedMesh&&St.skinning===!1||!k.isSkinnedMesh&&St.skinning===!0||k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null||St.envMap!==Ct||V.fog===!0&&St.fog!==mt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==bt.numPlanes||St.numIntersection!==bt.numIntersection)||St.vertexAlphas!==Vt||St.vertexTangents!==Xt||St.morphTargets!==Tt||St.morphNormals!==jt||St.morphColors!==ve||St.toneMapping!==ce||St.morphTargetsCount!==Pe||!!St.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,St.__version=V.version);let $e=St.currentProgram;Jt===!0&&($e=js(V,F,k),N&&V.isNodeMaterial&&N.onUpdateProgram(V,$e,St));let dn=!1,Nn=!1,Ri=!1,ne=$e.getUniforms(),_e=St.uniforms;if(g.useProgram($e.program)&&(dn=!0,Nn=!0,Ri=!0),V.id!==J&&(J=V.id,Nn=!0),St.needsLights){let oe=Ju(b.state.lightProbeGridArray,k);St.lightProbeGrid!==oe&&(St.lightProbeGrid=oe,Nn=!0)}if(dn||j!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ne.setValue(U,"projectionMatrix",v.projectionMatrix),ne.setValue(U,"viewMatrix",v.matrixWorldInverse);let On=ne.map.cameraPosition;On!==void 0&&On.setValue(U,se.setFromMatrixPosition(v.matrixWorld)),S.logarithmicDepthBuffer&&ne.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ne.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),j!==v&&(j=v,Nn=!0,Ri=!0)}if(St.needsLights&&(Ne.state.sunShadowMap.length>0&&ne.setValue(U,"sunShadowMap",Ne.state.sunShadowMap,q),Ne.state.directionalShadowMap.length>0&&ne.setValue(U,"directionalShadowMap",Ne.state.directionalShadowMap,q),Ne.state.spotShadowMap.length>0&&ne.setValue(U,"spotShadowMap",Ne.state.spotShadowMap,q),Ne.state.pointShadowMap.length>0&&ne.setValue(U,"pointShadowMap",Ne.state.pointShadowMap,q)),k.isSkinnedMesh){ne.setOptional(U,k,"bindMatrix"),ne.setOptional(U,k,"bindMatrixInverse");let oe=k.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),ne.setValue(U,"boneTexture",oe.boneTexture,q))}k.isBatchedMesh&&(ne.setOptional(U,k,"batchingTexture"),ne.setValue(U,"batchingTexture",k._matricesTexture,q),ne.setOptional(U,k,"batchingIdTexture"),ne.setValue(U,"batchingIdTexture",k._indirectTexture,q),ne.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&ne.setValue(U,"batchingColorTexture",k._colorsTexture,q));let Un=Y.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&D.update(k,Y,$e),(Nn||St.receiveShadow!==k.receiveShadow)&&(St.receiveShadow=k.receiveShadow,ne.setValue(U,"receiveShadow",k.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(_e.envMapIntensity.value=F.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=V0()),Nn){if(ne.setValue(U,"toneMappingExposure",P.toneMappingExposure),St.needsLights&&Ku(_e,Ri),mt&&V.fog===!0&&gt.refreshFogUniforms(_e,mt),gt.refreshMaterialUniforms(_e,V,et,$,b.state.transmissionRenderTarget[v.id]),St.needsLights&&St.lightProbeGrid){let oe=St.lightProbeGrid;_e.probesSH.value=oe.texture,_e.probesMin.value.copy(oe.boundingBox.min),_e.probesMax.value.copy(oe.boundingBox.max),_e.probesResolution.value.copy(oe.resolution)}rs.upload(U,kl(St),_e,q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rs.upload(U,kl(St),_e,q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ne.setValue(U,"center",k.center),ne.setValue(U,"modelViewMatrix",k.modelViewMatrix),ne.setValue(U,"normalMatrix",k.normalMatrix),ne.setValue(U,"modelMatrix",k.matrixWorld),V.uniformsGroups!==void 0){let oe=V.uniformsGroups;for(let On=0,Pi=oe.length;On<Pi;On++){let Wl=oe[On];Z.update(Wl,$e),Z.bind(Wl,$e)}}return $e}function Ku(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.sunLights.needsUpdate=F,v.sunLightShadows.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function Qu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,F,Y){let V=O.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),O.get(v.texture).__webglTexture=F,O.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let Y=O.get(v);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(v,F=0,Y=0){nt=v,W=F,H=Y;let V=null,k=!1,mt=!1;if(v){let pt=O.get(v);if(pt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,pt.__webglFramebuffer),tt.copy(v.viewport),_t.copy(v.scissor),At=v.scissorTest,g.viewport(tt),g.scissor(_t),g.setScissorTest(At),J=-1;return}else if(pt.__webglFramebuffer===void 0)q.setupRenderTarget(v);else if(pt.__hasExternalTextures)q.rebindTextures(v,O.get(v.texture).__webglTexture,O.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Vt=v.depthTexture;if(pt.__boundDepthTexture!==Vt){if(Vt!==null&&O.has(Vt)&&(v.width!==Vt.image.width||v.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(v)}}let Et=v.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(mt=!0);let Ct=O.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ct[F])?V=Ct[F][Y]:V=Ct[F],k=!0):v.samples>0&&q.useMultisampledRTT(v)===!1?V=O.get(v).__webglMultisampledFramebuffer:Array.isArray(Ct)?V=Ct[Y]:V=Ct,tt.copy(v.viewport),_t.copy(v.scissor),At=v.scissorTest}else tt.copy(yt).multiplyScalar(et).floor(),_t.copy(Bt).multiplyScalar(et).floor(),At=pe;if(Y!==0&&(V=z),g.bindFramebuffer(U.FRAMEBUFFER,V)&&g.drawBuffers(v,V),g.viewport(tt),g.scissor(_t),g.setScissorTest(At),k){let pt=O.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,pt.__webglTexture,Y)}else if(mt){let pt=F;for(let Et=0;Et<v.textures.length;Et++){let Ct=O.get(v.textures[Et]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Et,Ct.__webglTexture,Y,pt)}}else if(v!==null&&Y!==0){let pt=O.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pt.__webglTexture,Y)}J=-1};function Hl(v){let F=O.get(v);return(F.__readFormat!==v.format||F.__readType!==v.type)&&(F.__readFormat=v.format,F.__readType=v.type,F.__formatReadable=S.textureFormatReadable(v.format),F.__typeReadable=S.textureTypeReadable(v.type)),F}this.readRenderTargetPixels=function(v,F,Y,V,k,mt,wt,pt=0){if(!(v&&v.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=O.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&wt!==void 0&&(Et=Et[wt]),Et){g.bindFramebuffer(U.FRAMEBUFFER,Et);try{let Ct=v.textures[pt],Vt=Ct.format,Xt=Ct.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt);let Tt=Hl(Ct);if(Tt.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-V&&Y>=0&&Y<=v.height-k&&U.readPixels(F,Y,V,k,ct.convert(Vt),ct.convert(Xt),mt)}finally{let Ct=nt!==null?O.get(nt).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(v,F,Y,V,k,mt,wt,pt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=O.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&wt!==void 0&&(Et=Et[wt]),Et)if(F>=0&&F<=v.width-V&&Y>=0&&Y<=v.height-k){g.bindFramebuffer(U.FRAMEBUFFER,Et);let Ct=v.textures[pt],Vt=Ct.format,Xt=Ct.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt);let Tt=Hl(Ct);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,jt),U.bufferData(U.PIXEL_PACK_BUFFER,mt.byteLength,U.STREAM_READ),U.readPixels(F,Y,V,k,ct.convert(Vt),ct.convert(Xt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let ve=nt!==null?O.get(nt).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,ve);let ce=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await uu(U,ce,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,jt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,mt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(jt),U.deleteSync(ce),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,Y=0){let V=Math.pow(2,-Y),k=Math.floor(v.image.width*V),mt=Math.floor(v.image.height*V),wt=F!==null?F.x:0,pt=F!==null?F.y:0;q.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,wt,pt,k,mt),g.unbindTexture()},this.copyTextureToTexture=function(v,F,Y=null,V=null,k=0,mt=0){let wt,pt,Et,Ct,Vt,Xt,Tt,jt,ve,ce=v.isCompressedTexture?v.mipmaps[mt]:v.image;if(Y!==null)wt=Y.max.x-Y.min.x,pt=Y.max.y-Y.min.y,Et=Y.isBox3?Y.max.z-Y.min.z:1,Ct=Y.min.x,Vt=Y.min.y,Xt=Y.isBox3?Y.min.z:0;else{let _e=Math.pow(2,-k);wt=Math.floor(ce.width*_e),pt=Math.floor(ce.height*_e),v.isDataArrayTexture?Et=ce.depth:v.isData3DTexture?Et=Math.floor(ce.depth*_e):Et=1,Ct=0,Vt=0,Xt=0}V!==null?(Tt=V.x,jt=V.y,ve=V.z):(Tt=0,jt=0,ve=0);let ae=ct.convert(F.format),Pe=ct.convert(F.type),St;F.isData3DTexture?(q.setTexture3D(F,0),St=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(q.setTexture2DArray(F,0),St=U.TEXTURE_2D_ARRAY):(q.setTexture2D(F,0),St=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Ne=g.getParameter(U.UNPACK_ROW_LENGTH),Jt=g.getParameter(U.UNPACK_IMAGE_HEIGHT),$e=g.getParameter(U.UNPACK_SKIP_PIXELS),dn=g.getParameter(U.UNPACK_SKIP_ROWS),Nn=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,ce.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Ct),g.pixelStorei(U.UNPACK_SKIP_ROWS,Vt),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Xt);let Ri=v.isDataArrayTexture||v.isData3DTexture,ne=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let _e=O.get(v),Un=O.get(F),oe=O.get(_e.__renderTarget),On=O.get(Un.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,oe.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let Pi=0;Pi<Et;Pi++)Ri&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,O.get(v).__webglTexture,k,Xt+Pi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,O.get(F).__webglTexture,mt,ve+Pi)),U.blitFramebuffer(Ct,Vt,wt,pt,Tt,jt,wt,pt,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||O.has(v)){let _e=O.get(v),Un=O.get(F);g.bindFramebuffer(U.READ_FRAMEBUFFER,R),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let oe=0;oe<Et;oe++)Ri?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,k,Xt+oe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,k),ne?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Un.__webglTexture,mt,ve+oe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Un.__webglTexture,mt),k!==0?U.blitFramebuffer(Ct,Vt,wt,pt,Tt,jt,wt,pt,U.COLOR_BUFFER_BIT,U.NEAREST):ne?U.copyTexSubImage3D(St,mt,Tt,jt,ve+oe,Ct,Vt,wt,pt):U.copyTexSubImage2D(St,mt,Tt,jt,Ct,Vt,wt,pt);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ne?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(St,mt,Tt,jt,ve,wt,pt,Et,ae,Pe,ce.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(St,mt,Tt,jt,ve,wt,pt,Et,ae,ce.data):U.texSubImage3D(St,mt,Tt,jt,ve,wt,pt,Et,ae,Pe,ce):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,mt,Tt,jt,wt,pt,ae,Pe,ce.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,mt,Tt,jt,ce.width,ce.height,ae,ce.data):U.texSubImage2D(U.TEXTURE_2D,mt,Tt,jt,wt,pt,ae,Pe,ce);g.pixelStorei(U.UNPACK_ROW_LENGTH,Ne),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),g.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),g.pixelStorei(U.UNPACK_SKIP_ROWS,dn),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Nn),mt===0&&F.generateMipmaps&&U.generateMipmap(St),g.unbindTexture()},this.initRenderTarget=function(v){O.get(v).__webglFramebuffer===void 0&&q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?q.setTextureCube(v,0):v.isData3DTexture?q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?q.setTexture2DArray(v,0):q.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){W=0,H=0,nt=null,g.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var eo=class extends yi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Yn;t.deleteAttribute("uv");let e=new Si({side:Re}),i=new Si,s=new Us(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ue(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Mi(t,i,6),o=new Ce;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ue(t,ls(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ue(t,ls(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ue(t,ls(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new ue(t,ls(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new ue(t,ls(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let p=new ue(t,ls(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ls(n){return new Is({color:0,emissive:16777215,emissiveIntensity:n})}function Xu(n,t={}){let e=typeof n=="string"?document.querySelector(n):n;if(!e)return null;let i={peek:parseFloat(e.dataset.peek||t.peek||26),scaleStep:parseFloat(e.dataset.scaleStep||t.scaleStep||.038),dim:parseFloat(e.dataset.dim||t.dim||.12),blur:parseFloat(e.dataset.blur||t.blur||1.5),topOffset:parseFloat(e.dataset.topOffset||t.topOffset||96),...t},s=()=>Array.from(e.querySelectorAll(".scroll-stack-card")).filter(u=>!u.classList.contains("is-filtered-out")&&u.offsetParent!==null);function r(){s().forEach((d,h)=>{d.style.setProperty("--stack-index",h),d.style.setProperty("--stack-z",h+1),d.style.setProperty("--stack-peek",`${i.peek}px`),d.style.setProperty("--stack-top",`${i.topOffset}px`)})}let a=!1;function o(){a||(a=!0,requestAnimationFrame(l))}function l(){a=!1;let u=s();if(!u.length)return;let d=window.innerHeight;u.forEach((h,p)=>{let x=0;for(let A=p+1;A<u.length;A++){let w=u[A].getBoundingClientRect(),b=i.topOffset+A*i.peek,C=w.top-b,_=d*.55;if(C<_){let E=Math.max(0,Math.min(1,1-C/_));x+=E}}let y=Math.max(.86,1-x*i.scaleStep),m=Math.max(.45,1-x*i.dim),f=Math.min(6,x*i.blur),T=x*-6;h.style.setProperty("--stack-scale",y.toFixed(3)),h.style.setProperty("--stack-opacity",m.toFixed(2)),h.style.setProperty("--stack-blur",`${f.toFixed(1)}px`),h.style.setProperty("--stack-y",`${T.toFixed(1)}px`)})}window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",()=>{r(),o()},{passive:!0});let c=()=>{r(),setTimeout(o,40)};return window.addEventListener("scrollstack:refresh",c),r(),o(),{refresh:c,destroy:()=>{window.removeEventListener("scroll",o),window.removeEventListener("scrollstack:refresh",c)}}}var G0=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
}
`,H0=`#version 300 es
precision highp float;
precision highp int;

out vec4 fragColor;

uniform vec2  uResolution;
uniform float uTime;

uniform float uIntensity;
uniform float uSpeed;
uniform int   uAnimType;
uniform vec2  uMouse;
uniform int   uColorCount;
uniform float uDistort;
uniform vec2  uOffset;
uniform sampler2D uGradient;
uniform float uNoiseAmount;
uniform int   uRayCount;
uniform float uLightMode;

float hash21(vec2 p){
    p = floor(p);
    float f = 52.9829189 * fract(dot(p, vec2(0.065, 0.005)));
    return fract(f);
}

mat2 rot30(){ return mat2(0.8, -0.5, 0.5, 0.8); }

float layeredNoise(vec2 fragPx){
    vec2 p = mod(fragPx + vec2(uTime * 30.0, -uTime * 21.0), 1024.0);
    vec2 q = rot30() * p;
    float n = 0.0;
    n += 0.40 * hash21(q);
    n += 0.25 * hash21(q * 2.0 + 17.0);
    n += 0.20 * hash21(q * 4.0 + 47.0);
    n += 0.10 * hash21(q * 8.0 + 113.0);
    n += 0.05 * hash21(q * 16.0 + 191.0);
    return n;
}

vec3 rayDir(vec2 frag, vec2 res, vec2 offset, float dist){
    float focal = res.y * max(dist, 1e-3);
    return normalize(vec3(2.0 * (frag - offset) - res, focal));
}

float edgeFade(vec2 frag, vec2 res, vec2 offset){
    vec2 toC = frag - 0.5 * res - offset;
    float r = length(toC) / (0.5 * max(res.x, res.y));
    float outer = 1.0 - smoothstep(0.85, 1.45, r);
    float inner = smoothstep(0.015, 0.16, r);
    return clamp(inner * outer, 0.0, 1.0);
}

mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0,0.0,0.0, 0.0,c,-s, 0.0,s,c); }
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c,0.0,s, 0.0,1.0,0.0, -s,0.0,c); }
mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c,-s,0.0, s,c,0.0, 0.0,0.0,1.0); }

vec3 sampleGradient(float t){
    t = clamp(t, 0.0, 1.0);
    return texture(uGradient, vec2(t, 0.5)).rgb;
}

vec2 rot2(vec2 v, float a){
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c) * v;
}

float bendAngle(vec3 q, float t){
    float a = 0.8 * sin(q.x * 0.55 + t * 0.6)
            + 0.7 * sin(q.y * 0.50 - t * 0.5)
            + 0.6 * sin(q.z * 0.60 + t * 0.7);
    return a;
}

void main(){
    vec2 frag = gl_FragCoord.xy;
    float t = uTime * uSpeed;
    float jitterAmp = 0.1 * clamp(uNoiseAmount, 0.0, 1.0);
    vec3 dir = rayDir(frag, uResolution, uOffset, 1.0);
    float marchT = 0.0;
    vec3 col = vec3(0.0);
    float n = layeredNoise(frag);
    vec4 c = cos(t * 0.2 + vec4(0.0, 33.0, 11.0, 0.0));
    mat2 M2 = mat2(c.x, c.y, c.z, c.w);
    float amp = clamp(uDistort, 0.0, 50.0) * 0.15;

    mat3 rot3dMat = mat3(1.0);
    if(uAnimType == 1){
      vec3 ang = vec3(t * 0.31, t * 0.21, t * 0.17);
      rot3dMat = rotZ(ang.z) * rotY(ang.y) * rotX(ang.x);
    }
    mat3 hoverMat = mat3(1.0);
    if(uAnimType == 2){
      vec2 m = uMouse * 2.0 - 1.0;
      vec3 ang = vec3(m.y * 0.6, m.x * 0.6, 0.0);
      hoverMat = rotY(ang.y) * rotX(ang.x);
    }

    for (int i = 0; i < 44; ++i) {
        vec3 P = marchT * dir;
        P.z -= 2.0;
        float rad = length(P);
        vec3 Pl = P * (10.0 / max(rad, 1e-6));

        if(uAnimType == 0){
            Pl.xz *= M2;
        } else if(uAnimType == 1){
      Pl = rot3dMat * Pl;
        } else {
      Pl = hoverMat * Pl;
        }

        float stepLen = min(rad - 0.3, n * jitterAmp) + 0.1;

        float grow = smoothstep(0.35, 3.0, marchT);
        float a1 = amp * grow * bendAngle(Pl * 0.6, t);
        float a2 = 0.5 * amp * grow * bendAngle(Pl.zyx * 0.5 + 3.1, t * 0.9);
        vec3 Pb = Pl;
        Pb.xz = rot2(Pb.xz, a1);
        Pb.xy = rot2(Pb.xy, a2);

        float rayPattern = smoothstep(
            0.5, 0.7,
            sin(Pb.x + cos(Pb.y) * cos(Pb.z)) *
            sin(Pb.z + sin(Pb.y) * cos(Pb.x + t))
        );

        if (uRayCount > 0) {
            float ang = atan(Pb.y, Pb.x);
            float comb = 0.5 + 0.5 * cos(float(uRayCount) * ang);
            comb = pow(comb, 3.0);
            rayPattern *= smoothstep(0.15, 0.95, comb);
        }

        vec3 spectralDefault = 1.0 + vec3(
            cos(marchT * 3.0 + 0.0),
            cos(marchT * 3.0 + 1.0),
            cos(marchT * 3.0 + 2.0)
        );

        float saw = fract(marchT * 0.25);
        float tRay = saw * saw * (3.0 - 2.0 * saw);
        vec3 userGradient = 2.0 * sampleGradient(tRay);
        vec3 spectral = (uColorCount > 0) ? userGradient : spectralDefault;
        vec3 base = (0.05 / (0.4 + stepLen))
                  * smoothstep(5.0, 0.0, rad)
                  * spectral;

        col += base * rayPattern;
        marchT += stepLen;
    }

    col *= edgeFade(frag, uResolution, uOffset);
    col *= uIntensity;

    col = clamp(col, 0.0, 1.0);
    float alpha = clamp(max(col.r, max(col.g, col.b)) * 1.5, 0.0, 1.0);
    if (uLightMode > 0.5) {
        float energy = max(max(col.r, col.g), col.b);
        vec3 hue = col / max(energy, 0.0001);
        float neutral = min(hue.r, min(hue.g, hue.b));
        hue = max(hue - vec3(neutral * 0.68), vec3(0.0));
        hue /= max(max(hue.r, max(hue.g, hue.b)), 0.0001);
        vec3 pigment = mix(hue, hue * hue, 0.24) * 0.72;
        float coverage = smoothstep(0.0005, 0.28, energy);
        coverage = pow(coverage, 0.68) * 0.95;
        col = mix(vec3(1.0), pigment, coverage);
    }
    fragColor = vec4(col, uLightMode > 0.5 ? 1.0 : alpha);
}`,W0=n=>{let t=n.trim();if(t.startsWith("#")&&(t=t.slice(1)),t.length===3){let a=t[0],o=t[1],l=t[2];t=a+a+o+o+l+l}let e=parseInt(t.slice(0,6),16);if(isNaN(e)||t.length!==6&&t.length!==8)return[1,1,1];let i=(e>>16&255)/255,s=(e>>8&255)/255,r=(e&255)/255;return[i,s,r]},qu=n=>{if(n==null)return 0;if(typeof n=="number")return n;let t=String(n).trim(),e=parseFloat(t.replace("px",""));return isNaN(e)?0:e};function bM(n,t={}){let e=typeof n=="string"?document.querySelector(n):n;if(!e)return null;let i={intensity:2,speed:.5,animationType:"hover",colors:["#F97316","#EA580C","#0F1C2E","#C2410C","#1E293B","#FB923C"],distort:1,paused:!1,offset:{x:0,y:0},hoverDampness:.25,rayCount:24,mixBlendMode:null,lightMode:!1,...t};(t.color0||t.color1||t.color2)&&(i.colors=[t.color0||"#F97316",t.color1||"#EA580C",t.color2||"#0F1C2E","#C2410C"]);let s=Math.min(window.devicePixelRatio||1,2),r;try{r=new ui({dpr:s,alpha:!0,antialias:!1,premultipliedAlpha:!1})}catch(L){return console.warn("PrismaticBurst WebGL not supported:",L),null}let a=r.gl;a.canvas.style.position="absolute",a.canvas.style.inset="0",a.canvas.style.width="100%",a.canvas.style.height="100%";let o=i.mixBlendMode&&i.mixBlendMode!=="none"?i.mixBlendMode:i.lightMode?"normal":"screen";a.canvas.style.mixBlendMode=o,e.appendChild(a.canvas);let l=new Uint8Array([255,255,255,255]),c=new cs(a,{image:l,width:1,height:1,generateMipmaps:!1,flipY:!1});c.minFilter=a.LINEAR,c.magFilter=a.LINEAR,c.wrapS=a.CLAMP_TO_EDGE,c.wrapT=a.CLAMP_TO_EDGE;let u={rotate:0,rotate3d:1,hover:2},d=new hi(a,{vertex:G0,fragment:H0,uniforms:{uResolution:{value:[1,1]},uTime:{value:0},uIntensity:{value:i.intensity},uSpeed:{value:i.speed},uAnimType:{value:u[i.animationType]??2},uMouse:{value:[.5,.5]},uColorCount:{value:0},uDistort:{value:i.distort},uOffset:{value:[qu(i.offset.x),qu(i.offset.y)]},uGradient:{value:c},uNoiseAmount:{value:.8},uRayCount:{value:i.rayCount},uLightMode:{value:i.lightMode?1:0}}});if(Array.isArray(i.colors)&&i.colors.length>0){let L=i.colors.slice(0,64),N=L.length,z=new Uint8Array(N*4);for(let R=0;R<N;R++){let[B,W,H]=W0(L[R]);z[R*4+0]=Math.round(B*255),z[R*4+1]=Math.round(W*255),z[R*4+2]=Math.round(H*255),z[R*4+3]=255}c.image=z,c.width=N,c.height=1,c.format=a.RGBA,c.type=a.UNSIGNED_BYTE,c.needsUpdate=!0,d.uniforms.uColorCount.value=N}let h=new fi(a),p=new di(a,{geometry:h,program:d}),x=()=>{let L=e.clientWidth||1,N=e.clientHeight||1;r.setSize(L,N),d.uniforms.uResolution.value=[a.drawingBufferWidth,a.drawingBufferHeight]},y=null;"ResizeObserver"in window?(y=new ResizeObserver(x),y.observe(e)):window.addEventListener("resize",x),x();let m=[.5,.5],f=[.5,.5],T=L=>{let N=e.getBoundingClientRect(),z=(L.clientX-N.left)/Math.max(N.width,1),R=(L.clientY-N.top)/Math.max(N.height,1);m[0]=Math.min(Math.max(z,0),1),m[1]=Math.min(Math.max(R,0),1)},A=e.closest("section")||e;A.addEventListener("pointermove",T,{passive:!0});let M=!0,w=null;"IntersectionObserver"in window&&(w=new IntersectionObserver(L=>{L[0]&&(M=L[0].isIntersecting)},{threshold:.01}),w.observe(e));let b=0,C=performance.now(),_=0,E=!1,P=L=>{if(E)return;let N=Math.max(0,L-C)*.001;C=L;let z=M&&!document.hidden;if(i.paused||(_+=N),!z){b=requestAnimationFrame(P);return}let R=.02+Math.max(0,Math.min(1,i.hoverDampness))*.5,B=1-Math.exp(-N/R);f[0]+=(m[0]-f[0])*B,f[1]+=(m[1]-f[1])*B,d.uniforms.uMouse.value=f,d.uniforms.uTime.value=_,r.render({scene:p}),b=requestAnimationFrame(P)};return b=requestAnimationFrame(P),{destroy:()=>{E=!0,cancelAnimationFrame(b),A.removeEventListener("pointermove",T),y?.disconnect(),y||window.removeEventListener("resize",x),w?.disconnect();try{a.canvas.parentNode&&a.canvas.parentNode.removeChild(a.canvas)}catch{}try{p?.remove?.()}catch{}try{h?.remove?.()}catch{}try{d?.remove?.()}catch{}try{c?.texture&&a.deleteTexture(c.texture)}catch{}}}}var ri=8,X0=.7,q0=.6,Y0=16,no=96,io=48,Z0=30;var J0='a, button, input, select, textarea, label, summary, [role="button"], [data-blob-grow]',$0=`
#define BLOB_MAX ${io}
uniform vec4 blobSeg[BLOB_MAX];
uniform vec4 blobInfo[BLOB_MAX];
uniform int blobCount;
uniform int blobHeadEnd;
uniform int blobTubeEnd;
uniform float blobJoin;
uniform float blobLift;
uniform float blobTop;
uniform float blobRef;
uniform vec2 blobDepth;
varying vec2 vBlobSpot;

vec4 blobPart(vec2 p, int i, float z) {
  vec4 seg = blobSeg[i];
  vec2 r = blobInfo[i].xy;
  vec2 axis = seg.zw - seg.xy;
  float len = length(axis);
  if (len <= abs(r.x - r.y) + 0.001) {
    vec2 d = p - (r.x >= r.y ? seg.xy : seg.zw);
    float dist = max(sqrt(dot(d, d) + z * z), 0.0001);
    return vec4(dist - max(r.x, r.y), vec3(d, z) / dist);
  }
  vec2 dir = axis / len;
  vec2 rel = p - seg.xy;
  float u = dot(rel, dir);
  vec2 side = rel - dir * u;
  float w = sqrt(dot(side, side) + z * z);
  float b = (r.x - r.y) / len;
  float a = sqrt(1.0 - b * b);
  float along = a * u - b * w;
  vec3 f = vec3(a * w + b * u - r.x, a, b);
  if (along < 0.0) {
    float d = max(sqrt(w * w + u * u), 0.0001);
    f = vec3(d - r.x, w / d, u / d);
  } else if (along > a * len) {
    float d = max(sqrt(w * w + (u - len) * (u - len)), 0.0001);
    f = vec3(d - r.y, w / d, (u - len) / d);
  }
  return vec4(f.x, vec3(dir * f.z, 0.0) + vec3(side, z) / max(w, 0.0001) * f.y);
}

vec4 blobSmooth(vec4 a, vec4 b, float k) {
  float h = k > 0.0 ? max(k - abs(a.x - b.x), 0.0) / k : 0.0;
  float weight = b.x < a.x ? 1.0 - 0.5 * h * h : 0.5 * h * h;
  return vec4(min(a.x, b.x) - h * h * h * k / 6.0, mix(a.yzw, b.yzw, weight));
}

vec4 blobShape(vec2 p, float z) {
  vec4 body = blobPart(p, 0, z);
  for (int i = 1; i < BLOB_MAX; i++) {
    if (i >= blobHeadEnd) break;
    body = blobSmooth(body, blobPart(p, i, z), blobInfo[i].z);
  }
  if (blobTubeEnd > blobHeadEnd) {
    vec4 tube = blobPart(p, blobHeadEnd, z);
    for (int i = blobHeadEnd + 1; i < BLOB_MAX; i++) {
      if (i >= blobTubeEnd) break;
      tube = blobSmooth(tube, blobPart(p, i, z), blobInfo[i].z);
    }
    body = blobSmooth(body, tube, blobJoin);
  }
  for (int i = blobTubeEnd; i < BLOB_MAX; i++) {
    if (i >= blobCount) break;
    body = blobSmooth(body, blobPart(p, i, z), blobInfo[i].z);
  }
  return body;
}
`,K0=`
  vec4 blobBase = blobShape(vBlobSpot, 0.0);
  float blobAlpha = clamp(0.5 - blobBase.x / max(fwidth(blobBase.x), 0.0001), 0.0, 1.0);
  if (blobAlpha <= 0.0) discard;
  float blobLow = 0.0;
  float blobHigh = blobTop;
  float blobZ = min(sqrt(max(-blobBase.x, 0.0) * max(2.0 * blobRef + blobBase.x, 0.0)), blobTop);
  for (int k = 0; k < 8; k++) {
    vec4 blobTry = blobShape(vBlobSpot, blobZ);
    if (blobTry.x > 0.0) blobHigh = blobZ;
    else blobLow = blobZ;
    float blobNext = blobZ - blobTry.x / max(blobTry.w, 0.0001);
    blobZ = blobNext > blobLow && blobNext < blobHigh ? blobNext : 0.5 * (blobLow + blobHigh);
  }
  vec4 blobAt = blobShape(vBlobSpot, blobZ);
  vec3 blobNormal = normalize(vec3(blobAt.yz, blobAt.w / blobLift));
  gl_FragDepth = blobDepth.x - blobDepth.y * blobZ * blobLift;
`,Q0=`
  float faceDirection = 1.0;
  vec3 normal = normalize((viewMatrix * vec4(blobNormal, 0.0)).xyz);
  vec3 nonPerturbedNormal = normal;
`,Yu=(n,t,e)=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("void main() {",`varying vec2 vBlobSpot;
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
	vBlobSpot = (modelMatrix * vec4(transformed, 1.0)).xy;`),n.fragmentShader=n.fragmentShader.replace("void main() {",`${$0}
void main() {
${e}`).replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( diffuse, opacity * blobAlpha );").replace("#include <normal_fragment_begin>",Q0)},Fn=(n,t,e)=>Math.min(e,Math.max(t,n)),Qt=(n,t,e)=>n+(t-n)*e,zl=()=>({x:0,y:0,vx:0,vy:0,size:0});function j0(n,t={}){let e=typeof n=="string"?document.querySelector(n):n;if(!e)return null;let i=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1;if(!(window.matchMedia?.("(hover: hover) and (pointer: fine)").matches??!0)||i)return null;let r={material:"chrome",color:"#C9662F",size:32,morph:0,morphSpeed:.4,depth:1,trail:16,lag:.35,goo:1,stretch:.6,wobble:1,drip:0,splash:!0,splashCount:6,splashSpeed:.5,splashSize:.5,splashGravity:0,regrow:.5,shine:1,shadow:!1,blend:"normal",hideCursor:!0,...t};r.hideCursor&&typeof document<"u"&&(document.documentElement.classList.add("has-blob-cursor"),document.body?.classList.add("has-blob-cursor"));let a;try{a=new Qa({alpha:!0,antialias:!0,premultipliedAlpha:!0})}catch(S){return console.warn("BlobCursor WebGLRenderer error:",S),null}a.setClearColor(0,0),a.outputColorSpace=Ue,a.toneMapping=zs,a.toneMappingExposure=1,a.shadowMap.enabled=!0,a.shadowMap.type=jn,a.shadowMap.autoUpdate=!0;let o=a.domElement;o.className="blob-cursor-canvas",o.setAttribute("aria-hidden","true"),e.appendChild(o);let l=new yi,c=new as(a),u=new eo,d=c.fromScene(u,.03);c.dispose(),l.environment=d.texture,l.environmentRotation.set(-.9,.35,0);let h=new Qn(-1,1,1,-1,1,6e3);h.position.set(0,0,2e3);let p=new Os(16777215,1.4);p.castShadow=!0,p.shadow.mapSize.set(2048,2048),p.shadow.radius=14,p.shadow.blurSamples=20,p.shadow.bias=-4e-4,l.add(p,p.target);let x={blobSeg:{value:new Float32Array(io*4)},blobInfo:{value:new Float32Array(io*4)},blobCount:{value:0},blobHeadEnd:{value:0},blobTubeEnd:{value:0},blobJoin:{value:0},blobLift:{value:1},blobTop:{value:1},blobRef:{value:1},blobDepth:{value:new Gt((h.position.z-h.near)/(h.far-h.near),1/(h.far-h.near))}},y=S=>Yu(S,x,K0),m=new Qi({transparent:!0}),f=new Xn({transparent:!0});m.onBeforeCompile=y,f.onBeforeCompile=y;let T=new ji({depthPacking:xl});T.onBeforeCompile=S=>Yu(S,x,"if (blobShape(vBlobSpot, 0.0).x > 0.0) discard;");let A=new Qi,M=new Xn,w=new ue(new Zn(1,1),m);w.castShadow=!0,w.frustumCulled=!1,w.customDepthMaterial=T,l.add(w);let b=new ue(new Zn(1,1),new Ps({opacity:.22}));b.receiveShadow=!0,l.add(b);let C=new Rs(1,32,24),_=new Mi(C,A,no);_.castShadow=!0,_.frustumCulled=!1,_.count=0,l.add(_);let E=new ie,P=new Qe,L=new G,N=new G(1,0,0),z=new G,R=new G,B={width:1,height:1},W={x:0,y:0,inside:!1,down:!1,hover:!1,seen:!1},H=zl(),nt=Array.from({length:ri},(S,g)=>({...zl(),spread:g/(ri-1),angle:g/ri*Math.PI*2,shape:0,tx:0,ty:0,grow:1})),J=Array.from({length:Y0},zl),j=[],tt={value:0,velocity:0},_t={value:1,wait:0},At=Array.from({length:4},()=>Math.random()*Math.PI*2),$t=Math.random()*60,Ht=0,Wt=0,$=0,et=!0,vt=0,Lt=()=>{B.width=Math.max(1,e.clientWidth),B.height=Math.max(1,e.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.setSize(B.width,B.height,!1),h.left=-B.width/2,h.right=B.width/2,h.top=B.height/2,h.bottom=-B.height/2,h.updateProjectionMatrix();let S=Math.max(B.width,B.height)*.75,g=p.shadow.camera;g.left=-S,g.right=S,g.top=S,g.bottom=-S,g.near=1,g.far=S*6,g.updateProjectionMatrix(),b.scale.set(B.width*1.5,B.height*1.5,1),de()},yt=()=>{let S=new Ut;try{S.set(r.color)}catch{S.set("#C9662F")}for(let I of[m,A])I.color.copy(S),I.metalness=0,I.roughness=.2,I.clearcoat=0,I.clearcoatRoughness=0,I.iridescence=0,I.envMapIntensity=1,r.material==="chrome"?(I.metalness=.82,I.roughness=Qt(.25,.04,r.shine),I.clearcoat=.8,I.clearcoatRoughness=.05,I.envMapIntensity=Qt(1,1.4,r.shine)):r.material==="jelly"?(I.roughness=Qt(.5,.18,r.shine),I.clearcoat=1,I.clearcoatRoughness=Qt(.25,.02,r.shine),I.envMapIntensity=Qt(.5,.9,r.shine)):r.material==="pearl"&&(I.metalness=.35,I.roughness=Qt(.4,.1,r.shine),I.clearcoat=1,I.clearcoatRoughness=.05,I.iridescence=1,I.iridescenceIOR=1.75,I.iridescenceThicknessRange=[240,820],I.envMapIntensity=1.15),I.needsUpdate=!0;f.color.copy(S),M.color.copy(S);let g=r.material==="ink";w.material=g?f:m,_.material=g?M:A,b.material.opacity=.22,e.style.mixBlendMode=r.blend,de()},Bt=(S,g)=>{for(let I of[H,...nt,...J])I.x=S,I.y=g,I.vx=0,I.vy=0},pe=S=>{let g=e.getBoundingClientRect(),I=S.clientX-g.left,O=S.clientY-g.top;return{x:I,y:O,inside:I>=0&&O>=0&&I<=g.width&&O<=g.height}},Ot=S=>{if(S.pointerType==="touch"&&!W.down)return;let g=pe(S);g.inside&&(!W.inside||!W.seen)&&tt.value<.05&&Bt(g.x,g.y),W.x=g.x,W.y=g.y,W.inside=g.inside,W.seen=!0;let I=S.target instanceof Element?S.target:null;W.hover=g.inside&&!!I?.closest(J0),de()},Zt=()=>{let S=r.size/2*Math.cbrt(_t.value);for(let X of nt){let K=Math.random()*Math.PI*2,at=S*Qt(4,9,Math.random())*Qt(.6,1.2,r.wobble);X.vx+=Math.cos(K)*at,X.vy+=Math.sin(K)*at}if(!r.splash)return;let g=Qt(.12,.42,r.splashSize),I=Qt(320,1600,r.splashSpeed),O=Math.random()*Math.PI*2,q=[],it=0;for(let X=0;X<r.splashCount;X++){let K=O+X/r.splashCount*Math.PI*2+(Math.random()-.5)*(Math.PI/r.splashCount),at=Math.random(),gt=I*Qt(1.3,.75,at)*Qt(.85,1.15,Math.random()),rt=r.size/2*g*Qt(.65,1.3,at),lt=Math.cos(K)*gt+H.vx*.4,bt=Math.sin(K)*gt+H.vy*.4;it+=Math.pow(rt/(r.size/2),3),q.push({x:H.x+Math.cos(K)*S*.35,y:H.y+Math.sin(K)*S*.35,vx:lt,vy:bt,cx:lt*.45,cy:bt*.45,r:rt,share:0,age:0,life:Z0,drag:.6,free:!1,sink:-1})}let st=_t.value;_t.value=Math.max(.2,st-Fn(it*2.4,.25,.7)),_t.wait=.28;for(let X of q)X.share=(st-_t.value)*Math.pow(X.r/(r.size/2),3)/it,j.length>=no&&j.shift(),j.push(X)},ee=S=>{let g=pe(S);g.inside&&(S.pointerType==="touch"&&tt.value<.05&&Bt(g.x,g.y),W.x=g.x,W.y=g.y,W.inside=!0,W.seen=!0,W.down=!0,tt.velocity-=2,Zt(),de())},zt=S=>{W.down&&(W.down=!1,tt.velocity+=1.2,S.pointerType==="touch"&&(W.inside=!1),de())},se=S=>{S.relatedTarget||(W.inside=!1,W.down=!1,de())},ge=()=>{W.inside=!1,W.down=!1,de()},be=(S,g,I,O,q,it,st=0,X=0)=>{S.vx+=((g-S.x)*O-(S.vx-st)*q)*it,S.vy+=((I-S.y)*O-(S.vy-X)*q)*it,S.x+=S.vx*it,S.y+=S.vy*it},le=S=>{let g=r.size/2,I=Math.max(1,Math.ceil(S/(1/240))),O=S/I,q=Qt(1200,160,r.lag),it=Qt(900,260,r.lag),st=Qt(3e4,1500,r.stretch),X=2*Math.sqrt(st)*Qt(.95,.65,r.wobble),K=Qt(.95,.4,r.wobble),at=W.inside&&W.seen,gt=at?W.down?.86:W.hover?1.3:1:0;$t+=S*4*Math.pow(r.morphSpeed,1.5);let rt=r.morph*(.6+.4*Math.sin($t*.71+At[0])),lt=$t*.23+At[1],bt=r.morph*.8*(.5+.5*Math.sin($t*.53+At[2])),Rt=At[3]-$t*.17,Dt=0;for(let Z of nt)Z.shape=rt*Math.cos(2*(Z.angle-lt))+bt*Math.cos(3*(Z.angle-Rt)),Dt+=Z.shape*Z.shape/ri;let D=1/(1+.3*Dt);for(let Z of nt){let ot=g*Fn(.14+.75*Z.shape,0,.8)*D;Z.tx=Math.cos(Z.angle)*ot,Z.ty=Math.sin(Z.angle)*ot,Z.grow=(1+.35*Z.shape)*D}for(let Z=0;Z<I;Z++){be(H,W.x,W.y,q,2*Math.sqrt(q)*.9,O);for(let Mt of nt){let Ft=it*Qt(1.3,.7,Mt.spread);be(Mt,H.x+Mt.tx,H.y+Mt.ty,Ft,2*Math.sqrt(Ft)*K,O,H.vx,H.vy)}for(let Mt=0;Mt<r.trail;Mt++){let Ft=Mt>0?J[Mt-1]:H;be(J[Mt],Ft.x,Ft.y,st,X,O)}let ot=r.splashGravity*2200,ut=1-Math.exp(-18*O);for(let Mt of j){if(Mt.age+=O,Mt.sink>=0){let xe=Math.min(1,Mt.sink+O/.14);_t.value=Math.min(1.35,_t.value+Mt.share*(xe-Mt.sink)),Mt.sink=xe,Mt.x+=(H.x-Mt.x)*ut,Mt.y+=(H.y-Mt.y)*ut;continue}let Ft=Math.exp(-Mt.drag*O);Mt.vx=Mt.cx+(Mt.vx-Mt.cx)*Ft,Mt.vy=Mt.cy+(Mt.vy-Mt.cy)*Ft+ot*O,Mt.x+=Mt.vx*O,Mt.y+=Mt.vy*O}tt.velocity+=((gt-tt.value)*300-tt.velocity*2*Math.sqrt(300)*Qt(.8,.38,r.wobble))*O,tt.value+=tt.velocity*O,tt.value<0&&(tt.value=0,tt.velocity=Math.max(0,tt.velocity))}let ht=g*Math.max(tt.value,0)*Math.cbrt(_t.value),Q=(Z,ot)=>ot.some(ut=>ut.size>0&&Math.hypot(Z.x-ut.x,Z.y-ut.y)<ut.size+Z.r*.9),ct=r.trail>0?J[r.trail-1]:nt[ri-1],dt=Math.hypot(H.vx,H.vy);for(at&&(Ht+=S*r.drip*26*Fn((dt-600)/1800,0,1));Ht>=1;){Ht-=1;let Z=g*Qt(.07,.17,Math.random());if(Math.hypot(ct.x-H.x,ct.y-H.y)<ht+Z*2)continue;let ot=Math.pow(Z/g,3)*2.4;_t.value=Math.max(.2,_t.value-ot),j.length>=no&&j.shift(),j.push({x:ct.x+(Math.random()-.5)*Z,y:ct.y+(Math.random()-.5)*Z,vx:ct.vx*.2,vy:ct.vy*.2,cx:0,cy:0,r:Z,share:ot,age:0,life:Qt(2.5,4,Math.random()),drag:9,free:!0,sink:-1})}for(let Z=j.length-1;Z>=0;Z--){let ot=j[Z];if(ot.free&&ot.sink<0&&ot.age>.3&&tt.value>.05&&(Q(ot,nt)||Q(ot,J))){ot.sink=0;let Ft=Math.min(.5,ot.share*4);for(let xe of nt)xe.vx+=(ot.vx-H.vx)*Ft,xe.vy+=(ot.vy-H.vy)*Ft}let ut=ot.r*3;(ot.x<-ut||ot.y<-ut||ot.x>B.width+ut||ot.y>B.height+ut||ot.sink>=1||ot.age>ot.life)&&j.splice(Z,1)}_t.wait>0?_t.wait-=S:_t.value+=(1-_t.value)*(1-Math.exp(-S*Qt(.9,6,r.regrow)))},me=()=>{let g=r.size/2*Math.max(tt.value,0)*Math.cbrt(_t.value),I=g>=.5,O=g*Qt(.3,.9,r.goo),q=g+O,it=Qt(.3,1,r.depth),st=io-ri-r.trail,X=[],K=[];_.count=0;for(let xt of nt)xt.size=0;for(let xt of J)xt.size=0;for(let xt of j){let re=Math.hypot(xt.x-H.x,xt.y-H.y),un=xt.free||!I?1:Fn((re-g*.55)/(g*.6),0,1),wn=Math.min(un*un*(3-2*un),xt.age/.06,(xt.life-xt.age)/.9),we=xt.r*wn*(xt.sink<0?1:Math.cbrt(1-xt.sink));if(we<.6)continue;if(I&&K.length<st&&(xt.sink>=0||!xt.free&&re<q+we)){let Fe=xt.sink>=0?0:Fn((re-g*.6)/(q+we-g*.6),0,1);K.push([xt.x,xt.y,xt.x,xt.y,we,we,Math.min(O,we*1.2)*(1-Fe*Fe*(3-2*Fe))]);continue}if(xt.free=!0,_.count>=no)continue;let ai=Math.hypot(xt.vx,xt.vy),oi=I?Fn((re-q-we)/(we*2),0,1):1,En=1+Math.min(ai/2600,.6)*r.stretch*oi;L.set(xt.vx,-xt.vy,0),ai>1?P.setFromUnitVectors(N,L.normalize()):P.identity(),z.set(xt.x-B.width/2,B.height/2-xt.y,0),R.set(we*En,we/Math.sqrt(En),we/Math.sqrt(En)*it),E.compose(z,P,R),_.setMatrixAt(_.count,E),_.count++}_.instanceMatrix.needsUpdate=!0;let at=-(r.size/2)*.9*it;if(b.position.set(0,0,at),p.target.position.set(0,0,at),p.position.set(-.42,.5,.76).multiplyScalar(Math.max(B.width,B.height)*2),!I)return{blob:!1,spray:_.count>0};for(let xt of nt){let re=g*X0*xt.grow;xt.size=re+g*.3,X.push([xt.x,xt.y,xt.x,xt.y,re,re,g*q0])}let gt=[H,...J.slice(0,r.trail)],rt=[0];for(let xt=1;xt<gt.length;xt++)rt.push(rt[xt-1]+Math.hypot(gt[xt].x-gt[xt-1].x,gt[xt].y-gt[xt-1].y));let lt=rt[rt.length-1],bt=Fn(lt/g,0,1),Rt=g*Qt(.6,.95,bt*bt*(3-2*bt)),Dt=Qt(.75,1.6,Fn(lt/(g*6),0,1)),D=xt=>Qt(g*.1,Rt,Math.pow(1-xt,Dt)),ht=xt=>{let re=1;for(;re<rt.length-1&&rt[re]<xt;)re++;let un=rt[re]-rt[re-1],wn=un>0?Fn((xt-rt[re-1])/un,0,1):0;return[Qt(gt[re-1].x,gt[re].x,wn),Qt(gt[re-1].y,gt[re].y,wn)]};for(let xt=0;xt<r.trail;xt++)J[xt].size=D(lt>0?rt[xt+1]/lt:1);let Q=[H.x,H.y];for(let xt=1;xt<=r.trail;xt++){let re=ht(lt*xt/r.trail);X.push([Q[0],Q[1],re[0],re[1],D((xt-1)/r.trail),D(xt/r.trail),g*.06]),Q=re}X.push(...K);let ct=x.blobSeg.value,dt=x.blobInfo.value,Z=1/0,ot=1/0,ut=-1/0,Mt=-1/0,Ft=g*Qt(.2,.6,r.goo),xe=Ft;return X.forEach(([xt,re,un,wn,we,ai,oi],En)=>{let Fe=xt-B.width/2,li=B.height/2-re,Ai=un-B.width/2,Ci=B.height/2-wn,ze=Math.max(we,ai)+oi;ct.set([Fe,li,Ai,Ci],En*4),dt.set([we,ai,oi,0],En*4),Z=Math.min(Z,Fe-ze,Ai-ze),ut=Math.max(ut,Fe+ze,Ai+ze),ot=Math.min(ot,li-ze,Ci-ze),Mt=Math.max(Mt,li+ze,Ci+ze),xe=Math.max(xe,ze)}),x.blobCount.value=X.length,x.blobHeadEnd.value=ri,x.blobTubeEnd.value=ri+r.trail,x.blobJoin.value=Ft,x.blobTop.value=xe,x.blobRef.value=g,x.blobLift.value=it,w.position.set((Z+ut)/2,(ot+Mt)/2,0),w.scale.set(ut-Z+4,Mt-ot+4,1),{blob:!0,spray:_.count>0}},U=S=>{if(Wt=0,!et)return;let g=Math.min(1/30,Math.max(1/240,(S-$)/1e3));$=S,le(g);let I=me(),O=I.blob||I.spray;w.visible=I.blob,_.visible=I.spray,b.visible=O&&r.shadow,a.render(l,h);let q=Math.hypot(H.vx,H.vy)+Math.abs(tt.velocity)*40+j.length*100+Math.abs(1-_t.value)*400;for(let st of nt)q+=Math.hypot(st.vx,st.vy);for(let st=0;st<r.trail;st++)q+=Math.hypot(J[st].vx,J[st].vy);let it=W.inside&&r.morph>0&&r.morphSpeed>0;vt=q>1.5||it?0:vt+g,!(!O&&!W.inside)&&(vt>.4||(Wt=requestAnimationFrame(U)))};function de(){Wt||!et||(vt=0,$=performance.now(),Wt=requestAnimationFrame(U))}let Kt=new ResizeObserver(Lt);return Kt.observe(e),window.addEventListener("pointermove",Ot,{passive:!0}),window.addEventListener("pointerenter",Ot,{passive:!0}),window.addEventListener("pointerdown",ee,{passive:!0}),window.addEventListener("pointerup",zt,{passive:!0}),window.addEventListener("pointercancel",zt,{passive:!0}),document.addEventListener("pointerout",se),window.addEventListener("blur",ge),Lt(),yt(),{destroy:()=>{et=!1,cancelAnimationFrame(Wt),Kt.disconnect(),r.hideCursor&&typeof document<"u"&&(document.documentElement.classList.remove("has-blob-cursor"),document.body?.classList.remove("has-blob-cursor")),window.removeEventListener("pointermove",Ot),window.removeEventListener("pointerenter",Ot),window.removeEventListener("pointerdown",ee),window.removeEventListener("pointerup",zt),window.removeEventListener("pointercancel",zt),document.removeEventListener("pointerout",se),window.removeEventListener("blur",ge);try{w.geometry.dispose()}catch{}try{m.dispose()}catch{}try{f.dispose()}catch{}try{T.dispose()}catch{}try{C.dispose()}catch{}try{_.dispose()}catch{}try{A.dispose()}catch{}try{M.dispose()}catch{}try{b.geometry.dispose()}catch{}try{b.material.dispose()}catch{}try{d.dispose()}catch{}try{a.dispose()}catch{}o.parentNode&&o.parentNode.removeChild(o)}}}var tx=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
}
`,ex=`#version 300 es
precision highp float;
precision highp int;

in vec2 vUv;
out vec4 fragColor;

uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;
uniform float uHover;
uniform vec3 uColor1; // Orange #C9662F
uniform vec3 uColor2; // Amber #F97316
uniform vec3 uColor3; // Navy #0F1C2E
uniform vec3 uColor4; // Peach-White #FFF8F3
uniform vec3 uColor5; // Slate #1E293B

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,
                      0.366025403784439,
                     -0.577350269189626,
                      0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = st * 2.0 - 1.0;
    p.x *= aspect;

    vec2 m = uMouse * 2.0 - 1.0;
    m.x *= aspect;

    float mouseDist = length(p - m);
    float mouseEffect = smoothstep(1.3, 0.0, mouseDist);

    float t = uTime * 0.42;

    vec2 waveCoords = p * 1.25;
    waveCoords += vec2(
        sin(p.y * 2.2 + t * 0.85 + mouseEffect * 1.6),
        cos(p.x * 2.0 - t * 0.70 + mouseEffect * 1.6)
    ) * (0.26 + 0.18 * mouseEffect);

    float n1 = snoise(waveCoords + vec2(t * 0.22, -t * 0.16));
    float n2 = snoise(waveCoords * 1.75 - vec2(t * 0.32, t * 0.22) + n1 * 0.7);
    float n3 = snoise(waveCoords * 0.85 + vec2(-t * 0.12, t * 0.14) + n2 * 0.4);

    float factor1 = clamp(0.5 + 0.5 * n1, 0.0, 1.0);
    float factor2 = clamp(0.5 + 0.5 * n2, 0.0, 1.0);
    float factor3 = clamp(0.5 + 0.5 * n3, 0.0, 1.0);

    vec3 col = mix(uColor4, uColor1, factor1);
    col = mix(col, uColor2, factor2 * (0.55 + 0.35 * mouseEffect));
    col = mix(col, uColor3, factor3 * 0.35);
    col = mix(col, uColor5, (1.0 - factor1) * 0.20);

    // Interactive cursor spotlight bloom
    float spotlight = exp(-mouseDist * 2.5) * (0.42 + 0.38 * uHover);
    col += uColor2 * spotlight;

    // Radiant amber warmth
    float glow = exp(-mouseDist * 1.1) * 0.20;
    col += uColor1 * glow;

    // Soft border vignette
    float dCorner = length(max(abs(st - 0.5) - 0.36, 0.0));
    float vignette = smoothstep(0.26, 0.0, dCorner);

    fragColor = vec4(col, clamp(0.92 + 0.08 * vignette, 0.0, 1.0));
}
`;function nx(n,t={}){let e=typeof n=="string"?document.querySelector(n):n;if(!e)return null;let i=Math.min(window.devicePixelRatio||1,2),s;try{s=new ui({dpr:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(E){return console.warn("HeroGradientShader WebGL not supported, falling back to CSS:",E),e.classList.add("shader-fallback"),null}let r=s.gl;r.canvas.style.position="absolute",r.canvas.style.inset="0",r.canvas.style.width="100%",r.canvas.style.height="100%",r.canvas.style.borderRadius="inherit",r.canvas.style.pointerEvents="none",e.prepend(r.canvas);let a=new hi(r,{vertex:tx,fragment:ex,uniforms:{uResolution:{value:[1,1]},uTime:{value:0},uMouse:{value:[.5,.5]},uHover:{value:0},uColor1:{value:[.788,.4,.184]},uColor2:{value:[.976,.451,.09]},uColor3:{value:[.059,.11,.18]},uColor4:{value:[1,.973,.953]},uColor5:{value:[.118,.161,.231]}}}),o=new fi(r),l=new di(r,{geometry:o,program:a}),c=()=>{let E=e.clientWidth||1,P=e.clientHeight||1;s.setSize(E,P),a.uniforms.uResolution.value=[r.drawingBufferWidth,r.drawingBufferHeight]},u=null;"ResizeObserver"in window?(u=new ResizeObserver(c),u.observe(e)):window.addEventListener("resize",c),c();let d=[.5,.5],h=[.5,.5],p=0,x=0,y=E=>{let P=e.getBoundingClientRect(),L=(E.clientX-P.left)/Math.max(P.width,1),N=1-(E.clientY-P.top)/Math.max(P.height,1);d[0]=Math.min(Math.max(L,0),1),d[1]=Math.min(Math.max(N,0),1),p=1,e.style.setProperty("--card-cursor-x",`${(E.clientX-P.left).toFixed(1)}px`),e.style.setProperty("--card-cursor-y",`${(E.clientY-P.top).toFixed(1)}px`)},m=()=>{p=0},f=e.closest(".hero")||e;f.addEventListener("pointermove",y,{passive:!0}),f.addEventListener("pointerleave",m,{passive:!0});let T=!0,A=null;"IntersectionObserver"in window&&(A=new IntersectionObserver(E=>{E[0]&&(T=E[0].isIntersecting)},{threshold:.05}),A.observe(e));let M=0,w=performance.now(),b=0,C=!1,_=E=>{if(C)return;let P=Math.max(0,E-w)*.001;if(w=E,!T||document.hidden){M=requestAnimationFrame(_);return}b+=P;let N=1-Math.exp(-P/.08);h[0]+=(d[0]-h[0])*N,h[1]+=(d[1]-h[1])*N,x+=(p-x)*N,a.uniforms.uMouse.value=h,a.uniforms.uHover.value=x,a.uniforms.uTime.value=b,s.render({scene:l}),M=requestAnimationFrame(_)};return M=requestAnimationFrame(_),{destroy:()=>{C=!0,cancelAnimationFrame(M),f.removeEventListener("pointermove",y),f.removeEventListener("pointerleave",m),u?.disconnect(),u||window.removeEventListener("resize",c),A?.disconnect();try{r.canvas.parentNode&&r.canvas.parentNode.removeChild(r.canvas)}catch{}}}}var ix=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
}
`,sx=`#version 300 es
precision highp float;
precision highp int;

in vec2 vUv;
out vec4 fragColor;

uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;
uniform float uSpeed;

// Simplex noise function
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = uv;
    p.x *= aspect;

    vec2 mouse = uMouse;
    mouse.x *= aspect;

    float mouseDist = length(p - mouse);
    float mouseWave = smoothstep(1.3, 0.0, mouseDist);

    float t = uTime * 0.38 * uSpeed;

    // Layered Aurora wavy ribbons
    float waveA = snoise(vec2(p.x * 1.6 + t * 0.45, t * 0.25)) * 0.26;
    float waveB = snoise(vec2(p.x * 2.6 - t * 0.50, p.y * 1.4 + t * 0.3)) * 0.16;
    float waveC = sin(p.x * 3.8 + t * 0.85 + mouseWave * 1.8) * 0.12;

    float totalWave = waveA + waveB + waveC;
    float auroraY = (1.0 - uv.y) + totalWave - 0.12;

    // Three layered luminous curtains of aurora
    float c1 = smoothstep(0.04, 0.48, auroraY) * smoothstep(0.92, 0.42, auroraY);
    c1 = pow(c1, 1.7);

    float c2 = smoothstep(0.14, 0.58, auroraY + 0.14) * smoothstep(0.88, 0.38, auroraY + 0.14);
    c2 = pow(c2, 2.0);

    float c3 = smoothstep(0.20, 0.68, auroraY - 0.10) * smoothstep(0.94, 0.52, auroraY - 0.10);
    c3 = pow(c3, 1.9);

    // Color definitions for light-first OJIX luxury palette
    vec3 cBg     = vec3(0.984, 0.980, 0.973); // Ivory Soft White #FAF7F2
    vec3 cCopper = vec3(0.788, 0.400, 0.184); // Orange #C9662F
    vec3 cAmber  = vec3(0.976, 0.451, 0.090); // Vivid Amber #F97316
    vec3 cGold   = vec3(0.992, 0.741, 0.447); // Golden Glow #FDBA74
    vec3 cNavy   = vec3(0.059, 0.110, 0.180); // Executive Navy #0F1C2E

    vec3 aurora = vec3(0.0);
    aurora += cCopper * c1 * 1.25;
    aurora += cAmber  * c2 * 1.05;
    aurora += cGold   * (c1 * c2) * 1.45;
    aurora += cNavy   * c3 * 0.35;

    // Glowing Orb center spotlight emission (emanating from top center)
    vec2 orbCoord = vec2(0.5 * aspect, 0.82);
    float dOrb = length(p - orbCoord);
    float orbAura = exp(-dOrb * 2.5) * 0.55;
    aurora += cAmber * orbAura;

    // Mouse cursor radiance
    float cursorAura = exp(-mouseDist * 2.8) * 0.32;
    aurora += cGold * cursorAura;

    // Blend into canvas background
    vec3 finalColor = mix(cBg, cBg + aurora, clamp(length(aurora), 0.0, 0.92));

    // Vertical gradient falloff toward bottom of hero
    float bottomFade = smoothstep(0.0, 0.35, uv.y);
    finalColor = mix(cBg, finalColor, bottomFade);

    fragColor = vec4(finalColor, 1.0);
}
`;function rx(n,t={}){let e=typeof n=="string"?document.querySelector(n):n;if(!e)return null;let i=Math.min(window.devicePixelRatio||1,2),s;try{s=new ui({dpr:i,alpha:!0,antialias:!0,premultipliedAlpha:!1})}catch(b){return console.warn("HeroAuroraShader WebGL not supported, falling back to CSS:",b),e.classList.add("aurora-fallback"),null}let r=s.gl;r.canvas.style.position="absolute",r.canvas.style.inset="0",r.canvas.style.width="100%",r.canvas.style.height="100%",r.canvas.style.pointerEvents="none",e.prepend(r.canvas);let a=new hi(r,{vertex:ix,fragment:sx,uniforms:{uResolution:{value:[1,1]},uTime:{value:0},uMouse:{value:[.5,.5]},uSpeed:{value:t.speed||1}}}),o=new fi(r),l=new di(r,{geometry:o,program:a}),c=()=>{let b=e.clientWidth||window.innerWidth,C=e.clientHeight||700;s.setSize(b,C),a.uniforms.uResolution.value=[r.drawingBufferWidth,r.drawingBufferHeight]},u=null;"ResizeObserver"in window?(u=new ResizeObserver(c),u.observe(e)):window.addEventListener("resize",c),c();let d=[.5,.5],h=[.5,.5],p=b=>{let C=e.getBoundingClientRect(),_=(b.clientX-C.left)/Math.max(C.width,1),E=1-(b.clientY-C.top)/Math.max(C.height,1);d[0]=Math.min(Math.max(_,0),1),d[1]=Math.min(Math.max(E,0),1);let L=(e.closest(".hero")||e).querySelector(".hero-glowing-orb");if(L){let N=(b.clientX-window.innerWidth/2)/window.innerWidth*16,z=(b.clientY-200)/400*12;L.style.setProperty("--orb-shift-x",`${N.toFixed(1)}px`),L.style.setProperty("--orb-shift-y",`${z.toFixed(1)}px`)}},x=e.closest(".hero")||e;x.addEventListener("pointermove",p,{passive:!0});let y=!0,m=null;"IntersectionObserver"in window&&(m=new IntersectionObserver(b=>{b[0]&&(y=b[0].isIntersecting)},{threshold:.05}),m.observe(e));let f=0,T=performance.now(),A=0,M=!1,w=b=>{if(M)return;let C=Math.max(0,b-T)*.001;if(T=b,!y||document.hidden){f=requestAnimationFrame(w);return}A+=C;let E=1-Math.exp(-C/.08);h[0]+=(d[0]-h[0])*E,h[1]+=(d[1]-h[1])*E,a.uniforms.uMouse.value=h,a.uniforms.uTime.value=A,s.render({scene:l}),f=requestAnimationFrame(w)};return f=requestAnimationFrame(w),{destroy:()=>{M=!0,cancelAnimationFrame(f),x.removeEventListener("pointermove",p),u?.disconnect(),u||window.removeEventListener("resize",c),m?.disconnect();try{r.canvas.parentNode&&r.canvas.parentNode.removeChild(r.canvas)}catch{}}}}function Zu(){let n=window.matchMedia?.("(hover: hover) and (pointer: fine)").matches??!0,t=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1;if(document.querySelectorAll(".scroll-stack-container, #portfolio-scroll-stack").forEach(s=>{Xu(s)}),t||(document.querySelectorAll(".hero-aurora-canvas, #hero-aurora-canvas").forEach(a=>{rx(a)}),document.querySelectorAll(".hero-shader-stage, #hero-shader-stage").forEach(a=>{nx(a)})),t)return;let i=document.getElementById("site-blob-cursor");i&&n&&(typeof document<"u"&&(document.documentElement.classList.add("has-blob-cursor"),document.body?.classList.add("has-blob-cursor")),j0(i,{material:"chrome",color:"#C9662F",size:32,splash:!0,splashCount:6,splashSpeed:.5,splashSize:.5,lag:.35,stretch:.6,wobble:1,hideCursor:!0}))}typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Zu):Zu());export{Zu as autoInitVisuals,j0 as initBlobCursor,rx as initHeroAuroraShader,nx as initHeroGradientShader,bM as initPrismaticBurst,Xu as initScrollStack};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
