---
title: "ConnectApi.ComplianceBulkUpdateInput"
domain: omnistudio
topic: connectapicompliancebulkupdateinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:47.625Z
estimatedTokens: 211
keywords: [ConnectApi.ComplianceBulkUpdateInput, Input, representation, asynchronously, bulk, update, status, clause, version, records.]
---

# ConnectApi.ComplianceBulkUpdateInput

> Input representation to asynchronously bulk update the status of the clause version
    records.

# ConnectApi.ComplianceBulkUpdateInput

Input representation to asynchronously bulk update the status of the clause version records.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordId | String | ID of the policy or regulation version record to update the clause versions for. | Required | 65.0 |
| targetStatus | ConnectApi.​BulkUpdateTarget​StatusEnum | Target status that you want to update the clause versions to.Valid values are:ActiveDraftPendingApprovalPublishedRetiredReviewThe Active, Draft, Published, and Retired statuses are applicable for both policy and regulation versions, and the associated cause version records.The PendingApproval and Review statuses are applicable for only the policy version and the associated clause version records. | Required | 65.0 |
