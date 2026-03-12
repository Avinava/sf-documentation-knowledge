---
title: "Creating a Wizard"
domain: pages
topic: creating-a-wizard
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.057Z
estimatedTokens: 1999
keywords: [Creating, Wizard, Visualforce, markup, custom, three-step, users, opportunity, time, contact, account, role, Controller, Step, Two]
---

# Creating a Wizard

> Use Visualforce markup to create a custom, three-step wizard that
    allows users to create an opportunity at the same time as a related contact,
    account, and contact role.

# Creating a Wizard

Use Visualforce markup to create a custom, three-step wizard that allows users to create an opportunity at the same time as a related contact, account, and contact role.

The three steps of the wizard are::

-   The first step captures information related to the account and contact
-   The second step captures information related to the opportunity
-   The final step shows which records will be created and allows the user to save or cancel

To implement this wizard, we must define three pages for each of the three steps in the wizard, plus a single custom controller that sets up navigation between each of the pages and tracks the data that the user enters.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Data that's used across several Visualforce pages must be defined within the first page, even if that page isn't using the data. For example, if a field is necessary on pages two and three of a three-step process, page one must also contain the field. You can hide this field from the user by setting the rendered attribute of the field to false.

The code for each of these components is included in the sections below, but first you need to understand the best procedure for creating them because each of the three pages references the controller, and the controller references each of the three pages. In what appears to be a conundrum, you cannot create the controller without the pages, but the pages have to exist to refer to them in the controller.

We can work out of this problem by first defining pages that are completely empty, then creating the controller, and then adding markup to the pages. Consequently, the best procedure for creating the wizard pages and controller is as follows:

1.  Navigate to the URL for the first page, https://MyDomain\_login\_URL/apex/opptyStep1, and click **Create Page opptyStep1**.
2.  Repeat the step above for the other pages in the wizard, opptyStep2 and opptyStep3.
3.  Create the newOpportunityController controller by adding it as an attribute to the <apex:page\> tag on one of your pages (for example, <apex:page controller="newOpportunityController"\>, and clicking **Create Apex controller newOpportunityController**. Paste in all of the controller code and click **Save**.
4.  Now return to the editors for the three pages that you created and copy in their code. The wizard should now work as expected.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Although you can create an empty page, the reverse is not true—in order for a page to refer to a controller, the controller has to exist with all of its methods and properties.

## The Opportunity Wizard Controller

The following Apex class is the controller for all three pages in the New Customer Opportunity wizard:

```

```

## Step One of the Opportunity Wizard

The following code defines the first page of the wizard (opptyStep1) in which data about the associated contact and account is gathered from the user:

```

```

Notice the following about the markup for the first page of the wizard:

-   The <apex:pageBlock\> tag can take an optional <apex:pageBlockButtons\> child element that controls the buttons that appear in the header and footer of the component. The order in which the <apex:pageBlockButtons\> tag appears in the <apex:pageBlock\> body does not matter. In this page of the wizard, the <apex:pageBlockButtons\> tag includes the **Next** button that appears in the footer of the page block area.
-   The wizard relies on JavaScript code to display a dialog box asking if a user wants to navigate away when clicking the **Cancel** button. Although the example includes the JavaScript directly in the markup for simplicity, it is a better practice to [put JavaScript code in a static resource](atlas.en-us.pages.meta/pages/pages_javascript_intro.htm "Using JavaScript in Visualforce pages gives you access to a wide range of existing JavaScript functionality, such as JavaScript libraries, and other ways to customize the functionality of your pages. Action tags, such as <apex:actionFunction> and <apex:actionSupport>, support Ajax requests.") and reference that resource instead.
-   In this page of the wizard, the **Next** button calls the step2 method in the controller, which returns a PageReference to the next step of the wizard:

    ```

    ```

    Command buttons must appear in a form, because the form component itself is responsible for refreshing the page display based on the new PageReference.

-   An <apex:pageBlockSection\> tag organizes a set of data for display. Similar to a table, an <apex:pageBlockSection\> consists of one or more columns, each of which spans two cells—one for a field's label, and one for its value. Each component found in the body of an <apex:pageBlockSection\> tag is placed into the next cell in a row until the number of columns is reached. At that point, the next component wraps to the next row and is placed in the first cell.

    Some components, including <apex:inputField\>, automatically span both cells of a page block section column at once, filling in both a field's label and value. For example, in the Contact Information area of this page, the First Name field is in the first column, the Last Name field is in the second column, and the Phone field wraps to the first column of the next row:

    ```

    ```

-   The value attribute on the first <apex:inputField\> tag in the preceding code excerpt assigns the user's input to the firstName field of the contact record that's returned by the getContact method in the controller.

Your page should look like this:

Step 1 of the New Customer Opportunity Wizard ![Step 1 of the New Customer Opportunity wizard. Two sections, called "Account Information" and "Contact Information", are displayed.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_wizard1.jpg&folder=pages)

## Step Two of the Opportunity Wizard

The following code defines the second page of the wizard (opptyStep2) in which data about the opportunity is gathered from the user:

```

```

Notice that although the markup for placing the Close Date, Stage, and Role for Contact fields on the form is the same as the other fields, the <apex:inputField\> tag examines the data type of each field to determine how to display it. For example, clicking in the Close Date text box brings up a calendar from which users can select the date.

Your page should look like this:

Step 2 of the New Customer Opportunity Wizard ![Step 2 of the New Customer Opportunity wizard. A section called "Opportunity Information" is displayed.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_wizard2.jpg&folder=pages)

## Step Three of the Opportunity Wizard

The last block of code defines the third page of the wizard (opptyStep3) in which all inputted data is displayed. The user can decide to save the operation or return to the previous step:

```

```

Notice that the third page of the wizard simply writes text to the page with <apex:outputField\> tags.

Your final page should look like this:

Step 3 of the New Customer Opportunity Wizard ![Step 3 of the New Customer Opportunity wizard. The filled-out sections "Account Information," "Contact Information," and "Opportunity Information" are displayed for review.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_quick_start_page_wizard3.jpg&folder=pages)

#### See Also

-   [Use the immediate Attribute Carefully](atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm "Visualforce components with the immediate attribute set to true execute an action without processing any validation rules for the associated fields on the page. This attribute should only be used if the component executes an action that navigates away from the page after completion.")

## Code Examples

```apex
public class newOpportunityController {

   // These four member variables maintain the state of the wizard.
   // When users enter data into the wizard, their input is stored
   // in these variables. 
   Account account;
   Contact contact;
   Opportunity opportunity;
   OpportunityContactRole role;


   // The next four methods return one of each of the four member
   // variables. If this is the first time the method is called,
   // it creates an empty record for the variable.
   public Account getAccount() {
      if(account == null) account = new Account();
      return account;
   }

   public Contact getContact() {
      if(contact == null) contact = new Contact();
      return contact;
   }

   public Opportunity getOpportunity() {
      if(opportunity == null) opportunity = new Opportunity();
      return opportunity;
   }

   public OpportunityContactRole getRole() {
      if(role == null) role = new OpportunityContactRole();
      return role;
   }


   // The next three methods control navigation through
   // the wizard. Each returns a PageReference for one of the three pages
   // in the wizard. Note that the redirect attribute does not need to
   // be set on the PageReference because the URL does not need to change
   // when users move from page to page.
   public PageReference step1() {
      return Page.opptyStep1;
   }

   public PageReference step2() {
      return Page.opptyStep2;
   }

   public PageReference step3() {
      return Page.opptyStep3;
   }


   // This method cancels the wizard, and returns the user to the 
   // Opportunities tab
    public PageReference cancel() {
      PageReference opportunityPage = new PageReference('/006');
      opportunityPage.setRedirect(true);
      return opportunityPage; 
    }

   // This method performs the final save for all four objects, and
   // then navigates the user to the detail page for the new
   // opportunity.
   public PageReference save() {

      // Create the account. Before inserting, copy the contact's
      // phone number into the account phone number field.
      account.phone = contact.phone;
      insert account;

      // Create the contact. Before inserting, use the id field
      // that's created once the account is inserted to create
      // the relationship between the contact and the account.
      contact.accountId = account.id;
      insert contact;

      // Create the opportunity. Before inserting, create 
      // another relationship with the account.
      opportunity.accountId = account.id;
      insert opportunity;

      // Create the junction contact role between the opportunity
      // and the contact.
      role.opportunityId = opportunity.id;
      role.contactId = contact.id;
      insert role;

      // Finally, send the user to the detail page for 
      // the new opportunity.


      PageReference opptyPage = new ApexPages.StandardController(opportunity).view();
      opptyPage.setRedirect(true);

      return opptyPage;
   }

}
```

```
<apex:page controller="newOpportunityController" tabStyle="Opportunity">
  <script>
  function confirmCancel() {
      var isCancel = confirm("Are you sure you wish to cancel?");
      if (isCancel) return true;
  
     return false;
  }  
  </script>
  <apex:sectionHeader title="New Customer Opportunity" subtitle="Step 1 of 3"/>
    <apex:form>
      <apex:pageBlock title="Customer Information" mode="edit">

        <!-- The pageBlockButtons tag defines the buttons that appear at the top
             and bottom of the pageBlock. Like a facet, it can appear anywhere in
             a pageBlock, but always defines the button areas.-->
        <!-- The Next button contained in this pageBlockButtons area
             calls the step2 controller method, which returns a pageReference to
             the next step of the wizard. -->
        <apex:pageBlockButtons>
          <apex:commandButton action="{!step2}" value="Next"/>
          <apex:commandButton action="{!cancel}" value="Cancel" 
                              onclick="return confirmCancel()" immediate="true"/>
        </apex:pageBlockButtons>
      <apex:pageBlockSection title="Account Information">

        <!-- Within a pageBlockSection, inputFields always display with their
             corresponding output label. -->
        <apex:inputField id="accountName" value="{!account.name}"/>
        <apex:inputField id="accountSite" value="{!account.site}"/>
      </apex:pageBlockSection>
      <apex:pageBlockSection title="Contact Information">
        <apex:inputField id="contactFirstName" value="{!contact.firstName}"/>
        <apex:inputField id="contactLastName" value="{!contact.lastName}"/>
        <apex:inputField id="contactPhone" value="{!contact.phone}"/>
      </apex:pageBlockSection>
    </apex:pageBlock>
  </apex:form>
</apex:page>
```

```
<apex:pageBlockButtons>
    <apex:commandButton action="{!step2}" value="Next"/>
</apex:pageBlockButtons>
```

```
<apex:pageBlockSection title="Contact Information">
  <apex:inputField id="contactFirstName" value="{!contact.firstName}"/>
  <apex:inputField id="contactLastName" value="{!contact.lastName}"/>
  <apex:inputField id="contactPhone" value="{!contact.phone}"/>
</apex:pageBlockSection>
```

```
<apex:page controller="newOpportunityController" tabStyle="Opportunity">
  <script>
  function confirmCancel() {
      var isCancel = confirm("Are you sure you wish to cancel?");
      if (isCancel) return true;
  
     return false;
  }  
  </script>
  <apex:sectionHeader title="New Customer Opportunity" subtitle="Step 2 of 3"/>
  <apex:form>
    <apex:pageBlock title="Opportunity Information" mode="edit">
      <apex:pageBlockButtons>
        <apex:commandButton action="{!step1}" value="Previous"/>
        <apex:commandButton action="{!step3}" value="Next"/>
        <apex:commandButton action="{!cancel}" value="Cancel" 
                            onclick="return confirmCancel()" immediate="true"/>
      </apex:pageBlockButtons>
      <apex:pageBlockSection title="Opportunity Information">
        <apex:inputField id="opportunityName" value="{!opportunity.name}"/>
        <apex:inputField id="opportunityAmount" value="{!opportunity.amount}"/>
        <apex:inputField id="opportunityCloseDate" value="{!opportunity.closeDate}"/>
        <apex:inputField id="opportunityStageName" value="{!opportunity.stageName}"/>
        <apex:inputField id="contactRole" value="{!role.role}"/>
      </apex:pageBlockSection>
    </apex:pageBlock>
  </apex:form>
</apex:page>
```

## Related Topics

- put JavaScript code in a static
              resource (atlas.en-us.pages.meta/pages/pages_javascript_intro.htm)
- Use the immediate Attribute Carefully (atlas.en-us.pages.meta/pages/pages_best_practices_perf_immediate_attr.htm)
