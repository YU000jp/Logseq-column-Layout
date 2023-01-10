import '@logseq/libs';

//https://github.com/hkgnp/logseq-localassets-plugin
interface Files {
  name: string;
  type: string;
  path?: string;
}

function checkAsset(assetOrNonAsset: string, name: string, path: string) {
  if (assetOrNonAsset === "asset") {
    return `.../assets/${name}`;
  } else {
    return path;
  }
}

export default async function embedHelper(
  uuid: string,
  assetOrNonAsset: string
) {
  const fileInput = document.createElement("input");
  const btn = document.createElement("button");

  fileInput.type = "file";
  fileInput.multiple = true;
  fileInput.accept="*";
  fileInput.onchange = async (e) => {

    const files = (e.target as HTMLInputElement).files;
    if (files) {
      for (let file of files) {
        const { type, path, name }: Files = file;
        let insert;
        if (
          type === "application/pdf" ||
          type === "image/png" ||
          type === "image/tiff" ||
          type === "image/bmp" ||
          type === "image/gif" ||
          type === "image/jpeg" ||
          type === "image/svg+xml"
        ) {
          await logseq.Editor.insertBlock(uuid, `![${name}](file:///${checkAsset(assetOrNonAsset, name, path as string)})`);
        } else if (type === "audio/mpeg") {
          await logseq.Editor.insertBlock(uuid, `![🎵 ${name}](file:///${path})`);
        } else if (
          type === "video/mpeg" ||
          type === "video/mp4" ||
          type === "video/webm"
        ) {
          await logseq.Editor.insertBlock(uuid, `![🎥 ${name}](file:///${path})`);
        } else {
          await logseq.Editor.insertBlock(uuid, `[📄 ${name}](${checkAsset(assetOrNonAsset, name, path as string)})`);
        }
        await logseq.Editor.exitEditingMode();
      }
    }

  };
  btn.addEventListener("click", () => {
    fileInput.click();
  });
  btn.click();
}
