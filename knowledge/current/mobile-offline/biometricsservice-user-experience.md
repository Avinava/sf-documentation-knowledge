---
title: "BiometricsService User Experience"
domain: mobile-offline
topic: biometricsservice-user-experience
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.881Z
estimatedTokens: 204
keywords: [BiometricsService, User, Experience, component, deliver, any, desire, there’s, common, flow, calls, biometrics, check]
---

# BiometricsService User Experience

> Your component can deliver any user experience you desire, but there’s a common flow
    for any component that calls for a biometrics check.

# BiometricsService User Experience

Your component can deliver any user experience you desire, but there’s a common flow for any component that calls for a biometrics check.

-   Your user performs an action that triggers a biometrics check.
-   The OS prompts the user to confirm their identity via a biometrics check.
-   The OS provides a success message when the biometrics are confirmed, and continues the operation that the user initiated before the biometrics check. The OS provides an error message if the biometrics check isn’t successful.

In some of these examples, BiometricsService is only a part of the complete solution. Determining where in your app experience a biometrics check is appropriate, implementing it as part of a user flow, and so on, are other parts that you must implement yourself.
