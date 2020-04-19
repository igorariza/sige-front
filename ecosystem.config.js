module.exports = {
  apps: [
    {
      name: "sige-edu",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    production: {
      user: "ec2-user",
      host: "ec2-54-172-208-185.compute-1.amazonaws.com",
      key: "~/.ssh/sige.pem",
      ref: "origin/master",
      repo: "git@github.com:igorariza/sige-front.git",
      path: "/home/ec2-user/sige",
      "post-deploy":
        "npm install && npm run build && sudo cp -r build/* /var/www/sige-edu.com/"
    }
  }
};