---
title: "Publisher Canvas App Access Considerations"
domain: platform-connect
topic: publisher-canvas-app-access-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.368Z
estimatedTokens: 214
keywords: [Publisher, Canvas, App, Access, Considerations, modifying, appears, keep, mind]
---

# Publisher Canvas App Access Considerations

> When modifying a canvas app that appears in the publisher,
keep these considerations in mind:

# Publisher Canvas App Access Considerations

When modifying a canvas app that appears in the publisher, keep these considerations in mind:

-   If the canvas app has a quick action associated with it, then you can’t delete the canvas app or remove the Publisher location. You must first delete the quick action.
-   If the user doesn’t have access to the canvas app through profiles or permission sets and they select the app in the publisher, then they’ll receive an error.
-   If the canvas app attempts to perform an action for which the user doesn’t have permissions, then that action will fail and the canvas app will receive an error. For example, if the app tries to create a Merchandise record but the user doesn’t have create permission on Merchandise, then the app will receive an error. The canvas app should then relay the error to the user.
