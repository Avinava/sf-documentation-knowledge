---
title: "LoginActivity Class"
domain: mobile-sdk
topic: loginactivity-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:24.901Z
estimatedTokens: 166
keywords: [LoginActivity, login, screen, workflow, worth, describing, because, explains, two, classes, activity, package, press, Menu, button, three, options, Clear, Cookies, Reload, Change, Server, launches]
---

> LoginActivity defines the login screen. The login workflow
   is worth describing because it explains two other classes in the activity package. In the login
   activity, if you press the Menu button, you get three options: Clear
    Cookies, Reload, and Change Server.
    Change Server launches an 

# LoginActivity Class

LoginActivity defines the login screen. The login workflow is worth describing because it explains two other classes in the activity package. In the login activity, if you press the Menu button, you get three options: **Clear Cookies**, **Reload**, and **Change Server**. **Change Server** launches an instance of the ServerPickerActivity class, which displays **Production** and **Sandbox** servers and an **Add Connection** option. When a user clicks**Add Connection**, ServerPickerActivity launches an instance of the CustomServerURLEditor class. This class displays a popover dialog that lets you type in the name of the custom server.
