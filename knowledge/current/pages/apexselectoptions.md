---
title: "apex:selectOptions"
domain: pages
topic: apexselectoptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.109Z
estimatedTokens: 624
keywords: [apex, selectOptions, collection, possible, <apex, selectCheckBoxes>, selectRadio>, selectList>, component, selectOptions>, child, components, bound, selectOption, objects]
---

# apex:selectOptions

> A collection of possible values for an <apex:selectCheckBoxes>, <apex:selectRadio>, or <apex:selectList> component. An <apex:selectOptions> component must be a child of one of those components. It must also be bound to a collection of selectOption objects in a custom Visualforce controller.

# apex:selectOptions

A collection of possible values for an <apex:selectCheckBoxes\>, <apex:selectRadio\>, or <apex:selectList\> component. An <apex:selectOptions\> component must be a child of one of those components. It must also be bound to a collection of selectOption objects in a custom Visualforce controller.

Use this component to get user input for a controller method that does not correspond to a field on an sObject. Only <apex:inputField\> and <apex:outputField\> can be used with sObject fields.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <input\> tag for components within an <apex:selectCheckboxes\> or <apex:selectRadio\> parent component, or the generated <option\> tag for components within an <apex:selectList\> parent component.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the selectOptions component to be referenced by other components in the page. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| value | Object | A merge field that references the controller class collection variable of type SelectOption that is associated with this selectOptions component. For example, if the name of the associated variable in the controller class is mySetOfOptions, use value="{!mySetOfOptions}" to reference the variable. | Yes | 10.0 | global |

#### See Also

-   [apex:selectList](atlas.en-us.pages.meta/pages/pages_compref_selectList.htm)

-   [apex:selectCheckboxes](atlas.en-us.pages.meta/pages/pages_compref_selectCheckboxes.htm "A set of related checkbox input elements displayed in a table.")

-   [apex:selectRadio](atlas.en-us.pages.meta/pages/pages_compref_selectRadio.htm "A set of related radio button input elements, displayed in a table. Unlike checkboxes, only one radio button can be selected at a time.")

-   [SelectOption Class](atlas.en-us.pages.meta/pages/apex_pages_selectoption.htm "A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.")

## Code Examples

```apex
<!-- Page: -->
<apex:page controller="sampleCon">
    <apex:form>
        <apex:selectCheckboxes value="{!countries}" title="Choose a country">
            <apex:selectOptions value="{!items}"/>
        </apex:selectCheckboxes><br/>
        <apex:commandButton value="Test" action="{!test}" rerender="out" status="status"/>
    </apex:form>
    <apex:outputPanel id="out">
        <apex:actionstatus id="status" startText="testing...">
            <apex:facet name="stop">
                <apex:outputPanel>
                    <p>You have selected:</p>
                    <apex:dataList value="{!countries}" var="c">a:{!c}</apex:dataList>
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

- apex:selectList (atlas.en-us.pages.meta/pages/pages_compref_selectList.htm)
- apex:selectCheckboxes (atlas.en-us.pages.meta/pages/pages_compref_selectCheckboxes.htm)
- apex:selectRadio (atlas.en-us.pages.meta/pages/pages_compref_selectRadio.htm)
- SelectOption Class (atlas.en-us.pages.meta/pages/apex_pages_selectoption.htm)
