---
title: "Auto-Install Requests List Resource"
domain: bi-dev-guide-rest
topic: auto-install-requests-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:55.436Z
estimatedTokens: 819
keywords: [Auto-Install, Requests, Resource, collection, Analytics, embedded, apps, creates, deletes, groups, folder, template, API]
---

> Returns a collection of auto-install requests for Analytics embedded apps, creates an
  auto-install request, or deletes groups of auto-install requests by an Analytics folder ID or a
  template API name.

# Auto-Install Requests List Resource

Returns a collection of auto-install requests for Analytics embedded apps, creates an auto-install request, or deletes groups of auto-install requests by an Analytics folder ID or a template API name.

Resource URL

```

```

Formats

JSON

Available Version

50.0

HTTP Methods

GET POST DELETE

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| folder​Id | ID | Filters the results to include only the contents of a specific folder. The id can be the requesting user’s ID for items in the user’s private folder. | Optional | 50.0 |
| folder​Label | String | Filters the results to include only the contents of a specific folder by label. | Optional | 50.0 |
| page​Size | Integer | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 50.0 |
| request​Name | String | Filters the results to include only the contents with a specific auto-install request name. | Optional | 50.0 |
| request​Statuses | Auto​Install​Request​Status​Enum[] | Filters the results to include only the contents with a specific auto-install request status. Valid values include:App​In​ProgressCancelledEnqueuedFailedIn​ProgressNewSkippedSuccess | Optional | 50.0 |
| request​Types | Auto​Install​Request​Type​Enum[] | Filters the results to include only the contents with a specific auto-install request type. Valid values include:Org​Compatibility​CheckStart​DataflowWave​App​Auto​UpdateWave​App​CreateWave​App​DeleteWave​App​UpdateWave​Enable | Optional | 50.0 |
| search​Options | Auto​Install​Request​Search​Option​Enum[] | Filters the results to include only the contents with specific search options. Valid values include:Exclude​Non​Existing​AppsMost​Recent​Only​By​Template​And​FolderNon​Existing​Apps​Only | Optional | 50.0 |
| sort​Options | Auto​Install​Request​Sort​Option​Enum[] | Sorts the results according to the given sort option. Valid values include:Created​Date​AscendingCreated​Date​DescendingFolder​Id​AscendingFolder​Id​DescendingFolder​Label​AscendingFolder​Label​DescendingLast​Modified​Date​AscendingLast​Modified​DateD​escendingRequest​Name​AscendingRequest​Name​DescendingRequest​Status​AscendingRequest​Status​DescendingRequest​Type​AscendingRequest​Type​DescendingTemplate​Api​Name​AscendingTemplate​Api​Name​Descending | Optional | 50.0 |
| template​Api​Name | String | Filters the results to include only the contents created from a specific application template. | Optional | 50.0 |

The following REST URL shows how to use the request parameters to filter and sort in the GET request.

```

```

Response body for GET

[Auto-Install Request Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_auto_install_request_collection.htm "A collection of auto-install requests.")

Request body for POST

[Auto-Install Request Insert Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_request_insert_input.htm "The insert for an auto-install request.")

Response body for POST

[Auto-Install Request](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_auto_install_request.htm "A auto-install request.")

## Code Examples

```
/wave/auto-install-requests
```

```
/wave/auto-install-requests?searchOptions=ExcludeNonExistingApps&sortOptions=RequestStatusAscending
```

## Related Topics

- Auto-Install Request Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_auto_install_request_collection.htm)
- Auto-Install Request Insert Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_request_insert_input.htm)
- Auto-Install Request (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_auto_install_request.htm)
