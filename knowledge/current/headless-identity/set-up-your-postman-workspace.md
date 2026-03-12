---
title: "Set Up Your Postman Workspace"
domain: headless-identity
topic: set-up-your-postman-workspace
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.988Z
estimatedTokens: 742
keywords: [Postman, Workspace, started, fork, Salesforce, Developers, collection, variables]
---

# Set Up Your Postman Workspace

> To get started with Postman, fork the public Salesforce Developers collection and set
  your variables.

# Set Up Your Postman Workspace

To get started with Postman, fork the public Salesforce Developers collection and set your variables.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


To work with this collection, you must have a Postman account that’s connected to Salesforce, meaning that the Salesforce Postman collection must be authorized to access your org. If you’re using Postman in a browser, you must also add the Postman URL patterns to your Cross-Origin Resource Sharing (CORS) allowlist. For instructions on completing these steps, see the [Quick Start: Connect Postman to Salesforce](https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce "HTML (New Window)") Trailhead module.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=headless_identity)

#### Note

If you’re using the Postman desktop app, you can skip configuring your CORS allowlist.

1.  If you haven’t already, fork the Salesforce Platform APIs collection from the public Salesforce Developers workspace. By forking the collection, you can modify it on your local workspace without changing the parent version.
    1.  Open the [Salesforce Developers workspace](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/overview).
    2.  In Collections, select **Salesforce Platform APIs**, click ![Postman icon with three dots](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_identity%2Fimages%2Fpostman_three_dots_icon.png&folder=headless_identity), and then select **Create a Fork**.
    3.  Name the fork, add it to your workspace, and click **Fork Collection**.
2.  Reset the collection variables to use your own.

    1.  Select the forked Salesforce Platform APIs collection in your workspace.
    2.  Select the **Variables** tab.

        The variables here apply to the entire Salesforce Platform APIs collection, so only a few of them are relevant to this example. You can ignore the ones that aren’t.

    3.  Replace the current value for url with your Experience Cloud site domain, such as MyExperienceCloudSite.my.site.com.
    4.  Replace the current value for clientId with your external client app consumer key.
    5.  Replace the current value for redirectUrl with https://MyExperienceCloudSite.my.site.com/services/oauth2/echo, where https://MyExperienceCloudSite.my.site.com is your Experience Cloud site domain. This value must match your external client app callback URL.

    The variable list also contains a site variable, which you can use to store an Experience Cloud site suffix if your site has one. For this example implementation, we didn’t add a suffix, so leave this value blank.

3.  To see the Headless Identity examples, expand the Salesforce Platform APIs collection, select **Auth**, and then select **Headless Identity API Demo**.
