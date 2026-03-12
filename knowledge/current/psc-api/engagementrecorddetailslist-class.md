---
title: "EngagementRecordDetailsList Class"
domain: psc-api
topic: engagementrecorddetailslist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.474Z
estimatedTokens: 627
namespace: DataRetrieval
keywords: [EngagementRecordDetailsList, Stores, DataRetrieval.EngagementRecordDetails, records, engagementRecordDetails]
---

# EngagementRecordDetailsList Class

> Stores the DataRetrieval.EngagementRecordDetails
    records.

**Namespace:** `DataRetrieval`

# EngagementRecordDetailsList Class

Stores the DataRetrieval.EngagementRecordDetails records.

## Namespace

[DataRetrieval](atlas.en-us.psc_api.meta/psc_api/apex_namespace_DataRetrieval.htm "The DataRetrieval namespace provides classes to store the record details and conversation transcripts between customers and agents.")

-   **[EngagementRecordDetailsList Constructors](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetailsList.htm#apex_DataRetrieval_EngagementRecordDetailsList_constructors)**
    Use the EngagementRecordDetailsList constructors to initialize the EngagementRecordDetailsList class that stores the engagement record details.

## EngagementRecordDetailsList Constructors

Use the EngagementRecordDetailsList constructors to initialize the EngagementRecordDetailsList class that stores the engagement record details.

The EngagementRecordDetailsList class includes these constructors.

-   **[EngagementRecordDetailsList(engagementRecordDetails)](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetailsList.htm#apex_DataRetrieval_EngagementRecordDetailsList_ctor)**
    Creates an instance of the DataRetrieval.EngagementRecordDetailsList class by using specified parameters to store the engagement record details.
-   **[EngagementRecordDetailsList()](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetailsList.htm#apex_DataRetrieval_EngagementRecordDetailsList_ctor_2)**
    Creates an instance of the DataRetrieval.EngagementRecordDetailsList class.

### EngagementRecordDetailsList(engagementRecordDetails)

Creates an instance of the DataRetrieval.EngagementRecordDetailsList class by using specified parameters to store the engagement record details.

#### Signature

public EngagementRecordDetailsList(List<DataRetrieval.EngagementRecordDetails> engagementRecordDetails)

```

```

#### Parameters

engagementRecordDetails

Type: [List<DataRetrieval.EngagementRecordDetails>](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetails.htm#apex_class_DataRetrieval_EngagementRecordDetails "Stores the details of the conversation between a customer and an agent, including engagement record ID, start time, end time, and conversation identifier.")

The DataRetrieval.EngagementRecordDetails records.

### EngagementRecordDetailsList()

Creates an instance of the DataRetrieval.EngagementRecordDetailsList class.

#### Signature

public EngagementRecordDetailsList()

```

```

## Code Examples

```apex
DataRetrieval.EngagementRecordDetailsList, newinstance, [List<DataRetrieval.EngagementRecordDetails>], DataRetrieval.EngagementRecordDetailsList
```

```
DataRetrieval.EngagementRecordDetailsList, newinstance, [], DataRetrieval.EngagementRecordDetailsList
```

## Related Topics

- DataRetrieval (atlas.en-us.psc_api.meta/psc_api/apex_namespace_DataRetrieval.htm)
- EngagementRecordDetailsList Constructors (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetailsList.htm)
- EngagementRecordDetailsList(engagementRecordDetails) (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetailsList.htm)
- EngagementRecordDetailsList() (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetailsList.htm)
- List<DataRetrieval.EngagementRecordDetails> (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_EngagementRecordDetails.htm)
