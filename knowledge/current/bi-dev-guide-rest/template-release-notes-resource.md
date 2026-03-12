---
title: "Template Release Notes Resource"
domain: bi-dev-guide-rest
topic: template-release-notes-resource
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:03.857Z
estimatedTokens: 382
keywords: [Template, Release, Notes, Resource, Analytics, URL, Formats, Version, Postman, Components, HTTP]
---

# Template Release Notes Resource

> Returns the release notes for a single Analytics
    Template.

# Template Release Notes Resource

Returns the release notes for a single Analytics Template.

## Resource URL

```

```

## Formats

JSON

## Available Version

37.0

## Available in Postman

To view and test a working example of this resource, see [getWaveTemplatesReleaseNotes](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-c613009e-9329-4af9-85ca-dc1885803d2e?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getWaveTemplateReleaseNotes()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-template-release-notes.html)

## HTTP Methods

GET

## Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| template​Id​Or​Api​Name | String | The ID of template to retrieve or delete the lint value for. | Required | 37.0 |

## Response body for GET

[Template Release Notes](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_release_notes.htm "The release notes for an Analytics template.")

## Code Examples

```
/wave/templates/<templateIdOrApiName>/releasenotes
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Template Release Notes (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_template_release_notes.htm)
