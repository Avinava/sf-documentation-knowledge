---
title: "Manage Training with REST and Apex APIs"
domain: workforce-engagement
topic: manage-training-with-rest-and-apex-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.676Z
estimatedTokens: 429
keywords: [Manage, Training, REST, Apex, APIs, learning, module, assignments, programmatically, record, objects, API, Examples]
---

# Manage Training with REST and Apex APIs

> To manage learning module assignments programmatically, you can use REST or Apex APIs
  with record objects.

# Manage Training with REST and Apex APIs

To manage learning module assignments programmatically, you can use REST or Apex APIs with record objects.

| Workforce Engagement is available in Lightning Experience |
| --- |
| Available in: Enterprise, Performance, and Unlimited Editions |


[Person Training](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_persontraining.htm "HTML (New Window)") records represent learning assignments in Workforce Engagement. Assignments are Trailhead learning modules, which are [Learning Content](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_learningcontent.htm "HTML (New Window)") records.

## REST API Examples

These REST API examples list, create, update, and delete learning assignments in PersonTraining records.

**List all learning assignments**

```

```

**Create a learning assignment**

```

```

**Update a learning assignment**

In this example, 0hRSG00000000zJ2AQ is the ID of the Person Training record to update.

```

```

**Delete a learning assignment**

In this example, 0hRSG00000000zJ2AQ is the ID of the Person Training record to delete.

```

```

## Apex API Examples

If you use Apex classes to look up learning modules programmatically, place a limit clause on the SOQL query, for example:

```

```

These example Apex classes create, search, update, delete, and route learning assignments.

**Create a learning assignment**

```

```

**Search for a learning assignment**

```

```

**Update a learning assignment**

```

```

**Delete a learning assignment**

```

```

**Route a learning assignment**

```

```

## Code Examples

```
/services/data/v54.0/query?q=SELECT+Id+from+PersonTraining
```

```
/services/data/v54.0/sobjects/PersonTraining
{
"Name": "Person Training 001",
"TrainingId": "028af5d6-7e23-3cea-66e5-fd8e3bfe7e9c",  
"TrainingType": "T"
}
```

```
/services/data/v54.0/sobjects/PersonTraining/0hRSG00000000zJ2AQ
{
"Name": "Person Training Module 003"
}
```

```
/services/data/v54.0/sobjects/PersonTraining/0hRSG00000000zJ2AQ
```

```apex
List<LearningContent> aa = [SELECT ExternalId FROM LearningContent
WHERE Title LIKE '%Accessibility%' LIMIT 5];
```
