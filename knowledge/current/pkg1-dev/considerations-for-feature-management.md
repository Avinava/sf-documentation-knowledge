---
title: "Considerations for Feature Management"
domain: pkg1-dev
topic: considerations-for-feature-management
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:25.344Z
estimatedTokens: 265
keywords: [Considerations, Feature, Management, Keep, mind, working]
---

# Considerations for Feature Management

> Keep these considerations in mind when working with feature parameters.

# Considerations for Feature Management

Keep these considerations in mind when working with feature parameters.

-   After a feature parameter is included in a promoted and released package version, we recommend that you only edit the value field located in LMO-to-subscriber junction objects.

    Modifying or deleting other fields or records related to feature parameters, including the data flow direction, may cause the FMA to stop operating correctly.

-   Don’t use the LMO to create or delete feature parameters.
-   When you update LMO-to-subscriber values in your LMO, the values in your subscribers’ orgs are updated asynchronously. This process can take several minutes.
-   When you publish a push upgrade to your managed package, feature parameters in your LMO and your subscribers’ orgs are updated asynchronously. Creating and updating the junction object records can take several minutes.
-   When the Apex code in your package updates subscriber-to-LMO values in your subscriber’s org, the changes can take up to 24 hours to reach your LMO.
