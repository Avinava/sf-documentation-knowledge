---
title: "Using Apex to Work with Salesforce Records"
domain: lightning
topic: using-apex-to-work-with-salesforce-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.953Z
estimatedTokens: 1882
keywords: [Apex, Work, Salesforce, Records, customize, user, Lightning, Data, Service, SOQL, query, select, certain, provisions, that’s]
---

# Using Apex to Work with Salesforce Records

> Use Apex only if you need to customize your user interface to do more than what
        Lightning Data Service allows, such as using a SOQL query to select certain records. Apex
        provisions data that’s not managed and you must handle data refresh on your own.

# Using Apex to Work with Salesforce Records

Use Apex only if you need to customize your user interface to do more than what Lightning Data Service allows, such as using a SOQL query to select certain records. Apex provisions data that’s not managed and you must handle data refresh on your own.

The term sObject refers to any object that can be stored in Lightning Platform. This could be a standard object, such as Account, or a custom object that you create, such as a Merchandise object.

An sObject variable represents a row of data, also known as a record. To work with an object in Apex, declare it using the SOAP API name of the object. For example:

```

```

For more information on working on records with Apex, see [Working with Data in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_data_intro.htm "HTML (New Window)").

This example controller persists an updated Account record. Note that the update method has the @AuraEnabled annotation, which enables it to be called as a server-side controller action.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

When using Apex controllers, load the data once and pass it to child components as attributes. This approach reduces the number of listeners and minimizes server calls, which improves performance and ensures that your components show consistent data.

## Differences Between Lightning Data Service and Apex

The [lightning:record\*Form](atlas.en-us.lightning.meta/lightning/data_service.htm "Use Lightning Data Service to load, create, edit, or delete a record in your component without requiring Apex code. Lightning Data Service handles sharing rules and field-level security for you. In addition to simplifying access to Salesforce data, Lightning Data Service improves performance and user interface consistency.") and force:recordData components are the easiest way to work with records. They are built on top of Lightning Data Service, which manages field-level security and sharing for you in addition to managing data loading and refresh. You can use these components for objects that are [supported by User Interface API](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm "HTML (New Window)")

Use Apex only if you’re working with a scenario listed at [Using Apex](atlas.en-us.lightning.meta/lightning/apex_intro.htm "Use Apex to write server-side code, such as controllers and test classes. Use Apex only if you need to customize your user interface to do more than what Lightning Data Service allows, such as using a SOQL query to select certain records. Apex provisions data that’s not managed and you must handle data refresh on your own."), You can call the Apex method imperatively, such as in response to a button click, as shown in the **Loading Record Data from a Standard Object** section. Alternatively, to load record data during component initialization, use the init handler, as shown in the **Loading Record Data By Criteria** section. When using Apex to load or provision data, you must handle data refresh on your own by invoking the Apex method again.

## Loading Record Data from an Object

Load records from an object in an Apex controller. The following Apex controller has methods that return a list of tasks. Task is an object that isn’t supported by Lightning Data Service and the User Interface API. Therefore, we recommend using Apex to load task record data.

```

```

This example component uses the previous Apex controller to display a list of task record data when you press a button. The flexipage:availableForAllPageTypes interface denotes that you can use this example on a Lightning page.

```

```

When you press the button, the following client-side controller calls the getTasks() method and sets the tasks attribute on the component. For more information about calling server-side controller methods, see [Calling a Server-Side Action](atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm "Call a server-side controller action from a client-side controller. In the client-side controller, you set a callback, which is called after the server-side action is completed. A server-side action can return any object containing serializable JSON data.").

```

```

## Loading Record Data By Criteria

As we’ve learned, to load a simple list of record data, you can use base components or force:recordData, as shown at [Loading a Record](atlas.en-us.lightning.meta/lightning/data_service_load_record.htm "Loading a record can be accomplished entirely in markup using lightning:recordForm. If you need a custom layout, use lightning:recordViewForm. If you need more customization than the form-based components allow for viewing record data, use force:recordData."). But to use a SOQL query to select certain records, use an Apex controller.

Remember that the method must be static, and global or public. The method must be decorated with @AuraEnabled(cacheable=true).

For example, query related cases based on an account Id and limit the result to 10 records.

```

```

The client-side controller loads related cases using the init handler. The action.setParams() method passes in the record Id of the account record being viewed to the Apex controller,

```

```

In your custom component, load a form that enables editing and updating of cases on an account record using lightning:recordEditForm, by performing these steps.

-   Query the relevant cases and set the result to the component attribute v.cases.
-   Iterate over the cases by passing in the case Id to the recordId attribute on lightning:recordEditForm.

The example implements the flexipage:availableForRecordHome and force:hasRecordId interfaces so you can use the example on an account record page.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The case data on the account record is managed by Lightning Data Service since it uses lightning:recordEditForm; therefore, the case data that’s referenced (subject, status, and origin) reflects the latest data. However, if a case on the account is deleted or a new case is added to the account, you must invoke the Apex method again to query the new results.

For read-only data, use lightning:outputField. To work with read-only data only, use lightning:recordViewForm or lightning:recordForm. For granular control of your UI, use force:recordData. For more information, see [Lightning Data Service](atlas.en-us.lightning.meta/lightning/data_service.htm "Use Lightning Data Service to load, create, edit, or delete a record in your component without requiring Apex code. Lightning Data Service handles sharing rules and field-level security for you. In addition to simplifying access to Salesforce data, Lightning Data Service improves performance and user interface consistency.").

#### See Also

-   [Securing Data in Apex Controllers](atlas.en-us.lightning.meta/lightning/apex_crud_fls.htm "By default, Apex runs in system mode, which means that it runs with substantially elevated permissions, acting as if the user had most permissions and all field- and object-level access granted. Because these security layers aren’t enforced like they are in the Salesforce UI, you must write code to enforce them. Otherwise, your components may inadvertently expose sensitive data that would normally be hidden from users in the Salesforce UI.")

## Code Examples

```
Account a = new Account();
MyCustomObject__c co = new MyCustomObject__c();
```

```apex
public with sharing class AccountController {

    @AuraEnabled
    public static void updateAnnualRevenue(String accountId, Decimal annualRevenue) {
        Account acct = [SELECT Id, Name, BillingCity FROM Account WHERE Id = :accountId];
        acct.AnnualRevenue = annualRevenue;

        // Perform isAccessible() and isUpdateable() checks here 
        update acct;
    }
}
```

```apex
public with sharing class TaskController {

    @AuraEnabled(cacheable=true)
    public static List<Task> getTasks() {
        return [SELECT Subject, Priority, Status FROM Task];    }
}
```

```
<!-- apexForTasks.cmp -->
<aura:component implements="flexipage:availableForAllPageTypes" controller="TaskController">
    <aura:attribute name="tasks" type="Task[]"/>
    <lightning:card iconName="standard:task">
        
        <lightning:button label="Get Tasks" onclick="{!c.getMyTasks}"/>
        <aura:iteration var="task" items="{!v.tasks}">
            <p>{!task.Subject} : {!task.Priority}, {!task.Status}</p>
        </aura:iteration>
        
    </lightning:card>
</aura:component>
```

```
// apexForTasksController.js
({
    getMyTasks: function(cmp){
        var action = cmp.get("c.getTasks");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.tasks", response.getReturnValue());
            }
        });
	 $A.enqueueAction(action);
    }
})
```

## Related Topics

- lightning:record*Form (atlas.en-us.lightning.meta/lightning/data_service.htm)
- Using Apex (atlas.en-us.lightning.meta/lightning/apex_intro.htm)
- Calling a Server-Side Action (atlas.en-us.lightning.meta/lightning/controllers_server_actions_call.htm)
- Loading a Record (atlas.en-us.lightning.meta/lightning/data_service_load_record.htm)
- Lightning Data Service (atlas.en-us.lightning.meta/lightning/data_service.htm)
- Securing Data in Apex Controllers (atlas.en-us.lightning.meta/lightning/apex_crud_fls.htm)
