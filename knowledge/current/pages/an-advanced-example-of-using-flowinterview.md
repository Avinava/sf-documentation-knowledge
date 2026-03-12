---
title: "An Advanced Example of Using  <flow:interview>"
domain: pages
topic: an-advanced-example-of-using-flowinterview
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.598Z
estimatedTokens: 899
namespace: Flow.Interview.ModemTroubleShooting
keywords: [Advanced, <flow, interview>, component, designed, easy, develop, complex, Visualforce, interactions, access, additional, features, flow, creating]
---

# An Advanced Example of Using  <flow:interview>

> The <flow:interview> component is designed
        to make it easy to develop complex Visualforce interactions. You can
        access additional features in your flow by creating a custom controller. With custom
        controllers, you can build a page with multiple components that can interact with each
        other. Any flow within your organization can be individually referenced by its own Apex
        type, and the variables in the flow can be accessed as member variables.

**Namespace:** `Flow.Interview.ModemTroubleShooting`

# An Advanced Example of Using <flow:interview>

The <flow:interview\> component is designed to make it easy to develop complex Visualforce interactions. You can access additional features in your flow by creating a custom controller. With custom controllers, you can build a page with multiple components that can interact with each other. Any flow within your organization can be individually referenced by its own Apex type, and the variables in the flow can be accessed as member variables.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You can set only variables that allow input access, and you can get only variables that allow output access. For a variable that doesn’t allow input or output access, attempts to get the variable are ignored, and compilation may fail for the Visualforce page, its <apex:page\> component, or the Apex class.

For our next example, the flow with API name “ModemTroubleShooting” is referenced as Flow.Interview.ModemTroubleShooting. The markup illustrates how to display a value of a flow variable in a different part of the page:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If the flow is from a managed package, the name attribute must be in this format: namespace.flowuniquename.

The controller for the above markup looks like this:

```

```

If you’re using a custom controller, you can also set the initial values of the variables at the beginning of the flow in the constructor of the flow. Passing in variables using the constructor is optional and isn’t necessary if you’re using <apex:param\> tags to set the value.

Here’s an example of a custom controller that sets the values of flow variables in a constructor.

```

```

You can use the getVariableValue method in the Flow.Interview class to access the value of a flow variable. The variable may be in the flow embedded in the Visualforce page or in a separate flow that is called by a Subflow element. The returned variable value comes from whichever flow the interview is currently running. If the specified variable can’t be found in that flow, the method returns null. This method checks for the existence of the variable at run time only, not at compile time.

This sample uses the getVariableValue method to obtain breadcrumb (navigation) information from a flow. If that flow contains subflow elements, and each of the referenced flows also contains a vaBreadCrumb variable, you can provide users with breadcrumbs regardless of which flow the interview is running.

```

```

The following table shows the differences in the naming of supported data types between the flow and Apex.

| Flow | Apex |
| --- | --- |
| Text | String |
| Number | Decimal |
| Currency | Decimal |
| Date | Date, DateTime |
| Boolean | Boolean |
| Record, with a specified object | The API name of the specified object, such as Account or Case |

As it’s a good practice to write tests against your Apex code, the following is a trivial example of writing a test class for ModemTroubleShootingCustomSetVariables:

```

```

## Setting the reRender Attribute

By using the reRender attribute, the <flow:interview /> component re-renders the flow without refreshing the whole page:

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pages)

#### Warning

If you don’t set the reRender attribute, when you click a button to navigate to a different screen in a flow, the entire Visualforce page refreshes, not just the <flow:interview\> component.

## Code Examples

```
<apex:page Controller="ModemTroubleShootingCustomSimple" tabStyle="Case">
    <flow:interview name="ModemTroubleShooting" interview="{!myflow}"/>
    <apex:outputText value="Default Case Prioriy: {!casePriority}"/>
</apex:page>
```

```apex
public class ModemTroubleShootingCustomSimple {

    // You don't need to explicitly instantiate the Flow object;
    // the class constructor is invoked automatically

    public Flow.Interview.ModemTroubleShooting myflow { get; set; }
    public String casePriority;
    public String getCasePriority() {
        // Access flow variables as simple member variables with get/set methods
        if(myflow == null) return 'High';
        else return myflow.vaCasePriority;
    }
}
```

```apex
public class ModemTroubleShootingCustomSetVariables {
    public Flow.Interview.ModemTroubleShooting myflow { get; set; }
 
    public ModemTroubleShootingCustomSetVariables() {
        Map<String, Object> myMap = new Map<String, Object>();
        myMap.put('vaCaseNumber','123456');
        myflow = new Flow.Interview.ModemTroubleShooting(myMap);
    }
 
    public String caseNumber { set; }
    public String getCaseNumber() {
        return myflow.vaCaseNumber;
    }
}
```

```apex
public class SampleController {

   //Instance of the flow
   public Flow.Interview.Flow_Template_Gallery myFlow {get; set;}

   public String getBreadCrumb() {
      String aBreadCrumb;
      if (myFlow==null) { return 'Home';}
      else aBreadCrumb = (String) myFlow.getVariableValue('vaBreadCrumb');

      return(aBreadCrumb==null ? 'Home': aBreadCrumb);

   }
}
```

```apex
@isTest
private class ModemTroubleShootingCustomSetVariablesTest {

    static testmethod void ModemTroubleShootingCustomSetVariablestests() {
        PageReference pageRef = Page.ModemTroubleShootingSetVariables;
        Test.setCurrentPage(pageRef);
        ModemTroubleShootingCustomSetVariables mytestController = 
            new ModemTroubleShootingCustomSetVariables();
        System.assertEquals(mytestController.getcaseNumber(), '01212212');
    }
}
```
