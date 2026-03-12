---
title: "Develop App Documentation"
domain: pkg1-dev
topic: develop-app-documentation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.730Z
estimatedTokens: 326
keywords: [Develop, App, Documentation, help, subscribers, provide, how, configure, customize]
---

# Develop App Documentation

> To help your subscribers make the most of your app, provide documentation about how to
  configure and customize your app.

# Develop App Documentation

To help your subscribers make the most of your app, provide documentation about how to configure and customize your app.

-   Configure Option—You can include a **Configure** option for installers. This option can link to installation and configuration details, such as:

    -   Provisioning the external service of a client app
    -   Custom app settings

    The **Configure** option is included in your package as a custom link. You can create a custom link for your home page layouts and add it to your package.

    1.  Create a custom link to a URL that contains configuration information, or a Visualforce page that implements the configuration. When you create your custom link, set the display properties to Open in separate popup window so that the user returns to the same Salesforce page when done.
    2.  When you create the package, choose this custom link in the Configure Custom Link field of your package detail.
-   Data Sheet—Give installers the fundamental information they must know about your app before they install.
-   Customization and Enhancement Guide—Let installers know what they must customize after installation as part of their implementation.
-   Custom Help—You can provide custom help for your custom object records and custom fields.
