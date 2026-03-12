---
title: "UserTerritoryDeleteHeader"
domain: api
topic: userterritorydeleteheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.753Z
estimatedTokens: 195
keywords: [UserTerritoryDeleteHeader, Specify, user, whom, open, opportunities, assigned, current, owner, removed, territory, element, transferred, forecast, manager]
---

# UserTerritoryDeleteHeader

> Specify a user to whom open opportunities are assigned when
   the current owner is removed from a territory. If this header is not used or the value of its
   element is null, the opportunities are transferred to the forecast manager in the territory
   above, if one exists. If one does not exist, 

# UserTerritoryDeleteHeader

Specify a user to whom open opportunities are assigned when the current owner is removed from a territory. If this header is not used or the value of its element is null, the opportunities are transferred to the forecast manager in the territory above, if one exists. If one does not exist, the user being removed from the territory keeps the opportunities.

## API Calls

[delete()](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm "Deletes one or more records from your organization's data.")

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| transferToUserId | ID | The ID of the user to whom open opportunities in that user's territory will be assigned when an opportunity's owner (user) is removed from a territory. |

## Related Topics

- delete() (atlas.en-us.api.meta/api/sforce_api_calls_delete.htm)
