---
title: "apex:dataList"
domain: pages
topic: apexdatalist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.363Z
estimatedTokens: 1055
keywords: [apex, dataList, ordered, unordered, defined, iterating, over, data, <apex, dataList>, component, how, item, appear, include]
---

# apex:dataList

> An ordered or unordered list of values that is defined by iterating over a set of data. The body of the <apex:dataList> component specifies how a single item should appear in the list. The data set can include up to 1,000 items.

# apex:dataList

An ordered or unordered list of values that is defined by iterating over a set of data. The body of the <apex:dataList\> component specifies how a single item should appear in the list. The data set can include up to 1,000 items.

## Example

```

```

The example above renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| first | Integer | The first element in the iteration that is visibly rendered in the list, where 0 is the index of the first element in the set of data specified by the value attribute. For example, if you did not want to display the first two elements in the set of records specified by the value attribute, set first="2". |  | 10.0 | global |
| id | String | An identifier that allows the dataList component to be referenced by other components in the page. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the list. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the list twice. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the list. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the list. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| rows | Integer | The maximum number of items to display in the list. If not specified, this value defaults to 0, which displays all possible list items. |  | 10.0 | global |
| style | String | The style used to display the dataList component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the dataList component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| type | String | The type of list that should display. For ordered lists, possible values include "1", "a", "A", "i", or "I". For unordered lists, possible values include "disc", "square", and "circle". If not specified, this value defaults to "disc". |  | 10.0 | global |
| value | Object | The collection of data displayed in the list. | Yes | 10.0 | global |
| var | String | The name of the variable that should represent one element in the collection of data specified by the value attribute. You can use this variable to display the element in the body of the dataList component tag. | Yes | 10.0 | global |

## Code Examples

```apex
<!-- Page: -->
<apex:page controller="dataListCon">
    <apex:dataList value="{!accounts}" var="account">
        <apex:outputText value="{!account.Name}"/>
    </apex:dataList>
</apex:page>

/*** Controller: ***/
public class dataListCon {

	List<Account> accounts;

	public List<Account> getAccounts() {
		if(accounts == null) accounts = [SELECT Name FROM Account LIMIT 10];
		return accounts;
	}

}
```

```
<ul id="thePage:theList">
	<li id="thePage:theList:0">Bass Manufacturing</li>
	<li id="thePage:theList:1">Ball Corp</li>
	<li id="thePage:theList:2">Wessler Co.</li>
</ul>
```
