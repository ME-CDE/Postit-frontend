import React from "react";
// import { useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import useAuth from "./useAuth";
import Nav from "./NavBar"
import Footer from "./Footer";
// import { BsImageFill } from "react-icons/bs";
// import { IoMdClose } from "react-icons/io";

const CreatePost = () => {
  // const [image, setImage] = useState("");
  const { id } = useParams();
  const link = useNavigate();
  const [name] = useOutletContext();
  useAuth(id,link)
  // function images() {
  //   const Reader = new FileReader();
  //   const imageFile = document.getElementById("fileImage");
  //   if (imageFile.files[0]) {
  //     Reader.readAsDataURL(imageFile.files[0]);
  //     Reader.onload = () => {
  //       setImage(Reader.result);
  //       imageFile.value = "";
  //       console.log(imageFile.files[0]);
  //     };
  //   }
  // }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const body ={
      ownerId: id,
      coverImage: "",
      title: e.target[0].value,
      categories: e.target[1].value,
      content:e.target[2].value,
    }
    fetch(`http://localhost:7500/blogs`,{
      method: "POST",
      body: JSON.stringify(body),
      headers: {"Content-Type": "application/json"},
    }).then((res)=>{
      return res.json()
    })
    .then((data)=>{
      // console.log(data);
      link(`/app/${id}/post`)
    })
  }
  return (
    <div className="w-screen">
      <Nav data={name}/>
      <div className="w-10/12 mx-auto ">
        <h1 className="font-bold text-[40px] smallest:text-[45px] xxxs:text-[50px] xs:text-6xl mt-10 mb-8">
          Create Story
        </h1>
        {/* <div>
          <h1 className=" text-primaryBlack font-bold tracking-normal text-3xl ml-2 mb-1">
            Cover Image
          </h1>
          <p className=" text-base ml-2 mb-2">
            File types supported: JPG, PNG. Max size: 1 MB
          </p>
        </div> */}
        <form className="flex flex-col w-full gap-y-10 font-bold text-2xl tracking-[0.02em] items-center" onSubmit={handleSubmit}>
          {/* <div className="w-full flex items-start flex-col">
            <div className="resize max-w-[100%] max-h-[83vw] w-80 xs:w-96 h-44 smallest:h-52 xxs:h-60 xs:h-72 relative border-[3px] border-dashed rounded-xl flex justify-center items-center">
              {image && (
                <div className="w-full h-full rounded-xl flex justify-center items-center absolute">
                  <IoMdClose
                    className=" text-2xl absolute top-[7%] right-[6%] z-50 text-almostWhite"
                    onClick={() => setImage("")}
                  />
                  <img
                    src={image} alt="cover"
                    className="w-[97%] h-[97%] relative rounded-xl z-20"
                  />
                </div>
              )}
              <label
                htmlFor="fileImage"
                className="w-[97%] h-[97%] flex items-center justify-center hover:bg-[#757575]/[0.3] rounded-xl relative z-30"
              >
                <BsImageFill className=" text-7xl opacity-[0.05]  relative z-50" />
              </label>
              <input
                type="file"
                name="file"
                id="fileImage"
                onChange={images}
                className="hidden invisible"
              />
            </div>
          </div> */}
          <input
            className="w-full h-[61px] border border-black rounded-md pl-7 placeholder:text-[#757575]/[1] outline-none leading-10"
            type="text"
            name=""
            id=""
            placeholder="Title"
          />
          <input
            className="w-full h-[61px] border border-black rounded-md pl-7 placeholder:text-[#757575] outline-none leading-10"
            type="text"
            name=""
            id=""
            placeholder="Tags"
          />
          <textarea
            name=""
            id=""
            className="w-full h-[568px] max-h-[85vw] border border-black rounded-md pl-7 pt-4 placeholder:text-[#757575] outline-none"
            placeholder="Write your story......."
          />
          <button
            type="submit"
            className="max-w-full w-[438px] h-[67px] bg-primaryBlue text-[30px] text-[#F0F8FF] mb-[76px]"
          >
            Publish Story
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default CreatePost;
