export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  display_category?: string;
  video_url: string;
  thumbnail_url: string;
  role: string;
  credits: string;
  year?: string;
  created_at: string;
}

export type Category = "ALL" | "Content" | "Sound";
