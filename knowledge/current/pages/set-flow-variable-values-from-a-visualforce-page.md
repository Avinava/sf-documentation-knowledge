---
title: "Set Flow Variable Values from a Visualforce Page"
domain: pages
topic: set-flow-variable-values-from-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.646Z
estimatedTokens: 740
keywords: [Flow, Variable, Visualforce, embed, initial, variables, record, collection, <apex, param>, component, Setting, Controller, Standard, Custom]
---

# Set Flow Variable Values from a Visualforce Page

> After you embed your flow in a Visualforce page, set the initial values of variables,
        record variables, collection variables, and record collection variables through the <apex:param> component.

# Set Flow Variable Values from a Visualforce Page

After you embed your flow in a Visualforce page, set the initial values of variables, record variables, collection variables, and record collection variables through the <apex:param\> component.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You can set variables only at the beginning of an interview. The <apex:param\> tags are evaluated only once, when the flow is launched.

You can set only variables that allow input access. If you reference a variable that doesn’t allow input access, attempts to set the variable are ignored. Compilation can fail for the Visualforce page, its <apex:page\> component, or the Apex class.

The following table lists the ways you can set a flow’s variable, record variable, and record collection variable values using Visualforce.

| Method | Variables | Record Variables | Collection Variables | Record Collection Variables |
| --- | --- | --- | --- | --- |
| Without a controller |  |  |  |  |
| With a standard controller |  |  |  |  |
| With a standard List controller |  |  |  |  |
| With a custom Apex controller |  |  |  |  |
| With an Interview Map |  |  |  |  |

## Setting Variable Values without a Controller

This example sets myVariable to the value 01010101 when the interview starts.

```

```

## Setting Variable Values with a Standard Controller

You can use standard Visualforce controllers to set variables by passing in data from a record. This example sets the initial value of myVariable to the Visualforce expression {!account} when the interview starts.

```

```

## Setting a Record Collection Variable Value with a Standard List Controller

Because record collection variables represent an array of values, you must use a standard list controller or a custom Apex controller. This example sets myCollection to the value of {!accounts} when the interview starts.

```

```

## Setting Variable Values with a Custom Apex Controller

For finer control over your Visualforce page than a standard controller allows, write a custom Apex controller that sets the variable value, and then reference that controller in your Visualforce page. This example uses Apex to set myVariable to a specific account’s Id when the interview starts.

```

```

```

```

This example uses Apex to set a record collection variable myAccount to the Id and Name field values for every record with a Name of Acme.

```

```

```

```

## Setting Variable Values with an Interview Map

This example uses an Interview map to set the value for accVar to a specific account’s Id when the interview starts.

```

```

```

```

Here’s a similar example that sets the value for accVar to a new account when the interview starts.

```

```

```

```

This example uses a map to add two values to a string collection variable (stringCollVar) and two values to a number collection variable (numberCollVar).

```

```

```

```

## Code Examples

```
<apex:page>
    <flow:interview name="flowname">
        <apex:param name="myVariable" value="01010101"/>
    </flow:interview>
</apex:page>
```

```
<apex:page standardController="Account" tabStyle="Account">
    <flow:interview name="flowname">
        <apex:param name="myVariable" value="{!account}"/>
    </flow:interview>
</apex:page>
```

```
<apex:page standardController="Account" tabStyle="Account" recordSetVar="accounts">
    <flow:interview name="flowname">
        <apex:param name="myCollection" value="{!accounts}"/>
    </flow:interview>
</apex:page>
```

```apex
public class MyCustomController {
    public Account apexVar {get; set;}

    public MyCustomController() {
        apexVar = [
            SELECT Id, Name FROM Account
            WHERE Name = 'Acme' LIMIT 1];
    }
}
```

```
<apex:page controller="MyCustomController">
    <flow:interview name="flowname">
        <apex:param name="myVariable" value="{!apexVar}"/>
    </flow:interview>
</apex:page>
```
