import React, { useState } from "react";
import "./create.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
//import { useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");

 // const navigate = useNavigate();

  const handleCloseImg = () => {
    setImage("");
  };

  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      let filename = null;
      if (image) {
        filename = Date.now() + image.name;
        formData.append("filename", filename);
        formData.append("image", image);
        await fetch("https://istore-api-2s0m.onrender.com/upload/image", {
          method: "POST",
          body: formData,
        });
      }

      // uploading product
      const res = await fetch("https://istore-api-2s0m.onrender.com/product", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          category,
          img: filename,
          price,
          review,
        }),
        
      });
      setTitle("")
      setReview("")
      setCategory("")
      setDesc("")
      setImage("")
      setPrice("")
      

      await res.json();

     // navigate(`/food/${food._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="createContainer">
      <div className="createWrapper">
        <h2 className="title"> Create product</h2>
        <form
          className="form"
          onSubmit={handleCreateProduct}
          encType="multipart/form-data"
        >
          <div className="inputWrapper">
            <label>Title:</label>
            <input
              type="text"
              placeholder="Title..."
              className="input"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            <label>Description: </label>
            <input
              type="text"
              placeholder="Description..."
              className="input"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            <label>Category: </label>
            <input
              type="text"
              placeholder="Category..."
              className="input"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="inputWrapperImage">
            <label htmlFor="image" className="labelFileInput">
              Image: <span>Upload here</span>
            </label>
            <input
              type="file"
              id="image"
              placeholder="Image..."
              className="input"
              onChange={onChangeFile}
              style={{ display: "none" }}
            />
            {image && (
              <p className="imageName">
                {image.name}{" "}
                <AiOutlineCloseCircle
                  onClick={handleCloseImg}
                  className="closeIcon"
                />
              </p>
            )}
          </div>
          <div className="inputWrapper">
            <label>Price: </label>
            <input
              type="number"
              step={0.01}
              placeholder="Price..."
              className="input"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            <label>Review: </label>
            <input
              type="number"
              step={0.1}
              min={1}
              max={5}
              placeholder="Review..."
              className="input"
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className="buttonWrapper">
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
