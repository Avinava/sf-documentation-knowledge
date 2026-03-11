---
title: "Service Process Studio Invocable Actions"
domain: omnistudio
topic: service-process-studio-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:11.399Z
keywords: [Service, Process, Studio, Invocable, Actions, Note]
---

# Service Process Studio Invocable Actions

# Service Process Studio Invocable Actions

Use actions to invoke Service Process Studio actions in a flow.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

You can also use the Invocable namespace, which contains the classes and methods required to invoke the Service Process Studio invocable actions from Apex. See [Invocable Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_Invocable.htm).

-   **[Integration Definition Actions](atlas.en-us.industries_reference.meta/industries_reference/actions_obj_integration_definition.htm)**  
    Perform the asynchronous operation configured in an Integration Definition without blocking the invoking flow. The results of the asynchronous operation are published in a platform event. The calling flow can wait for the Platform Event using a pause step if required. The asynchronous operation is typically an API call.