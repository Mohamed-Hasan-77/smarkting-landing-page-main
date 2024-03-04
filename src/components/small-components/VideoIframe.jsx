import { useLanguage } from "../../contexts/LanguageContext";
function VideoIframe() {
  const { language } = useLanguage();

  return (
    <>
      {language && language === "ar" ? (
        <iframe
          src={
            "https://player.vimeo.com/video/916429676?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title={"فيديو لبرنامج اس ماركتينج"}
          loading="lazy"
        ></iframe>
      ) : (
        <iframe
          src={
            "https://player.vimeo.com/video/916428109?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title={"English Software Smarketing"}
          // loading="lazy"
        ></iframe>
      )}
    </>
  );
}

export default VideoIframe;
