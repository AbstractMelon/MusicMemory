module.exports = {
  apps : [{
    name: 'music-memory',
    script: 'server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3016
    }
  }]
};
