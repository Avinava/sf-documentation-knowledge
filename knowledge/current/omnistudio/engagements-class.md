---
title: "Engagements Class"
domain: omnistudio
topic: engagements-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.574Z
estimatedTokens: 548
namespace: DataRetrieval
keywords: [Engagements, Stores, DataRetrieval.Engagement, records]
---

# Engagements Class

> Stores the a list of DataRetrieval.Engagement
    records.

**Namespace:** `DataRetrieval`

# Engagements Class

Stores the a list of DataRetrieval.Engagement records.

## Namespace

[DataRetrieval](atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_DataRetrieval.htm "The DataRetrieval namespace provides classes to store the record details and conversation transcripts between customers and agents.")

-   **[Engagements Constructors](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagements.htm#apex_DataRetrieval_Engagements_constructors)**
    Use the Engagements constructor to initialize the Engagements class that stores the list of engagement records.

## Engagements Constructors

Use the Engagements constructor to initialize the Engagements class that stores the list of engagement records.

The Engagements class includes these constructors.

-   **[Engagements(records)](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagements.htm#apex_DataRetrieval_Engagements_ctor)**
    Creates an instance of the DataRetrieval.Engagements class by using specified parameters to store the engagement records.
-   **[Engagements()](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagements.htm#apex_DataRetrieval_Engagements_ctor_2)**
    Creates an instance of the DataRetrieval.Engagements class.

### Engagements(records)

Creates an instance of the DataRetrieval.Engagements class by using specified parameters to store the engagement records.

#### Signature

public Engagements(List<DataRetrieval.Engagement> records)

```

```

#### Parameters

records

Type: [List<DataRetrieval.Engagement>](atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagement.htm#apex_class_DataRetrieval_Engagement "Stores the object name and ID of an engagement record. An engagement record represents an engagement interaction, a messaging session, or a voice call between a customer and an agent.")

The DataRetrieval.Engagement records, including the objectApiNames and recordIds parameters.

### Engagements()

Creates an instance of the DataRetrieval.Engagements class.

#### Signature

public Engagements()

```

```

## Code Examples

```apex
DataRetrieval.Engagements, newinstance, [List<DataRetrieval.Engagement>], DataRetrieval.Engagements
```

```
DataRetrieval.Engagements, newinstance, [], DataRetrieval.Engagements
```

## Related Topics

- DataRetrieval (atlas.en-us.industries_reference.meta/industries_reference/apex_namespace_DataRetrieval.htm)
- Engagements Constructors (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagements.htm)
- Engagements(records) (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagements.htm)
- Engagements() (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagements.htm)
- List<DataRetrieval.Engagement> (atlas.en-us.industries_reference.meta/industries_reference/apex_class_DataRetrieval_Engagement.htm)
