import { Cloudinary, type CloudinaryImage } from "@cloudinary/url-gen";
import { ResizeSimpleAction } from "@cloudinary/url-gen/actions/resize/ResizeSimpleAction";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'sudoaldrich',
  }
});

export const getCloudinaryImage = (publicId: string): CloudinaryImage => {
  return cld.image(publicId).quality("auto:eco").resize(new ResizeSimpleAction("fill", 248));
};

