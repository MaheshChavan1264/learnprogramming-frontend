const CourseCard = ({ courseData, searchData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {courseData.map((curElem) => {
          const { id, coursName, provider, parentSubject, videoUrl, imageUrl } =
            curElem;
          function CheckVideo(url) {
            if (url === "") {
              return false;
            } else {
              return true;
            }
          }
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {provider}</span>
                    <h2 className="card-title"> {coursName} </h2>
                    <span className="card-description subtle">
                      {parentSubject}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  {CheckVideo(videoUrl) === true ? (
                    <iframe
                      width="420"
                      height="345"
                      src={videoUrl}
                      title="video"
                    ></iframe>
                  ) : (
                    <img width="420" height="345" src={imageUrl} alt="image1" />
                  )}
                  <span className="card-tag  subtle">Learn Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default CourseCard;
