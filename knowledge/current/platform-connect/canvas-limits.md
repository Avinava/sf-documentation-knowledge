---
title: "Canvas Limits"
domain: platform-connect
topic: canvas-limits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.432Z
estimatedTokens: 537
keywords: [Canvas, Limits, Because, runs, multitenant, environment, enforced, ensure, protection, shared, resources]
---

# Canvas Limits

> Because Canvas runs in a multitenant environment, limits are enforced to ensure
protection of shared resources.

# Canvas Limits

Because Canvas runs in a multitenant environment, limits are enforced to ensure protection of shared resources.

| Description | Limit |
| --- | --- |
| Number of canvas apps per user that can be displayed on the Chatter tab. Only the first 50 canvas apps are displayed (sorted alphabetically). | 50 |
| Number of Canvas calls per day per user (24–hour period) | 5,000 per Salesforce full user license in the org. This limit is shared across all users in the org. Requests from guest users don’t count against this limit.This limit tracks each Canvas app reload and signed request calls. Other API calls from the Canvas app are counted against the normal org API request limit. When you call a SignedRequest method, two calls are made—one for the method and one for internal logging. |
| Heroku Quick Start calls per day per user | 100Heroku accounts have their own limits on the number of calls you can make. |

#### See Also

-   [Objects](atlas.en-us.platform_connect.meta/platform_connect/objects_intro.htm)

-   [Introducing Canvas](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro.htm "Canvas enables you to easily integrate a third-party application in Salesforce. Canvas is a set of tools and JavaScript APIs that you can use to expose an application as a Canvas app. Then take your new or existing applications and make them available to your users as part of their Salesforce experience.")

-   [Quick Start](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_intro.htm "This simple quick start shows you how to get started with Canvas by using the Heroku Quick Start. The Heroku Quick Start creates a “hello world” app on Heroku in either Java or Ruby, depending on the template you select. At the same time, it creates a corresponding canvas app in Salesforce.")

-   [Quick Start—Advanced](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm "This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.")

## Related Topics

- Objects (atlas.en-us.platform_connect.meta/platform_connect/objects_intro.htm)
- Introducing Canvas (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro.htm)
- Quick Start (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_intro.htm)
- Quick Start—Advanced (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm)
