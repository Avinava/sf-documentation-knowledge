---
title: "Build a Custom Controller"
domain: pages
topic: build-a-custom-controller
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.262Z
estimatedTokens: 731
keywords: [Build, Custom, Controller, Apex, uses, no-argument, outer, top-level]
---

# Build a Custom Controller

> A custom controller is an Apex class that uses the default,
        no-argument constructor for the outer, top-level class.

# Build a Custom Controller

A custom controller is an Apex class that uses the default, no-argument constructor for the outer, top-level class.

1.  From Setup, enter Apex Classes in the Quick Find box, then select **Apex Classes**.
2.  Click **New**.
3.  Click **Version Settings** to specify the version of Apex and the API used with this class. If your organization has installed managed packages from the AppExchange, you can also specify which version of each managed package to use with this class. Use the default values for all versions. This associates the class with the most recent version of Apex and the API, as well as each managed package. You can specify an older version of a managed package if you want to access components or functionality that differs from the most recent package version. You can specify an older version of Apex and the API to maintain specific behavior.
4.  In the class editor, enter the Apex code for the class. A single class can be up to 1 million characters in length, not including comments, test methods, or classes defined using @isTest.
5.  Click **Save** to save your changes and return to the class detail screen, or click **Quick Save** to save your changes and continue editing your class. Your Apex class must compile correctly before you can save your class.

## Example

The following class is a simple example of a custom controller:

```

```

The following Visualforce markup shows how the custom controller above can be used in a page:

```

```

The custom controller is associated with the page because of the controller attribute of the <apex:page\> component.

As with standard controllers and controller extensions, custom controller methods can be referenced with {! } notation in the associated page markup. In the example above, the getAccount method is referenced by the <apex:inputField\> tag's value attribute, while the <apex:commandButton\> tag references the save method with its action attribute.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Like other Apex classes, all custom controllers run in system mode. Consequently, the current user's credentials are not used to execute controller logic, and the user's permissions and field-level security do not apply.

You can choose whether a custom controller respects a user's organization-wide defaults, role hierarchy, and sharing rules by using the with sharing keywords in the class definition. For information, see “Using the with sharing, without sharing, and inherited sharing Keywords” in the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm "html (New Window)").

A custom controller can also be used to create new records. For example:

```

```

The following Visualforce markup shows how the custom controller above can be used in a page:

```

```

## Code Examples

```apex
public class MyController {

    private final Account account;

    public MyController() {
        account = [SELECT Id, Name, Site FROM Account 
                   WHERE Id = :ApexPages.currentPage().getParameters().get('id')];
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

```
<apex:page controller="MyController" tabStyle="Account">
    <apex:form>
        <apex:pageBlock title="Congratulations {!$User.FirstName}">
            You belong to Account Name: <apex:inputField value="{!account.name}"/>
            <apex:commandButton action="{!save}" value="save"/>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```

```apex
public class NewAndExistingController {

    public Account account { get; private set; }

    public NewAndExistingController() {
        Id id = ApexPages.currentPage().getParameters().get('id');
        account = (id == null) ? new Account() : 
            [SELECT Name, Phone, Industry FROM Account WHERE Id = :id];
    }

    public PageReference save() {
        try {
            upsert(account);
        } catch(System.DMLException e) {
            ApexPages.addMessages(e);
            return null;
        }
        //  After successful Save, navigate to the default view page
        PageReference redirectSuccess = new ApexPages.StandardController(Account).view();
        return (redirectSuccess);
    }
}
```

```
<apex:page controller="NewAndExistingController" tabstyle="Account">
    <apex:form>
        <apex:pageBlock mode="edit">
            <apex:pageMessages/>
            <apex:pageBlockSection>
                <apex:inputField value="{!account.name}"/>
                <apex:inputField value="{!account.phone}"/>
                <apex:inputField value="{!account.industry}"/>
            </apex:pageBlockSection>
            <apex:pageBlockButtons location="bottom">
                <apex:commandButton value="Save" action="{!save}"/>
            </apex:pageBlockButtons>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```
