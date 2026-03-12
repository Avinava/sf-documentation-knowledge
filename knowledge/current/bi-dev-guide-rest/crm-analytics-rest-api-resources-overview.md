---
title: "CRM Analytics REST API Resources Overview"
domain: bi-dev-guide-rest
topic: crm-analytics-rest-api-resources-overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:04.952Z
estimatedTokens: 743
keywords: [CRM, Analytics, REST, API, Resources, access, data, Org, Identifiers, General, Filtering, Responses]
---

# CRM Analytics REST API Resources Overview

> The CRM Analytics REST API provides resources so you can access your CRM Analytics
    data.

# CRM Analytics REST API Resources Overview

The CRM Analytics REST API provides resources so you can access your CRM Analytics data.

All CRM Analytics REST API resources are accessed using:

-   A base URL for your company (for example, https://yourInstance.salesforce.com)
-   Version information (for example, /services/data/v53.0)
-   A named resource (for example, /wave)

Put together, an example of the full URL to the resource is:

```

```

## Org and Object Identifiers

Id fields in Salesforce, and in the CRM Analytics UI, are typically 15-character, base-62, case-sensitive strings. This is true of JSON XMD too. However, many Salesforce APIs, including the CRM Analytics REST API, use 18-character, case-insensitive strings—for example, the Id property of the Dataset resource/wave/datasets/<dataset ID>. The last 3 digits are a checksum of the preceding 15 characters. The use of case-insensitive Id’s eases interaction with external applications and development environments that use case-insensitive references. To convert an 18-character Id back to a 15-character ID, simply remove the last 3 characters.

## General Resources

General resources for CRM Analytics are covered here, while specific features like dashboards and recipes have their own sections.

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Actions Resource | Returns the Salesforce actions available for the user in Analytics. | GET | /wave |
| Dependencies Resource | Returns the dependencies for an asset. | GET | /wave/dependencies/<folderId> |
| Feature Configuration Resource | Returns the CRM Analytics features that are available to a user. | GET | /wave/config/features |
| JsonXform Transformation Resource | Performs a JSON transformation. | POST | /jsonxform/transformation |
| Limits Resource | Get the Analytics limits for the Salesforce org. | GET | /wave/limits |
| Query Resource | Executes a query written in Salesforce Analytics Query Language (SAQL). | POST | /wave/query |
| Security Resources | Discover whether objects and particular dataset versions have support for sharing inheritance. | GET | /wave/security/coverage/​datasets/<datasetIdOrApiName>/​versions/<versionId>/wave/security/coverage/objects/​<objectApiName> |
| Wave Resource | Lists the top-level resources available for CRM Analytics. | GET | /wave |

## Filtering REST Responses

Returns the representation for a CRM Analytics application or folder (GET), replaces an application or folder (PUT), updates it (PATCH), or deletes it (DELETE).

In addition to CRM Analytics REST API input parameters, you can use the following Connect REST API input parameters to filter the results returned from a request: filterGroup, external, and internal. For more information, see [Specifying Response Sizes](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_returns_filters.htm) in the Connect REST API Developer Guide.

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v53.0/wave
```

## Related Topics

- Actions Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_actions.htm)
- Dependencies Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dependencies_id.htm)
- Feature
                Configuration Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_config_features.htm)
- JsonXform Transformation Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_jsonxform_transformation.htm)
- Limits Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_limits.htm)
- Query Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_query.htm)
- Security Resources (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_security_coverage_dataset_version.htm)
- Wave Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_wave.htm)
