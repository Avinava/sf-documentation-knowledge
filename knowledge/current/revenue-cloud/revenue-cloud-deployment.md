---
title: "Revenue Cloud Deployment"
domain: revenue-cloud
topic: revenue-cloud-deployment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:35:47.182Z
estimatedTokens: 1078
keywords: [Revenue, Cloud, Deployment, clear, roadmap, accurately, efficiently, deploying, metadata, development, staging, sandbox, production, orgs, What’s, Included]
---

> This section provides a clear roadmap for accurately and efficiently deploying Revenue
    Cloud objects and metadata between development, staging, sandbox, and production
    orgs.

# Revenue Cloud Deployment

This section provides a clear roadmap for accurately and efficiently deploying Revenue Cloud objects and metadata between development, staging, sandbox, and production orgs.

Developing and maintaining complex business applications on the Salesforce Platform requires a structured approach to managing changes and deployments. This is especially true for Revenue Cloud, which involves a complex data model and metadata components.

The interconnected nature of Revenue Cloud's architecture requires a meticulous and well-defined development operations (DevOps) process. Without it, organizations face significant risks, including data corruption, deployment failures, and disruption to critical business processes.

## Who This Section Is For

This section is intended for advanced users who are familiar with Salesforce development, established DevOps concepts, and Salesforce administration.

## What’s Not Included

-   This section doesn't include information about data migration from external or legacy systems.
-   There's no built-in, Revenue Cloud-specific deployment tool. Select the Salesforce or third-party deployment tools appropriate for your use case.
-   Every Salesforce implementation is unique. This guide doesn't address how to deploy your custom objects, fields, Apex classes, metadata, Lightning Web Components (LWCs), and so on.

-   **[Deployment Workflows and Sequence](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_workflows_and_sequence.htm)**
    A typical dev ops cycle involves managing test orgs, sandboxes, and a production org. Your deployment workflow can be a simple deployment of all setup and data from a development org to production. Or, it can be much more complex, involving multiple staging and testing orgs before any changes are sent to production.
-   **[Deployment Considerations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_considerations.htm)**
    In any deployment scenario, you must understand all dependencies and prerequisites related to your planned changes.
-   **[Global Unique ID Setup](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_global_UID_setup.htm)**
    The establishment of a Global Unique ID (GUID) column on all objects during day-one initialization is a recommended practice for Salesforce DevOps.
-   **[Managing Component States](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_managing_component_states.htm)**
    Manage activation, versioning, and dependencies for components and objects as part of your deployment plan. A successful deployment makes sure that the system executes the intended, final, and active logic, preventing failures caused by stale or inactive component dependencies.
-   **[Post-Deployment Steps](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/post_deployment_steps.htm)**
    Most deployments require that you take some actions after the deployment to the target org is complete to ensure proper functionality and data integrity.
-   **[Deployment Scenarios](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_scenarios.htm)**
    Learn about specific deployment scenarios including new environment setup, refreshes, retiring records, deploying patches, and many more.
-   **[Object Deployment Reference](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_appendix_A.htm)**
    Get to know the object deployment sequence and associated properties.
-   **[Metadata Deployment Reference](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_appendix_B.htm)**
    Get to know the metadata deployment sequence and associated details.
-   **[Additional Deployment Information](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_appendix_C.htm)**
    Get to know additional deployment information for each Revenue Cloud feature domain, ensuring successful deployments and migrations.

## Related Topics

- Deployment Workflows and Sequence (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_workflows_and_sequence.htm)
- Deployment Considerations (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_considerations.htm)
- Global Unique ID Setup (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_global_UID_setup.htm)
- Managing Component States (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_managing_component_states.htm)
- Post-Deployment Steps (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/post_deployment_steps.htm)
- Deployment Scenarios (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_scenarios.htm)
- Object Deployment Reference (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_appendix_A.htm)
- Metadata Deployment Reference (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_appendix_B.htm)
- Additional Deployment Information (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_appendix_C.htm)
