import "../styles/Banner.css";

function Banner({ text, type = "primary" }) {
  return <div className={`banner banner-${type}`}>{text}</div>;
}

export default Banner;
