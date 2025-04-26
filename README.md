# AI Safety Incident Dashboard

A modern, interactive dashboard for tracking and managing AI safety incidents across your organization. Built with React, TypeScript, and Tailwind CSS.

## Features

- 📊 Real-time incident tracking and management
- 🔍 Filter incidents by severity (Low, Medium, High)
- 🔄 Sort incidents by date (newest/oldest)
- ✨ Interactive incident details with expandable views
- 📝 New incident reporting with form validation
- 📱 Fully responsive design for all devices
- 🎨 Clean, modern UI with intuitive controls

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/         # React components
│   ├── Dashboard.tsx  # Main dashboard component
│   ├── IncidentForm.tsx
│   ├── IncidentList.tsx
│   ├── IncidentItem.tsx
│   ├── FilterControls.tsx
│   └── SeverityBadge.tsx
├── data/
│   └── initialData.ts    # Sample incident data
├── types/
│   └── index.ts       # TypeScript interfaces
└── App.tsx            # Root component
```

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React-Icons

## Features in Detail

### Incident Management
- View all incidents in a clean, card-based layout
- Expand/collapse incident details
- Color-coded severity indicators
- Formatted timestamps

### Filtering and Sorting
- Filter by severity level (All, Low, Medium, High)
- Sort by date (newest or oldest first)
- Real-time updates as filters change

### New Incident Reporting
- Expandable form interface
- Input validation
- Severity selection with visual indicators
- Automatic timestamp generation

### Responsive Design
- Optimized for mobile, tablet, and desktop
- Flexible layout using CSS Grid and Flexbox
- Consistent spacing and typography

## 📸 Screenshots

### Dashboard View
![Dashboard Screenshot](./screenshots/dashboard.png)

### Add Incident Form
![Add Incident Screenshot](./screenshots/add-incident.png)
