import "../styles/Footer.css";
import Button from "./Button";

function Footer() {
  return (
    <div className="mt-3 mt-sm-4 mt-md-5 d-flex flex-row gap-2 justify-content-center">
      <Button
        type="primary"
        icon="fa-brands fa-linkedin"
        text={"LinkedIn"}
        link="https://linkedin.com/in/paulboldyrev"
      />
      <Button
        type="primary"
        icon="fa-solid fa-file-lines"
        text={"Resume"}
        link="/resume.pdf"
      />
    </div>
  );
}

export default Footer;
