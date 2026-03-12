---
title: "Template Resource"
domain: bi-dev-guide-rest
topic: template-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.853Z
estimatedTokens: 527
keywords: [Template, Resource, deletes, updates, Analytics, URL, Formats, Version, Postman, Components, HTTP, PUT]
---

# Template Resource

> Returns, deletes, or updates  an Analytics template.

# Template Resource

Returns, deletes, or updates an Analytics template.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getWaveTemplate](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-07461a86-f7a7-4861-9e1d-81493fcb972d?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   Apex — [Wave.Templates.getTemplate()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_templates.htm)
-   Aura — [<wave:sdk> getTemplate()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_template.htm)
-   LWC — [lightning/analyticsWaveApi getWaveTemplate()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-template.html)

## HTTP Methods

DELETE GET PUT

## Request parameters for GET, DELETE, and PUT

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| options | Connect​Wave​Template​Visibility​Options​Enum | The template visibility options. Valid values are:Create​AppManageable​OnlyOrg​Can​View​OnlyView​Only | Optional | 47.0 |
| template​Id​Or​Api​Name | String | The ID of template to retrieve or delete the lint value for. | Required | 36.0 |

## Response body for GET and PUT

[Template](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template.htm "An Analytics template.")

## Request body for PUT

[Template Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_input.htm "An Analytics template.")

## Code Examples

```
/wave/templates/<templateIdOrApiName>
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Template (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template.htm)
- Template Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_input.htm)
