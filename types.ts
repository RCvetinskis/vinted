export type Notification = {
  from: string;
  notification: string;
};
export type Route = {
  href: string | null; // URL path or null for components without href
  label: string | null; // Label or text of the route
  active: boolean | null; // Indicates if the route is currently active
  Component: React.ComponentType<any>; // React component type
};

export type FileWithRotation = {
  file: File;
  rotated: number;
};
