---
title: "Supported PushTopic Queries"
domain: api-streaming
topic: supported-pushtopic-queries
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:00.488Z
estimatedTokens: 722
keywords: [PushTopic, Queries, custom, objects, subset, standard, including, Considerations]
---

# Supported PushTopic Queries

> All custom objects are supported in PushTopic queries. A subset of standard objects is
      supported in PushTopic queries, including:

# Supported PushTopic Queries

All custom objects are supported in PushTopic queries. A subset of standard objects is supported in PushTopic queries, including:

-   Account
-   Campaign
-   Case
-   Contact
-   ContractLineItem
-   Entitlement
-   Lead
-   LiveChatTranscript
-   MessagingSession
-   Opportunity
-   Quote
-   QuoteLineItem
-   ServiceAppointment
-   ServiceContract
-   Task
-   UserServicePresence
-   WorkOrder
-   WorkOrderLineItem

It’s possible that not all objects are available in your org. Some objects require specific feature settings and permissions to be enabled.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_streaming)

#### Important

Tasks that are created or updated using these methods don’t appear in task object topics in the streaming API.

-   Lead conversion
-   Entity merge
-   Mass email contacts/leads

Also, the standard SOQL operators and most SOQL statements and expressions are supported. Some SOQL statements aren’t supported. See [Unsupported PushTopic Queries](atlas.en-us.api_streaming.meta/api_streaming/unsupported_soql_statements.htm).

The following are examples of supported SOQL statements.

-   Custom object

    ```

    ```

-   Standard objects (can include custom fields)
    -   Account

        ```

        ```

    -   Campaign

        ```

        ```

    -   Case

        ```

        ```

    -   Contact

        ```

        ```

    -   Lead

        ```

        ```

    -   Opportunity

        ```

        ```

    -   Task

        ```

        ```


## Considerations

System fields—In general, changes in fields that the system populates, such as LastModifiedDate and LastActivityDate, don’t trigger notifications.

Task records—Check out these considerations for task records.

-   To receive notifications on the IsClosed field, the subscriber must subscribe to the Status field referenced in the query.
-   To receive notifications on the WhoCount and WhatCount fields, the subscriber must subscribe to the WhoId and WhatId fields. Subscriptions based only on the WhoCount or WhatCount fields aren’t supported.
-   To receive notifications for task record deletions, the subscribed user must have the View All Data or the Modify All Data permission when the organization-wide sharing setting for activities is private.

Custom picklist values—If the PushTopic query references a custom picklist with a global value set, the PushTopic notification message includes the API name of the value instead of the label. For example, you have a custom picklist field with the name Colour\_\_c. One picklist value has the API name of RD and the label of Red. The PushTopic query references the Colour\_\_c picklist field: SELECT Id, Colour\_\_c, Salutation FROM Contact. The PushTopic notification message contains the Colour\_\_c field with this value: RD.

## Code Examples

```
SELECT Id, MyCustomField__c FROM MyCustomObject__c
```

```
SELECT Id, Name FROM Account WHERE NumberOfEmployees > 1000
```

```
SELECT Id, Name FROM Campaign WHERE Status = 'Planned'
```

```
SELECT Id, Subject FROM Case WHERE Status = 'Working' AND IsEscalated = TRUE
```

```
SELECT Id, Name, Email FROM Contact;
```

## Related Topics

- Unsupported PushTopic Queries (atlas.en-us.api_streaming.meta/api_streaming/unsupported_soql_statements.htm)
