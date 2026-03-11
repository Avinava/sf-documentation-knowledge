---
title: "Deploy Metadata to Production"
domain: metadata-api
topic: deploy-metadata-to-production
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.030Z
keywords: [Deploy, Metadata, Production, Recent, Validation, See]
---

# Deploy Metadata to Production

# Deploy Metadata to Production

In the final step of the development cycle, move customizations from a source control system such as Git into production with Metadata API.

When your team finishes integration tests and is ready to deploy to production, move the completed customizations from a local environment to the repository. For the release, move metadata from the repository to production by pulling the updated repository back to the local environment with Git commands. Next, deploy metadata to production with Metadata API deploy call.

Moving metadata to production requires a deploy call instead of a push command because the deploy call deploys the entire metadata model and not just changes in the metadata.

## Deploy Recent Validation

A regular deploy call executes automated Apex tests that can take a long time to complete. To skip tests for validated components and deploy components to production quickly, use the deploy recent validation option.

#### See Also

-   [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.")
    
-   [force:source:push Command](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_force_source_push)
    
-   [Deploy a Recently Validated Component Set Without Tests](atlas.en-us.api_meta.meta/api_meta/meta_rest_deploy_recentvalidation.htm "You can deploy components to production in less time by skipping the execution of Apex tests when testing requirements have already been met.")