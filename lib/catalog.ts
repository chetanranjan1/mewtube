export const categories = [
  "All",
  "Kittens",
  "Funny Cats",
  "Cat Care",
  "Breed Profiles",
  "Rescue Stories",
  "Cute Cats",
  "ASMR",
  "Relaxing",
  "Live",
] as const;

export type Category = (typeof categories)[number];

export type Video = {
  id: string;
  title: string;
  channel: string;
  views: string;
  age: string;
  duration: string;
  thumbnail: string;
  avatar: string;
  tags: Category[];
  overlay?: "deep-sleep";
};

export type Short = {
  id: string;
  views: string;
  thumbnail: string;
  alt: string;
};

export const videos: Video[] = [
  {
    id: "playing",
    title: "Adorable Kittens Playing for the First Time! 😻",
    channel: "Kitty Kingdom",
    views: "2.4M views",
    age: "2 weeks ago",
    duration: "8:24",
    thumbnail: "/cats/playing.jpg",
    avatar: "/cats/playing.jpg",
    tags: ["Kittens", "Cute Cats"],
  },
  {
    id: "sleep",
    title: "Holding Our Purrs to Sleep 😴 | 1 Hour of Cats",
    channel: "Purrfect Vibes",
    views: "3.1M views",
    age: "1 month ago",
    duration: "1:00:00",
    thumbnail: "/cats/sleep.jpg",
    avatar: "/cats/sleep.jpg",
    tags: ["Relaxing", "ASMR"],
    overlay: "deep-sleep",
  },
  {
    id: "boxes",
    title: "Cats vs. Boxes: The Ultimate Compilation",
    channel: "Cat Comedy Club",
    views: "4.7M views",
    age: "3 weeks ago",
    duration: "6:17",
    thumbnail: "/cats/box.jpg",
    avatar: "/cats/box.jpg",
    tags: ["Funny Cats"],
  },
  {
    id: "birds",
    title: "Bird Watching for Cats | 10 Minutes of Nature",
    channel: "Nature for Cats",
    views: "1.8M views",
    age: "1 month ago",
    duration: "10:06",
    thumbnail: "/cats/window.jpg",
    avatar: "/cats/window.jpg",
    tags: ["Relaxing"],
  },
  {
    id: "rescue",
    title: "Rescue Kitten’s Amazing Transformation ❤️",
    channel: "The Dodo Cats",
    views: "5.2M views",
    age: "2 weeks ago",
    duration: "7:45",
    thumbnail: "/cats/rescue.jpg",
    avatar: "/cats/rescue.jpg",
    tags: ["Rescue Stories", "Kittens"],
  },
  {
    id: "groom",
    title: "How to Groom Your Cat (Without the Drama)",
    channel: "Cat Care 101",
    views: "1.1M views",
    age: "3 weeks ago",
    duration: "8:12",
    thumbnail: "/cats/groom.jpg",
    avatar: "/cats/groom.jpg",
    tags: ["Cat Care"],
  },
  {
    id: "meet",
    title: "Meet Our 5 New Rescue Kittens!",
    channel: "TinyKittens HQ",
    views: "2.8M views",
    age: "1 month ago",
    duration: "5:28",
    thumbnail: "/cats/kittens.jpg",
    avatar: "/cats/kittens.jpg",
    tags: ["Rescue Stories", "Kittens"],
  },
  {
    id: "laser",
    title: "Cats vs. Laser Pointers Never Gets Old!",
    channel: "Cally",
    views: "1.2M views",
    age: "4 weeks ago",
    duration: "4:31",
    thumbnail: "/cats/laser.jpg",
    avatar: "/cats/laser.jpg",
    tags: ["Funny Cats"],
  },
];

export const shorts: Short[] = [
  { id: "s1", views: "1.2M views", thumbnail: "/cats/short-1.jpg", alt: "Kitten reaching up" },
  { id: "s2", views: "2.4M views", thumbnail: "/cats/short-2.jpg", alt: "Cat peeking out of a box" },
  { id: "s3", views: "3.7M views", thumbnail: "/cats/short-3.jpg", alt: "Cat sitting in a box" },
  { id: "s4", views: "1.8M views", thumbnail: "/cats/short-4.jpg", alt: "Cat with its tongue out" },
  { id: "s5", views: "5.1M views", thumbnail: "/cats/short-5.jpg", alt: "Fluffy cat in costume" },
  { id: "s6", views: "4.3M views", thumbnail: "/cats/short-6.jpg", alt: "Cat watching a faucet" },
  { id: "s7", views: "2.6M views", thumbnail: "/cats/short-7.jpg", alt: "Cat close-up" },
  { id: "s8", views: "3.9M views", thumbnail: "/cats/short-8.jpg", alt: "Tabby cat portrait" },
];

export const mainNav = [
  "Home",
  "Shorts",
  "Subscriptions",
  "Library",
  "History",
  "Your videos",
  "Watch later",
  "Liked videos",
] as const;

export const exploreNav: { label: string; dot?: boolean }[] = [
  { label: "The Dodo Cats", dot: true },
  { label: "Kitty Kingdom" },
  { label: "Catology" },
];

export const channelNav: { label: string; dot?: boolean; flower?: boolean }[] = [
  { label: "Maru", dot: true, flower: true },
  { label: "JunKitchen", dot: true },
  { label: "Cole and Marmalade" },
  { label: "TinyKittens HQ" },
  { label: "Cat Man Chris" },
];
