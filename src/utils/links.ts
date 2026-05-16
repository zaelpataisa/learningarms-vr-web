
export const external_links = (link_name: string) => {
  const url = link_name

  switch (url) {
    case "website_path":
      return "https://learningarms-vr.vercel.app"
      break;

    case "github_profile":
      return "https://github.com/zaelpataisa"
      break;

    case "github_project":
      return "https://github.com/tu-usuario/learnarms-vr"
      break;

    case "video_demo_link":
      return "https://www.youtube.com/watch?v=PS7XskfmW84"
      break;

    case "video_demo_play":
      return "https://www.youtube.com/embed/PS7XskfmW84"
      break;

    default:
      return "#"
      break;
  }

}

