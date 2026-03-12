---
title: "Create a Visualforce Page for the Salesforce Mobile App Using
            SLDS"
domain: pages
topic: create-a-visualforce-page-for-the-salesforce-mobile-app-using-slds
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.584Z
estimatedTokens: 587
keywords: [Visualforce, Salesforce, Mobile, App, SLDS, Let’s, displays, recently, accessed, accounts, styled, Lightning, Design, System, add]
---

# Create a Visualforce Page for the Salesforce Mobile App Using
            SLDS

> Let’s create a Visualforce page that displays your recently accessed accounts and is
        styled with the Lightning Design System (SLDS) and add it to the mobile navigation
        menu.

# Create a Visualforce Page for the Salesforce Mobile App Using SLDS

Let’s create a Visualforce page that displays your recently accessed accounts and is styled with the Lightning Design System (SLDS) and add it to the mobile navigation menu.

1.  First, let’s create the Visualforce page.
2.  Open the Developer Console and click **File** | **New** | **Visualforce Page**. Enter SLDSPage for the page name.
3.  In the editor, replace any markup with the following.

    ```

    ```

    -   The <apex:slds /> tag allows you to access SLDS stylesheets. This component is an easy alternative to uploading SLDS as a static resource and using it in your Visualforce pages.
    -   The <div class="slds-scope"\> wrapper is necessary around any SLDS-styled content. SLDS styles only apply to elements contained inside of it.

4.  This page is also mobile-friendly. Let’s add the page to the Salesforce mobile menu.
5.  Enable the page for mobile apps.

    1.  From Setup, enter Visualforce Pages in the Quick Find box, then select **Visualforce Pages**.
    2.  Click **Edit** next to the SLDSPage Visualforce page in the list.
    3.  Select **Available for Lightning Experience, Experience Builder sites, and the mobile app**.

    1.  Click **Save**.
6.  Create a tab for the Visualforce page.
    1.  From Setup, enter Tabs in the Quick Find box, then select **Tabs**.
    2.  In the Visualforce Tabs section, click **New**.
    3.  In the Visualforce Page drop-down list, select SLDSPage.
    4.  In the Tab Label field, enter SLDS Page.

        Notice that the Tab Name field is filled in automatically

    5.  Click in the Tab Style field and select the Diamond style.

        The icon for this style appears as the icon for the page in the Salesforce mobile navigation menu.

    6.  Click **Next**, then **Next**, then **Save**.
7.  Add the tab to the mobile navigation menu.
    1.  From Setup, enter Mobile Apps in the Quick Find box, then select **Salesforce Navigation**.
    2.  Select the SLDS Page tab and click **Add**.

        The SLDS item is added at the bottom of the Selected list.

    3.  Click **Save**.

![Visualforce latest accounts page styled with the Lightning Design System.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce1%2Fdeveloper%2Fimages%2Fvf_dev_best_practices_slds_page_s1.png&folder=pages)

## Code Examples

```
<apex:page showHeader="false" standardStylesheets="false" sidebar="false" applyHtmlTag="false" applyBodyTag="false" docType="html-5.0">

  <html xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" lang="en">
    <head>
      <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>SLDS LatestAccounts Visualforce Page in Salesforce Mobile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      <!-- Import the Design System style sheet -->
      <apex:slds />
    </head>

    <apex:remoteObjects >
      <apex:remoteObjectModel name="Account" fields="Id,Name,LastModifiedDate"/>
    </apex:remoteObjects>

    <body>

      <!-- REQUIRED SLDS WRAPPER -->
      <div class="slds-scope">

         <!-- PRIMARY CONTENT WRAPPER -->
         <div class="myapp">

           <!-- ACCOUNT LIST TABLE -->
             <div id="account-list" class="slds-p-vertical--medium"></div>
           <!-- / ACCOUNT LIST TABLE -->

         </div>
         <!-- / PRIMARY CONTENT WRAPPER -->

      </div>
      <!-- / REQUIRED SLDS WRAPPER -->

      <!-- JAVASCRIPT -->
      <script>
      (function() {
        var outputDiv = document.getElementById('account-list');
        var account = new SObjectModel.Account();

        var updateOutputDiv = function() {

          account.retrieve(
            { orderby: [{ LastModifiedDate: 'DESC' }], limit: 10 },
            function(error, records) {
              if (error) {
                alert(error.message);
            } else {
              // create data table
              var dataTable = document.createElement('table');
              dataTable.className = 'slds-table slds-table--bordered slds-text-heading_small';

              // add header row
              var tableHeader = dataTable.createTHead();
              var tableHeaderRow = tableHeader.insertRow();

              var tableHeaderRowCell1 = tableHeaderRow.insertCell(0);
              tableHeaderRowCell1.appendChild(document.createTextNode('Latest Accounts'));
              tableHeaderRowCell1.setAttribute('scope', 'col');
              tableHeaderRowCell1.setAttribute('class', 'slds-text-heading_medium');

              // build table body
              var tableBody = dataTable.appendChild(document.createElement('tbody'))

              var dataRow, dataRowCell1, recordName, data_id;
              records.forEach(function(record) {
                dataRow = tableBody.insertRow();
                dataRowCell1 = dataRow.insertCell(0);
                recordName = document.createTextNode(record.get('Name'));
                dataRowCell1.appendChild(recordName);

              });
              if (outputDiv.firstChild) {
                // replace table if it already exists
                // see later in tutorial
                outputDiv.replaceChild(dataTable, outputDiv.firstChild);
              } else {
                outputDiv.appendChild(dataTable);
              }
            }
          }
        );
      }
      updateOutputDiv();
      })();
      </script>
      <!-- / JAVASCRIPT -->
    </body>
  </html>
</apex:page>
```
