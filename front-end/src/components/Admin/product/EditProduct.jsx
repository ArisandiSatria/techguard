import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../../firebase.js";

export default function EditProduct({ id, product }) {
  const [files, setFiles] = useState([]);
  const [uploadImageError, setUploadImageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [specification, setSpecification] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "fingerprint-attendance",
    description: "",
    price: 0,
    specifications: [],
    note: "",
    images: [],
  });

  useEffect(() => {
    setFormData(product);
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const specificationChange = () => {
    if (specification) {
      setFormData({
        ...formData,
        specifications: [...formData.specifications, specification],
      });
      setSpecification("");
    }
  };

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.images.length < 6) {
      setUploading(true);
      setUploadImageError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }

      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            images: formData.images.concat(urls),
          });
          setUploadImageError(false);
          setUploading(false);
        })
        .catch((err) => {
          setUploadImageError("Image upload failed!");
          setUploading(false);
        });
    } else {
      setUploadImageError("You can only upload 5 image per product!");
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress} done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            resolve(downloadUrl);
          });
        }
      );
    });
  };

  const handleRemoveImageUploaded = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.images.length < 1)
        return setError("You must upload at least 1 image!");
      setLoading(true);
      setError(false);
      const res = await fetch(`/api/product/edit-product/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success == false) {
        return setError(data.message);
      }
      window.location.reload();
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="add-product">
        <div className="add-product-form">
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            onChange={handleChange}
            value={formData.name}
            type="text"
            required
          />
        </div>
        <div className="add-product-form">
          <label htmlFor="category">Category *</label>
          <select
            name="category"
            id="category"
            onChange={handleChange}
            required
          >
            <option value="fingerprint-attendance">
              Fingerprint Attendance
            </option>
            <option value="face-attendance">Face Attendance</option>
            <option value="access-door">Access Door</option>
            <option value="cctv-installation">CCTV Installation</option>
          </select>
        </div>
        <div className="add-product-form">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            onChange={handleChange}
            value={formData.description}
          />
        </div>
        <div className="add-product-form">
          <label htmlFor="price">Price *</label>
          <input
            type="number"
            min="0"
            id="price"
            onChange={handleChange}
            value={formData.price}
            required
          />
        </div>
        <div className="add-product-form">
          <label htmlFor="specifications">Specifications</label>
          <div className="spesification-add-form">
            <input
              type="text"
              id="specifications"
              value={specification}
              onChange={(e) => {
                setSpecification(e.target.value);
              }}
            />
            <p onClick={specificationChange}>Add</p>
          </div>
          <div className="specification-list">
            <p>Specification list:</p>
            {formData.specifications?.map((spec, index) => (
              <p
                className="specification-list-item"
                onClick={() => {
                  const updatedSpecifications = [...formData.specifications];
                  updatedSpecifications.splice(index, 1);
                  setFormData({
                    ...formData,
                    specifications: updatedSpecifications,
                  });
                }}
                key={spec}
              >
                - {spec}
              </p>
            ))}
          </div>
        </div>
        <div className="add-product-form">
          <label htmlFor="note">Note</label>
          <input
            type="text"
            id="note"
            onChange={handleChange}
            value={formData.note}
          />
        </div>
      </div>
      <div className="add-product-form-image">
        <p className="note">
          Note: Images <span>The first image will be the cover (max 6)</span>
          (Required)
        </p>
        <div className="image-upload">
          <input
            onChange={(e) => setFiles(e.target.files)}
            type="file"
            id="images"
            accept="images/*"
            multiple
          />
          <button
            disabled={uploading}
            onClick={handleImageSubmit}
            type="button"
            className="image-upload-button"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
        <p
          className="text-red-700 text-sm"
          style={{
            color: "red",
            fontSize: "small",
            fontStyle: "italic",
          }}
        >
          {uploading && (
            <RotatingLines
              visible={true}
              height="32"
              width="32"
              strokeColor="black"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
          {uploadImageError && uploadImageError}
        </p>
        {formData.images.length > 0 &&
          formData.images.map((url, index) => (
            <div key={url} className="uploaded-images">
              <img
                src={url}
                style={{
                  width: "5rem",
                  height: "5rem",
                  objectFit: "contain",
                  borderRadius: "6px",
                }}
                alt="product image"
              />
              <p
                type="button"
                onClick={() => handleRemoveImageUploaded(index)}
                style={{
                  padding: "0.7rem",
                  borderRadius: "6px",
                  color: "red",
                  cursor: "pointer",
                }}
              >
                DELETE
              </p>
            </div>
          ))}
        <button
          disabled={loading || uploading}
          className="add-product-form-button"
        >
          {loading ? "Updating..." : "Update Product"}
        </button>
        {error && (
          <p
            style={{
              color: "red",
              fontSize: "small",
              fontStyle: "italic",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
