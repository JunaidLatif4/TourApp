import React, { useState } from "react";
// import ImgCrop from 'antd-img-crop';
import './Sec1.scss'
// import { Upload, Icon, Modal } from 'antd'

// import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');

// import "quill/dist/quill.snow.css"; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme


const Sec1 = () => {

  // const { quill, quillRef } = useQuill();

  // console.log(quill); // undefined > Quill Object
  // console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }




  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: '',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };


  return (

    <>
      dashboard
    </>

    // <>


    //   <div className="sec_main">
    //     <div className="sec_title">
    //       Tour
    //     </div>



    //     <div className="sec_main_title">
    //       Title
    //     </div>


    //     <div className="title_input">
    //       <input type='text' placeholder=" Enter Your title" />
    //     </div>




    //     <div className="upload">
    //       <ImgCrop rotate>
    //         <Upload
    //           action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    //           listType="picture-card"
    //           fileList={fileList}
    //           onChange={onChange}
    //           onPreview={onPreview}
    //         >
    //           {fileList.length < 5 && '+'}
    //         </Upload>
    //       </ImgCrop>
    //     </div>







    //     <div className="hr_line">
    //       <hr />

    //     </div>





    //     <div className="sec_2">

    //       <div className="sec2_title">
    //         Sec 2
    //       </div>

    //       <div className="sec2_heading">
    //         Heading
    //       </div>

    //       <div className="title_input">
    //         <input type='text' placeholder=" Enter Your Heading" />
    //       </div>


    //       <div className="para_quill">


    //         <div style={{ width: 500, height: 300 }}>
    //           <div ref={quillRef} />
    //         </div>



    //       </div>


    //     </div>











    //   </div>














    // </>

















  );
}


export default Sec1