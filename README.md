# Stock Portfolio Dashboard 📈

A full-stack web app for tracking a stock portfolio: holdings, positions, and P&L, all in one dashboard. Building yet another to-do app felt like a waste of a weekend, so I picked something with an actual UI to wrestle with.

It pulls your holdings from MongoDB, shows them in a proper table, and throws in a bar chart so you can see how things are moving at a glance.

## What it does

- **Holdings page**: every stock you're "holding," with quantity, average cost, current price, and P&L. Color-coded, green means you're winning, red means you're not.
- **Live-ish chart**, a bar graph of stock prices sitting next to the table, built with Chart.js.
- **Positions tracking** in a separate view, same green/red logic.
- **Portfolio summary** showing total investment, current value, and overall P&L at a glance.

## Stack

Nothing exotic here:

- **Frontend:** React (functional components and hooks, no class component nonsense)
- **Backend:** Express
- **Database:** MongoDB with Mongoose
- **HTTP client:** Axios
- **Charts:** Chart.js via a wrapper component

## Project structure

```
├── backend/     # Express server, routes, and Mongoose models
├── frontend/    # React app
└── README.md
```

## Getting it running

You'll need Node installed and a MongoDB instance, either local or an Atlas cluster, doesn't matter which.

### 1. Clone it

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=3002
```

Then fire it up:

```bash
node index.js
```

You should see `Server is running on port 3002` in the terminal. If you don't, check your Mongo URI first. That's what breaks nine times out of ten.

### 3. Frontend setup

```bash
cd frontend
npm install
npm start
```

Opens at `http://localhost:3000` by default and talks to the backend on port 3002.

## Roadmap

- [ ] Add authentication so this isn't just one giant shared account
- [ ] Deploy it somewhere so I stop saying "it works on my machine"
- [ ] Add tests, because right now there aren't any

## Why I built this

Mostly to get comfortable with the full loop: React on the front, Express and MongoDB on the back, all talking to each other without a tutorial holding my hand the whole way. A holdings table looks simple until you have to handle P&L math, color-coded gains and losses, and keeping the table and the chart in sync, so it turned out to be a decent exercise.

If you spot something broken or dumb in the code, open an issue. I'd rather know.

## License

MIT. Do what you want with it.