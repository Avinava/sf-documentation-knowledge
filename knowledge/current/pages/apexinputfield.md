---
title: "apex:inputField"
domain: pages
topic: apexinputfield
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.575Z
estimatedTokens: 2278
keywords: [apex, inputField, HTML, input, element, corresponds, Salesforce, <apex, inputField>, component, respects, attributes, associated, including, whether]
---

# apex:inputField

> An HTML input element for a value that corresponds to a field on a Salesforce object. The
				<apex:inputField> component respects
			the attributes of the associated field, including whether the field is required or
			unique, and the user interface widget to display to get input from the user. For

# apex:inputField

An HTML input element for a value that corresponds to a field on a Salesforce object. The <apex:inputField\> component respects the attributes of the associated field, including whether the field is required or unique, and the user interface widget to display to get input from the user. For example, if the specified <apex:inputField\> component is a date field, a calendar input widget is displayed. When used in an <apex:pageBlockSection\>, <apex:inputField\> tags automatically display with their corresponding output label.

Consider the following when using DOM events with this tag:

-   For lookup fields, mouse events fire on both the text box and graphic icon.
-   For multi-select picklists, all events fire, but the DOM ID is suffixed with \_unselected for the left box, \_selected for the right box, and \_right\_arrow and \_left\_arrow for the graphic icons.
-   For rich text areas, no events fire.

**Note:**

-   Read-only fields, and fields for certain Salesforce objects with complex automatic behavior, such as Event.StartDateTime and Event.EndDateTime, don't render as editable when using <apex:inputField\>. Use a different input component such as <apex:inputText\> instead.
-   An <apex:inputField\> component for a rich text area field can't be used for image uploads in Site.com sites, Salesforce Sites, or [Visualforce sites](https://help.salesforce.com/s/articleView?id=experience.exp_cloud_basics_glossary.htm&type=5&language=en_US) due to security constraints. If you want to enable users to upload image files in either of those contexts, use an <apex:inputFile\> component.
-   If custom help is defined for the field in Setup, the field must be a child of an <apex:pageBlock\> or <apex:pageBlockSection\>, and the Salesforce page header must be displayed for the custom help to appear on your Visualforce page. To override the display of custom help, use the <apex:inputField\> in the body of an <apex:pageBlockSectionItem\>.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <input\> tag.

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the inputField component to be referenced by other components in the page. |  | 10.0 | global |
| ignoreEditPermissionForRendering | Boolean | If set to true, users can edit the field even when the underlying permission on the object doesn't allow edits. This override affects all users but is intended for guest users. This attribute works only with a custom controller in without sharing mode.Users must have entity read permissions and field-level security read access for the object.This attribute bypasses entity edit permissions and field-level security edit checks, so any form field that uses <apex:inputField> with this attribute is open for edit. To validate fields or block edit access when using this attribute, use additional checks in the page's custom Apex controller.WarningSalesforce is not responsible for any exposure of your data to unauthenticated users based on this change from default settings. |  | 49.0 | global |
| label | String | A text value that allows you to override the default label that is displayed for the field. You can set label to an empty string to hide the label on forms. Setting it to null is an error. |  | 23.0 |  |
| list | Object | A list of auto-complete values to be added to an HTML <datalist> block associated with the input field.The list attribute is specified as either a comma-delimited static string or a Visualforce expression. An expression can resolve to either a comma-delimited string, or a list of objects. List elements can be any data type, as long as that type can be coerced to a string, either as an Apex language feature or via a toString() method. |  | 29.0 |  |
| onblur | String | The JavaScript invoked if the onblur event occurs--that is, if the focus moves off the field. |  | 12.0 | global |
| onchange | String | The JavaScript invoked if the onchange event occurs--that is, if the user changes the content of the field. |  | 12.0 | global |
| onclick | String | The JavaScript invoked if the onclick event occurs--that is, if the user clicks the field. |  | 12.0 | global |
| ondblclick | String | The JavaScript invoked if the ondblclick event occurs--that is, if the user clicks the field twice. |  | 12.0 | global |
| onfocus | String | The JavaScript invoked if the onfocus event occurs--that is, if the focus is on the field. |  | 12.0 | global |
| onkeydown | String | The JavaScript invoked if the onkeydown event occurs--that is, if the user presses a keyboard key. |  | 12.0 | global |
| onkeypress | String | The JavaScript invoked if the onkeypress event occurs--that is, if the user presses or holds down a keyboard key. |  | 12.0 | global |
| onkeyup | String | The JavaScript invoked if the onkeyup event occurs--that is, if the user releases a keyboard key. |  | 12.0 | global |
| onmousedown | String | The JavaScript invoked if the onmousedown event occurs--that is, if the user clicks a mouse button. |  | 12.0 | global |
| onmousemove | String | The JavaScript invoked if the onmousemove event occurs--that is, if the user moves the mouse pointer. |  | 12.0 | global |
| onmouseout | String | The JavaScript invoked if the onmouseout event occurs--that is, if the user moves the mouse pointer away from the field. |  | 12.0 | global |
| onmouseover | String | The JavaScript invoked if the onmouseover event occurs--that is, if the user moves the mouse pointer over the field. |  | 12.0 | global |
| onmouseup | String | The JavaScript invoked if the onmouseup event occurs--that is, if the user releases the mouse button. |  | 12.0 | global |
| onselect | String | The JavaScript invoked if the onselect event occurs--that is, if the user selects a checkbox associated with this field. |  | 12.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| required | Boolean | A Boolean value that specifies whether this inputField is a required field. If set to true, the user must specify a value for this field. If not selected, this value defaults to false.If this input field displays a custom object name, its value can be set to nil and won't be required unless you set this attribute to true. The same doesn't apply to standard object names, which are always required regardless of this attribute. |  | 10.0 | global |
| showDatePicker | Boolean | Whether to use the Visualforce date picker for this field, or suppress it in favor of a browser-based date picker.This attribute only affects date and datetime fields, and activating a browser-based type-appropriate selection widget requires the type attribute be set to one of these date- or time-compatible types:datedatetimedatetime-localmonthweektime |  | 29.0 |  |
| style | String | The CSS style used to display the inputField component. This attribute may not work for all values. If your text requires a class name, use a wrapping span tag. |  | 12.0 | global |
| styleClass | String | The CSS style class used to display the inputField component. This attribute may not work for all values. If your text requires a class name, use a wrapping span tag. |  | 12.0 | global |
| taborderhint | Integer | A hint to indicate the relative order in which this field is selected compared to other page components when a user presses the Tab key repeatedly. This value must be an integer from 1 through 3276, with component 1 being the first component that is selected when a user presses the Tab key. |  | 23.0 |  |
| type | String | The HTML5 type attribute to add to the generated <input> element. Valid type values are:autodatedatetimedatetime-localmonthweektimeemailnumberrangesearchteltexturl |  | 29.0 |  |
| value | Object | An expression that references the Salesforce field to associate with this inputField. For example, if you want to display an input field for an account's name field, use value="{!account.name}".You can't associate an inputField with a formula field of type currency if your organization is using dated exchange rates. |  | 10.0 | global |

#### See Also

-   [*Community Cloud Practice Blog*: Guest User Record Access Development Best Practices](https://www.learncommunitycloud.com/s/article/Guest-User-Record-Access-Development-Best-Practices "Community Cloud Practice Blog: Guest User Record
    Access Development Best Practices - html (New Window)")

-   [apex:input](atlas.en-us.pages.meta/pages/pages_compref_input.htm)

-   [Displaying Record Types](atlas.en-us.pages.meta/pages/pages_controller_record_types.htm)

-   [Using Input Components in a Page](atlas.en-us.pages.meta/pages/pages_quick_start_input_components.htm)

## Code Examples

```
<!-- For this example to render fully, associate the page
with a valid account record in the URL.
For example: https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53 -->

<apex:page standardController="Account">
    <apex:form>
        <apex:pageBlock title="My Content" mode="edit">
            <apex:pageBlockButtons>
                <apex:commandButton action="{!save}" value="Save"/>
            </apex:pageBlockButtons>
            <apex:pageBlockSection title="My Content Section" columns="2">
                <apex:inputField value="{!account.name}"/>
                <apex:inputField value="{!account.site}"/>
                <apex:inputField value="{!account.type}"/>
                <apex:inputField value="{!account.accountNumber}"/>
            </apex:pageBlockSection>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```

## Related Topics

- apex:input (atlas.en-us.pages.meta/pages/pages_compref_input.htm)
- Displaying Record Types (atlas.en-us.pages.meta/pages/pages_controller_record_types.htm)
- Using Input Components in a Page (atlas.en-us.pages.meta/pages/pages_quick_start_input_components.htm)
