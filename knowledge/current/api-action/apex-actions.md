---
title: "Apex Actions"
domain: api-action
topic: apex-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.949Z
estimatedTokens: 1042
keywords: [Apex, Actions, Invoke, annotated, @InvocableMethod, include, custom, @InvocableVariable, REST, HTTP, Inputs, Outputs]
---

# Apex Actions

> Invoke Apex methods annotated with @InvocableMethod and include custom parameters with @InvocableVariable.

# Apex Actions

Invoke Apex methods annotated with @InvocableMethod and include custom parameters with @InvocableVariable.

This object is available in API version 33.0 and later.

## Supported REST HTTP Methods

URI

Get a list of available Apex actions:

/services/data/vXX.X/actions/custom/apex

Get information about a specific Apex action:

/services/data/vXX.X/actions/custom/apex/action\_name

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

Parameters

None

Example

This example invokes the Apex action called ActionTestWithSObject, which takes a list of Accounts, increases the employee count for each account by one, and returns an updated list of account IDs. The top-level key name in the JSON request body must be inputs.

```

```

Here’s the Apex code.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_action)

#### Note

The resource is the name of the Apex class, not the Apex method. In this example, the resource is /ActionTestWithSObject, not /getAccountNames.

Notes

-   Describe and invoke for an Apex action respect the profile access for the Apex class. If you don’t have access, an error is issued.
-   Describe for an Apex action returns only one level of fields for Apex-defined inputs or outputs. You can access top-level fields, but not the fields of any nested Apex-defined objects.
-   If you add an Apex action to a flow, and then remove the @InvocableMethod annotation from the Apex class, you get a runtime error in the flow.
-   If an Apex action is used in a flow, packageable components that reference these elements aren’t automatically included in the package. To deploy the package successfully, manually add those referenced components to the package.
-   An Apex invocable action can be declared public or global in a managed package. However, that action doesn’t appear in Flow Builder’s list of available Apex actions. Flows within the same managed package can still refer to these invocable actions. Global Apex invocable actions in a managed package can be used in flows outside the managed package, anywhere in the organization, and appear in Flow Builder’s list of available Apex actions.

## Inputs

Supply input values that correspond to the Apex action.

-   A POST request body must use the JSON format specified in [Invoking Actions](atlas.en-us.api_action.meta/api_action/actions_intro_invoking.htm#actions_intro_invoking).
-   Apex methods annotated with @InvocableMethod must take a List as an input and return a List or Null. For more information, see [@InvocableMethod Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "HTML (New Window)") in the *Apex Developer Guide*.
-   Only the following primitive types are supported as inputs in a POST request body:
    -   Blob
    -   Boolean
    -   Date
    -   Datetime
    -   Decimal
    -   Double
    -   ID
    -   Integer
    -   Long
    -   String
    -   Time
-   Concrete types inherited from the sObject. In the previous example, the inherited concrete type is Account.
-   A user-defined type, containing variables of the supported types and with the InvocableVariable annotation. To implement your data type, create a custom global or public Apex class. The class must contain at least one member variable with the invocable variable annotation.

## Outputs

The Apex InvocableMethod determines the output values.

#### See Also

-   [Flow Actions](atlas.en-us.api_action.meta/api_action/actions_obj_flow.htm "Invoke an active autolaunched flow that exists in the current org.")

-   [*Apex Developer Guide*: InvocableMethod Annotation](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm "Apex Developer Guide: InvocableMethod Annotation
    - HTML (New Window)")

-   [*REST API Developer Guide* : Invocable Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable.htm " REST API Developer Guide : Invocable Actions  - HTML (New Window)")

## Code Examples

```
POST /services/data/vXX.X/actions/custom/apex/ActionTestWithSObject

{
 
 "inputs": [
  {
   "objects": {
    "attributes" : {
     "type" : "Account"
    },
    "Name": "Acme"
   }
  },
  {
   "objects": {
    "attributes" : {
     "type" : "Account"
    },
    "Name": "Global Media"
   }
  }
 ]
}
```

```apex
public class ActionTestWithSObject {
 
 @InvocableMethod(label='Action Test With sObject' description='Given a list of sObjects (Accounts), increase employee count by one and return account ID' category='Account')
 public static List<String> getAccountNames(List<Account> objects) {
 
  List<String> accountIds = new List<String>();
  Map<Id, Account> accountsMap = new Map<Id, Account>(objects);
  Map<Id, Account> retrievedAccountMap = new Map<Id, Account>([SELECT Id, NumberOfEmployees FROM Account WHERE Id in :accountsMap.keySet()]);
 
  for (Account a : objects) {
   Account ra = retrievedAccountMap.get(a.Id);
   ra.NumberOfEmployees = ra.NumberOfEmployees == null ? 1 : ra.NumberOfEmployees + 1;
   accountIds.add(ra.Id);
  }
  update retrievedAccountMap.values();
  return accountIds;
 }
}
```

## Related Topics

- Invoking Actions (atlas.en-us.api_action.meta/api_action/actions_intro_invoking.htm)
- Flow Actions (atlas.en-us.api_action.meta/api_action/actions_obj_flow.htm)
