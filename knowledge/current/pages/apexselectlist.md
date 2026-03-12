---
title: "apex:selectList"
domain: pages
topic: apexselectlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.091Z
estimatedTokens: 1906
keywords: [apex, selectList, options, users, select, multiple, time, depending, multiselect, attribute, Attributes]
---

# apex:selectList

> A list of options that allows users to select only one value or multiple values at a time, depending on the value of its multiselect attribute.

# apex:selectList

A list of options that allows users to select only one value or multiple values at a time, depending on the value of its multiselect attribute.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <select\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| accesskey | String | The keyboard access key that puts the selectList in focus. When the selectList is in focus, a user can select or deselect list options. |  | 10.0 | global |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| disabled | Boolean | A Boolean value that specifies whether this selectList should be displayed in a disabled state. If set to true, the selectList appears disabled. If not specified, this value defaults to false. |  | 10.0 | global |
| disabledClass | String | The style class used to display the selectList component when the disabled attribute is set to true, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| enabledClass | String | The style class used to display the selectList component when the disabled attribute is set to false, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| id | String | An identifier that allows the selectList component to be referenced by other components in the page. |  | 10.0 | global |
| label | String | A text value that allows to display a label next to the control and reference the control in the error message |  | 23.0 |  |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| multiselect | Boolean | A Boolean value that specifies whether users can select more than one option as a time from this selectList. If set to true, users can select more than one option at a time. If not specified, this value defaults to false. If multiselect is true, the value attribute must be of type String[] or a List of strings. Otherwise, it must be of type String. |  | 10.0 | global |
| onblur | String | The JavaScript invoked if the onblur event occurs--that is, if the focus moves off of the selectList component. |  | 10.0 | global |
| onchange | String | The JavaScript invoked if the onchange event occurs--that is, if the value of the selectList component changes. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the selectList component. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the selectList component twice. |  | 10.0 | global |
| onfocus | String | The JavaScript invoked if the onfocus event occurs--that is, if the focus is on the selectList component. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the selectList component. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the selectList component. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| onselect | String | The JavaScript invoked if the onselect event occurs--that is, if the user selects an option in the selectList component. |  | 10.0 | global |
| readonly | Boolean | A Boolean value that specifies whether this selectList component is rendered as read-only. If set to true, the list option selections cannot be changed. If not selected, this value defaults to false. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| required | Boolean | A Boolean value that specifies whether this selectList component is a required field. If set to true, the user must select at least one list option. If not selected, this value defaults to false. |  | 10.0 | global |
| size | Integer | The number of selectList options displayed at one time. If this number is less than the total number of options, a scroll bar is displayed in the selectList. If not specified, all available options are displayed. |  | 10.0 | global |
| skipValidationInRepeat | Boolean | A Boolean value that specifies whether to skip validation of a selected value. Set this to true if you’re seeing validation errors when selecting a value in a selectList that’s within a repeat component. |  |  |  |
| style | String | The style used to display the selectList component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the selectList component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| tabindex | String | The order in which this selectList component is selected compared to other page components when a user presses the Tab key repeatedly. This value must be an integer between 0 and 32767, with component 0 being the first component that is selected when a user presses the Tab key. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| value | Object | A merge field that references the controller class variable that is associated with this selectList. For example, if the name of the associated variable in the controller class is myListSelections, use value="{!myListSelections}" to reference the variable. If multiselect is true, the value attribute must be of type String[] or a List of strings. Otherwise, it must be of type String. |  | 10.0 | global |

#### See Also

-   [apex:selectOption](atlas.en-us.pages.meta/pages/pages_compref_selectOption.htm)

-   [SelectOption Class](atlas.en-us.pages.meta/pages/apex_pages_selectoption.htm "A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.")

## Code Examples

```apex
<!-- Page: -->
<apex:page controller="sampleCon">
    <apex:form>
        <apex:selectList value="{!countries}" multiselect="true">
            <apex:selectOptions value="{!items}"/>
        </apex:selectList><p/>

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
        //If multiselect is false, countries must be of type String
        //String countries;
            
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
            //If multiselect is false, countries must be of type String
            return countries;
        }
            
        public void setCountries(String[] countries) {
            //If multiselect is false, countries must be of type String
            this.countries = countries;
        }
    }
```

## Related Topics

- apex:selectOption (atlas.en-us.pages.meta/pages/pages_compref_selectOption.htm)
- SelectOption Class (atlas.en-us.pages.meta/pages/apex_pages_selectoption.htm)
