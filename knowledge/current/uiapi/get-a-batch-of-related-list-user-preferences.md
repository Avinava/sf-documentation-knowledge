---
title: "Get a Batch of Related List User Preferences"
domain: uiapi
topic: get-a-batch-of-related-list-user-preferences
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.682Z
estimatedTokens: 162
keywords: [Batch, User, Preferences]
---

# Get a Batch of Related List User Preferences

> Returns a batch of user preferences for a related list.

# Get a Batch of Related List User Preferences

Returns a batch of user preferences for a related list.

Resource

```

```

-   preferencesIds—A comma-delimited set of related list user preference IDs, such as Account.RelatedContactList.

Available Version

57.0

HTTP Method

GET

Example

To get user preferences for the Contact and Opportunity related lists on an Account, make this request.

```

```

Response Body

[Simplified Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm "The simplified results from a request to a batch resource. Results include information for each subrequest in the batch.")

## Code Examples

```
/ui-api/related-list-preferences/batch/${preferencesIds}
```

```
GET /services/data/v66.0/ui-api/related-list-preferences/batch/Account.RelatedContactList,Account.RelatedOpportunityList
```

## Related Topics

- Simplified Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm)
