---
title: "Global Unique ID Setup"
domain: revenue-cloud
topic: global-unique-id-setup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-05-03T00:28:15.033Z
estimatedTokens: 462
keywords: [Unique, Setup, establishment, GUID, column, day-one, initialization, recommended, practice, Salesforce, DevOps]
---

> The establishment of a Global Unique ID (GUID) column on all objects during day-one
    initialization is a recommended practice for Salesforce DevOps.

# Global Unique ID Setup

The establishment of a Global Unique ID (GUID) column on all objects during day-one initialization is a recommended practice for Salesforce DevOps.

Salesforce uses its own internal ID for records, but this ID isn't portable. The same record in a testing, sandbox, or production org has different Salesforce IDs. This makes tracking a single piece of data across environments nearly impossible. By introducing your own custom, externally set GUID, you have a single, immutable, and universally consistent identifier.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

You can also choose your preferred method to maintain the mapping of records IDs across orgs.

Before performing any deployment work, establish your GUID across all database objects, and across all Salesforce orgs involved in your deployment plan.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

Add a GUID field to all objects used during your deployment. Since you can't add fields to metadata types (such as a Flow), use the API name for each metadata type as the unique identifier.

-   **[Create a GUID Field](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_create_guid_field.htm)**
    Add a GUID field to all objects used during your deployment to ensure unique identification of records across environments.
-   **[GUID Design and Usage](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_guid_design_concept.htm)**
    The format and values of the Global Unique ID (GUID) are up to you. Here's some guidance on what makes a good versus poor GUID for deployment tracking.

## Related Topics

- Create a GUID Field (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_create_guid_field.htm)
- GUID Design and Usage (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_guid_design_concept.htm)
