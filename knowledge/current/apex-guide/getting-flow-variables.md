---
title: "Getting Flow Variables"
domain: apex-guide
topic: getting-flow-variables
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.452Z
estimatedTokens: 224
keywords: [Getting, Flow, Variables, retrieve, flow, variables, specific, Apex.]
---

# Getting Flow Variables

> You can retrieve flow variables for a specific flow in Apex.

# Getting Flow Variables

You can retrieve flow variables for a specific flow in Apex.

The Flow.Interview Apex class provides the getVariableValue method for retrieving a flow variable, which can be in the flow embedded in the Visualforce page, or in a separate flow that is called by a subflow element. This example shows how to use this method to obtain breadcrumb (navigation) information from the flow embedded in the Visualforce page. If that flow contains subflow elements, and each of the referenced flows also contains a vaBreadCrumb variable, the Visualforce page can provide users with breadcrumbs regardless of which flow the interview is running.

```

```

#### See Also

-   [*Apex Reference Guide*: Interview Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/flow_interview_class.htm "Apex Reference Guide: Interview Class - HTML (New Window)")

## Code Examples

```apex
public class SampleContoller {

   // Instance of the flow
   public Flow.Interview.Flow_Template_Gallery myFlow {get; set;}

   public String getBreadCrumb() {
      String aBreadCrumb;
      if (myFlow==null) { return 'Home';}
      else aBreadCrumb = (String) myFlow.getVariableValue('vaBreadCrumb');

      return(aBreadCrumb==null ? 'Home': aBreadCrumb);

   }
}
```
