---
title: "How Promotions Work"
domain: devops-center-dev
topic: how-promotions-work
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.382Z
estimatedTokens: 564
keywords: [How, Promotions, Work, Show, objects, involved, user, unbundled, bundled, promotion]
---

# How Promotions Work

> Show the objects involved when a user does an unbundled or bundled promotion.

# How Promotions Work

Show the objects involved when a user does an unbundled or bundled promotion.

DevOps Center supports two types of promotions:

-   Unbundled promotion—Users select one or more work items and promote (move) them to the next pipeline stage.
-   Versioned promotion—Work items are combined into a single bundle represented by the Change Bundle object. The bundle is promoted as a single unit to the next pipeline stage. Change bundles have version identifiers, such as 1.0.

The Pipeline Stage object has a Boolean field called Versioned that DevOps Center uses to control how promotions come into a pipeline stage. The value of the field determines what type of pipeline stage it is:

-   Unbundled Stage—A stage that work items are promoted into by users selecting them individually.
-   Bundling Stage—The last unbundled stage in a pipeline. Work items have been promoted individually into this stage, but new change bundles are promoted out of it.
-   Versioned Stage—A stage where change bundles are promoted into.

When an admin creates a pipeline, DevOps Center provides a template of a typical release pipeline that includes a bundling stage. However, you have complete flexibility to configure it based on your preferences. This setup allows users to individually select the work items they want to promote from the Approved Work Items list to the first pipeline stage. Admins can configure subsequent stages as either unbundled or versioned. But if an admin makes a stage versioned, all the stages to the right in the pipeline must also be versioned, and they can’t go back to being unbundled.

-   **[Common Promotion Custom Objects](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions_commonobjects.htm)**
    Before we drill down into the details of promotions, let’s first review the common custom objects that both unbundled and bundled promotions share.
-   **[Unbundled Promotions: A Deeper Look](atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions_unbundled.htm)**
    Now that we know the main custom objects involved in an unbundled promotion, let’s step through the different phases of the promotion and check the status of these objects at each phase.

## Related Topics

- Common Promotion Custom Objects (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions_commonobjects.htm)
- Unbundled Promotions: A Deeper Look (atlas.en-us.devops_center_dev.meta/devops_center_dev/devops_center_dev_promotions_unbundled.htm)
