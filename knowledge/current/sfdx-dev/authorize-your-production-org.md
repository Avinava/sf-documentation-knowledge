---
title: "Authorize Your Production Org"
domain: sfdx-dev
topic: authorize-your-production-org
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.068Z
estimatedTokens: 310
keywords: [Authorize, Production, Org, JWT, Web-based, flows, require, sandbox, licenses, instead, Dev, Hub, However, it’s]
---

# Authorize Your Production Org

> JWT and Web-based flows require a production org with sandbox licenses instead of a Dev
    Hub. However, it’s OK if your production org is also a Dev Hub org.

# Authorize Your Production Org

JWT and Web-based flows require a production org with sandbox licenses instead of a Dev Hub. However, it’s OK if your production org is also a Dev Hub org.

The examples in [Authorize an Org Using the JWT-Based Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm#sfdx_dev_auth_jwt_flow) and [Authorize an Org Using the Web-Based Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm#sfdx_dev_auth_web_flow) are geared toward scratch orgs. Follow these tips to successfully authorize your production org.

-   Be sure to use https://login.salesforce.com for sfdcLoginUrl in sfdx-project.json file. Alternatively, you can use org login jwt --instance-url to specify the URL directly on the command line. This value overrides the login URL you specified in the sfdx-project.json file.
-   Specify the username for your production org when running the org login jwt command. No need to specify a Dev Hub or indicate a default Dev Hub.
-   The JWT authorization flow requires that you create a connected app. When you create the connected app, log in to your production org, not a Dev Hub org.
