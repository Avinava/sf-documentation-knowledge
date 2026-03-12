---
title: "Templates List Resource"
domain: bi-dev-guide-rest
topic: templates-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.844Z
estimatedTokens: 573
keywords: [Templates, Resource, Analytics, creates, template, URL, Formats, Version, Postman, Components, HTTP, POST]
---

# Templates List Resource

> Returns a list of Analytics templates, or creates a
    template.

# Templates List Resource

Returns a list of Analytics templates, or creates a template.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getWaveTemplateCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-9a17328a-39fd-4a3f-95bf-7981dee25419?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   Apex — [Wave.Templates.getTemplates()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_templates.htm)
-   Aura — [<wave:sdk> listTemplates()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_template.htm)
-   LWC — [lightning/analyticsWaveApi getWaveTemplates()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-templates.html)

## HTTP Methods

GET POST

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| options | Connect​Wave​Template​Visibility​Options​Enum | The template visibility option. Valid values are:Create​AppManageable​OnlyOrg​Can​View​OnlyView​Only | Optional | 52.0 |
| type | Connect​Wave​Template​Type​Enum | The template type. Valid values are:AppDashboardDataEmbeddedLens | Optional | 36.0 |

## Response body for GET

[Template Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_collection.htm "A collection of Analytics templates.")

## Request body for POST

[Template Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_input.htm "An Analytics template.")

## Response body for POST

[Template](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template.htm "An Analytics template.")

## Code Examples

```
/wave/templates
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Template Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_collection.htm)
- Template Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_template_input.htm)
- Template (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template.htm)
