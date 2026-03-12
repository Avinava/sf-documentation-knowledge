---
title: "apex:selectRadio"
domain: pages
topic: apexselectradio
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.125Z
estimatedTokens: 2060
keywords: [apex, selectRadio, radio, button, input, elements, Unlike, checkboxes, selected, time, Attributes]
---

# apex:selectRadio

> A set of related radio button input elements, displayed in a
		table. Unlike checkboxes, only one radio button can be selected at a
		time.

# apex:selectRadio

A set of related radio button input elements, displayed in a table. Unlike checkboxes, only one radio button can be selected at a time.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated container <table\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| accesskey | String | The keyboard access key that puts the radio buttons in focus. When the radio buttons are in focus, a user can select or deselect a radio button value. |  | 10.0 | global |
| border | Integer | The width of the frame around the rendered HTML table, in pixels. |  | 10.0 | global |
| borderVisible | Boolean | Controls whether the border around the <fieldset> that wraps the radio buttons table is visible or hidden. The default value is false, there is no border. |  | 29.0 |  |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| disabled | Boolean | A Boolean value that specifies whether the selectRadio component should be displayed in a disabled state. If set to true, the radio buttons appear disabled. If not specified, this value defaults to false. |  | 10.0 | global |
| disabledClass | String | The style class used to display the selectRadio component when the disabled attribute is set to true, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| enabledClass | String | The style class used to display the selectRadio component when the disabled attribute is set to false, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| id | String | An identifier that allows the selectRadio component to be referenced by other components in the page. |  | 10.0 | global |
| immediate | Boolean | A Boolean value that specifies whether the action associated with this component should happen immediately, without processing any validation rules associated with the fields on the page. If set to true, the action happens immediately and validation rules are skipped. If not specified, this value defaults to false. See Use the immediate Attribute Carefully. |  | 11.0 | global |
| label | String | A text value that allows to display a label next to the control and reference the control in the error message |  | 23.0 |  |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| layout | String | The method by which radio buttons should be displayed in the table. Possible values include "lineDirection", in which radio buttons are placed horizontally, or "pageDirection", in which radio buttons are placed vertically. If not specified, this value defaults to "lineDirection". |  | 10.0 | global |
| legendInvisible | Boolean | Controls whether the legend text is displayed or hidden. The default value is false, the legend text is displayed for all users.When set to true, the <legend> has a styling attribute added, class="assistiveText", which preserves the legend text in the DOM, but moves the display off-screen. This makes the text accessible to screen readers, without being displayed visually. |  | 29.0 |  |
| legendText | String | The text to be displayed as a legend for the radio buttons group. When the border is visible, the legend is inlaid along the top-left edge of the border. When legendText is an empty string, or not set, no legend is added. |  | 29.0 |  |
| onblur | String | The JavaScript invoked if the onblur event occurs--that is, if the focus moves off of the selectRadio component. |  | 10.0 | global |
| onchange | String | The JavaScript invoked if the onchange event occurs--that is, if the value of any radio button in the selectRadio component changes. |  | 10.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the selectRadio component. |  | 10.0 | global |
| ondblclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the selectRadio component twice. |  | 10.0 | global |
| onfocus | String | The JavaScript invoked if the onfocus event occurs--that is, if the focus is on the selectRadio component. |  | 10.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 10.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 10.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 10.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 10.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 10.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the selectRadio component. |  | 10.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the selectRadio component. |  | 10.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 10.0 | global |
| onselect | String | The JavaScript invoked if the onselect event occurs--that is, if the user selects a radio button in the selectRadio component. |  | 10.0 | global |
| readonly | Boolean | A Boolean value that specifies whether this selectRadio component is rendered as read-only. If set to true, the selected radio button is unchangeable. If not selected, this value defaults to false, and the selected radio button can be changed. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| required | Boolean | A Boolean value that specifies whether this selectRadio component is a required field. If set to true, the user must select a radio button. If not selected, this value defaults to false. |  | 10.0 | global |
| style | String | The CSS style used to display the selectRadio component, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the selectRadio component, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| tabindex | String | The order in which this selectRadio component is selected compared to other page components when a user presses the Tab key repeatedly. This value must be an integer between 0 and 32767, with component 0 being the first component that is selected when a user presses the Tab key. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |
| value | Object | A merge field that references the controller class variable that is associated with this selectRadio component. For example, if the name of the associated variable in the controller class is myRadioButtonSelection use value="{!myRadioButtonSelection}" to reference the variable. |  | 10.0 | global |

#### See Also

-   [apex:selectOption](atlas.en-us.pages.meta/pages/pages_compref_selectOption.htm)

-   [SelectOption Class](atlas.en-us.pages.meta/pages/apex_pages_selectoption.htm "A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.")

## Code Examples

```apex
<!-- Page: -->
<apex:page controller="sampleCon">
    <apex:form>
        <apex:selectRadio value="{!country}">
            <apex:selectOptions value="{!items}"/>
            </apex:selectRadio><p/>
            <apex:commandButton value="Test" action="{!test}" rerender="out" status="status"/>
     </apex:form>
     <apex:outputPanel id="out">
          <apex:actionstatus id="status" startText="testing..."> 
             <apex:facet name="stop"> 
               <apex:outputPanel> 
                  <p>You have selected:</p> 
                 <apex:outputText value="{!country}"/> 
              </apex:outputPanel> 
            </apex:facet> 
          </apex:actionstatus> 
     </apex:outputPanel> 
</apex:page>
            
/*** Controller ***/
public class sampleCon {
    String country = null;
         
    public PageReference test() {
        return null;
    }
                
    public List<SelectOption> getItems() {
        List<SelectOption> options = new List<SelectOption>(); 
        options.add(new SelectOption('US','US')); 
        options.add(new SelectOption('CANADA','Canada')); 
        options.add(new SelectOption('MEXICO','Mexico')); return options; 
    }
                   
    public String getCountry() {
        return country;
    }
                    
    public void setCountry(String country) { this.country = country; }
}
```

## Related Topics

- Use the immediate Attribute Carefully (atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)
- apex:selectOption (atlas.en-us.pages.meta/pages/pages_compref_selectOption.htm)
- SelectOption Class (atlas.en-us.pages.meta/pages/apex_pages_selectoption.htm)
