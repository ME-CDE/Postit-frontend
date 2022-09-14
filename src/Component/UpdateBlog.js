import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import useAuth from "./useAuth";
import Nav from "./NavBar"
import Footer from "./Footer";
// import { BsImageFill } from "react-icons/bs";
// import { IoMdClose } from "react-icons/io";

const UpdateBlog = () => {
  // const [image, setImage] = useState("");
  const [title, setTitle] = useState("")
  const [categories, setCategories] = useState("")
  const [content, setContent] = useState("")
  const [name] = useOutletContext();
  const { id, ids } = useParams();
  const link = useNavigate();
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
  const singleBlogs = async()=>{
    if (ids.length !== 24){
      return link("/error")
    }
    const res = await fetch(`http://localhost:7500/blogs?blog=${ids}`)
    const data = await res.json()
    if (data.redirect) {
      return link(data.redirect)
    }
    setTitle(data.title)
    setCategories(data.categories)
    setContent(data.content)
  }
  useEffect(() => {
    singleBlogs()// eslint-disable-next-line
  }, [])
  const update = async(e)=>{
    e.preventDefault()
    const res =await fetch(`http://localhost:7500/blogs?ownerId=${id}&blog=${ids}`,{
      method:"PATCH",
      body:JSON.stringify({
        title:title, 
        categories:categories,
        content:content
      }),
      headers:{"Content-Type":"application/json"}
    })
    const data = await res.json()
    link(data.redirect)
  }
  return (
    <div className="w-screen">
      {content &&
      <>
      <Nav data={name}/>
      <div className="w-10/12 mx-auto ">
        <h1 className="font-bold text-[40px] smallest:text-[45px] xxxs:text-[50px] xs:text-6xl mt-10 mb-8">
          Update Story
        </h1>
        {/* <div>
          <h1 className=" text-primaryBlack font-bold tracking-normal text-3xl ml-2 mb-1">
            Cover Image
          </h1>
          <p className=" text-base ml-2 mb-2">
            File types supported: JPG, PNG. Max size: 1 MB
          </p>
        </div> */}
        <form className="flex flex-col w-full gap-y-10 font-bold text-2xl tracking-[0.02em] items-center">
          {/* <div className="w-full flex items-start flex-col">
            <div className="resize max-w-[100%] max-h-[83vw] w-80 xs:w-96 h-44 smallest:h-52 xxs:h-60 xs:h-72 relative border-[3px] border-dashed rounded-xl flex justify-center items-center">
              {image && (
                <div className="w-full h-full rounded-xl flex justify-center items-center absolute">
                  <IoMdClose
                    className=" text-2xl absolute top-[7%] right-[6%] z-50 text-almostWhite"
                    onClick={() => setImage("")}
                  />
                  <img
                    src={image}
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
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
          <input
            className="w-full h-[61px] border border-black rounded-md pl-7 placeholder:text-[#757575] outline-none leading-10"
            type="text"
            name=""
            id=""
            placeholder="Tags"
            value={categories}
            onChange={(e)=> setCategories(e.target.value)}
          />
          <textarea
            name=""
            id=""
            className="w-full h-[568px] max-h-[85vw] border border-black rounded-md pl-7 pt-4 placeholder:text-[#757575] outline-none"
            placeholder="Write your story......."
            value={content}
            onChange={(e)=> setContent(e.target.value)}
          />
          <button
            type="submit"
            className="max-w-full w-[438px] h-[67px] bg-primaryBlue text-[30px] text-[#F0F8FF] mb-[76px]"
            onClick={update}
          >
            Update Story
          </button>
        </form>
      </div>
      <Footer/>
      </>
      }
    </div>
  );
};

export default UpdateBlog;
