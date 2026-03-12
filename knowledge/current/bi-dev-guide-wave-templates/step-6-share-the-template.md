---
title: "Step 6: Share the Template"
domain: bi-dev-guide-wave-templates
topic: step-6-share-the-template
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.651Z
estimatedTokens: 401
keywords: [Step, Share, Template, Distribute, others, Salesforce, org, orgs, deploying, Metadata, API, correct, permissions, retrieve, their]
---

# Step 6: Share the Template

> Distribute the template to others in your Salesforce org or other orgs by deploying to
  the Metadata API. Others with the correct permissions can then retrieve the template object from
  the Metadata API and make their own contributions. See the Prerequisites section in this document.

# Step 6: Share the Template

Distribute the template to others in your Salesforce org or other orgs by deploying to the Metadata API. Others with the correct permissions can then retrieve the template object from the Metadata API and make their own contributions. See the Prerequisites section in this document.

-   Create and install a first or second-generation package with WaveTemplate as the component type.

-   For templates that create embedded apps via the auto-install framework, to use the install hooks, you must include the auto-install.json file in the managed package with the other template files. When your managed package is deployed in a customer org, the app is automatically created from your packaged template with an auto-install request.

    Each org can only allow 10 auto-install requests to run at one time. If an org has 10 requests that are in progress, any subsequent requests are marked as new and must be manually started from the [Auto-Installed Apps setup page](https://help.salesforce.com/s/articleView?id=analytics.bi_auto_install_overview.htm&type=5&language=en_US). Use this page to monitor auto-install requests and app creation statuses and possible failures.

    Embedded apps may also be installed using custom Apex pages to generate auto-install requests for app creation.


#### See Also

-   [First-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/sharing_apps.htm)

-   [Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm)
