---
title: "JavaScript Remoting and Static HTML"
domain: pages
topic: javascript-remoting-and-static-html
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.505Z
estimatedTokens: 1086
keywords: [JavaScript, Remoting, HTML, Combine, offer, best, user, experience, performance, match, Salesforce, mobile, app, architecture, avoids]
---

# JavaScript Remoting and Static HTML

> Combine JavaScript remoting and static HTML to offer the best user experience, with
        the best performance and user interface match to the Salesforce mobile app. This
        architecture avoids most Visualforce tags in favor of rendering page elements in JavaScript.
        This option requires the most developer expertise, and can take a little longer to set up
        than standard Visualforce or mixed Visualforce and HTML. Use the Salesforce Mobile Packs for
        a fast start and to work with the very latest in mobile Web application technology.

# JavaScript Remoting and Static HTML

Combine JavaScript remoting and static HTML to offer the best user experience, with the best performance and user interface match to the Salesforce mobile app. This architecture avoids most Visualforce tags in favor of rendering page elements in JavaScript. This option requires the most developer expertise, and can take a little longer to set up than standard Visualforce or mixed Visualforce and HTML. Use the Salesforce Mobile Packs for a fast start and to work with the very latest in mobile Web application technology.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Visualforce pages designed this way eschew many of the automatic, simplified features of standard Visualforce, in favor of taking more control over the request-response cycle, and performing page updates using JavaScript instead of page reloads. This can substantially improve the performance of the page, especially over the lower bandwidth, higher latency wireless network connections that make mobile devices so, well, mobile. The downside is that there is more code to write, and you need expertise in JavaScript, JavaScript remoting, HTML5, your mobile toolkit, and CSS, in addition to Apex and Visualforce. The upside of the downside is that you’re working with the latest, most advanced tools for mobile development, and the pages you can build are the best, most complete way to “snap in” custom functionality that fully integrates with the app.

You can build desktop Visualforce pages using this approach as well as pages for the Salesforce mobile app. It’s even possible to share such pages between the two environments by customizing the styling, though it’s a challenge to closely match the full Salesforce site look and feel. Most importantly, the pages you design can be fully responsive, adapting and working across a range of devices and form factors.

## Applying this Approach to Your Visualforce Pages

To use this approach for creating pages for the Salesforce mobile app, follow this general process:

1.  Install your preferred [Salesforce Mobile Pack](https://developer.salesforce.com/en/mobile/services/mobile-packs "HTML (New Window)") (available on Salesforce) into your organization as a static resource.
2.  Set your page’s docType to html-5.0. Strongly consider disabling the standard stylesheets and header. For example:

    ```

    ```

3.  Add scripts and styles from your chosen mobile toolkit to the page using Visualforce resource tags. For example:

    ```

    ```

4.  Use HTML5 and your mobile toolkit’s tags and attributes to create a page skeleton.
5.  Add JavaScript functions to the page as handlers to respond to user interaction. Use JavaScript remoting to call Apex @RemoteAction methods that retrieve records, perform DML, and so on.
6.  Add additional JavaScript functions to handle user actions and page updates. Perform page updates by constructing HTML elements in JavaScript, and then adding or appending them to the page skeleton.

## Example of a JavaScript Remoting and Static HTML Page

The following code sample shows a remoting + HTML Visualforce page that allows a user to edit a warehouse record. The edit feature is provided by a controller extension with @RemoteAction methods that respond to JavaScript remoting requests.

```

```

The static HTML provides the shell of the page, including empty form fields. JavaScript functions load the record, fill in the form fields, and send updated form data back to Salesforce.

Although this page can be used in the full Salesforce site, it’s designed as a Salesforce app page and looks very different than a normal Visualforce page.

## Example of a JavaScript Remoting and Static HTML Controller

Unlike the other two approaches to creating mobile pages, the remoting + HTML approach doesn’t use standard controller functionality to retrieve data from and save data to Salesforce. Instead, you create a controller extension, or custom controller, to add any @RemoteAction methods your page requires. Here’s a simplified controller extension that supports the above page.

```

```

## Code Examples

```
<apex:page standardController="Warehouse__c" 
    extensions="WarehouseEditor"
    showHeader="false" standardStylesheets="false"
    docType="html-5.0">
```

```
<apex:includeScript 
    value="{!URLFOR(
        $Resource.Mobile_Design_Templates,
        'Mobile-Design-Templates-master/common/js/
            jQuery2.0.2.min.js'
    )}"/>
```

```
<apex:page standardController="Warehouse__c" extensions="WarehouseEditor"
    showHeader="false" standardStylesheets="false"
    docType="html-5.0" applyHtmlTag="false" applyBodyTag="false">

    <!-- Include Mobile Toolkit styles and JavaScript -->
    <apex:stylesheet 
      value="{!URLFOR($Resource.Mobile_Design_Templates,
      'Mobile-Design-Templates-master/common/css/app.min.css')}"/>
    <apex:includeScript 
      value="{!URLFOR($Resource.Mobile_Design_Templates,
      'Mobile-Design-Templates-master/common/js/jQuery2.0.2.min.js')}"/>
    <apex:includeScript 
      value="{!URLFOR($Resource.Mobile_Design_Templates,
      'Mobile-Design-Templates-master/common/js/jquery.touchwipe.min.js')}"/>
    <apex:includeScript 
      value="{!URLFOR($Resource.Mobile_Design_Templates,
      'Mobile-Design-Templates-master/common/js/main.min.js')}"/>

<head>
<style>
    html, body, p { font-family: sans-serif; }
    input { display: block; }
</style>

<script>
    $(document).ready(function(){
        // Load the record
        loadWarehouse();
    });

    // Utility; parse out parameter by name from URL query string
    $.urlParam = function(name){
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)')
            .exec(window.location.href);
        return results[1] || 0;
    }

    function loadWarehouse() {
        // Get the record Id from the GET query string
        warehouseId = $.urlParam('id');

        // Call the remote action to retrieve the record data
        Visualforce.remoting.Manager.invokeAction(
            '{!$RemoteAction.WarehouseEditor.getWarehouse}',
            warehouseId,
            function(result, event){;
                if(event.status){
                    console.log(warehouseId);
                    $('#warehouse_name').text(result.Name);
                    $('#warehouse_address').val(
                      result.Street_Address__c);
                    $('#warehouse_city').val(result.City__c);
                    $('#warehouse_phone').val(result.Phone__c);
                } else if (event.type === 'exception'){
                    console.log(result);
                } else {
                    // unexpected problem...
                }
        });
    }

    function updateWarehouse() {
        // Get the record Id from the GET query string
        warehouseId = $.urlParam('id');

        // Call the remote action to save the record data
        Visualforce.remoting.Manager.invokeAction(
            '{!$RemoteAction.WarehouseEditor.setWarehouse}',
            warehouseId, $('#warehouse_address').val(),
                $('#warehouse_city').val(), 
                $('#warehouse_phone').val(),
            function(result, event){;
                if(event.status){
                    console.log(warehouseId);
                    $('#action_status').text('Record updated.');
                } else if (event.type === 'exception'){
                    console.log(result);
                    $('#action_status').text(
                      'Problem saving record.');
                } else {
                    // unexpected problem...
                }
        });
    }

</script>
</head>

<body>

<div id="detailPage">
    <div class="list-view-header" id="warehouse_name"></div>
    <div id="action_status"></div>

    <section>
        <div class="content">
            <h3>Warehouse Details</h3>
            <div class="form-control-group">
                <div class="form-control form-control-text">
                    <label for="warehouse_address">
                        Street Address</label>
                    <input type="text" id="warehouse_address" />
                </div>
                <div class="form-control form-control-text">
                    <label for="warehouse_city">City</label>
                    <input type="text" id="warehouse_city" />
                </div>
                <div class="form-control form-control-text">
                    <label for="warehouse_phone">Phone</label>
                    <input type="text" id="warehouse_phone" />
                </div>
            </div>
        </div>
    </section>

    <section class="data-capture-buttons one-buttons">
        <div class="content">
            <section class="data-capture-buttons one-buttons">
                <a href="#" id="updateWarehouse"
                    onClick="updateWarehouse();">save</a>
            </section>
        </div>
    </section>
</div> <!-- end detail page -->

</body>

</apex:page>
```

```apex
global with sharing class WarehouseEditor {

    // Stub controller
    // We're only using RemoteActions, so this never runs
    public WarehouseEditor(ApexPages.StandardController ctl){ }

    @RemoteAction
    global static Warehouse__c getWarehouse(String warehouseId) {

        // Clean up the Id parameter, in case there are spaces
        warehouseId = warehouseId.trim();

        // Simple SOQL query to get the warehouse data we need
        Warehouse__c wh = [
            SELECT Id, Name, Street_Address__c, City__c, Phone__c
            FROM Warehouse__c
            WHERE Id = :warehouseId];

        return(wh);
    }

    @RemoteAction
    global static Boolean setWarehouse(
        String whId, String street, String city, String phone) {

        // Get the warehouse record for the Id
        Warehouse__c wh = WarehouseEditor.getWarehouse(whId);

        // Update fields
        // Note that we're not validating / sanitizing, for simplicity
        wh.Street_Address__c = street.trim();
        wh.City__c = city.trim();
        wh.Phone__c = phone.trim();

        // Save the updated record
        // This should be wrapped in an exception handler
        update wh;

        return true;
    }
}
```
