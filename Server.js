const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Broadcast the message to all clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const session = require('express-session');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Session setup
app.use(session({
  secret: 'vacu_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// CIRQL AOT Blocks
const AOT_MAP = {
  'sector-breach': {
    name: 'VioletBreachProtocol',
    commands: [
      "echo 'Intrusion confirmed at SECTOR 7-B'",
      "deployArtillery('VioletRain', 'Line-A', 5)",
      "alertAllies('Kaeris', 'Danisha')",
      "activateScentShield('Cherry-Caramel')"
    ]
  },
  'noctoria-signal': {
    name: 'NoctoriaSilentSignal',
    commands: [
      "echo 'Noctoria has glanced through the veil'",
      "stabilizeTimeflow()",
      "redirectMercupial()"
    ]
  },
  'stasis-emergency': {
    name: 'EmergencyStasisCall',
    commands: [
      "lockdownZones(['Zeta-Fog', 'Crimspire-Dome'])",
      "engageChronoLoop(duration='88 sec')",
      "sendAlert('Fadora Cashew')"
    ]
  }
};

// Handle WebSocket connections
wss.on('connection', (ws, req) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    const trigger = message.toString().trim();
    const block = AOT_MAP[trigger];

    if (block) {
      const response = {
        event: trigger,
        blockName: block.name,
        commands: block.commands
      };

      // Broadcast to all clients
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(response));
        }
      });

      // Log to file
      const logEntry = `${new Date().toISOString()} - Trigger: ${trigger}, Block: ${block.name}\n`;
      fs.appendFile('command_logs.txt', logEntry, (err) => {
        if (err) console.error('Error logging command:', err);
      });
    } else {
      ws.send(JSON.stringify({ error: `No AOT block found for trigger: ${trigger}` }));
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

