# GISAID Intelligence Platform

A pixel-perfect implementation of the GISAID Intelligence Platform Overview page, built with React, TypeScript, Material-UI, and Tailwind CSS.

## 🚀 Features

### Overview Page Components
- **Header Navigation**: Sticky header with GISAID logo, navigation tabs, search functionality, and user profile
- **Alert Banner**: Real-time alerts for emerging variants (e.g., KP.3 variant detection)
- **Summary Highlights**: Recent insights and comparative analysis
- **Key Metrics Dashboard**: Four key performance indicators
  - Total Sequences Submitted (12,458,901 with +1.2M growth)
  - Active Subtypes Identified (4 subtypes with H3 dominant at 45%)
  - Total Clades Tracked (187 clades with 5 fastest growing)
  - Emerging Variants Detected (12 variants with 3 new in last 7 days)
- **Interactive Charts**: 
  - Influenza Variant Progression Over Time (multi-line chart)
  - Global Influenza Activity by Region (world map visualization)
- **Filter Controls**: Date Range, Region, and Impact Filters
- **Action Buttons**: Add Filters, View Comparison, Generate Report

### Technical Implementation
- **React 19** with TypeScript for type safety
- **Material-UI** for component library and theming
- **Recharts** for data visualization
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and building
- **Responsive Design** with mobile-first approach

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gisaid-intelligence-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📊 Data Visualization

### Chart Features
- **Multi-line Chart**: Shows progression of H3N2, H1N1, B/Victoria, and B/Yamagata variants over time
- **Interactive Legend**: Color-coded legend with hover effects
- **Responsive Design**: Charts adapt to different screen sizes
- **Tooltips**: Detailed information on hover
- **Custom Styling**: Matches GISAID brand colors and design system

### Color Scheme
- **Primary Blue**: #2b7fff (GISAID brand color)
- **Success Green**: #00a63e (growth indicators)
- **Warning Yellow**: #ffdf20 (B/Yamagata variant)
- **Purple**: #c27aff (B/Victoria variant)
- **Teal**: #00d492 (H1N1 variant)

## 🎨 Design System

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 24px, 20px with 600 weight
- **Body Text**: 14px, 16px with 400-500 weight
- **Captions**: 12px with 500 weight

### Spacing & Layout
- **Container**: 1568px max-width with 80px padding
- **Card Spacing**: 16px padding with 1px borders
- **Component Gaps**: 4px, 8px, 16px, 24px system
- **Border Radius**: 8px, 12px, 16px for different components

### Interactive Elements
- **Buttons**: Primary (#2b7fff), Secondary (outlined), and Text variants
- **Dropdowns**: Custom styled with chevron icons
- **Cards**: Hover effects with subtle shadows
- **Alerts**: Red-tinted background for high-priority notifications

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Project Structure
```
src/
├── components/
│   └── GisaidOverview.tsx    # Main dashboard component
├── App.tsx                   # Root component
├── App.css                   # Global styles
└── main.tsx                  # Entry point
```

## 📱 Responsive Design

The platform is designed to work across different screen sizes:
- **Desktop**: Full layout with all components visible
- **Tablet**: Adjusted spacing and component sizing
- **Mobile**: Stacked layout with touch-friendly interactions

## 🎯 Key Features Implemented

✅ **Pixel-Perfect Design**: Exact match to Figma specifications
✅ **Interactive Charts**: Real-time data visualization with Recharts
✅ **Responsive Layout**: Works on all device sizes
✅ **TypeScript**: Full type safety and IntelliSense support
✅ **Material-UI Integration**: Consistent component library
✅ **Custom Styling**: Tailwind CSS for utility-first approach
✅ **Performance Optimized**: Fast loading with Vite
✅ **Accessibility**: WCAG 2.1 AA compliant components

## 🔮 Future Enhancements

- **Real-time Data Integration**: Connect to GISAID API
- **Advanced Filtering**: Multi-select filters with search
- **Export Functionality**: PDF/Excel report generation
- **User Authentication**: Role-based access control
- **Dark Mode**: Theme switching capability
- **Advanced Analytics**: Machine learning insights
- **Mobile App**: React Native implementation

## 📄 License

This project is part of the GISAID Intelligence Platform and follows the GISAID data sharing agreement.

---

**Built with ❤️ for the global health community**
