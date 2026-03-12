---
title: "soql Step Type
        Properties"
domain: bi-dev-guide-json
topic: soql-step-type-properties
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.326Z
estimatedTokens: 619
keywords: [soql, Step, directly, query, Salesforce, objects—both, standard, custom—to, data, that’s, datasets, external, objects, created, OData]
---

# soql Step Type
        Properties

> Use to directly query Salesforce objects—both standard and custom—to
        get Salesforce data that’s not available in datasets. You can also query external objects
        created with an OData adapter for Salesforce Connect. To view the results in the dashboard,
        the user viewing the dashboard must have access to the object and fields queried by the
            soql step. The SOQL query returns only records to
        which the user has access.

# soql Step Type Properties

Use to directly query Salesforce objects—both standard and custom—to get Salesforce data that’s not available in datasets. You can also query external objects created with an OData adapter for Salesforce Connect. To view the results in the dashboard, the user viewing the dashboard must have access to the object and fields queried by the soql step. The SOQL query returns only records to which the user has access.

For more information about using Salesforce Connect to access external data, see the [Salesforce Connect](https://help.salesforce.com/articleView?id=platform_connect_about.htm&language=en_US) Salesforce Help.

| Field Name | Description |
| --- | --- |
| type | Step type. Set to soql. |
| label | Step label, which is primarily used for display in the dashboard designer user interface. |
| query | The SOQL query used to retrieve results from a Salesforce object. Because Salesforce—not Analytics—executes the query, the maximum number of returned results depends on the SOQL query limit. For more information about SOQL queries, see SOQL and SOSL Reference.NoteEvery field listed in your SOQL query must be listed in one of the metadata properties: strings, numbers, or groups. |
| strings | Flags the specified fields as non-grouping dimensions. For example, you can flag a field as a dimension for a values table in which no groupings are allowed. If you use a binding to determine the field, specify the binding here as well. |
| numbers | Flags the specified fields as measures. If you use a binding to determine the field, specify the binding here as well. |
| groups | Flags the specified fields as groupings. For example, you can flag a field as a grouping for a pivot table or chart. If you use a binding to determine the field, specify the binding here as well. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_json)

#### Note

This step type doesn’t support faceting. If needed, you can use a binding to filter other steps based on a selection in a soql step.

## soql Step

```

```

## Total Number of Active Salesforce Users

The following query gets the total number of active users from the Salesforce User object. In this example, we name the count expression as “foo” and then reference it by name in the numbers parameter.

```

```

If you don’t name the count expression, the query produces an "expr0" field that you can use in the numbers parameter.

```

```

## Code Examples

```
"soql": {
  "type": "soql",
  "query": "SELECT Name from ACCOUNT",
  "strings": ["Name"],
  "numbers": [],
  "groups": [],
  "selectMode": "single"
}
```

```
"soql": {
  "type": "soql",
  "query": "SELECT count(id) foo FROM User u WHERE u.IsActive = true",
  "strings": [],
  "numbers": ["foo"],
  "groups": [],
  "selectMode": "single"
}
```

```
"soql": {
  "type": "soql",
  "query": "SELECT count(id) FROM User u WHERE u.IsActive = true",
  "strings": [],
  "numbers": [ "expr0" ],
  "groups": [],
  "selectMode": "single"
}
```
