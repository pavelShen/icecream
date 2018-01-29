module.exports = {
  "env": {  
    "browser": true,  
    "node": true,  
    "commonjs": true  
  },
  "extends": [
    "airbnb"
  ],
  "rules":{
    "semi": [2, "never"],
    "arrow-body-style": ["error", "always"],
    "react/prefer-stateless-function": 0
  }
}