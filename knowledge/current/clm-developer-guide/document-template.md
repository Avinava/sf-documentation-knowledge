---
title: "Document Template"
domain: clm-developer-guide
topic: document-template
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.268Z
estimatedTokens: 208
keywords: [Document, Template, configured, templates, usage, Output, representation, record]
---

# Document Template

> Get the list of configured templates for a usage
    type.

# Document Template

Get the list of configured templates for a usage type.

Resource

```

```

Available version

56.0

HTTP methods

GET

Example for GET

```

```

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contractId | String | ID of the contract document. | Optional | 55.0 |
| isActive | Boolean | Status of the template. | Required | 55.0 |
| type | String | Format of the contract document. For example, MicrosoftWord. | Required | 55.0 |
| usageType | String | Usage type. For example, Contract_Life_Cycle_Management. | Required | 55.0 |

Response body for GET

[Template List Representation](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_template_list.htm "List of configured templates.")

## Code Examples

```
/connect/clm/document-template
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/clm/document-template?usageType=<usageType>&isActive=<true/false>&type=<>
```

## Related Topics

- Template List Representation (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_template_list.htm)
