import React from 'react';
import { FileUpload } from 'react-fileupload';

class Uploadpage extends React.Component{
	render(){
    /*set properties*/
    const options={
        baseUrl:'http://127.0.0.1',
        param:{
            fid:0
        }
    }
    /*Use FileUpload with options*/
    /*Set two dom with ref*/
    return (
        <FileUpload options={options}>
            <button ref="chooseBtn">choose</button>
            <button ref="uploadBtn">upload</button>
        </FileUpload>
    )           
	}
}

export default Uploadpage;
console.log('test');
console.log('test');
console.log('test');
console.log('test');
console.log('test');

// var Uploadpage = React.createClass({
//     getInitialState: function () {
//         return {
//           files: []
//         };
//     },

//     onDrop: function (acceptedFiles) {
//       this.setState({
//         files: acceptedFiles
//       });
//     },

//     onOpenClick: function () {
//       this.dropzone.open();
//     },

//     render: function () {
//         return (
//             <div>
//                 <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
//                     <div>Try dropping some files here, or click to select files to upload.</div>
//                 </Dropzone>
//                 <button type="button" onClick={this.onOpenClick}>
//                     Open Dropzone
//                 </button>
//                 {this.state.files.length > 0 ? <div>
//                 <h2>Uploading {this.state.files.length} files...</h2>
//                 <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
//                 </div> : null}
//             </div>
//         );
//     }
// });
// 	constructor(props){
// 		super(props);
// 		this.onDrop = this.onDrop.bind(this);
// 		this.state = {files : ['image']};
// 	}

	

// 	onDrop(acceptedFiles){
// 		this.setState({
//       files: acceptedFiles
//     });
// 	}

// 	onOpenClick(){
// 		this.dropzone.open();
// 	}

// 	render(){
// 		return (
// 			<div>
//           <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
//               <div>Try dropping some files here, or click to select files to upload.</div>
//           </Dropzone>
//           <button type="button" onClick={this.onOpenClick}>
//               Open Dropzone
//           </button>
//           {this.state.files.length > 0 ? <div>
//           <h2>Uploading {this.state.files.length} files...</h2>
//           <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
//           </div> : null}
//       </div>
// 		)
// 	}
// }



// import React from 'react';

// class Upload extends React.Component{

//   render(){
//     return (
//       <div>
//         <h1>Upload</h1>
//         <i></i>
//       </div>
//     )
//   };

// };

// export default Upload;





// var Upload = React.createClass({
// 	  getInitialState: function () {
//         return {
//           files: []
//         };
//     },

//     onDrop: function (acceptedFiles) {
//       this.setState({
//         files: acceptedFiles
//       });
//     },

//     onOpenClick: function () {
//       this.dropzone.open();
//     },

//     render: function () {
//         return (
//             <div>
//                 <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
//                     <div>Try dropping some files here, or click to select files to upload.</div>
//                 </Dropzone>
//                 <button type="button" onClick={this.onOpenClick}>
//                     Open Dropzone
//                 </button>
//                 {this.state.files.length > 0 ? <div>
//                 <h2>Uploading {this.state.files.length} files...</h2>
//                 <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
//                 </div> : null}
//             </div>
//         );
//     }
// })



// import React from 'react';

// class Upload extends React.Component{

//   render(){
//     return (
//       <div>
//         <h1>Upload</h1>
//         <i></i>
//       </div>
//     )
//   };

// };


//*******************************
// import React from 'react';
// import {Dropzone} from 'react-dropzone';

// class Upload extends React.Component{
  
//   // onDrop: function (files) {
//   //   console.log('Received files: ', files);
//   // }
//   onDrop(files){
//   	console.log('Received files: ', files);
//   }
//   render(){
//     return (
//       <div>
//       	<div id="con">
//         	<h1>Upload</h1>
//         </div>
//         	<div>
//             <Dropzone onDrop={this.onDrop}>
//               <div>Try dropping some files here, or click to select files to upload.</div>
//             </Dropzone>
//           </div>
//         <i></i>
//       </div>
//     )
//   };

// };

// export default Upload;


//*******************************
// var React = require('react');
// var Dropzone = require('react-dropzone');

// var DropzoneDemo = React.createClass({
//     onDrop: function (files) {
//       console.log('Received files: ', files);
//     },

//     render: function () {
//       return (
//           <div>
//             <Dropzone onDrop={this.onDrop}>
//               <div>Try dropping some files here, or click to select files to upload.</div>
//             </Dropzone>
//           </div>
//       );
//     }
// });

// React.render(<DropzoneDemo />, document.body);