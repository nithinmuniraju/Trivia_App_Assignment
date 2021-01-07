### installing package
1. Run `npm install`

### DB congiguratios
- `.env` modify as required

### start server
- Run `npm start`

### If installed nodemon
- Run `npm run dev`

### File structure

├── readme.md
├── package.json
├── package-lock.json
├── app.js
├── .env
├── .gitignore
├── config
│   └── db.config.js
├── Controller                    
│   ├── 404.js          
│   ├── game.js         
│   └── home.js
├── models                    
│   ├── appDetailsSchems.js          
│   ├── index.js
├── public                    
│   ├── css          
│       └── style.css
├── Routes                    
│   ├── game.js          
│   ├── home.js
├── Services                    
│   └── gameService.js
├── utils                    
│   └── path.js
├── views
│   ├──404.ejs            
│   ├──app_details_form.ejs            
│   ├──history.ejs            
│   ├──home.ejs            
│   └── includes          
│       ├── end.ejs
│       ├── head.ejs
│       └── navigation.ejs
    