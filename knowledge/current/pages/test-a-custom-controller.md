---
title: "Test a Custom Controller"
domain: pages
topic: test-a-custom-controller
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.293Z
estimatedTokens: 578
keywords: [Test, Custom, Controller, ensure, error-free, code, execute, Apex, unit, tests, every, extension, write, verify, whether]
---

# Test a Custom Controller

> To ensure error-free code, create and execute Apex unit tests for
        every custom controller and controller extension that you write. Unit
        tests are class methods that verify whether a particular piece of code
        works properly. Unit test methods take no arguments, commit no data to
        the database, and are flagged with the @isTest annotation in the method definition.

# Test a Custom Controller

To ensure error-free code, create and execute Apex unit tests for every custom controller and controller extension that you write. Unit tests are class methods that verify whether a particular piece of code works properly. Unit test methods take no arguments, commit no data to the database, and are flagged with the @isTest annotation in the method definition.

The example NewLead page creates a lead from the form data that the user provides. If the user completes all the fields with valid values, the new lead is created, and the user is directed to the Success page. Otherwise, a new lead isn’t created, and the user is directed to the Failure page.

1.  Create a custom controller named NewLeadController.

    ```

    ```

2.  Create a page named NewLead.

    ```

    ```

3.  Create a page named Success.

    ```

    ```

4.  Create a page named Failure.

    ```

    ```

5.  Create a test class named NewLeadTests that contains the test method testAddNewLead. The test checks both failure and success conditions. To set the current PageReference for the controller, use the method Test.setCurrentPage(PageReference page).

    ```

    ```

6.  Run the Apex test method in your chosen developer environment.

    You can run Apex test methods in the Developer Console, in Setup, in the Salesforce extensions for Visual Studio Code, or using the API. See [Run Unit Test Methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing_unit_tests_running.htm "HTML (New Window)") in the Apex Developer Guide.


![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pages)

#### Tip

When testing, if the console shows the message Method does not exist or incorrect signature: Test.setCurrentPage(System.PageReference), check whether you created a class called Test. If so, rename the class.

#### See Also

-   [*Apex Developer Guide*: Testing Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing.htm "Apex Developer Guide: Testing Apex - html (New Window)")

-   [*Apex Reference Guide*: Test Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm "Apex Reference Guide: Test Class - HTML (New Window)")

## Code Examples

```apex
public class NewLeadController {
    private String firstName;
    private String lastName;
    private String company;
    private String email;
                    
    public NewLeadController() {
    }
                    
    public String getFirstName() {
        return this.firstName;
    }
                    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
                    
    public String getLastName() {
        return this.lastName;
    }
                    
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
                    
    public String getCompany() {
        return this.company;
    }
                    
    public void setCompany(String company) {
        this.company = company;
    }
                    
    public String getEmail() {
        return this.email;
    }
                    
    public void setEmail(String email) {
        this.email = email;
    }
                    
    public PageReference save() {
        PageReference p = null;
        try {
            Lead newlead = new Lead(LastName=this.lastName, 
                FirstName=this.firstName, 
                Company=this.company, 
                Email=this.email);
            insert newlead;
        } catch (Exception e) {
            p = Page.Failure;
            p.getParameters().put('error', 'noInsert');
        }
                    
        if (p == null) {
            p = Page.Success;
        }
                    
        p.setRedirect(true);
        return p;
    }
}
```

```
<apex:page controller="NewLeadController" tabstyle="lead">
    <apex:pageBlock>
        <apex:form>
            <h1>Test page for adding leads</h1>
            <p>This is a test page for adding leads.</p>
            <p>First name: <apex:inputText value="{!FirstName}"></apex:inputText></p>
            <p>Last name: <apex:inputText value="{!LastName}"></apex:inputText></p>
            <p>Company: <apex:inputText value="{!Company}"></apex:inputText></p>
            <p>Email address: <apex:inputText value="{!Email}"></apex:inputText></p>
            <apex:commandButton action="{!save}" value="Save New Lead"/>
        </apex:form>
    </apex:pageBlock>
</apex:page>
```

```
<apex:page>
    Success!
</apex:page>
```

```
<apex:page>
    A failure has occurred.
</apex:page>
```

```apex
@isTest
private class NewLeadTests {
                            
    @isTest
    static void testAddNewLead() {
        PageReference pageRef = Page.NewLead;
        Test.setCurrentPage(pageRef);
                            
        //Instantiate a new controller with no field values
        NewLeadController myController = new NewLeadController();
        String nextPage = myController.save().getUrl();
                            
        // Verify that the page fails to create the lead
        System.assertEquals('/apex/failure?error=noInsert', nextPage);
                            
        // Instantiate a new controller with valid field values
        myController = new NewLeadController(); 
        myController.setLastName('lastname');
        myController.setFirstName('firstname');
        myController.setCompany('Ursa Major');
        myController.setEmail('firstlast@ursamajor.com');
        nextPage = myController.save().getUrl();
                            
        // Verify that the Success page displays
        System.assertEquals('/apex/success', nextPage);
        Lead[] leads = [select id, email from lead where Company = 'Ursa Major'];
        System.assertEquals('firstlast@ursamajor.com', leads[0].email);
    }
}
```
