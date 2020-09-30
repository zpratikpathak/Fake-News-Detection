# How it works
The ML model which is created in "Machine Learning Model" which is `final_model.sav` is imported here.
This model is connected using Azure Function and deployed on Azure using 'Visual Studio Code'.

This provides backend to our chrome extension.

# How to deploy 
For deployment purpose please refer to this article https://docs.microsoft.com/en-us/azure/azure-functions/functions-develop-vs

# API
After deployment, 'Visual Studio Code' will give you a HTTP API which you can use in `Chrome extension/popup.js`
