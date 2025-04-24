# CIRQL Developer Manual (VACU Edition)

Welcome to the official CIRQL Developer Manual, designed for the Violet Aura Creations Universe (VACU). This guide will help you understand and harness the power of CIRQL, the command-iterative reactive query language that fuels real-time VACU operations.

---

## 🌌 1. Introduction to CIRQL

**CIRQL** is a command-driven language built for reactive scripting, tactical orchestration, and live control of VACU systems. Whether you’re programming sentient terminals or choreographing aura-based interfaces, CIRQL delivers.

**Tagline**: *“CIRQL — Where Commands Breathe and Code Listens.”*

---

## ⚙️ 2. Getting Started

### Installation
```bash
npm install -g cirql-cli
```

### Launch the VACU CLI
```bash
cirql
```

You’ll see the VACU-styled terminal with glowing glyphs and colorized aura bars.

---

## 🧠 3. Core Syntax

### Basic Command Format:
```cirql
@event => [action]
```

### Example:
```cirql
@startup => log "VACU Terminal Online"
```

### Macros
```cirql
#macro burst => emit sparkwave
```

### Inline Conditions
```cirql
@input if user == "admin" => unlock "Codex Alpha"
```

---

## 🎮 4. Events & Reactivity

### Event Hooks:
- `@startup`
- `@input`
- `@message`
- `@signal`
- `@interval(seconds)`

### Randomness:
```cirql
@interval(10) => roll 1..100 then log result
```

---

## 🧩 5. Advanced Constructs

### Chained Triggers
```cirql
@interval(5) => emit "pulse" => update HUD
```

### Dynamic Variables
```cirql
set auraLevel = 5
```

---

## 🔌 6. Networking & Multi-Agent Mode

CIRQL supports real-time multi-agent messaging:
```cirql
@message:agent42 => respond "Signal received."
```

Use the built-in WebSocket system for network-wide ops:
```cirql
connect "ws://vacu.net/socket"
```

---

## 🖥️ 7. VACU CLI Features

- Live syntax highlighting
- Auto-completion with Tab
- Interactive glyph input
- Multi-line script editing

---

## 🎨 8. Terminal Visuals

VACU Terminal is built with `xterm.js`, styled with glowing symbols and aura gradients.

### CLI Sample:
```
╔══════════════════════╗
║ 🜂  VACU CIRQL-CORE  🜄 ║
╚══════════════════════╝

@startup => glow "Welcome to the Void"
```

---

## 🔧 9. CIRQL AOT Interpreter Backend (Python)

- Python interpreter for CIRQL with Ahead-Of-Time compilation support.
- Includes WebSocket server for frontend integration.
- Stores session logs in MongoDB.

---

## 🌐 10. Web Frontend (Node.js + WebSocket)

- React + xterm.js frontend
- Styled with VACU themes (neon gradients, spire-glyphs)
- WebSocket backend integration

---

## 🧪 11. Examples

```cirql
@input => if command == "ignite" => emit flame
@interval(3) => log "System heartbeat"
```

---

## 📚 12. Glossary

- **Burst**: A reactive macro call.
- **Pulse**: A broadcast signal.
- **AuraLevel**: A context-sensitive scalar.
- **Emit**: Sends a signal or trigger.

---

## 🛠️ 13. Developer Codex Additions

Build terminals that:
- Visualize CIRQL execution paths
- Display agent interaction maps
- Include developer overlays

Future: CIRQL-IDE with integrated 3D hologlyph scripting zones.

---

## 🚀 Final Notes

CIRQL is meant to be alive — as vibrant and reactive as the universe it commands.
Continue building and expanding, and let every glyph you write ripple through the Void.

> *“In command, there is creation. In pulse, there is presence.” — VACU Codex*

