---
title: "Template Configuration Resource"
domain: bi-dev-guide-rest
topic: template-configuration-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.849Z
estimatedTokens: 543
keywords: [Template, Configuration, Resource, Analytics, URL, Formats, Components, Version, Postman, HTTP]
---

# Template Configuration Resource

> Returns the configuration of an Analytics template.

# Template Configuration Resource

Returns the configuration of an Analytics template.

## Resource URL

```

```

## Formats

JSON

## Available Components

-   Apex — [Wave.Templates.getTemplateConfig()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_templates.htm)
-   Aura — [<wave:sdk> getTemplateConfig()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_template.htm)
-   LWC — [lightning/analyticsWaveApi getWaveTemplateConfig()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-template-config.html)

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getWaveTemplateConfig](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-0cd841b5-9805-409d-8d26-bfd5d7747d3b?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## HTTP Methods

GET

## Request Parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| disable​Apex | Boolean | Indicates whether apex integration hooks are disabled (true) or not (false). | Optional | 36.0 |
| options | Connect​Wave​Template​Visibility​Options​Enum | Filter the template configuration by specifying a visibility option. Valid values are:Create​AppManageable​OnlyOrg​Can​View​OnlyView​Only | Optional | 57.0 |
| template​Id​Or​Api​Name | String | The ID of template to retrieve or delete the lint value for. | Required | 36.0 |

## Response body for GET

[Template Configuration](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_configuration.htm "The configuration for an Analytics Template.")

## Code Examples

```
/wave/templates/<templateIdOrApiName>/configuration
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Template Configuration (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_configuration.htm)
