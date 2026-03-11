---
title: "Decision Table Tooling API Objects"
domain: omnistudio
topic: decision-table-tooling-api-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:10.078Z
keywords: [Decision, Table, Tooling, API, Objects]
---

# Decision Table Tooling API Objects

# Decision Table Tooling API Objects

Use Tooling API objects to create, update, and activate decision tables. Dataset links can also be created and associated with decision tables using Tooling API objects.

| Available in: Lightning Experience |
| --- |
| Available in: Decision Table is available with Enterprise, Unlimited, and Performance Editions with Loyalty Management or Rebate Management |
  

-   **[Decision Table Data Model](atlas.en-us.industries_reference.meta/industries_reference/decision_table_data_model.htm)**  
    Before you start using the Decision Table Tooling API objects, here's a representation of the data model.
-   **[DecisionTable](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_decisiontable.htm)**  
    Represents the information about a decision table. This object is available in API version 51.0 and later.
-   **[DecisionTableDatasetLink](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_decisiontabledatasetlink.htm)**  
    Represents a dataset link associated with a decision table. Use dataset links in a decision table to select an object whose records the decision table must evaluate and provide outcomes for. This object is available in API version 51.0 and later.
-   **[DecisionTableParameter](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_decisiontableparameter.htm)**  
    Represents an input or output field in a decision table. An input field is a field in the business rule object or custom metadata type that contains values used by the decision table to evaluate records and values. An output field is a field in the business rule object or custom metadata type that contains the values provided as outcomes for a rule. This object is available in API version 51.0 and later.
-   **[DecisionTblDatasetParameter](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_decisiontbldatasetparameter.htm)**  
    Represents the mapping between a decision table parameter and a field of the object selected in the dataset link. This mapping allows the decision table to know which object fields from the dataset link must be evaluated by the input fields of the decision table. This object is available in API version 51.0 and later.
-   **[DecisionTableSourceCriteria](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_decisiontablesourcecriteria.htm)**  
    Represents the fields and values from a data source that are used to define the condition logic of the data that's used in a decision table. This object is available in API version 59.0 and later.