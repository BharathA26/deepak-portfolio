export type GalleryItem = {
  id: string;
  src: string; // e.g., "/assets/Images/Poster-01.jpg"
  alt: string;
  caption?: string;
  tags?: string[]; // categories like 'poster', 'logo', 'mockup'
};

export const GALLERY: GalleryItem[] = [
  { id: 'poster-1', src: '/assets/Images/Poster-01.jpg', alt: 'Poster design 01', caption: 'Poster 01', tags: ['poster'] },
  { id: 'poster-2', src: '/assets/Images/Poster-01-03-03.jpg', alt: 'Poster design 02', caption: 'Poster 02', tags: ['poster'] },
  { id: 'poster-3', src: '/assets/Images/03-01.jpg', alt: 'Poster layout 03', caption: 'Poster 03', tags: ['poster'] },
  { id: 'poster-4', src: '/assets/Images/03-01-01.jpg', alt: 'Poster layout 04', caption: 'Poster 04', tags: ['poster'] },
  { id: 'branding-aviya', src: '/assets/Images/Aviya Jewellers.jpg', alt: 'Branding set for Aviya Jewellers', caption: 'Aviya Jewellers Branding', tags: ['branding', 'logo'] },
  { id: 'branding-way-1', src: '/assets/Images/Way Exports-01.jpg', alt: 'Way Exports branding 01', caption: 'Way Exports 01', tags: ['branding', 'logo'] },
  { id: 'branding-way-2', src: '/assets/Images/Way Exports-02.jpg', alt: 'Way Exports branding 02', caption: 'Way Exports 02', tags: ['branding', 'logo'] },
  { id: 'packaging-tea', src: '/assets/Images/Tea Mockup.jpg', alt: 'Tea packaging mockup', caption: 'Tea Packaging', tags: ['mockup', 'packaging'] },
  { id: 'product-key', src: '/assets/Images/Key Render.jpg', alt: '3D key render', caption: '3D Key Render', tags: ['product', '3d'] },
  { id: 'mockup-greens-1', src: '/assets/Images/Green-01-1.jpg', alt: 'Green brand mockup 01', caption: 'Green Mockup 01', tags: ['mockup', 'branding'] },
  { id: 'mockup-greens-2', src: '/assets/Images/Green-02-2.jpg', alt: 'Green brand mockup 02', caption: 'Green Mockup 02', tags: ['mockup', 'branding'] },
  { id: 'mockup-greens-3', src: '/assets/Images/Green-03-3.jpg', alt: 'Green brand mockup 03', caption: 'Green Mockup 03', tags: ['mockup', 'branding'] },
  { id: 'chai', src: '/assets/Images/Chai.jpg', alt: 'Chai branding', caption: 'Chai Branding', tags: ['branding'] },
  { id: 'retail-1', src: '/assets/Images/1.jpg', alt: 'Retail creative', caption: 'Retail Creative', tags: ['creative'] },
  { id: 'mockup-1', src: '/assets/Images/Mockup-01.jpg', alt: 'Product mockup 01', caption: 'Mockup 01', tags: ['mockup'] },
  { id: 'poster-5', src: '/assets/Images/04-01.jpg', alt: 'Poster design 05', caption: 'Poster 05', tags: ['poster'] },
  { id: 'poster-6', src: '/assets/Images/05-01.jpg', alt: 'Poster design 06', caption: 'Poster 06', tags: ['poster'] },
  { id: 'poster-7', src: '/assets/Images/06-01.jpg', alt: 'Poster design 07', caption: 'Poster 07', tags: ['poster'] },
  { id: 'poster-8', src: '/assets/Images/06-01-01.jpg', alt: 'Poster design 08', caption: 'Poster 08', tags: ['poster'] },
  { id: 'poster-9', src: '/assets/Images/07-01.jpg', alt: 'Poster design 09', caption: 'Poster 09', tags: ['poster'] },
  { id: 'poster-10', src: '/assets/Images/08-01.jpg', alt: 'Poster design 10', caption: 'Poster 10', tags: ['poster'] },
  { id: 'poster-11', src: '/assets/Images/09-01.jpg', alt: 'Poster design 11', caption: 'Poster 11', tags: ['poster'] },
  { id: 'poster-12', src: '/assets/Images/09-01-01.jpg', alt: 'Poster design 12', caption: 'Poster 12', tags: ['poster'] },
  { id: 'poster-13', src: '/assets/Images/02-01.jpg', alt: 'Poster design 13', caption: 'Poster 13', tags: ['poster'] },
  { id: 'poster-14', src: '/assets/Images/01-01.jpg', alt: 'Poster design 14', caption: 'Poster 14', tags: ['poster'] },
  { id: 'poster-15', src: '/assets/Images/01-01-01.jpg', alt: 'Poster design 15', caption: 'Poster 15', tags: ['poster'] },
];

export const GALLERY_TAGS = ['all', 'poster', 'branding', 'logo', 'mockup', 'packaging'] as const;
