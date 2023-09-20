import React from 'react';

function ItemThumbnail({ thumbnail,type }) {
    return (
        <div className='card shadow'>
            <div className='card-body'>
            {type?.startsWith("image") ? (
            <>
              {" "}
              <img
                className="img-fluid rounded w-100"
                style={{ height: "500px", width: "100%" }}
                src={thumbnail}
           
              />{" "}
            </>
          ) : type?.startsWith("video") ? (
            <>
              <video
                className="VideoInput_video"
                width="100%"
                muted={true}
                loop
                autoPlay={true}
                controls={true}
                src={thumbnail}
                style={{ height: "500px", width: "100%" }}
              />
            </>
          ) : type == "true" ? (
            <>
              {" "}
              <img
                className="img-fluid rounded w-100"
                style={{ height: "500px", width: "100%" }}
                src={thumbnail}
                alt="..."
              />{" "}

            </>
          )
            :
            <>
              <audio controls={true} loop muted={true}   style={{ height: "500px", width: "100%" }}
                autoPlay={true} className="audio-element" src={thumbnail} />
            </>

          }
                {/* <img className='img-fluid rounded w-100' src={thumbnail} alt='...' /> */}
            </div>
        </div>
    );
}

export default ItemThumbnail;
