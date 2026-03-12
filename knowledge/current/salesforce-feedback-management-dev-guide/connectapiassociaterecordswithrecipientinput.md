---
title: "ConnectApi.AssociateRecordsWithRecipientInput"
domain: salesforce-feedback-management-dev-guide
topic: connectapiassociaterecordswithrecipientinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.366Z
estimatedTokens: 103
keywords: [Records, associated, survey, invitation]
---

# ConnectApi.AssociateRecordsWithRecipientInput

> Records associated with the survey invitation.

# ConnectApi.AssociateRecordsWithRecipientInput

Records associated with the survey invitation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| associateRecord​Ids | List<String> | ID of the associated records. | Required | 50.0 |
| recipientId | String | Participant ID with whose invitation the record should be associated. | Required | 50.0 |
