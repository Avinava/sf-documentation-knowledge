---
title: "getRecord()"
domain: pages
topic: getrecord
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.542Z
estimatedTokens: 200
keywords: [getRecord, record, currently, context, query, Visualforce, URL, Usage, sObject, changes, selected, records, retrieves, prototype, contained, performing, mass, updates]
---

# getRecord()

> Returns the record that is currently in context, based
on the value of the id query
string parameter in the Visualforce page URL.

# getRecord()

Returns the record that is currently in context, based on the value of the id query string parameter in the Visualforce page URL.

## Signature

public SObject getRecord()

## Return Value

Type: sObject

## Usage

Note that only the fields that are referenced in the associated Visualforce markup are available for querying on this SObject. All other fields, including fields from any related objects, must be queried using a SOQL expression.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

You can work around this restriction by including a hidden component that references any additional fields that you want to query. Hide the component from display by setting the component's rendered attribute to false.

## Example

```

```

## Code Examples

```
<apex:outputText 
value="{!account.billingcity} 
{!account.contacts}"
rendered="false"/>
```

## Related Topics

- Building a Custom List Controller (atlas.en-us.pages.meta/pages/pages_custom_list_controller.htm)
