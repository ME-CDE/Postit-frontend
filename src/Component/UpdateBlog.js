import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import useAuth from "./useAuth";
import Nav from "./NavBar";
import Footer from "./Footer";
import { BsImageFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const UpdateBlog = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [content, setContent] = useState("");
  const [logic, setLogic] = useState(true);
  const [name] = useOutletContext();
  const { id, ids } = useParams();
  const link = useNavigate();
  useAuth(id, link);
  function images() {
    const Reader = new FileReader();
    const imageFile = document.getElementById("fileImage");
    if (imageFile.files[0]) {
      Reader.readAsDataURL(imageFile.files[0]);
      Reader.onload = () => {
        setImage(Reader.result);
        if (imageFile.files[0].size < 1025) {
          setLogic(true);
        } else {
          setLogic(false);
        }
        imageFile.value = "";
      };
    }
  }
  const singleBlogs = async () => {
    if (ids.length !== 24) {
      return link("/error");
    }
    const res = await fetch(`https://postiitt.herokuapp.com/blogs?blog=${ids}`);
    const data = await res.json();
    if (data.redirect) {
      return link(data.redirect);
    }
    setTitle(data.title);
    setCategories(data.categories);
    setContent(data.content);
  };
  useEffect(() => {
    singleBlogs(); // eslint-disable-next-line
  }, []);
  const update = async (e) => {
    e.preventDefault();
    if (logic) {
      const res = await fetch(
        `https://postiitt.herokuapp.com/blogs?ownerId=${id}&blog=${ids}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            title: title,
            categories: categories,
            content: content,
            coverImage: image,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      link(data.redirect);
    }
    if (!logic) {
      alert("Please provide an image less than 1mb");
    }
  };
  return (
    <div className="w-screen">
      {content && (
        <>
          <Nav data={name} />
          <div className="w-10/12 mx-auto ">
            <h1 className="font-bold text-[40px] smallest:text-[45px] xxxs:text-[50px] xs:text-6xl mt-10 mb-8">
              Update Story
            </h1>
            <form
              className="flex flex-col w-full gap-y-10 font-bold text-lg sm:text-xl md:text-2xl tracking-[0.02em] items-center"
              onSubmit={update}
            >
              <div className="w-full mb-[-30px]">
                <h1 className=" text-primaryBlack font-bold tracking-normal text-3xl ml-2 mb-1">
                  Cover Image
                </h1>
                <p className=" text-base ml-2">
                  File types supported: JPG, PNG. Max size: 5 MB
                </p>
              </div>
              <div className="w-full flex items-center flex-col">
                <div className="resize w-full h-[50vw] xs:h-[50vw] relative border-[3px] border-dashed rounded-xl flex justify-center items-center">
                  {image && (
                    <div className="w-full h-full rounded-xl flex justify-center items-center absolute">
                      <IoMdClose
                        className=" text-2xl absolute top-[7%] right-[6%] z-50 text-almostWhite"
                        onClick={() => setImage("")}
                      />
                      <img
                        src={image}
                        alt="cover"
                        className="w-[98.5%] h-[97%] relative rounded-xl z-20"
                      />
                    </div>
                  )}
                  <label
                    htmlFor="fileImage"
                    className="w-[98.5%] h-[97%] flex items-center justify-center hover:bg-[#757575]/[0.3] rounded-xl relative z-30"
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
              </div>
              <input
                className="w-full h-[45px] sm:h-[61px] border border-[#757575] rounded-md pl-7 placeholder:text-[#757575]/[1] outline-none leading-10"
                type="text"
                name=""
                id=""
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <select
                name="categories"
                id=""
                className="w-full h-[45px] sm:h-[61px] border border-[#757575] rounded-md pl-7 outline-none text-[#757575]"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
              >
                <option value="Technology">Technology</option>
                <option value="Nature">Nature</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Sports">Sports</option>
              </select>
              <textarea
                name=""
                id=""
                className="w-full h-[568px] max-h-[85vw] border border-[#757575] rounded-md pl-7 pt-4 placeholder:text-[#757575] outline-none"
                placeholder="Write your story......."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button
                type="submit"
                className="max-w-full w-[438px] h-[67px] bg-primaryBlue text-[24px] sm:text-[27px] md:text-[30px] text-[#F0F8FF] mb-[76px]"
              >
                Update Story
              </button>
            </form>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default UpdateBlog;
