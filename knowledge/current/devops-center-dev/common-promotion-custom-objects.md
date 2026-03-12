---
title: "Common Promotion Custom Objects"
domain: devops-center-dev
topic: common-promotion-custom-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.384Z
estimatedTokens: 518
keywords: [Common, Promotion, Custom, Objects, drill, down, promotions, let’s, review, unbundled, bundled, share, Deployment, Result, Merge]
---

# Common Promotion Custom Objects

> Before we drill down into the details of promotions, let’s first review the common custom objects that both unbundled and bundled promotions share.

# Common Promotion Custom Objects

Before we drill down into the details of promotions, let’s first review the common custom objects that both unbundled and bundled promotions share.

## Deployment Result Custom Object

The Deployment Result object tracks the requests and results of a metadata deployment to the environment associated with the pipeline stage to which work items or change bundles are being promoted. Currently these environments are always Salesforce orgs.

When a user initiates a promotion, DevOps Center creates a Deployment Result record with all the request properties. These properties include whether the deployment is full or partial and the set of metadata components from all associated work items to be deployed. Each metadata component is stored as a record of the Deploy Component object, which is a child of Deployment Result.

DevOps Center computes the set of metadata components to be deployed like this:

-   For unbundled promotions, the list comes from all of the Submit Components records associated with all the work items that the user selected to promote.
-   For versioned promotions, the list comes from the Deploy Components of the previous versioned promotion.

When the promotion completes, the Heroku application writes result properties to the same Deployment Result record, such as the deployment ID, completion date, and number of tests completed.

## Merge Result Custom Object

The Merge Result object tracks the request and the results of merging branches in the source control repository.

A promotion doesn’t always require a merge, such as when a user synchronizes their development environment from their source control repository. Sometimes a promotion requires more than one merge, such as when a user does an unbundled promotion of multiple work items.

When a user initiates a promotion, DevOps Center creates a Merge Result record for every merge that is required. When the promotion completes, the Heroku application writes the merge IDs (or SHA as it’s called in GitHub) to the same Merge Result records.
