---
title: "Get Flow Variable Values to a Visualforce Page"
domain: pages
topic: get-flow-variable-values-to-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.617Z
estimatedTokens: 462
keywords: [Flow, Variable, Visualforce, Once, you’ve, embedded, markup, variables, record, display, collection, individual, contained]
---

# Get Flow Variable Values to a Visualforce Page

> Flow variable values can be displayed in a Visualforce page. Once you’ve
        embedded your flow in a Visualforce page, you can use Visualforce markup
        to get values for variables or record variables. To display values for a collection
        variable or a record collection variable, you can use Visualforce markup to get the
        individual values contained in the collection.

# Get Flow Variable Values to a Visualforce Page

Flow variable values can be displayed in a Visualforce page. Once you’ve embedded your flow in a Visualforce page, you can use Visualforce markup to get values for variables or record variables. To display values for a collection variable or a record collection variable, you can use Visualforce markup to get the individual values contained in the collection.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You can get only variables that allow output access. If you reference a variable that doesn’t allow output access, attempts to get the variable are ignored. Compilation can fail for the Visualforce page, its <apex:page\> component, or the Apex class.

The following example uses an Apex class to get a record variable value from a flow and then displays it in a Visualforce page.

```

```

```

```

This example uses an Apex class to get the values that are stored in a string collection variable (emailsCollVar) in the flow. Then it uses a Visualforce page to run the flow interview. The Visualforce page iterates over the flow’s collection variable and displays the values for each item in the collection.

```

```

```

```

The following example uses an Apex class to set the flow to {!myflow} and then uses a Visualforce page to run the flow interview. The Visualforce page uses a data table to iterate over the flow’s record collection variable and display the values for each item in the collection.

```

```

```

```

Depending on the contents of the record collection variable in your flow, here’s what that data table looks like.![Example of a data table that displays the contents of a record collection variable](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fflow_display_collection.png&folder=pages)

## Code Examples

```apex
public class FlowController {
    public Flow.Interview.flowname myflow { get; set; }
    public Case apexCaseVar;
    public Case getApexCaseVar() {
        return myflow.caseVar;
    }
}
```

```
<apex:page controller="FlowController" tabStyle="Case">
    <flow:interview name="flowname" interview="{!myflow}"/>
    <apex:outputText value="Default Case Priority: {!apexCaseVar.Priority}"/>
</apex:page>
```

```apex
public class FlowController {
    public Flow.Interview.flowname myflow { get; set; }

    public List<String> getVarValue() {
        if (myflow == null) { 
            return null; 
        }
        else {
            return (List<String>)myflow.emailsCollVar;
        }
    }
}
```

```
<apex:page controller="FlowController">
    <flow:interview name="flowname" interview="{!myflow}" />
        <apex:repeat value="{!varValue}" var="item">
        <apex:outputText value="{!item}"/><br/>
        </apex:repeat>
</apex:page>
```

```apex
public class MyCustomController {
   public Flow.Interview.flowname myflow { get; set; }
}
```
