---
title: "Building a Custom List Controller"
domain: pages
topic: building-a-custom-list-controller
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.428Z
estimatedTokens: 278
keywords: [Building, Custom, Controller, similar, standard, controllers, implement, Apex, logic, define, show, act, records]
---

# Building a Custom List Controller

> A custom list controller is similar to a standard list controller. Custom list
            controllers can implement Apex logic that you define to show or act on a set of
            records.

# Building a Custom List Controller

A custom list controller is similar to a standard list controller. Custom list controllers can implement Apex logic that you define to show or act on a set of records.

For example you can create the following custom list controller based on a SOQL query:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The list of sObjects returned by getRecords() is immutable. For example, you can’t call clear() on it. You can make changes to the sObjects contained in the list, but you can’t add items to or remove items from the list itself.

The following Visualforce markup shows how the custom controller above can be used in a page:

```

```

You can also create a custom list controller that uses anti- and semi-joins as part of the SOQL query. The following code is implemented as an extension to the account standard controller:

```

```

The page that displays these records uses a mix of standard list controller actions, but depends on iterating over the records returned from the custom list controller:

```

```

## Code Examples

```apex
public class opportunityList2Con {
    // ApexPages.StandardSetController must be instantiated
    // for standard list controllers
    public ApexPages.StandardSetController setCon {
        get {
            if(setCon == null) {
                setCon = new ApexPages.StandardSetController(Database.getQueryLocator(
                    [SELECT Name, CloseDate FROM Opportunity]));
            }
            return setCon;
        }
        set;
    }

    // Initialize setCon and return a list of records
    public List<Opportunity> getOpportunities() {
        return (List<Opportunity>) setCon.getRecords();
    }
}
```

```
<apex:page controller="opportunityList2Con">
    <apex:pageBlock>
        <apex:pageBlockTable value="{!opportunities}" var="o">
            <apex:column value="{!o.Name}"/>
            <apex:column value="{!o.CloseDate}"/>
        </apex:pageBlockTable>
    </apex:pageBlock>
</apex:page>
```

```apex
public with sharing class AccountPagination {
    private final Account acct;  

    // The constructor passes in the standard controller defined
    // in the markup below
    public AccountPagination(ApexPages.StandardSetController controller) {
        this.acct = (Account)controller.getRecord(); 
    }    
    
    public ApexPages.StandardSetController accountRecords {
        get {
            if(accountRecords == null) {
                accountRecords = new ApexPages.StandardSetController(
                    Database.getQueryLocator([SELECT Name FROM Account WHERE Id NOT IN 
                        (SELECT AccountId FROM Opportunity WHERE IsClosed = true)]));
            }
            return accountRecords;
        }
        private set;
    }
    public List<Account> getAccountPagination() {
         return (List<Account>) accountRecords.getRecords();
    }  
}
```

```
<apex:page standardController="Account" recordSetVar="accounts" extensions="AccountPagination">
    <apex:pageBlock title="Viewing Accounts">
        <apex:form id="theForm">
            <apex:pageBlockSection >
                <apex:dataList value="{!accountPagination}" var="acct" type="1">
                    {!acct.name}
                </apex:dataList>
            </apex:pageBlockSection>
            <apex:panelGrid columns="2">
                <apex:commandLink action="{!previous}">Previous</apex:commandlink>
                <apex:commandLink action="{!next}">Next</apex:commandlink>
            </apex:panelGrid>
        </apex:form> 
    </apex:pageBlock>
</apex:page>
```
