---
title: "apex:selectCheckboxes"
domain: pages
topic: apexselectcheckboxes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.077Z
estimatedTokens: 2062
keywords: [apex, selectCheckboxes, checkbox, input, elements, Attributes]
---

# apex:selectCheckboxes

> A set of related checkbox input elements displayed in a
		table.

# apex:selectCheckboxes

A set of related checkbox input elements displayed in a table.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated container <table\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| accesskey | String | The keyboard access key that puts the selectCheckboxes component in focus. When the selectCheckboxes component is in focus, users can use the keyboard to select and deselect individual checkbox options. |  | 10.0 | global |
| border | Integer | The width of the frame around the rendered HTML table, in pixels. |  | 10.0 | global |
| borderVisible | Boolean | Controls whether the border around the <fieldset> that wraps the checkboxes table is visible or hidden. The default value is false, there is no border. |  | 29.0 |  |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| disabled | Boolean | A Boolean value that specifies whether the selectCheckboxes component should be displayed in a disabled state. If set to true, the checkboxes appear disabled. If not specified, this value defaults to false. |  | 10.0 | global |
| disabledClass | String | The style class used to display the selectCheckboxes component when the disabled attribute is set to true, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| enabledClass | String | The style class used to display the selectCheckboxes component when the disabled attribute is set to false, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| id | String | An identifier that allows the selectCheckboxes component to be referenced by other components in the page. |  | 10.0 | global |
| immediate | Boolean | A Boolean value that specifies whether the action associated with this component should happen immediately, without processing any validation rules associated with the fields on the page. If set to true, the action happens immediately and validation rules are skipped. If not specified, this value defaults to false. See Use the immediate Attribute Carefully. |  | 11.0 | global |
| label | String | A text value that allows to display a label next to the control and reference the control in the error message |  | 23.0 |  |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| layout | String | The method by which checkboxes should be displayed in the table. Possible values include "lineDirection", in which checkboxes are placed horizontally, or "pageDirection", in which checkboxes are placed vertically. If not specified, this value defaults to "lineDirection". |  | 10.0 | global |
| legendInvisible | Boolean | Controls whether the legend text is displayed or hidden. The default value is false, the legend text is displayed for all users.When set to true, the <legend> has a styling attribute added, class="assistiveText", which preserves the legend text in the DOM, but moves the display off-screen. This makes the text accessible to screen readers, without being displayed visually. |  | 29.0 |  |
| legendText | String | The text to be displayed as a legend for the checkboxes group. When the border is visible, the legend is inlaid along the top-left edge of the border. When legendText is an empty string, or not set, no legend is added. |  | 29.0 |  |
| onblur | String | The JavaScript invoked if the onblur event occurs--that is, if the focus moves off of the selectCheckboxes component. |  | 10.0 | global |
| onchange | String | The JavaScript invoked if the onchange event occurs--that is, if the value of any checkbox in the selectCheckboxes component changes. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the selectCheckboxes component. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the selectCheckboxes component twice. |  | 10.0 | global |
| onfocus | String | The JavaScript invoked if the onfocus event occurs--that is, if the focus is on the selectCheckboxes component. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the selectCheckboxes component. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the selectCheckboxes component. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| onselect | String | The JavaScript invoked if the onselect event occurs--that is, if the user selects a checkbox in the selectCheckboxes component. |  | 10.0 | global |
| readonly | Boolean | A Boolean value that specifies whether this selectCheckboxes component is rendered as read-only. If set to true, the checkbox values cannot be changed. If not selected, this value defaults to false. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| required | Boolean | A Boolean value that specifies whether this selectCheckboxes component is a required field. If set to true, the user must select one or more of these checkboxes. If not selected, this value defaults to false. |  | 10.0 | global |
| style | String | The style used to display the selectCheckboxes component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the selectCheckboxes component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| tabindex | String | The order in which this selectCheckboxes component is selected compared to other page components when a user presses the Tab key repeatedly. This value must be an integer between 0 and 32767, with component 0 being the first component that is selected when a user presses the Tab key. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| value | Object | A merge field that references the controller class variable that is associated with this selectCheckboxes component. For example, if the name of the associated variable in the controller class is myCheckboxSelections use value="{!myCheckboxSelections}" to reference the variable. |  | 10.0 | global |

#### See Also

-   [apex:selectOption](atlas.en-us.pages.meta/pages/pages_compref_selectOption.htm)

-   [SelectOption Class](atlas.en-us.pages.meta/pages/apex_pages_selectoption.htm "A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.")

## Code Examples

```apex
<!-- Page: -->
<apex:page controller="sampleCon">
    <apex:form>
        <apex:selectCheckboxes value="{!countries}">
            <apex:selectOptions value="{!items}"/>
        </apex:selectCheckboxes><br/>
        <apex:commandButton value="Test" action="{!test}" rerender="out" status="status"/>
    </apex:form>
    <apex:outputPanel id="out">
        <apex:actionstatus id="status" startText="testing...">
            <apex:facet name="stop">
                <apex:outputPanel>
                    <p>You have selected:</p>
                    <apex:dataList value="{!countries}" var="c">{!c}</apex:dataList>
                </apex:outputPanel>
            </apex:facet>
        </apex:actionstatus>
    </apex:outputPanel>
</apex:page>
 			
/*** Controller: ***/
public class sampleCon {
    String[] countries = new String[]{};

    public PageReference test() {
        return null;
    }

    public List<SelectOption> getItems() {
        List<SelectOption> options = new List<SelectOption>();
        options.add(new SelectOption('US','US'));
        options.add(new SelectOption('CANADA','Canada'));
        options.add(new SelectOption('MEXICO','Mexico'));

        return options;
    }

    public String[] getCountries() {
        return countries;
    }

    public void setCountries(String[] countries) {
        this.countries = countries;
    }
}
```

## Related Topics

- Use the immediate Attribute Carefully (atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)
- apex:selectOption (atlas.en-us.pages.meta/pages/pages_compref_selectOption.htm)
- SelectOption Class (atlas.en-us.pages.meta/pages/apex_pages_selectoption.htm)
