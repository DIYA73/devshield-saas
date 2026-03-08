
DevShield

🛡️ DevShield is a cybersecurity SaaS platform that monitors and visualizes API attacks in real time.
It helps developers protect their APIs with attack detection, rate limiting, and global threat monitoring.

⸻

🚀 Features
	•	🔑 API Key Protection
	•	🛑 Attack Detection
	•	⚡ Rate Limiting
	•	🌍 Real-time Global Attack Visualization
	•	📊 Live API Usage Monitoring
	•	📜 Attack Logs Dashboard

⸻

🧰 Tech Stack

Frontend
	•	React
	•	TypeScript
	•	TailwindCSS
	•	Vite

Backend
	•	Node.js
	•	Express
	•	MongoDB
	•	Socket.io

Security
	•	API Key Authentication
	•	Rate Limiting
	•	Attack Detection Middleware

⸻

## 📸 Screenshots

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Global Attack Map
![Attack Map](screenshots/attack-map.png)

### API Logs
![API Logs](screenshots/api-logs.png)


⸻

⚙️ Installation

Clone the repository:

git clone https://github.com/DIYA73/devshield-saas.git
cd devshield-saas

Install dependencies:

npm install

Run backend:

cd backend
npm run dev

Run frontend:

cd devshield-frontend
npm run dev


⸻

📡 API Security Example

DevShield protects APIs using middleware:

app.use("/api", apiKeyAuth);
app.use("/api", rateLimitMiddleware);
app.use("/api", attackDetector);


⸻

📊 Example Attack Log

Time	IP	Country	Attack
07:41	91.24.x.x	Iran	SQL Injection
07:42	31.12.x.x	China	Bot Attack
07:43	72.21.x.x	Russia	Brute Force
07:44	81.11.x.x	USA	DDoS Probe


⸻

🌐 Future Improvements
	•	AI threat detection
	•	Advanced attack analytics
	•	Cloud deployment
	•	Real-time notifications

⸻

👩‍💻 Author

Diya Taib Ismahil

Computer Science | Cybersecurity | Full Stack Development

GitHub:
https://github.com/DIYA73

⸻