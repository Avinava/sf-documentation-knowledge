---
title: "Datacloud Contact Import Input"
domain: chatterapi
topic: datacloud-contact-import-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.483Z
estimatedTokens: 197
keywords: [Datacloud, Contact, Import, Input, representation, criteria, importing, records, contacts, leads]
---

# Datacloud Contact Import Input

> Input representation of the criteria for importing records as contacts
      or leads.

# Datacloud Contact Import Input

Input representation of the criteria for importing records as contacts or leads.

Root XML tag

<DatacloudContactImportInput>

JSON Example Add Contact

To add the records as contacts, include a parentAccountId.

```

```

JSON Example Add Lead

Without a parentAccountId, the records are added as leads.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| datacloudContactIds | String[] | A list of the contactIds to import. There can be from 1 up to 200 contactIds in a comma-separated list. Requests with more than 200 contacts fail. | Required | 36.0 |
| parentAccountId | String | The accountId for the selected account that is in your organization. | Optional | 36.0 |

## Code Examples

```
{
   "datacloudContactIds": [ 10344600,42701050,45995423 ],
   "parentAccountId":"09KR00000004C9rMAE"
}
```

```
{
   "datacloudContactIds": [ 10344600,42701050,45995423 ]
}
```
