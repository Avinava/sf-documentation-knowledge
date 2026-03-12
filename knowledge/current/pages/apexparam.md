---
title: "apex:param"
domain: pages
topic: apexparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.999Z
estimatedTokens: 366
keywords: [apex, param, parent, component, <apex, param>, child, components, outputLink, Attributes]
---

# apex:param

> A parameter for the parent component. The <apex:param> component can only be a child of the following
			components:

# apex:param

A parameter for the parent component. The <apex:param\> component can only be a child of the following components:

-   <apex:actionFunction\>
-   <apex:actionSupport\>
-   <apex:commandLink\>
-   <apex:outputLink\>
-   <apex:outputText\>
-   <flow:interview\>

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

Within <apex:outputText\>, there’s support for the <apex:param\> tag to match the syntax of the MessageFormat class in Java.

## apex:outputLink Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| assignTo | Object | A setter method that assigns the value of this param to a variable in the associated Visualforce controller. If this attribute is used, getter and setter methods, or a property with get and set values, must be defined. |  | 10.0 | global |
| id | String | An identifier that allows the param component to be referenced by other components in the page. |  | 10.0 | global |
| name | String | The key for this parameter, for example, name="Location". | Yes | 10.0 | global |
| value | Object | The data associated with this parameter, for example, value="San Francisco, CA". The value attribute must be set to a string, number, or boolean value. | Yes | 10.0 | global |

## Code Examples

```
<!-- For this example to render fully, associate the page
with a valid contact record in the URL.
For example: https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53 -->

<apex:page standardController="Contact">
    <apex:outputLink value="http://google.com/search">
        Search Google
        <apex:param name="q" value="{!contact.name}"/>
    </apex:outputLink>
</apex:page>
```
