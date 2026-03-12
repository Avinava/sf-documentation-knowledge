---
title: "An Example of Using  with jQuery Mobile with jQuery Mobile"
domain: pages
topic: an-example-of-using-with-jquery-mobile-with-jquery-mobile
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.079Z
estimatedTokens: 414
keywords: [jQuery, Mobile, Visualforce, Remote, Objects, designed, “blend”, well, JavaScript, frameworks, extended, simple, how, view, contacts]
---

# An Example of Using  with jQuery Mobile with jQuery Mobile

> Visualforce Remote Objects is designed to “blend” well with JavaScript frameworks.
        This extended but simple example shows how to use Remote Objects with jQuery Mobile to view
        a list of contacts and to add, edit, and delete them.

# An Example of Using with jQuery Mobile with jQuery Mobile

Visualforce Remote Objects is designed to “blend” well with JavaScript frameworks. This extended but simple example shows how to use Remote Objects with jQuery Mobile to view a list of contacts and to add, edit, and delete them.

This example uses jQuery Mobile from the [Salesforce Mobile Packs](https://developer.salesforce.com/en/mobile/services/mobile-packs "HTML (New Window)") and is based on [sample code that is included with the Mobile Pack for jQuery](https://github.com/developerforce/MobilePack-jQueryMobile/blob/master/Samples/jQueryMobileVF/MobileSample_jQueryMobile.page "HTML (New Window)"). Remote Objects and jQuery Mobile make it easy to create a simple contact manager page for a phone.

## A Simple Contact Editor with Remote Objects and jQuery Mobile

```

```

Note that although all four Remote Objects operations are demonstrated, there are only three callback handlers.

-   getAllContacts() calls retrieve() to load a list of contacts and provides an anonymous function for the callback. The callback checks for errors and then iterates through the results, adding them to the page.
-   Similarly, showDetailView() calls retrieve() to load a single contact for the detail page, and the results are also handled by an anonymous function.
-   addUpdateContact() and deleteContact() handle adding, updating, and deleting contacts. Both methods pass updateCallback() as the callback function. updateCallback() doesn’t use the results of the Remote Objects operation. It only checks for errors, logs them to the console, and then calls getAllContacts() to refresh the page.

## Code Examples

```
<apex:page docType="html-5.0" showHeader="false" sidebar="false">          

	<!-- Include jQuery and jQuery Mobile from the Mobile Pack -->
    <apex:stylesheet value="{!URLFOR($Resource.MobilePack_jQuery, 
         'jquery.mobile-1.3.0.min.css')}"/>
    <apex:includeScript value="{!URLFOR($Resource.MobilePack_jQuery, 
         'jquery-1.9.1.min.js')}"/>
    <apex:includeScript value="{!URLFOR($Resource.MobilePack_jQuery, 
         'jquery.mobile-1.3.0.min.js')}"/>

    <!-- Remote Objects declaration -->
    <apex:remoteObjects jsNamespace="RemoteObjectModel">
        <apex:remoteObjectModel name="Contact" fields="Id,FirstName,LastName,Phone">
            <!-- Notes is a custom field added to the Contact object -->
            <apex:remoteObjectField name="Notes__c" jsShorthand="Notes"/>
        </apex:remoteObjectModel>
    </apex:remoteObjects>

    <head>
        <title>Contacts</title>
        <meta name="viewport" 
           content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        <script type="text/javascript">
            var $j = jQuery.noConflict(); 

            // Config object with commonly used data
            // This keeps some hard-coded HTML IDs out of the code
            var Config = {
                Selectors: {
                    list: '#cList',
                    detailFields: "#fName #lName #phone #notes #error #contactId".split(" ")
                },
                Data: {
                    contact: 'contact'
                }
            };
            
            // Get all contacts, and display them in a list 
            function getAllContacts() {
                $j.mobile.showPageLoadingMsg();
                
                var c = new RemoteObjectModel.Contact();
                // Use the 'limit' operator to increase the default limit of 20
                c.retrieve({ limit: 100 }, function (err, records) { 
                    // Handle any errors
                    if (err) { 
                        displayError(err); 
                    } else {
                        // Empty the current list
                        var list = $j(Config.Selectors.list).empty();
                        // Now add results records to list
                        $j.each(records, function() {
                            var newLink = $j('<a></a>', {
                                text: this.get('FirstName') + ' ' + this.get('LastName')
                            });
                            newLink.data(Config.Data.contact, this.get('Id'));
                            newLink.appendTo(list).wrap('<li></li>');
                        });
                        
                        $j.mobile.hidePageLoadingMsg();
                        list.listview('refresh');
                    }
                });
            }

            // Handle the Save button that appears on both
            // the Edit Contact and New Contact pages
            function addUpdateContact(e){
                e.preventDefault();

                var record = new RemoteObjectModel.Contact({
                    FirstName: $j('#fName').val(),
                    LastName: $j('#lName').val(),
                    Phone: $j('#phone').val(),
                    Notes: $j('#notes').val() 
                    // Note use of shortcut 'Notes' in place of Notes__c
                });

                var cId = $j('#contactId').val();
                if( !cId ) { // new record
                    record.create(updateCallback);
                } else { // update existing
                    record.set('Id', cId);
                    record.update(updateCallback);
                }
            }
            
            // Handle the delete button
            function deleteContact(e){
                e.preventDefault();
                var ct = new RemoteObjectModel.Contact();
                ct.del($j('#contactId').val(), updateCallback);
            }
            
            // Callback to handle DML Remote Objects calls
            function updateCallback(err, ids){
                if (err) { 
                    displayError(err); 
                } else {
                    // Reload the contacts with current list
                    getAllContacts();
                    $j.mobile.changePage('#listpage', {changeHash: true});
                }
            }

            // Utility function to log and display any errors
            function displayError(e){
                console && console.log(e);
                $j('#error').html(e.message);
            }
        
            // Attach functions to the buttons that trigger them
            function regBtnClickHandlers() {
                $j('#add').click(function(e) {
                    e.preventDefault();
                    $j.mobile.showPageLoadingMsg();
                    
                    // empty all the clic handlers                    
                    $j.each(Config.Selectors.detailFields, function(i, field) {
                        $j(field).val('');
                    });
                    
                    $j.mobile.changePage('#detailpage', {changeHash: true});
                    $j.mobile.hidePageLoadingMsg();
                });
        
                $j('#save').click(function(e) {
                   addUpdateContact(e);
                });
        
                $j('#delete').click(function(e) {
                   deleteContact(e);
                });
            }

            // Shows the contact detail view, 
            // including filling in form fields with current data
            function showDetailView(contact) {
                $j('#contactId').val(contact.get('Id'));
                $j('#fName').val(contact.get('FirstName'));
                $j('#lName').val(contact.get('LastName'));
                $j('#phone').val(contact.get('Phone'));
                $j('#notes').val(contact.get('Notes'));
                $j('#error').html('');
                $j.mobile.changePage('#detailpage', {changeHash: true});
            }

            // Register click handler for list view clicks
            // Note: One click handler handles the whole list	
            function regListViewClickHandler() {
                $j(Config.Selectors.list).on('click', 'li', function(e) {

                    // show loading message
                    $j.mobile.showPageLoadingMsg();

                    // get the contact data for item clicked
                    var id = $j(e.target).data(Config.Data.contact);

                    // retrieve latest details for this contact
                    var c = new RemoteObjectModel.Contact();
                    c.retrieve({ 
                        where: { Id: { eq: id } } 
                    }, function(err, records) { 
                        if(err) { 
                            displayError(err); 
                        } else {
                            showDetailView(records[0]);
                        }

                        // hide the loading message in either case
                        $j.mobile.hidePageLoadingMsg();
                    });
                });
            }

            // And, finally, run the page
            $j(document).ready(function() {
                regBtnClickHandlers();
                regListViewClickHandler();
                getAllContacts();
            });

        </script>    
    </head>

    <!-- HTML and jQuery Mobile markup for the list and detail screens -->
    <body>    
    
        <!-- This div is the list "page" -->
        <div data-role="page" data-theme="b" id="listpage">                
            <div data-role="header" data-position="fixed">
                <h2>Contacts</h2>
                <a href='#' id="add" class='ui-btn-right' data-icon='add' 
                   data-theme="b">Add</a>
            </div>
            <div data-role="content" id="contactList">            
                <ul id="cList" data-filter="true" data-inset="true" 
                    data-role="listview" data-theme="c" data-dividertheme="b">
                </ul>
            </div>
        </div>
                
        <!-- This div is the detail "page" -->
        <div data-role="page" data-theme="b" id="detailpage">
            <div data-role="header" data-position="fixed">
                <a href='#listpage' id="back2ContactList" class='ui-btn-left' 
                   data-icon='arrow-l' data-direction="reverse" 
                   data-transition="flip">Back</a>
                <h1>Contact Details</h1>
            </div>
            <div data-role="content">
                <div data-role="fieldcontain">
                    <label for="fName">First Name:</label>
                    <input name="fName" id="fName" />
                </div>
                <div data-role="fieldcontain">
                    <label for="lName">Last Name:</label>
                    <input name="lName" id="lName" />
                </div>
                <div data-role="fieldcontain">
                    <label for="phone">Phone:</label>
                    <input name="phone" id="phone"/>
                </div>
                <div data-role="fieldcontain">
                    <label for="notes">Notes:</label>
                    <textarea name="notes" id="notes"/>
                </div>

                <h2 style="color:red" id="error"></h2>

                <input type="hidden" id="contactId" />
                <button id="save" data-role="button" data-icon="check" 
                    data-inline="true" data-theme="b" class="save">Save</button>
                <button id="delete" data-role="button" data-icon="delete" 
                    data-inline="true" class="destroy">Delete</button>
            </div>
        </div>
    </body>
</apex:page>
```
