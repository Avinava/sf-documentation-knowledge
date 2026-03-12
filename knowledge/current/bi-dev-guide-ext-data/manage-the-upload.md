---
title: "Manage the Upload"
domain: bi-dev-guide-ext-data
topic: manage-the-upload
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.147Z
estimatedTokens: 159
keywords: [Manage, Upload, you’ve, created, uploaded, data, parts, InsightsExternalData, InsightsExternalDataPart, objects, Action, Process, start, processing]
---

# Manage the Upload

> After you’ve created a header and uploaded the data parts by using the InsightsExternalData and InsightsExternalDataPart objects,
        update the Action field on the header object to Process to start processing the data.

# Manage the Upload

After you’ve created a header and uploaded the data parts by using the InsightsExternalData and InsightsExternalDataPart objects, update the Action field on the header object to Process to start processing the data.

The following example sets the Action field and updates the row in the InsightsExternalData object.

```

```

When the Action field is set to Process, a dataflow job is created and marked active. You can monitor the Status field of the header object to determine when the file upload is completed. After the Action field is updated to request processing, no user edits are allowed on the objects.

## Code Examples

```
SObject sobj = new SObject();
sobj.setType("InsightsExternalData"); 
sobj.setField("Action","Process");
sobj.setId(parentID); // This is the rowID from the previous example.
SaveResult[] results = partnerConnection.update(new SObject[] { sobj });
 
for(SaveResult sv:results)
    if(sv.isSuccess())
        rowId = sv.getId();
```
