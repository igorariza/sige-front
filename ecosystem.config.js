module.exports = {
  apps : [
    {
     name: "sige-edu.com",
     env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
   ],
  deploy : {
    production : {
      user : 'ec2-user',
      host : ['ec2-52-67-246-35.sa-east-1.compute.amazonaws.com'],
      key: "~/.ssh/sige.pem",
      ref  : 'origin/master',
      repo : 'git@github.com:igorariza/sige-front.git',
      path : '/var/www/sige-edu.com',
      "pre-setup": "npm cache clean --force && rm -rf /var/www/sige-edu.com/",
      "post-deploy":
        "npm install && npm run build && sudo cp -r build/* /var/www/sige-edu.com/"
    }
  }
};
