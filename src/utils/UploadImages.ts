// utils/uploadToImgbb.ts
export async function uploadToImgbb(file: File): Promise<string> {
  const apiKey = "2696fe7faa1168ada1e00b4cdb7bd8ea"; // replace this with your actual imgbb API key
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || "Image upload failed");
  }

  return data.data.url;
}
