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
      host : ['18.230.100.197'],
      key: "~/.ssh/id_rsa",
      ref  : 'origin/master',
      repo : 'git@github.com:igorariza/sige-front.git',
      path : '/var/www/sige-edu.com',
      "pre-setup": "sudo rm -rf /var/www/sige-edu.com/",
      "post-deploy":
        "npm install && npm run build && sudo cp -r build/* /var/www/sige-edu.com/"
    }
  }
};
