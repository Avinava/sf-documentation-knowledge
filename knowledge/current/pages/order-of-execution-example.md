---
title: "Order of Execution Example"
domain: pages
topic: order-of-execution-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.319Z
estimatedTokens: 1774
keywords: [Order, Execution, Follow, lifecycle, Visualforce, how, differs, user, retrieves, instead, postback]
---

# Order of Execution Example

> Follow the lifecycle of a Visualforce page. Learn how the order
        of execution differs when the user retrieves the page with a get request
        instead of a postback request.

# Order of Execution Example

Follow the lifecycle of a Visualforce page. Learn how the order of execution differs when the user retrieves the page with a get request instead of a postback request.

## Set Up the Example

The page in our example shows the name of an account, Northern Trail Outfitters, the number of its employees, and its industry. The user can edit these account details if the URL query parameter key is set to true. The page also displays the original value of key and its updated values that are set during the initialization of a custom component.

1.  Create a controller for a custom component named PageValuesController.

    ```

    ```

2.  Create a custom component named PageValues.

    ```

    ```

3.  Create a custom controller named AccountInfoController.

    ```

    ```

4.  Create a controller extension named AccountInfoControllerExtension.

    ```

    ```

5.  Create a page named AccountInfo.

    ```

    ```


## Follow the Order of Execution for a Get Request

Visit the AccountInfo page using the URL https://MyDomain\_login\_URL/apex/AccountInfo?id=recordId&key=false, where MyDomain\_login\_URL is the name of your instance and recordID is the ID of an account record in your organization. Notice that the URL query parameter key is set to false. You requested the page directly by entering a URL, so this page is the result of a get request, not a postback request.

A page appears:

![A view-only page that results from a get request and shows the account information for Northern Trail Outfitters](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Flifecycle_example_get_request.png&folder=pages)

These steps are executed during the get request.

1.  The constructor methods of the custom controller AccountInfoController and the controller extension AccountInfoControllerExtension execute. The controller has a variable called account set to the result of a SOQL query for an account. The query uses the account id passed in as the URL query parameter. The extension has a variable called acct that’s created by calling the getAccount method on the controller.
2.  The custom component PageValues initializes.

    This custom component has its own associated controller. Because the controller has no explicit constructor, the controller object is created using an implicit, no-argument, public constructor.

    As part of creating the custom component, the originalKey attribute on the custom component is set. You set the key parameter in the URL to false, so the originalKey attribute evaluates to false.

3.  After the custom component initializes, the assignTo attribute on that custom component executes. An assignTo attribute is a setter method that assigns the value of this attribute to a class variable in the associated custom component controller.

    PageValues has an assignTo method set to {!controllerKey}. In PageValuesController, the value of controllerKey is set to the value of originalKey. The getNewKey method sets newKey to the opposite of the controllerKey value. The controllerKey attribute is set to false, so newKey is set to true.

4.  The <apex:page\> component has an action attribute that calls the resetEmp method on the controller extension. That method sets the NumberofEmployees field on the account object to 1.

    There are also several expressions that evaluate on the page. The order of these evaluations is indeterminate, which means that the specific order can differ each time that the page loads. Let's focus on two expressions:

    -   <apex:pageBlock title="{!greeting}"\>

        The title attribute on <apex:pageblock\> calls the getGreeting method in the controller extension. The page displays “Northern Trail Outfitters Current Information.”

    -   <apex:form rendered="{!$CurrentPage.parameters.key = 'false'}">

        The rendered attribute on <apex:form\> is set based on the value of the key parameter. You set key to false when calling the page, so the form doesn’t render.

5.  Because the <apex:form\> component doesn’t render, a view state isn’t maintained.
6.  The HTML is sent to the browser, which renders the HTML.

## Follow the Order of Execution for a Postback Request

To understand how a postback request executes, visit the AccountInfo page using the URL https://MyDomain\_login\_URL/apex/AccountInfo?id=recordId&key=true. MyDomain\_login\_URL is the name of your instance, and recordID is the ID of an account record. Notice that the URL query parameter key is set to true.

A page with a form appears:

![An editable page that shows account information for Northern Trail Outfitters before a postback request is initiated](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Flifecycle_example_postback_before.png&folder=pages)

In the page’s Update the Account section, change the **Account Name** to NTO, the **Employees** to 42, and the **Industry** to Other. Then click **Save** to initiate a postback request.

These steps are executed during the postback request.

1.  The view state is decoded. The view state contains all of the information required to update the values on the page.
2.  All expressions are evaluated, and methods on controllers and controller extensions execute. The order of these expressions is indeterminate. Here’s how two of these expressions evaluate:
    -   <apex:pageBlock title="{!greeting}"\>

        The title attribute on <apex:pageblock\> calls the getGreeting method in the controller extension. Because you changed the account name, the value of greeting changes to “NTO Current Information.”

    -   <apex:form rendered="{!$CurrentPage.parameters.key = 'true'}">

        The rendered attribute on <apex:form\> is set based on the value of the key parameter. You didn’t change the key parameter, so the value in the view state is used. Because the value was true when the view state was created, the form renders.

3.  The save action that triggered the postback request evaluates. The save action is this method on the controller:

    ```

    ```

    If there aren’t any errors, the method updates the record with the new data. Because the action that triggered the postback didn’t include a page redirect, the view state updates. The resulting HTML is sent to the browser, and the updated account information appears.

    The save method can fail if the user doesn’t have permission to update the record or if there are validation rules that the change triggers. In this case, the page displays with error messages that describe the errors. The values that the user entered remain in the input fields so that the user can edit them and then resubmit the form.

4.  After the postback request executes successfully, the updated page appears:

    ![An editable page that shows the account information for NTO after the postback request](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Flifecycle_example_postback_after.png&folder=pages)


#### See Also

-   [Using the Development Mode Footer](atlas.en-us.pages.meta/pages/pages_tools_edit_toolbar.htm)

## Code Examples

```apex
public with sharing class PageValuesController {
    public Boolean controllerKey {get; set;}

    public Boolean getNewKey() {
        // return the opposite of controllerKey
        return !controllerKey;
   }
}
```

```
<apex:component controller="PageValuesController">
    <apex:attribute name="originalKey" type="Boolean" 
        description="The original key." assignTo="{!controllerKey}"/>
    <p>
        Original Key = {!originalKey}<br/>
        Controller Key = {!controllerKey}<br/>
        New Key = {!newKey}<br/>
    </p>
</apex:component>
```

```apex
public with sharing class AccountInfoController {
    
    private final Account account;
    
    public AccountInfoController() {
        account = [select id, name, site, NumberOfEmployees, Industry from Account 
        where id = :ApexPages.currentPage().getParameters().get('id')];
    }
    
    public Account getAccount() {
        return account;
    }

    public PageReference save() {
        update account;
        return null;
    }
}
```

```apex
public with sharing class AccountInfoControllerExtension {
    private final Account acct;
    Integer empAdd;
    
    public AccountInfoControllerExtension(AccountInfoController controller) {
        this.acct = (Account)controller.getAccount();
    }
    
    public String getGreeting() {
        return acct.name + ' Current Information';
    }
    
    public void resetNumberOfEmployees() {
        acct.NumberOfEmployees = 1;
        update acct;
    }
}
```

```
<apex:page controller="AccountInfoController" tabStyle="Account"
 extensions="AccountInfoControllerExtension" action="{!resetNumberOfEmployees}">
    <apex:messages />
    <apex:pageBlock title="{!greeting}">
        <apex:outputLabel value="{!$ObjectType.account.fields.Name.label}: " 
            for="acctName"/>
        <apex:outputField value="{!account.name}" id="acctName"/>
        <br/>
        <apex:outputLabel value="{!$ObjectType.account.fields.NumberOfEmployees.label}: "
            for="emps"/>
        <apex:outputField value="{!account.NumberOfEmployees}" id="emps"/>
        <br/>
        <apex:outputLabel value="{!$ObjectType.account.fields.Industry.label}: " 
            for="industry"/>
        <apex:outputField value="{!account.Industry}" id="industry"/>
        <br/>
    </apex:pageBlock>
    <apex:pageBlock title="Page Values">
        <c:PageValues originalKey="{!IF($CurrentPage.parameters.key = 'true', true, false)}"/>
    </apex:pageBlock>
    <apex:form rendered="{!$CurrentPage.parameters.key = 'true'}">
        <apex:pageBlock title="Update the Account" id="updateBlock">
            <apex:pageBlockSection columns="1">
                <apex:inputField id="aName" value="{!account.name}"/>
                <apex:inputField value="{!account.NumberOfEmployees}"/>
                <apex:pageBlockSectionItem >
                    <apex:outputLabel value="{!$ObjectType.account.fields.Industry.label}"
                        for="acctIndustry"/>
                    <apex:actionRegion >
                        <apex:inputField value="{!account.Industry}" id="acctIndustry">
                            <apex:actionSupport event="onchange" rerender="updateBlock"/>
                        </apex:inputField>
                    </apex:actionRegion>
                </apex:pageBlockSectionItem>
            </apex:pageBlockSection>
            <apex:pageBlockButtons location="bottom">
                <apex:commandButton action="{!save}" value="Save"/>
            </apex:pageBlockButtons>
        </apex:pageBlock>
        </apex:form>
</apex:page>
```

## Related Topics

- Using the Development Mode Footer (atlas.en-us.pages.meta/pages/pages_tools_edit_toolbar.htm)
