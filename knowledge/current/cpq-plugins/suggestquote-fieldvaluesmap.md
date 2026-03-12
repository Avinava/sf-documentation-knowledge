---
title: "suggest(quote, fieldValuesMap)"
domain: cpq-plugins
topic: suggestquote-fieldvaluesmap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.874Z
estimatedTokens: 140
keywords: [suggest, quote, fieldValuesMap, Overrides, user, suggestion, input, Salesforce, CPQ, calls, isSuggestCustom]
---

# suggest(quote, fieldValuesMap)

> Overrides the  user suggestion input. Salesforce CPQ calls this
      method only when isSuggestCustom returns
    TRUE.

# suggest(quote, fieldValuesMap)

Overrides the user suggestion input. Salesforce CPQ calls this method only when isSuggestCustom returns TRUE.

## Signature

global List<PricebookEntry> suggest(SObject quote, Map<String,Object\> fieldValuesMap)

## Parameters

quote

Type: SObject

The current quote.

fieldValuesMap

Type: Map<String,Object>

A map of the search criteria. The map key is a Product2 API name and the value is the desired search value. Contains only keys for non-null values.

## Return Value

Type: List<PricebookEntry>

## Example

```

```

## Code Examples

```apex
/** 
     * When Using Guided Selling in CUSTOM mode, Over-Ride entire search
     * Product2 Fields in the Search Results Field Set should be Set.
     */
    global List<PricebookEntry> suggest(SObject quote, Map<String, Object> inputValuesMap) {
        System.debug('METHOD CALLED: suggest');
        //GET ALL POSSIBLE FIELDS FROM THE SEARCH RESULTS FIELD SET
        List<Schema.FieldSetMember> searchResultFieldSetFields = SObjectType.Product2.fieldSets.SBQQ__SearchResults.getFields();

        //BUILD THE SELECT STRING
        String selectClause = 'SELECT ';

        for (Schema.FieldSetMember field : searchResultFieldSetFields) {
            selectClause += 'Product2.' + field.getFieldPath() + ', ';
        }
        selectClause += 'Id, UnitPrice, Pricebook2Id, Product2Id, Product2.Id';

        //BUILD THE WHERE CLAUSE
        String whereClause = '';

        whereClause += 'Pricebook2Id = \'' + quote.get('SBQQ__Pricebook__c') + '\'';

        //BUILD THE QUERY
        String query = selectClause + ' FROM PricebookEntry WHERE ' + whereClause;

        //DO THE QUERY
        List<PricebookEntry> pbes = new List<PricebookEntry>();
        pbes = Database.query(query);

        return pbes;
    }
}
```
