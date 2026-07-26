---
title: "Deployment Considerations"
domain: revenue-cloud
topic: deployment-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-07-26T01:59:44.470Z
estimatedTokens: 384
keywords: [Deployment, Considerations, any, scenario, understand, dependencies, prerequisites, planned, changes]
---

> In any deployment scenario, you must understand all dependencies and prerequisites
    related to your planned changes.

# Deployment Considerations

In any deployment scenario, you must understand all dependencies and prerequisites related to your planned changes.

Here's a list of things to consider and plan for.

Key considerations include:

-   What’s the sequence followed for object deployment? What dependencies exist on related objects?
-   Do your objects have Draft, Active, or Inactive states?
-   Does activation occur through an API or by simply setting a boolean field (active flag)?
-   Are there special fields to consider, such as text fields with embedded IDs, JSON, or fields populated via triggers?
-   Are there fields or objects that represent unique or sequential data that must be preserved in the target org?
-   How would you handle system settings between the orgs? For example, making sure that a feature toggle is turned off in the target org so that automation doesn't start executing when you insert data from your source org.
-   What's the impact of versioning on your deployment? For example, schema, app, or API versions.

![Note](/docs/resources/img/en-us/262.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

For detailed information about these deployment considerations, see [Additional Deployment Information](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_appendix_C.htm "Get to know additional deployment information for each Revenue Management feature domain, ensuring successful deployments and migrations.").

## Related Topics

- Additional Deployment Information (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_appendix_C.htm)
