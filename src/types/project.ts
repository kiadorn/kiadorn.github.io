export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  /**
   * Optional animated GIF to display on hover (if available)
   */
  gifUrl?: string;
  features: string[];
  contributions: string[];
  teamSize?: number;
  type: 'personal' | 'professional';
  technologies: string[];
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
}
