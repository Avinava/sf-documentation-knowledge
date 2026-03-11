---
title: "Log Into Your Target Org"
domain: metadata-api
topic: log-into-your-target-org
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.485Z
keywords: [Log, Target, Org, configure, MCP, client, initiate, its, authentication, open, web, browser, authenticate, org, via, OAuth., prepare, additional, steps, sometimes]
---

# Log Into Your Target Org

> When you configure your MCP client and initiate its authentication, it will open a
      web browser to authenticate into your org via OAuth. To prepare for this, additional steps are
      sometimes needed for the authentication to succeed. Since the MCP spec doesn't have special
      provisions for systems like Salesforce with multiple tenants, we recommend the following
      steps:

## Log Into Your Target Org

When you configure your MCP client and initiate its authentication, it will open a web browser to authenticate into your org via OAuth. To prepare for this, additional steps are sometimes needed for the authentication to succeed. Since the MCP spec doesn't have special provisions for systems like Salesforce with multiple tenants, we recommend the following steps:

1.  Log out of all other Salesforce orgs.
2.  Using your default browser, log into the org that you want to access from your MCP client.
    
    This should be the org in which you created the External Client App in the previous section.
    
3.  Keep the browser open, since the MCP client will open a new tab in that browser window in a later step.