import NextImage from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function resolveSrc(src) {
  if (typeof src !== "string" || !src.startsWith("/") || !basePath) {
    return src;
  }

  if (src.startsWith(`${basePath}/`) || src === basePath) {
    return src;
  }

  return `${basePath}${src}`;
}

export default function BasePathImage({ src, ...props }) {
  return <NextImage src={resolveSrc(src)} {...props} />;
}
