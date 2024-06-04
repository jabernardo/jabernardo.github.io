import { Cloudinary, type CloudinaryImage } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'sudoaldrich',
  }
});

export const getCloudinaryImage: CloudinaryImage = (publicId: string) => {
  return cld.image(publicId);
};

