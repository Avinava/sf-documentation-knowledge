---
title: "The Development Process and the Importance of Testing"
domain: pages
topic: the-development-process-and-the-importance-of-testing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.826Z
estimatedTokens: 257
keywords: [Development, Process, Importance, Testing, It’s, test, Visualforce, pages, deploying, production, across, different, environments, devices, users]
---

# The Development Process and the Importance of Testing

> It’s important to test your Visualforce pages before deploying them in production. Test
  your pages across different environments, devices, and users.

# The Development Process and the Importance of Testing

It’s important to test your Visualforce pages before deploying them in production. Test your pages across different environments, devices, and users.

If you’re developing functionality that you need to support across a range of possibilities, your test plan should consider the need to test across:

-   Each different supported device.
-   Each different supported operating system.
-   Each different supported browser—including the Salesforce mobile app, which embeds its own.
-   Each different supported user interface context (Lightning Experience, Salesforce Classic, and the Salesforce mobile app).

Running the Salesforce mobile app in an emulator isn’t supported for normal use. We understand that device emulators are convenient. But they aren’t a substitute for full testing of your custom apps and pages on your organization’s supported mobile devices. During development, regularly test your app on every device and platform on which you intend to deploy.
