---
title: "apex:inputHidden"
domain: pages
topic: apexinputhidden
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.592Z
estimatedTokens: 580
keywords: [apex, inputHidden, HTML, input, element, hidden, invisible, user, component, pass, variables, Attributes]
---

# apex:inputHidden

> An HTML input element of type hidden, that is, an input element
		that is invisible to the user. Use this component to pass variables from
		page to page.

# apex:inputHidden

An HTML input element of type hidden, that is, an input element that is invisible to the user. Use this component to pass variables from page to page.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <input\> tag.

## Example

```

```

The example renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the inputHidden component to be referenced by other components in the page. |  | 10.0 | global |
| immediate | Boolean | A Boolean value that specifies whether the action associated with this component should happen immediately, without processing any validation rules associated with the fields on the page. If set to true, the action happens immediately and validation rules are skipped. If not specified, this value defaults to false. See Use the immediate Attribute Carefully. |  | 11.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| required | Boolean | A Boolean value that specifies whether this inputHidden field is a required field. If set to true, the a value must be specified for this field. If not selected, this value defaults to false. |  | 10.0 | global |
| value | Object | A merge field that references the controller class variable that is associated with this hidden input field. For example, if the name of the associated variable in the controller class is myHiddenVariable, use value="{!myHiddenVariable}" to reference the variable. |  | 10.0 | global |

#### See Also

-   [apex:input](atlas.en-us.pages.meta/pages/pages_compref_input.htm)

-   [Using Input Components in a Page](atlas.en-us.pages.meta/pages/pages_quick_start_input_components.htm)

## Code Examples

```
<apex:inputHidden value="{!inputValue}" id="theHiddenInput"/>
```

```
<input id="theHiddenInput" type="hidden" name="theHiddenInput" />
```

## Related Topics

- Use the immediate Attribute Carefully (atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)
- apex:input (atlas.en-us.pages.meta/pages/pages_compref_input.htm)
- Using Input Components in a Page (atlas.en-us.pages.meta/pages/pages_quick_start_input_components.htm)
