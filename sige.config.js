module.exports = { 
  apps: [{ 
    name: "sige", 
    script: "./sigeClient/index.js", 
    watch: true, 
    env: { 
      "NODE_ENV": "development", 
    }, 
    env_production: { 
     " NODE_ENV ":" production " 
    } 
  },
