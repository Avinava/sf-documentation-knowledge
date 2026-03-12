---
title: "apex:variable"
domain: pages
topic: apexvariable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.234Z
estimatedTokens: 352
keywords: [apex, variable, local, replacement, expression, component, <apex, variable>, reduce, repetitive, verbose, expressions, Attributes]
---

# apex:variable

> A local variable that can be used as a replacement for a specified expression within the body of the component. Use <apex:variable> to reduce repetitive and verbose expressions within a page.

# apex:variable

A local variable that can be used as a replacement for a specified expression within the body of the component. Use <apex:variable\> to reduce repetitive and verbose expressions within a page.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

**Note:** <apex:variable\> does not support reassignment inside of an iteration component, such as <apex:dataTable\> or <apex:repeat\>. The result of doing so, e.g., incrementing the <apex:variable\> as a counter, is unsupported and undefined.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| value | Object | The expression that can be represented by the variable within the body of the variable component. | Yes | 10.0 | global |
| var | String | The name of the variable that can be used to represent the value expression within the body of the variable component. | Yes | 10.0 | global |

## Code Examples

```apex
<!-- For this example to render properly, you must associate the Visualforce page 
with a valid contact record in the URL. 
For example, if 001D000000IRt53 is the contact ID, the resulting URL should be: 
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->
         
<!-- Page: -->
<apex:page controller="variableCon">
    <apex:variable var="c" value="{!contact}" />
        
    <p>Greetings, {!c.LastName}.</p>
</apex:page>

/*** Controller ***/
public class variableCon {
    Contact contact;

    public Contact getContact() {
        if (contact == null){                      
        contact = [select LastName from Contact where 
            id = :ApexPages.currentPage().getParameters().get('id')];
        }
        return contact;
    }
}
```
