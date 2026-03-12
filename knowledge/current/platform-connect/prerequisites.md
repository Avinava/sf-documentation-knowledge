---
title: "Prerequisites"
domain: platform-connect
topic: prerequisites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.587Z
estimatedTokens: 888
keywords: [Prerequisites, appropriate, access, tools, quick, start, steps]
---

# Prerequisites

> Get the appropriate access and tools to complete the quick start.

# Prerequisites

Get the appropriate access and tools to complete the quick start.

To get started, you must have these prerequisites.

-   Access to a Developer Edition organization for developing your canvas app. To install your canvas app, you need a Developer Edition org other than the one you use to create the canvas app.

    To create a Developer Edition org, go to [developer.salesforce.com/signup](https://developer.salesforce.com/signup) and follow the instructions for signing up for a Developer Edition organization.

    If you have an existing Developer Edition org, and, from Setup, you don’t see the menu item **Canvas App Previewer**, contact Salesforce.

-   “Customize Application” and “Modify All Data” user permissions. If you’re an admin, you most likely already have these permissions. Otherwise, you need to add them so that you can see the Canvas App Previewer and create canvas apps.
-   Git installed. Go here to install and configure Git: [https://help.github.com/articles/set-up-git](https://help.github.com/articles/set-up-git "HTML (New Window)").

    After you install Git, you might need to configure SSH by using the keygen tool. See [https://help.github.com/articles/generating-ssh-keys](https://help.github.com/articles/generating-ssh-keys "HTML (New Window)") for more information. If you’re using Windows, this tool is located in the Git \\bin directory, which isn’t added to the path after you install Git. Add the \\bin directory to your path by using Control Panel. Depending on your installation directory, the path might be something like C:\\Program Files (x86)\\Git\\bin.

-   A GitHub account to clone the code example. Go here to set up a GitHub account: [https://github.com/plans](https://github.com/plans "HTML (New Window)").
-   Maven 3.0 or greater installed to package the sample app. Go here to download and install Maven: [http://maven.apache.org/download.html](http://maven.apache.org/download.html "HTML (New Window)").
-   A Heroku account if you want to run the app from Heroku. Go here to create a Heroku account: [https://api.heroku.com/signup](https://api.heroku.com/signup "HTML (New Window)").
-   Heroku Toolbelt if you want to manage the Heroku app from the command line. Go here to download and install Heroku Toolbelt: [https://toolbelt.heroku.com](https://toolbelt.heroku.com/ "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

In Spring ’26, the ability to create new connected apps is disabled by default. We recommend using [external client apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US) for all new Canvas integrations. To enable creation of new connected apps, contact Salesforce Customer Support.

#### See Also

-   [Quick Start—Advanced](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm "This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.")

-   [Supported Salesforce Editions](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_supported_editions.htm)

-   [Clone the Project from GitHub](atlas.en-us.platform_connect.meta/platform_connect/quick_start_clone_the_project.htm "The “hello world” sample project is part of the Canvas SDK, which is located on GitHub. From GitHub, clone the project to make a copy of it on your local machine.")

## Related Topics

- Quick Start—Advanced (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm)
- Supported Salesforce Editions (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_supported_editions.htm)
- Clone the Project from GitHub (atlas.en-us.platform_connect.meta/platform_connect/quick_start_clone_the_project.htm)
- Quick Start (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_intro.htm)
- Create the App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_create_app.htm)
