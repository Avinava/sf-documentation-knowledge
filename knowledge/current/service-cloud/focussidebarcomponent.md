---
title: "focusSidebarComponent()"
domain: service-cloud
topic: focussidebarcomponent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.336Z
estimatedTokens: 345
keywords: [focusSidebarComponent, Focuses, browser, sidebar, component., focus, component, tab, accordion, style., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# focusSidebarComponent()

> Focuses the browser on a sidebar component. Use
            this method to focus on a component with the tab or accordion sidebar style.

# focusSidebarComponent()

Focuses the browser on a sidebar component. Use this method to focus on a component with the tab or accordion sidebar style.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| componentInfo | string | The JSON object that represents the component to focus on. This argument must include one of the following forms:Unambiguous types:{componentType: 'CASE_EXPERT_WIDGET' }{componentType: 'FILES_WIDGET' }{componentType: 'HIGHLIGHTS_PANEL' }{componentType: 'KNOWLEDGE_ONE'}{componentType: 'MILESTONE_WIDGET' }{componentType: 'TOPICS_WIDGET' }{componentType: 'VISUALFORCE' }Types that require additional parameters:{componentType: 'CANVAS', canvasAppId: '09Hxx0000000001'}{componentType: 'RELATED_LIST', listName: 'Solution'}{componentType: 'LOOKUP', fieldName: 'Account'}{componentType: 'VISUALFORCE', pageName: 'VF1'} |
| tabId | string | The ID of the tab on which to focus the browser. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if focusing the sidebar component was successful; false otherwise. |

## Code Examples

```
sforce.console.focusSidebarComponent(componentInfo:string (optional)tabId:string, callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        var callback = function (result) {} 
            if(result.success){
            alert('Congratulations!');
        }else{
            alert('Something is wrong!');
        }
    };
        function focusKnowledgeComponent() { 
            sforce.console.focusSidebarComponent(JSON.stringify({componentType:
            'KNOWLEDGE_ONE'}),"scc-st-2", callback);
        }
    </script>
    <A HREF="#" onClick="focusSidebarComponent(); return false">Focus Knowledge Component</A>
</apex:page>
```
