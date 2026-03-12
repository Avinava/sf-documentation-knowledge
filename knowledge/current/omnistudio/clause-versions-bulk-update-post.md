---
title: "Clause Versions Bulk Update (POST)"
domain: omnistudio
topic: clause-versions-bulk-update-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.926Z
estimatedTokens: 336
keywords: [Clause, Versions, Bulk, Update, POST, Asynchronously, bulk, update, status, clause, versions, specified, regulation, version, policy, version., API, supports, updating, maximum]
---

# Clause Versions Bulk Update (POST)

> Asynchronously bulk update the status for all the clause versions of the specified
    regulation version or policy version. This API supports bulk updating a maximum of 10,000
    clauses at one time.

# Clause Versions Bulk Update (POST)

Asynchronously bulk update the status for all the clause versions of the specified regulation version or policy version. This API supports bulk updating a maximum of 10,000 clauses at one time.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordId | String | ID of the policy or regulation version record to update the clause versions for. | Required | 65.0 |
| targetStatus | String | Target status that you want to update the clause versions to.Valid values are:ActiveDraftPendingApprovalPublishedRetiredReviewThe Active, Draft, Published, and Retired statuses are applicable for both policy and regulation versions, and the associated cause version records.The PendingApproval and Review statuses are applicable for only policy version and the associated clause version records. | Required | 65.0 |

Response body for POST

[Clause Version Bulk Update Response](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_bulk_update_response.htm "Output representation of the details to asynchronously bulk update the status of the clause version records.")

## Code Examples

```
/connect/compliance/clause-versions/bulk-status-update
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/compliance/clause-versions/bulk-status-update
```

```
{
  "recordId": "00v00000000PP2",
  "targetStatus": "Active"
}
```

## Related Topics

- Clause Version Bulk Update Response (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_bulk_update_response.htm)
