---
title: "Folder Resource"
domain: bi-dev-guide-rest
topic: folder-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.746Z
estimatedTokens: 885
keywords: [Folder, Resource, deletes, updates, replaces, Analytics, app, URL, Formats, Version, Postman, Components, HTTP, PUT, PATCH]
---

# Folder Resource

> Returns, deletes, updates, or replaces an Analytics app or folder
      with the specified ID.

# Folder Resource

Returns, deletes, updates, or replaces an Analytics app or folder with the specified ID.

## Resource URL



```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getWaveFolder](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-0f3fa4c6-4537-46d7-b5c1-549cd3abece9?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   Aura — [<wave:sdk> updateFolder()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_template.htm)
-   Aura — [<wave:sdk> upgradeFolder()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_template.htm)
-   Aura — [<wave:sdk> deleteFolder()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_template.htm)
-   LWC — [lightning/analyticsWaveApi getWaveFolder()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-folder.html)
-   LWC — [lightning/analyticsWaveApi deleteWaveFolder()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-delete-wave-folder.html)
-   LWC — [lightning/analyticsWaveApi updatePartialWaveFolder()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-partial-wave-folder.html)
-   LWC — [lightning/analyticsWaveApi updateWaveFolder()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-wave-folder.html)

## HTTP Methods

GET DELETE PATCH PUT

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| disable​Mru | Boolean | Indicates whether to update the MRU should be updated (true) or not (false). | Optional | 53.0 |
| mobile​Only​Featured​Assets | Boolean | Indicates whether to filter the collection of folders to show only dashboards that are enabled for the Analytics mobile app (true) or not (false) . | Optional | 43.0 |

To get the application log for the folder, use the filterGroup request parameter with the Supplemental value in the GET request.

```

```

## Response body for GET

[Wave Folder](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder.htm "An Analytics folder.")

## Request body for PUT and PATCH

This can be a [Wave Folder Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_input.htm "An Analytics folder. This implements BaseWaveFolderInput.") or a [Wave Folder Template Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_template_input.htm "A templated Analytics folder. This implements BaseWaveFolderInput."), both of which implement the [Base Wave Folder Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_wave_folder_input.htm "The base Analytics folder asset.").

## Response body for PATCH and PUT

[Wave Folder](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder.htm "An Analytics folder.")

## Code Examples

```
/wave/folders/<folderID>
```

```
/wave/folders/<folderID>?filterGroup=Supplemental
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Wave Folder (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_folder.htm)
- Wave Folder Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_input.htm)
- Wave Folder Template Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_folder_template_input.htm)
- Base Wave Folder Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_wave_folder_input.htm)
