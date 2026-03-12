---
title: "apex:messages"
domain: pages
topic: apexmessages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.771Z
estimatedTokens: 586
keywords: [apex, messages, were, generated, components, current, <apex, message>, messages>, component, included, error, shown, debug, log]
---

# apex:messages

> All messages that were generated for all components on the current page. If an <apex:message> or <apex:messages> component is not included in a page, most warning and error messages are only shown in the debug log.

# apex:messages

All messages that were generated for all components on the current page. If an <apex:message\> or <apex:messages\> component is not included in a page, most warning and error messages are only shown in the debug log.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the "html-" prefix. Pass-through attributes are attached to the generated <ul\> tag. (Each message is contained in a list item.)

## Example

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| dir | String | The direction in which the generated HTML component should be read. Possible values include "RTL" (right to left) or "LTR" (left to right). |  | 10.0 | global |
| globalOnly | Boolean | A Boolean value that specifies whether only messages that are not associated with any client ID are displayed. If not specified, this value defaults to false. |  | 10.0 | global |
| id | String | An identifier that allows the message component to be referenced by other components in the page. |  | 10.0 | global |
| lang | String | The base language for the generated HTML output, for example, "en" or "en-US". For more information on this attribute, see the W3C specifications. |  | 10.0 | global |
| layout | String | The type of layout used to display the error messages. Possible values for this attribute include "list" or "table". If not specified, this value defaults to "list". |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| style | String | The style used to display the messages, used primarily for adding inline CSS styles. |  | 10.0 | global |
| styleClass | String | The style class used to display the messages, used primarily to designate which CSS styles are applied when using an external CSS stylesheet. |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user's mouse pointer hovers over this component. |  | 10.0 | global |

#### See Also

-   [apex:message](atlas.en-us.pages.meta/pages/pages_compref_message.htm)

## Code Examples

```apex
<!-- For this example to render properly, you must associate the Visualforce page 
with a valid account record in the URL. 
For example, if 001D000000IRt53 is the account ID, the resulting URL should be: 
https://MyDomain_login_URL/apex/myPage?id=001D000000IRt53
See the Visualforce Developer's Guide Quick Start Tutorial for more information. -->
         

<!-- Page:  -->
<apex:page controller="MyController" tabStyle="Account">
    <apex:messages />
    <apex:form > 
        <apex:pageBlock title="Hello {!$User.FirstName}!">
        This is your new page for the {!name} controller. <br/>
        You are viewing the {!account.name} account.

        <p>Number of Locations: <apex:inputField value="{!account.NumberofLocations__c}" 
            id="Location_validation"/> 
        (Enter an alphabetic character here, then click save to see what happens.) </p>
           
        <p>Number of Employees: <apex:inputField value="{!account.NumberOfEmployees}" 
            id="Employee_validation"/> 
        (Enter an alphabetic character here, then click save to see what happens.) </p>
            <p /> 
        <apex:commandButton action="{!save}" value="Save"/>    
         <p />
        </apex:pageBlock>  
    </apex:form>  
</apex:page>

/*** Controller  ***/
public class MyController {
    Account account;

    public PageReference save() {
    try{
        update account;
    }
    catch(DmlException ex){
        ApexPages.addMessages(ex);
    }
    return null;
    }

    public String getName() { 
        return 'MyController';
    }

    public Account getAccount() {
        if(account == null)
        account = [select id, name, numberofemployees, numberoflocations__c from Account
        where id = :ApexPages.currentPage().getParameters().get('id')];
        return account;

    }
}
```

## Related Topics

- apex:message (atlas.en-us.pages.meta/pages/pages_compref_message.htm)
