---
title: "setSelected(selectedRecords)"
domain: pages
topic: setselectedselectedrecords
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.607Z
estimatedTokens: 237
keywords: [setSelected, selectedRecords, selected, records, argument, Usage]
---

# setSelected(selectedRecords)

> Set the selected records to the records specified in the
      selectedRecords argument.

# setSelected(selectedRecords)

Set the selected records to the records specified in the selectedRecords argument.

## Signature

public Void setSelected(sObject\[\] selectedRecords)

## Parameters

selectedRecords

Type: sObject\[\]

## Return Value

Type: Void

## Usage

Use the setSelected() method in your Apex controller or controller extension to manually set the records displayed on a Visualforce page. The setSelected() method overwrites any previously selected records with the records specified in the selectedRecords argument.

## Example

AccountNamePage shows a table of account names. MyControllerExtension’s constructor contains a SOQL query that returns a list of accounts. This list is passed into setSelected() so that the account records in the list are selected and displayed in the table.

```

```

#### See Also

-   [Accessing Data with List Controllers](atlas.en-us.pages.meta/pages/pages_controller_sosc_access_data.htm)

## Code Examples

```apex
<!-- AccountNamePage.page -->
<apex:page standardController="Account" recordSetVar="accounts" extensions="MyControllerExtension">
    <apex:pageBlock>
        <apex:pageBlockTable value="{!accounts}" var="acc">
            <apex:column value="{!acc.name}"/>
        </apex:pageBlockTable>
    </apex:pageBlock>
</apex:page>


// MyControllerExtension.cls
public with sharing class MyControllerExtension {
    private ApexPages.StandardSetController setController;

    public MyControllerExtension(ApexPages.StandardSetController setController) {
        this.setController = setController;
        
        Account [] records = [SELECT Id, Name FROM Account LIMIT 30];
        setController.setSelected(records);
    }
}
```

## Related Topics

- Accessing Data with List Controllers (atlas.en-us.pages.meta/pages/pages_controller_sosc_access_data.htm)
