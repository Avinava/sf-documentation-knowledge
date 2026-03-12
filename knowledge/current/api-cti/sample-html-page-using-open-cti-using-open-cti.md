---
title: "Sample HTML Page Using Open CTI Using Open
            CTI"
domain: api-cti
topic: sample-html-page-using-open-cti-using-open-cti
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.932Z
estimatedTokens: 571
keywords: [Sample, HTML, Open, CTI, implementation, look, different, how, add, functionality, Salesforce, user]
---

# Sample HTML Page Using Open CTI Using Open
            CTI

> Each implementation of Open CTI can look different. This example shows you how to add
        CTI functionality to the Salesforce user interface using an HTML page.

# Sample HTML Page Using Open CTI Using Open CTI

Each implementation of Open CTI can look different. This example shows you how to add CTI functionality to the Salesforce user interface using an HTML page.

This example assumes that you’ve already imported a call center definition file into your Salesforce org. The sample HTML page can be stored on Salesforce as a Visualforce page or on a third-party domain.

1.  Create an HTML page.
2.  Cut and paste the following sample code into your HTML page.

    This code demonstrates various functions of Open CTI.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

    #### Note

    Keep in mind that to make calls in Lightning Experience, you must first create a Lightning app and add the Open CTI Softphone utility.

    Sample Code for Salesforce Classic

    ```

    ```

    Sample Code for Lightning Experience

    ```

    ```


After you create the HTML page, add the URL to the call center definition file. The softphone is rendered differently depending on your user interface:

-   In Salesforce Classic, on the left of the page
-   In the Salesforce Classic Console App, in a footer
-   In Lightning Experience, in a footer

Output of Sample HTML Page in Salesforce Classic

![output of sample HTML page as a softphone in Salesforce](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_cti%2Fimages%2Fsample_app_softphone.png&folder=api_cti)

Output of Sample HTML Page in a Salesforce Classic Console App

![output of sample HTML page as a softphone in the Service Cloud console](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_cti%2Fimages%2Fsample_console_softphone.png&folder=api_cti)

Output of Sample HTML Page in a Lightning Experience App

![Screen capture of a the HTML sample in a Lightning Experience app.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_cti%2Fimages%2Fsample_app_softphone_lex.png&folder=api_cti)

#### See Also

-   [Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm "The way you implement Open CTI depends on your org’s user interface. There are separate Open CTI APIs for Salesforce Classic and Lightning Experience.")

## Code Examples

```
<html>
<head>
      <!-- Imports Open CTI JavaScript library. Point to a valid Salesforce domain. -->
      <script src="https://domain:port/support/api/66.0/interaction.js"></script>
      <script type="text/javascript">
             // Callback of API method: isInConsole
             var isInConsoleCallback = function (response) {
                  // Returns true if method is executed in Salesforce console, false otherwise.
                  if (response.result) {
                      alert('Softphone is in Salesforce console.');
                  } 
                  else {
                      alert('Softphone is not in Salesforce console.');
                  }
              };
              // Invokes API method: isInConsole
              function isInConsole() {
                       sforce.interaction.isInConsole(isInConsoleCallback);
              }
              // Callback of API method: getCallCenterSettings
              var getCallCenterSettingsCallback = function (response) {
                     // Result returns call center settings as a JSON string.
                     if (response.result) {
                            alert(response.result);
                     } 
                     else {
                            alert('Error retrieving call center settings ' + response.error);
                     }
              };
              // Invokes API method: getCallCenterSettings
              function getCallCenterSettings() {
                       sforce.interaction.cti.getCallCenterSettings(getCallCenterSettingsCallback);
              }
              // Callback of API method: setSoftphoneHeight
              var setSoftphoneHeightCallback = function (response) {
                       // Returns true if SoftPhone height was set successfully, false otherwise.
                      if (response.result) {
                          alert('Setting softphone height to 300px was successful.');
                      } 
                      else {
                         alert('Setting softphone height failed.');
                     }
               };
               // Invokes setSoftphoneHeight API method.
               function setSoftphoneHeight() {
                       sforce.interaction.cti.setSoftphoneHeight(300, setSoftphoneHeightCallback);
               }
               // Callback of API method: getPageInfo
               var getPageInfoCallback = function (response) {
                      if (response.result) {
                             alert(response.result);
                      } 
                      else {
                             alert('Error occured while trying to get page info: ' + response.error);
                      }
               }
               // Invokes API method getPageInfo
               function getPageInfo() {
                       sforce.interaction.getPageInfo(getPageInfoCallback);
               }
      </script>
</head>
<body>
      <button onclick="isInConsole();">isInConsole</button><br/>
      <button onclick="getCallCenterSettings();">getCallCenterSettings</button><br/>
      <button onclick="setSoftphoneHeight();">setSoftphoneHeight(300)</button><br/>
      <button onclick="getPageInfo();">getPageInfo</button>
</body>
</html>
```

```
<apex:page >
  <!-- Begin Default Content -->
  <h1>Congratulations!</h1>
  This is your sample page.
  <!-- End Default Content -->
<html>
<head>
   <!-- Imports Open CTI JavaScript library. Point to a valid Salesforce domain.
-->
   <script src="https://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
   <script type="text/javascript">
      // Callback of API method: setSoftphonePanelHeight
      var setSoftphonePanelHeightCallback = function(response) {
            // Returns true if setSoftphonePanelHeight method is executed successfully, false otherwise
            if (response.result) {
               alert('setSoftphonePanelHeight is successfully executed.');
            } 
            else {
               alert('setSoftphonePanelHeight failed.);
            }
      };
      // Invokes API method: setSoftphonePanelHeight
      function setSoftphonePanelHeight() {
         sforce.opencti.setSoftphonePanelHeight({
            heightPX: 500,
            callback: setSoftphonePanelHeightCallback
         });
      }
      // Callback of API method: setSoftphonePanelWidth
      var setSoftphonePanelWidthCallback = function(response) {
            // Returns true if setSoftphonePanelWidth method is executed successfully, false otherwise
            if (response.result) {
               alert('setSoftphonePanelWidth is successfully executed.');
            } 
            else {
               alert('setSoftphonePanelWidth failed.');
            }
      };
      // Invokes API method: setSoftphonePanelWidth
      function setSoftphonePanelWidth() {
         sforce.opencti.setSoftphonePanelWidth({
            widthPX: 500,
            callback: setSoftphonePanelHeightCallback
         });
      }
      // Callback of API method: setSoftphoneItemIcon
      var setSoftphoneItemIconCallback = function(response) {
            // Returns true if setSoftphoneItemIcon method is executed successfully, false otherwise
            if (response.result) {
               alert('setSoftphoneItemIcon is successfully executed.');
            } 
            else {
               alert('setSoftphoneItemIcon failed.');
            }
      };
      // Invokes API method: setSoftphoneItemIcon
      function setSoftphoneItemIcon() {
         sforce.opencti.setSoftphoneItemIcon({
            key: 'call',
            callback: setSoftphoneItemIconCallback
         });
      }
      // Callback of API method: setSoftphoneItemLabel
      var setSoftphoneItemLabelCallback = function(response) {
            // Returns true if setSoftphoneItemLabel method is executed successfully, false otherwise
            if (response.result) {
               alert('setSoftphoneItemLabel is successfully executed.');
            } 
            else {
               alert('setSoftphoneItemLabel failed.');
            }
      };
      // Invokes API method: setSoftphoneItemLabel
      function setSoftphoneItemLabel() {
         sforce.opencti.setSoftphoneItemLabel({
            Label: 'MySoftphone',
            callback: setSoftphoneItemLabelCallback
         });
      }
   </script>
</head>
<body>
   <button onclick="setSoftphonePanelHeight();">setSoftphonePanelHeight({heightPX:500})</button><br/>
   <button onclick="setSoftphonePanelWidth();">setSoftphonePanelWidth({widthPX:500})</button><br/>
   <button onclick="setSoftphoneItemIcon();">setSoftphoneItemIcon({key:'call'})</button><br/>
   <button onclick="setSoftphoneItemLabel();">setSoftphoneItemLabel({label:'MySoftphone'})</button>
</body>
</html>
</apex:page>
```

## Related Topics

- Why Your UI Matters—Open CTI for Salesforce Classic vs. Lightning Experience (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_intro_lightning_vs_classic.htm)
