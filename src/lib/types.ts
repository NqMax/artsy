export type category = {
  name: string;
  publicFolder: string;
  pieces: {
    name: string;
    artist: string;
    price: number;
  }[];
};

export type artInventory = category[];
