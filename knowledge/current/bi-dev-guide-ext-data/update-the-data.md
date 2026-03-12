---
title: "Update the Data"
domain: bi-dev-guide-ext-data
topic: update-the-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.140Z
estimatedTokens: 124
keywords: [Data, upload, dataset, adding, upserting, removing]
---

# Update the Data

> After you upload data into a dataset, update it by adding, upserting, or removing
    data.

# Update the Data

After you upload data into a dataset, update it by adding, upserting, or removing data.

To update data, set the Action field to Process and the Operation field to Append, Upsert, or Delete.

This example sets the Action and Operation fields to append data to the InsightsExternalData object. To enable faster uploads, use the Mode field with a value of Incremental.

```

```

If Mode isn’t specified or is set to None, the append is a bulk upload that processes data slower.

## Code Examples

```
SObject sobj = new SObject();
sobj.setType("InsightsExternalData");
sobj.setField("InsightsExternalDataId", parentID); 
sobj.setField("Action","Process");
sobj.setField("Operation","Append");
sobj.setField("Mode","Incremental");

SaveResult[] results = partnerConnection.update(new SObject[] { sobj });

for(SaveResult sv:results)
  if(sv.isSuccess())
    parentID = sv.getId();
```
