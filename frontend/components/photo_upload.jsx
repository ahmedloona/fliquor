import React from 'react';
import { Link, withRouter} from 'react-router-dom';


class PhotoUpload extends React.Component {
 constructor (props){
   super(props)

   this.state = {
     title: '',
     description:'',
     tag_ids: "",
     photoURL: null,
     loading: false,
   };
   this.onFileChange = this.onFileChange.bind(this);
   this.update = this.update.bind(this);
  this.save = this.save.bind(this);
  this.getFilename = this.getFilename.bind(this);
 }



  onFileChange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ image: file, photoURL: fileReader.result});
    }

    fileReader.readAsDataURL(file);
  }



  update(field) {
  return event => this.setState({
    [field]: event.currentTarget.value
  });
}

  save(e) {
    e.preventDefault();
    this.setState ({
      loading: true
    });

    let formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[image]', this.state.image);
    formData.append('photo[tag_ids]',this.state.tag_ids);

    this.props.newPhoto(formData).then( res => {
      //   ;
        this.props.history.push(`/photos/${res.photo.photo.id}`)
      });

  }

shadowClick(){
  const clicky = document.getElementsByClassName('upload-choose')[0];
  clicky.click();
}

shadowSubmit(){
  const shadow = document.getElementsByClassName('upload-submit')[0];
  shadow.click();
}

renderErrors() {
  if (this.props.errors.photos.length > 0) {

    return (
      <div className="errors">
        <ul>
          {this.props.errors.photos.map((error, key) => {
            return <li>{error}</li>
          })}
        </ul>
      </div>
    );
  }
}



getFilename() {

  if (this.state.photoURL){
    return
    `${this.state.image.name}`;
  } else {
   return
      "I returned";
  }
}

  render() {
    if (this.state.loading){
      
      return(
       <div className="loading-container">
         <div className="loading-container-inner">
           <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
         </div>
        <div className="loading-background"></div>
       </div>

  );
 }
     const UploadToolbar = () => {
       if (this.state.photoURL) {
         return (
           <div className="upload-toolbar">
             <div className="shadow-submit-active" onClick={this.shadowSubmit}> Upload Photo</div>
           </div>
         );
       } else {
         return (
           <div className="upload-toolbar">
        <div className="shadow-submit-inactive">Upload</div>
           </div>
         );
       }
     };

   const MainContent = () => {
     if (this.state.photoURL){
       return (
         <div className="upload-form-preview">
           <img className="preview" src={this.state.photoURL}/>
        </div>
       );
     } else {
      return (
         <div className="upload-form-main">
           <h1 className="upload-info">Drag & Drop photo here</h1>
           <h1 className="upload-info">or</h1>
           <div className="upload-button" onClick={this.shadowClick}> Choose photo to upload</div>
           <input  className="upload-choose"type="file" onChange={this.onFileChange}></input>
         </div>
       );
     }
   };


const RightContent = () => (
  <div>
    {this.renderErrors()}
  </div>
);


    return (
      <div className="upload-container">
          <UploadToolbar/>
        <form onSubmit={this.save} className="upload-form">
               <MainContent />

                 <div className={this.state.photoURL ? "upload-form-left" : "blank-div"}>
                   <input className="photo-field-title"
                     value={this.state.title}
                     placeholder={this.state.photoURL ? `${this.state.image.name}` : ""} type="text"
                      onChange={this.update('title')}
                      ></input>
                    <textarea
                     className="photo-field"
                     placeholder="Add a description"
                     value={this.state.description}


                     onChange={this.update('description')}></textarea>
                     <input
                       className="photo-field"
                       placeholder="Add tags separated by commas"
                       value={this.state.tag_ids}
                       type="text"

                       onChange={this.update('tag_ids')}></input>
                   <input className="upload-submit" type="submit" value=""></input>
                 </div>
               <RightContent />
        </form>
      </div>

    );
  }

}

//controls bar above work area
export default withRouter(PhotoUpload);
//util ajax



//this goes in the photo upload


//this goes in the create page
