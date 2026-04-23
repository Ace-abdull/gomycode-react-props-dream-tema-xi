# Dream XI - Football Team Project

A stunning FIFA-style dream XI lineup featuring football legends arranged in a 4-3-3 formation on a realistic stadium pitch.

## Features

- **Realistic FIFA-style player cards** with ratings, positions, and stats
- **Interactive pitch visualization** with proper football markings
- **Responsive design** that works on all devices
- **Accessibility-first** with proper ARIA labels and keyboard navigation
- **Performance optimized** with React.memo, useMemo, and lazy loading
- **SEO optimized** with structured data and meta tags
- **TypeScript** for type safety
- **Modern React patterns** with hooks and functional components

## Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **TanStack Router** - Modern routing solution
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **ESLint + Prettier** - Code quality and formatting

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── PlayerCard.tsx   # Individual player card component
│   ├── Pitch.tsx        # Football pitch with markings
│   ├── TeamApp.tsx      # Main team display component
│   └── DefaultErrorComponent.tsx
├── data/               # Static data and constants
│   └── players.ts      # Player data and types
├── routes/             # Route components
│   ├── __root.tsx      # Root layout and error handling
│   └── index.tsx       # Home page
├── assets/             # Static assets (images)
├── styles.css          # Global styles and Tailwind imports
└── App.tsx            # Main app component
```

## Development

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd football-team-project

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Performance Optimizations

- **React.memo** for component memoization
- **useMemo** for expensive calculations
- **Lazy loading** for images
- **Bundle optimization** with Vite
- **Tree shaking** for unused code removal

## Accessibility

- Semantic HTML with proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- High contrast support
- Focus management

## SEO

- Structured data (JSON-LD) for search engines
- Open Graph meta tags for social sharing
- Twitter Card support
- Proper meta descriptions and titles
- Sitemap-friendly structure

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Acknowledgments

- Player images sourced from various football databases
- Inspired by FIFA Ultimate Team
- Built with modern web technologies
