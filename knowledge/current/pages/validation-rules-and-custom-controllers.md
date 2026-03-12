---
title: "Validation Rules and Custom Controllers"
domain: pages
topic: validation-rules-and-custom-controllers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.423Z
estimatedTokens: 302
keywords: [Validation, Rules, Custom, Controllers, user, enters, data, Visualforce, uses, controller, causes, rule, error, standard, location]
---

# Validation Rules and Custom Controllers

> If a user enters data on a Visualforce page that uses a custom controller, and that data causes a validation
rule error, the error can be displayed on the Visualforce page. Like a page that uses a standard controller, if the validation
rule error location is a field associated with an <apex:inputFie

# Validation Rules and Custom Controllers

If a user enters data on a Visualforce page that uses a custom controller, and that data causes a validation rule error, the error can be displayed on the Visualforce page. Like a page that uses a standard controller, if the validation rule error location is a field associated with an <apex:inputField\> component, the error displays there. If the validation rule error location is set to the top of the page, use the <apex:messages\> component within the <apex:page\> to display the error. However, to get the information to the page, the custom controller must catch the exception.

For example, suppose you have the following page:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The ID of a valid account record must be specified as a query parameter in the URL for this page to render. For example, http://MyDomainName\_login\_URL/apex/myValidationPage?id=001x000xxx3Jsxb.

You need to write a custom controller like the following:

```

```

When the user saves the page, if a validation error is triggered, the exception is caught and displayed on the page as they are for a standard controller.

## Code Examples

```
<apex:page controller="MyController" tabStyle="Account">
  <apex:messages/>
  <apex:form>
   <apex:pageBlock title="Hello {!$User.FirstName}!">
     This is your new page for the {!name} controller. <br/>
     You are viewing the {!account.name} account.<br/><br/>
     Change Account Name: <p></p>
     <apex:inputField value="{!account.name}"/> <p></p>
     Change Number of Locations:
     <apex:inputField value="{!account.NumberofLocations__c}" id="Custom_validation"/> 
         <p>(Try entering a non-numeric character here, then hit save.)</p><br/><br/>
     <apex:commandButton action="{!save}" value="Save New Account Name"/>
   </apex:pageBlock>
  </apex:form>
</apex:page>
```

```apex
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
      account = [select id, name, numberoflocations__c from Account
        where id = :ApexPages.currentPage().getParameters().get('id')];
      return account;

  }
}
```
