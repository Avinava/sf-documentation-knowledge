---
title: "Datacloud Contact Import"
domain: chatterapi
topic: datacloud-contact-import
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.890Z
estimatedTokens: 405
keywords: [Datacloud, Contact, Import, records, contacts, leads]
---

# Datacloud Contact Import

> Import records as contacts or
      leads.

# Datacloud Contact Import

Import records as contacts or leads.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

When your Data.com Prospector or Data.com Clean contract expires, Data.com features, objects, and fields will be removed from your org.

To support customers’ needs around compliance and to remain a leader in trust and privacy, Salesforce removed all contact data from the Data.com service on February 1, 2021.

For more information, see [Data.com Prospector and Clean Retirement](https://help.salesforce.com/articleView?id=000270376&language=en_US&type=1 "HTML (New Window)").

Resource

```

```

Available version

36.0

HTTP methods

POST

Request body for POST

The POST request can have contact IDs.

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

Response body for POST

[Datacloud Import](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_import.htm "Represents the Data.com contact import response.")

## Code Examples

```
/connect/datacloud/contact-imports
```

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

## Related Topics

- Datacloud Import (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_import.htm)
