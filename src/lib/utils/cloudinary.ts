import { Cloudinary, type CloudinaryImage } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'sudoaldrich',
  }
});

export const getCloudinaryImage = (publicId: string): CloudinaryImage => {
  return cld.image(publicId).quality("auto:eco");
};

