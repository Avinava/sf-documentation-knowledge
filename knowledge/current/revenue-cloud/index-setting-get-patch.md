---
title: "Index Setting (GET, PATCH)"
domain: revenue-cloud
topic: index-setting-get-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.285Z
keywords: [Index, Setting, GET, PATCH]
---

# Index Setting (GET, PATCH)

# Index Setting (GET, PATCH)

Fetch and update settings related to indexing and search.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

GET, PATCH

Response body for GET

[Index Setting Results](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_index_setting_output.htm "Output representation of the retrieved index settings.")

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| setting | Setting Input[] | Object containing the setting-related details. | Required | 63.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| settingId | String | ID of the setting to update the details for. | Required | 63.0 |

Response body for PATCH

[Index Setting Update](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_index_setting_patch_output.htm "Output representation of the details of the updated index setting.")