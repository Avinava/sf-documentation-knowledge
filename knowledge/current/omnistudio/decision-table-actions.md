---
title: "Decision Table Actions"
domain: omnistudio
topic: decision-table-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:51.109Z
estimatedTokens: 985
keywords: [Decision, Table, Actions, Invoke, decision, table., Supported, REST, HTTP, Without, Dataset, Link, Inputs, Note, Outputs, Usage]
---

# Decision Table Actions

> Invoke a decision table.

# Decision Table Actions

Invoke a decision table.

Decision tables provide outcomes based on your business rules. For more information about invoking decision tables, see [Invoke a Decision Table](https://help.salesforce.com/articleView?id=concept_decision_table_run.htm&language=en_US) in Salesforce Help.

This object is available in API version 51.0 and later.

## Supported REST HTTP Methods

Formats

JSON

HTTP Methods

GET, POST

Authentication

Authorization: Bearer token

The specific URI endpoint and the structure of the JSON payload depend on whether a dataset link is configured for your decision table. To check if a dataset link is enabled for your decision table, you can query the DecisionTableDataLink table. If an entry for your decision table exists in this table, a dataset link is active. For more information about dataset links, see [DecisionTableDatasetLink](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/tooling_api_objects_decisiontabledatasetlink.htm).

## Decision Table Without Dataset Link

If your decisionTableId isn't found in the DecisionTableDatasetLink table, you must append \_Default to your decision table's API name to construct the endpoint URI.

URI without dataset link

/services/data/vXX.X/actions/custom/decisionTableAction/dtapi\_Default

## Decision Table With Dataset Link

If your decisionTableId is present in the DecisionTableDatasetLink table, the endpoint URI uses the API name of the dataset link.

URI with dataset link

/services/data/vXX.X/actions/custom/decisionTableAction/dslapiname

## Inputs

You can choose to invoke a decision table with or without dataset link.

To execute a default Decision Table without dataset link, specify the input fields that were defined at the time of the Decision Table creation in the flow. The input fields are optional. However, you must specify at least one field as the input parameter. Use the GET method to retrieve input parameters of a Decision Table definition.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

For example, to decide discount percentage for products, you can pass the input parameters, including Brand\_\_c, Highest\_Price\_Point\_c, and Lowest\_Price\_Point\_c.

To execute a Decision Table with dataset link, specify the list that contains the source object and its corresponding field to be used in the dataset link that is associated with the decision table.

| Input | Details |
| --- | --- |
| sObjectType | TypesObjectDescriptionThe name of the dataset link’s object whose records, the decision table must provide an outcome for. |

## Outputs

| Output | Details |
| --- | --- |
| outcomeList | TypesObjectDescriptionOutcome list that stores two or more outcomes provided by the decision table.NoteA decision table that is invoked by the Decision Table custom invocable action can provide up to 50 outcomes. |
| outcomeType | TypestringDescriptionIndicates the type of outcome provided by the decision table after the request is successful. Valid values are:Multiple Match—Outcome returns multiple matches.No Match—Outcome returns no match.Single Match—Outcome returns single match. |
| singleOutcome | TypesObjectDescriptionStores the outcome in case a single outcome is provided by the decision table. In case multiple outcomes are provided, it stores one of the outcomes. |

## Usage

**JSON Sample Request without dataset link**

When you invoke a decisionTableAction without a dataset link, the request contains an array of input objects.

```

```

**JSON Sample Request with dataset Link**

When you invoke a decisionTableAction with a dataset link, the input objects in the request are nested within another object, which is typically the name of the transaction object.

```

```

**JSON Sample Request with dataset Link containing multiple source objects**

```

```

**JSON Sample Response**

```

```

## Code Examples

```
{
   "inputs" : [
      {
        "Product__c": "Cloud Kicks",
        "Price__c": 1000
      }
   ]
}
```

```
{
   "inputs" : [
      {
         "Transaction__c" : {
            "Product__c": "Cloud Kicks",
            "Price__c": 1000
         }
      }
   ]
}
```

```
{
   "inputs" : [
      {
         "Transaction__c" : {
            "Product__c": "Cloud Kicks",
            "Price__c": 1000
         }
      }
      {
         "Catalog__c" : {
            "name": "Highest_Price_Point_c",
            "value": "500",
         }
      }
   ]
}
```

```
[{
   “outcomeType” : “SINGLE MATCH”,
   “singleOutcome”: { “Points”: 100 },
   "outcomeList" : [
      {
         “Points”: 100
      }
   ]
}]
```
