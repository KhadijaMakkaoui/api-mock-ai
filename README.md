🎉 **api-mock-ai**
==================

> A lightweight Node.js package that generates **mock AI responses** using predefined logic --- perfect for testing, prototyping, and building apps **without needing a real AI API**.

* * * * *

📦 **Badges**
-------------

* * * * *

📚 **Table of Contents**
------------------------

-   ✨ Features

-   📦 Installation

-   ⚙️ Environment Variables

-   🚀 Usage

    -   Basic Example

    -   Mock API Server Mode

-   📁 Project Structure

-   🧪 Running Tests

-   💡 How It Works

-   📌 Roadmap

-   🤝 Contributing

-   📄 License

* * * * *

✨ **Features**
--------------

-   ⚡ Generate mock AI responses instantly

-   🌐 Optional Express server to mock `/ai/generate` API endpoints

-   🔧 Zero external dependencies (except Express if server mode is used)

-   🔑 Optional OpenAI key support (fallback to mock mode when missing)

-   🧪 Perfect for frontend integration tests and prototypes

* * * * *

📦 **Installation**
-------------------

`npm install api-mock-ai`

or

`yarn add api-mock-ai`

* * * * *

⚙️ **Environment Variables**
----------------------------

To enable **real OpenAI integration**, set:

`OPENAI_API_KEY=your_key_here`

If no key is provided, the library **automatically switches to mock mode**.

* * * * *

🚀 **Usage**
------------

### ✅ **Basic Example**

<code> import { generateAIResponse } from "api-mock-ai";<br>
const run = async () => {<br>
  const response = await generateAIResponse("Hello world!");<br>
  console.log(response);<br>
};<br>
run();</code>

**Output example:**

`🤖 Mock AI Response: You said "Hello world!" --- here is your mock reply.`

* * * * *

🖥️ **Mock API Server Mode**
----------------------------

You can also run a **local Express server** that exposes:

`POST /ai/generate`

### Example:

`import { startMockAIServer } from "api-mock-ai";

startMockAIServer(3000);`

You will see:

`🚀 Mock AI Server running on http://localhost:3000`

### Test the API:

`curl -X POST http://localhost:3000/ai/generate\
  -H "Content-Type: application/json"\
  -d '{"prompt":"Hello!"}'`

* * * * *

📁 **Project Structure**
------------------------

<code>api-mock-ai/<br>
├── src/<br>
│   ├── ai-generator.js  # generateAIResponse logic<br>
(mock + real mode)<br>
│   ├── router-builder.js      # Express routes<br>
│   ├── server.js              # startMockAIServer function<br>
├── package.json<br>
├── README.md<br>
└── test.js                    # example usage</code>

* * * * *

💡 **How It Works**
-------------------

### 1️⃣ If OPENAI_API_KEY exists

→ The function uses the official OpenAI client to generate text.

### 2️⃣ If no key is found

→ It falls back to a **safe, predictable mock response**.

Example fallback:

`🤖 Mock AI Response: <your prompt> --- (This is a mock response.)`

Perfect for:

-   UI testing

-   Integrations

-   Frontend apps without backend

-   Offline development

* * * * *

🧪 **Running Tests**
--------------------

`node test.js`

* * * * *

📌 **Roadmap**
--------------

-   Add streaming responses

-   Add multiple mock modes (funny / serious / JSON / errors)

-   Add customizable templates

-   Add rate limiting to the mock server

-   Add TypeScript typings

* * * * *

🤝 **Contributing**
-------------------

Contributions are welcome!\
To contribute:

`git clone https://github.com/KhadijaMakkaoui/api-mock-ai`

`cd api-mock-ai`

`npm install`

Then submit a pull request 🚀
