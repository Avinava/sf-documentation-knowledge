---
title: "An Example of Using Remote Method Overrides in"
domain: pages
topic: an-example-of-using-remote-method-overrides-in
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.089Z
estimatedTokens: 583
keywords: [Remote, Overrides, sample, code, illustrates, how, Objects, operations, presents, sorted, contacts, simple, form, enter, new]
---

# An Example of Using Remote Method Overrides in

> This sample code illustrates how to create remote method overrides for Remote Objects
        operations. The example presents a sorted list of contacts and a simple form to enter a new
        contact. The new contact action overrides the built-in Remote Objects create() operation. The sample also illustrates
        blending Remote Objects with several Web development libraries to present a mobile-friendly
        user interface.

# An Example of Using Remote Method Overrides in

This sample code illustrates how to create remote method overrides for Remote Objects operations. The example presents a sorted list of contacts and a simple form to enter a new contact. The new contact action overrides the built-in Remote Objects create() operation. The sample also illustrates blending Remote Objects with several Web development libraries to present a mobile-friendly user interface.

This example uses the jQuery, Bootstrap, and Mustache tool kits, loading them from an external content distribution network (CDN).![An example of a contact form using Visualforce Remote Objects](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_remote_objects_example_overrides.png&folder=pages)

Here’s the Visualforce page, with the remote override declaration in bold.

```

```

The key line of code in the preceding sample is in the Remote Objects access definition. Adding a single attribute to the contact Remote Object definition sets up the override:

```

```

The attribute takes a Visualforce expression that references the @RemoteAction method to use as the override for the built-in create() operation.

In this case, the referenced method is in an Apex class that’s the page’s controller. The code for the override method is straightforward.

```

```

This method logs the @RemoteAction call and then uses the standard RemoteObjectController.create() call to perform the create. It’s performing the same data manipulation language (DML) commands to create the record that the built-in version would, because it’s using the built-in version. After performing the create, the method does a little more logging. Finally it adds some extra data to the return payload that will be received by the JavaScript callback function on the Visualforce page.

It’s adding the extra data that’s interesting and makes overriding the built-in method useful. The extra data that’s added by the preceding controller is trivial, for the purposes of illustration only. A real-world override can include more complex logic—the result of a calculation, other method calls, and so on. What’s important to understand is that the new custom override method can do additional things behind the scenes, and can return extra data that the built-in version can’t.

## Code Examples

```
<apex:page showHeader="false" standardStylesheets="false" docType="html-5.0" 
    title="Contacts—RemoteObjects Style" controller="RemoteObjectContactOverride">

    <!-- Include in some mobile web libraries -->
    <apex:stylesheet value="//netdna.bootstrapcdn.com/bootswatch/3.1.1/superhero/bootstrap.min.css"/>
    <apex:includeScript value="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"/>
    <apex:includeScript value="//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min.js"/>

    <!-- Set up Remote Objects, with an override for create() method -->
    <apex:remoteObjects jsNamespace="$M">
        <apex:remoteObjectModel name="Contact" fields="FirstName,LastName,Phone" 
            create="{!$RemoteAction.RemoteObjectContactOverride.create}"/>
    </apex:remoteObjects>

    <!-- Page markup -->
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <table id="myTable" 
                    class="table table-bordered table-striped table-condensed">
                    <colgroup>
                        <col class="col-md-3" />
                        <col class="col-md-3" />
                        <col class="col-md-3" />
                    </colgroup>
                    <caption>
                        Contact Data Order ([ {LastName: 'ASC'}, {FirstName: 'DESC'} ]) 
                        <button id="bRefresh" class="btn btn-success btn-sm" 
                            type="button">Refresh</button>
                    </caption>
                    <caption id="msgBox" class="alert alert-danger hidden"></caption>
                    <thead>
                        <tr><td>FirstName</td><td>LastName</td><td>Phone</td></tr>
                    </thead>
                    <tbody></tbody>
                    <tfoot>
                        <tr>
                        <td><input type="text" name="FirstName" id="iFirstName" 
                            placeholder="John" class="form-control" /></td>
                        <td><input type="text" name="LastName" id="iLastName" 
                            placeholder="Doe" class="form-control" /></td>
                        <td>
                            <div class="input-group">
                              <input type="text" name="Phone" id="iPhone" 
                                placeholder="(123) 456-7890" class="form-control" />
                              <span class="input-group-btn">
                                <button id="bAdd" class="btn btn-primary" 
                                    type="button">Save</button>
                              </span>
                            </div>
                        </td>
                        </tr>
                    </tfoot>
                </table>
                <div class="panel panel-default">
                  <div class="panel-heading">Log</div>
                  <div class="panel-body" id="log">
                  </div>
                </div>            
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>

    <!-- Results template (table rows of Contacts) -->
    <script id="tmpl" type="x-tmpl-mustache">
        <tr><td>{{FirstName}}</td><td>{{LastName}}</td><td>{{Phone}}</td></tr>
    </script>

    <!-- Page functionality -->
    <script>
        var table = $('#myTable tbody');
        var template = $('#tmpl').html();
        Mustache.parse(template);

        // Retrieve all contacts and add to results table on page
        var fetchContacts = function() {
            (new $M.Contact()).retrieve({
                orderby: [ {LastName: 'ASC'}, {FirstName: 'DESC'} ],
            }, function(err, records) {
                if (!err) {
                    // Add some status messages to the log panel
                    $('#log')
                    .append('<p>Fetched contact records.</p>')
                    .append('<p>Records Size: '+ records.length + '!</p>');

                    // Update the table of contacts with fresh results
                    table.empty();
                    records.forEach(function(rec) {
                        table.append(Mustache.render(template, rec._props));                    
                    });                
                } else {
                    $('#msgBox').text(err.message).removeClass('hidden');            
                }
            });
        };
        
        var addContact = function() {
            // Create a new Remote Object from form values
            (new $M.Contact({
                FirstName: $('#iFirstName').val(),
                LastName: $('#iLastName').val(),
                Phone: $('#iPhone').val()
            })).create(function(err, record, event) {
                // New record created...
                if (!err) {
                    // Reset the New Record form fields, for the next create
                    $('input').each(function() {
                        $(this).val('');
                    });
                    
                    // Add some status messages to the log panel
                    $('#log')
                    .append('<p>Contact created!</p>')
                    // Custom data added to event.result by override function
                    .append('<p>Got custom data: ' + event.result.custom + '</p>'); 

                    // Redraw the results list with current contacts
                    fetchContacts();
                } else {
                    $('#msgBox').text(err.message).removeClass('hidden');            
                }
            });
        };

        // Bind application functions to UI events
        $('#bRefresh').click(fetchContacts);
        $('#bAdd').click(addContact);
        
        // Initial load of the contacts list
        fetchContacts();
    </script>
</apex:page>
```

```
create="{!$RemoteAction.RemoteObjectContactOverride.create}"
```

```apex
public with sharing class RemoteObjectContactOverride {
     
    @RemoteAction
    public static Map<String, Object> create(String type, Map<String, Object> fields) {
        System.debug(LoggingLevel.INFO, 'Before calling create on: ' + type);
        
        // Invoke the standard create action
        // For when you want mostly-normal behavior, with a little something different
        Map<String, Object> result = RemoteObjectController.create(type, fields);

        System.debug(LoggingLevel.INFO, 'After calling create on: ' + type);
        System.debug(LoggingLevel.INFO, 'Result: ' + result);
        
        // Here's the little something different, adding extra data to the result
        Map<String, Object> customResult = 
            new Map<String, Object> {'custom' => 'my custom data' };
        customResult.putAll(result);
        
        return customResult;
    }
}
```
