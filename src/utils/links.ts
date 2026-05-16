
export const external_links = (link_name: string) => {
  const url = link_name

  switch (url) {
    case "website_path":
      return "https://learningarms-vr-web.vercel.app"
      break;

    case "github_profile":
      return "https://github.com/zaelpataisa"
      break;

    case "github_project":
      return "https://github.com/zaelpataisa/learningarms-vr-web/releases/tag/v1.0"
      break;

    case "video_demo_link":
      return "https://www.youtube.com/shorts/uS6cHjPppiw"
      break;

    case "video_demo_play":
      return "https://youtube.com/embed/uS6cHjPppiw"
      break;

    case "sidequest_link":
      return "#"
      break;

    case "itchio_link":
      return "https://zaelaisa.itch.io/learningarms-vr"
      break;

    case "license_link":
      return "https://github.com/zaelpataisa/learningarms-vr-web/blob/main/LICENSE"
      break;

    default:
      return "#"
      break;
  }

}

