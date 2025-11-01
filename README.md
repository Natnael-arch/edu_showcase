# EduFund Showcase

A demo version of the EduFund platform built for hackathon showcase purposes. This is a standalone frontend application that uses mock data to demonstrate the platform's features without requiring backend services or blockchain connections.

## Features Demonstrated

- 🎓 **Student Quest Browsing**: Browse available learning quests with difficulty levels and rewards
- 💰 **Quest Completion**: Complete quests and claim mUSD rewards
- 📊 **Company Dashboard**: View funding pools, track student participation, and manage quest funding
- 🏆 **Rewards Tracking**: View your earned rewards and transaction history
- 👤 **User Profile**: See your completed quests and total earnings

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hot Toast

## Getting Started

### Installation

```bash
cd showcase
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to Vercel

1. Push this showcase folder to your GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Set the root directory to `showcase`
5. Deploy!

The `vercel.json` file is already configured for Vercel deployment.

## Demo Mode

This showcase runs entirely in demo mode:
- No wallet connection required
- All data is mock data
- No actual blockchain transactions
- All interactions are simulated

## Differences from Main Project

- No wallet integration (Wagmi/RainbowKit)
- No API calls to backend
- Mock data instead of real database
- Simplified authentication (demo mode)
- No actual blockchain interactions

## Showcase Pages

- `/` - Home page with quest listings
- `/quest/:id` - Quest details and completion
- `/profile` - User profile and stats
- `/rewards` - Rewards history
- `/company/login` - Company login (demo)
- `/company/dashboard` - Company dashboard with pools

## Notes

This is a demonstration version. For the full functionality with blockchain integration, see the main project in the parent directory.

