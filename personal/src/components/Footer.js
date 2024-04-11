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
        link="https://www.linkedin.com/in/paulboldyrev/overlay/1712003670048/single-media-viewer/?profileId=ACoAACgIKOgBO0hWfzxjPy8Mc77v737Wndm3Bwg"
      />
    </div>
  );
}

export default Footer;
