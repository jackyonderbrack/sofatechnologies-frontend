import "./imageBox.css";
type ImageBoxProps = {
  imgsrc: string;
  heading: string;
  content: React.ReactNode;
};

const ImageBox: React.FC<ImageBoxProps> = ({ imgsrc, heading, content }) => {
  return (
    <div id="ImageBox">
      <img
        src={imgsrc}
        alt="Box image"
      />
      <h3>{heading}</h3>
      <div className="icon-box-divider" />
      <div className="icon-box-content">{content}</div>
    </div>
  );
};

export default ImageBox;
