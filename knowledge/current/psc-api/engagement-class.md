---
title: "Engagement Class"
domain: psc-api
topic: engagement-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.466Z
estimatedTokens: 708
namespace: DataRetrieval
keywords: [Engagement, Stores, record, interaction, messaging, session, voice, call, customer, agent, recordId, objectApiName]
---

# Engagement Class

> Stores the object name and ID of an engagement record. An engagement record represents an
    engagement interaction, a messaging session, or a voice call between a customer and an
    agent.

**Namespace:** `DataRetrieval`

# Engagement Class

Stores the object name and ID of an engagement record. An engagement record represents an engagement interaction, a messaging session, or a voice call between a customer and an agent.

## Namespace

[DataRetrieval](atlas.en-us.psc_api.meta/psc_api/apex_namespace_DataRetrieval.htm "The DataRetrieval namespace provides classes to store the record details and conversation transcripts between customers and agents.")

-   **[Engagement Constructors](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_Engagement.htm#apex_DataRetrieval_Engagement_constructors)**
    Use the Engagement constructor to initialize the Engagement class that associates an engagement record ID with the API name of the engagement object.

#### See Also

-   [https://help.salesforce.com/s/articleView?id=ind.engagement.htm&type=5](https://help.salesforce.com/s/articleView?id=ind.engagement.htm&type=5&language=en_US "https://help.salesforce.com/s/articleView?id=ind.engagement.htm&type=5 - HTML (New Window)")


## Engagement Constructors

Use the Engagement constructor to initialize the Engagement class that associates an engagement record ID with the API name of the engagement object.

The Engagement class includes these constructors.

-   **[Engagement(recordId, objectApiName)](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_Engagement.htm#apex_DataRetrieval_Engagement_ctor)**
    Creates an instance of the DataRetrieval.Engagement class to associate an engagement record ID with the API name of the engagement object.
-   **[Engagement()](atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_Engagement.htm#apex_DataRetrieval_Engagement_ctor_2)**
    Creates an instance of the DataRetrieval.Engagement class.

### Engagement(recordId, objectApiName)

Creates an instance of the DataRetrieval.Engagement class to associate an engagement record ID with the API name of the engagement object.

#### Signature

public Engagement(String recordId, String objectApiName)

```

```

#### Parameters

recordId

Type: String

ID of the engagement record that’s associated with the interaction between a customer and an agent.

objectApiName

Type: String

API name of the engagement object that’s associated with the interaction between a customer and an agent.

#### See Also

-   [https://help.salesforce.com/s/articleView?id=ind.engagement\_get\_engagements\_invocable\_action\_considerations.htm&type=5](https://help.salesforce.com/s/articleView?id=ind.engagement_get_engagements_invocable_action_considerations.htm&type=5&language=en_US "https://help.salesforce.com/s/articleView?id=ind.engagement_get_engagements_invocable_action_considerations.htm&type=5 - HTML (New Window)")


### Engagement()

Creates an instance of the DataRetrieval.Engagement class.

#### Signature

public Engagement()

```

```

## Code Examples

```
DataRetrieval.Engagement, newinstance, [String, String], DataRetrieval.Engagement
```

```
DataRetrieval.Engagement, newinstance, [], DataRetrieval.Engagement
```

## Related Topics

- DataRetrieval (atlas.en-us.psc_api.meta/psc_api/apex_namespace_DataRetrieval.htm)
- Engagement Constructors (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_Engagement.htm)
- Engagement(recordId, objectApiName) (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_Engagement.htm)
- Engagement() (atlas.en-us.psc_api.meta/psc_api/apex_class_DataRetrieval_Engagement.htm)
