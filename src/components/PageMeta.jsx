import { useEffect } from 'react';

export default function PageMeta({ title, description }) {
  useEffect(() => {
    const defaultTitle = 'Abdulkerim Jemal — Software Engineer & Full-Stack Developer';
    const defaultDescription = 'Software Engineering graduate and full-stack developer focused on building practical web applications and backend systems with modern JavaScript technologies.';
    
    document.title = title ? `${title} | Abdulkerim Jemal` : defaultTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description || defaultDescription;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
}
