import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCover } from "../../services/cover/action";
import "./style.scss";

const Cover = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cover.coverData);
  useEffect(() => {
    dispatch(fetchCover());
  }, []);

  console.log(data);

  return (
    <div className="cover">
      {/* <ImageCover picture={data.coverPath} /> */}
      <div className="imageBox">
        <div
          className="image"
          style={{
            backgroundImage: `url(${data.coverPath})`
          }}
        />
      </div>
      <div className="infoBox">
        <div className="imgBox">
          <img src={data.logo} />
        </div>
        <div className="descriptionBox">
          <h2>{data.title}</h2>

          <div className="address">{data.address}</div>
        </div>
      </div>
      fhvbshvbs
    </div>
  );
};
export default Cover;
