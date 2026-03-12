---
title: "Populate a Custom Big Object"
domain: bigobjects
topic: populate-a-custom-big-object
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.853Z
estimatedTokens: 229
keywords: [Populate, Custom, Big, Salesforce, APIs]
---

# Populate a Custom Big Object

> Use Salesforce APIs to populate a custom big object.

# Populate a Custom Big Object

Use Salesforce APIs to populate a custom big object.

You can use a CSV file to load data into a custom big object via Bulk API 2.0. The first row in the CSV file must contain the field labels used to map the CSV data to the fields in the custom big object during import.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bigobjects)

#### Note

Both Bulk API and Bulk API 2.0 support querying and inserting big objects.

Insertion is idempotent, so inserting data that already exists won't result in duplicates. Reinserting is helpful when uploading millions of records. If an error occurs, the reinsert reuploads the failed uploads without duplicate data. During the reinsertion, if no record exists for the provided index, a new record is inserted.

For example, this CSV file contains data for import into a Customer Interaction big object.

```

```

## Code Examples

```
Play Start,In-Game Purchase,Level Achieved,Lives Used,Platform,Play Stop,Score,Account
2015-01-01T23:01:01Z,A12569,57,7,PC,2015-01-02T02:27:01Z,55736,001R000000302D3
2015-01-03T13:22:01Z,B78945,58,7,PC,2015-01-03T15:47:01Z,61209,001R000000302D3
2015-01-04T15:16:01Z,D12156,43,5,iOS,2015-01-04T16:55:01Z,36148,001R000000302D3
```
