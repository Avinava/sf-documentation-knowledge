---
title: "Create a Folder"
domain: mc-sdks
topic: create-a-folder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.635Z
estimatedTokens: 1001
keywords: [Ruby, Python, CSharp, Java, Folder, Post, new, Marketing, Cloud, account, PHP]
---

> Use the Post method to create a new folder within a Marketing Cloud account.

# Create a Folder

Use the **Post** method to create a new folder within a Marketing Cloud account.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
folder = FuelSDK::Folder.new
folder.authStub = myclient
folder.props = {"CustomerKey" => "SDKExampleFolder", "Name" => "SDKExampleFolder", "Description" => "SDKExampleFolder", "ContentType"=> "EMAIL", "ParentFolder" => {"ID" => "1515"}, "AllowChildren" => "true", "IsEditable" => "true"}
results = folder.post
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$folder = new ET_Folder();
$folder->authStub = $myclient;
$folder->props = array("CustomerKey" => "SDKExampleFolder", "Name" => "SDKExampleFolder", "Description" => "SDKExampleFolder", "ContentType"=> "EMAIL", "ParentFolder" => array("ID" => "1515"), "AllowChildren" => "true", "IsEditable" => "true");
$results = $folder->post();
print_r($results);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
folder = ET_Client.ET_Folder()
folder.auth_stub = myclient
folder.props = {"CustomerKey" : "SDKExampleFolder", "Name" : "SDKExampleFolder", "Description" : "SDKExampleFolder", "ContentType": "EMAIL", "ParentFolder" : {"ID" : "1515"}, "AllowChildren" : "true", "IsEditable" : "true" }
results = folder.post()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client()
ET_Folder folder = new ET_Folder();
folder.AuthStub = myclient;
folder.Name = "SDKExampleFolder";
folder.Description = "SDKExampleFolder";
folder.CustomerKey = "SDKExampleFolder";
folder.ParentFolder = new ET_Folder();
folder.ParentFolder.ID = 1515;
folder.ContentType = "EMAIL";
folder.IsEditable = true;
folder.AllowChildren = true;
PostReturn results = folder.Post();
Console.WriteLine("Post Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Properties

You can provide the following values for the **props** property on the object:

-   **Name**
    -   String datatype
    -   Name of the object
-   **Description**
    -   String datatype
    -   Describes and provides information regarding the object
-   **ContentType**
    -   String datatype
    -   Defines the type of content contained within a folder
    -   Valid Values:
        -   automated\_email
        -   campaign
        -   condensedlpview
        -   content
        -   dataextension
        -   document
        -   email
        -   filteractivity
        -   filterdefinition
        -   globalemail
        -   globalemailsub
        -   group
        -   image
        -   job
        -   list
        -   livecontent
        -   measure
        -   media
        -   microsite
        -   micrositelayout
        -   mysubs
        -   organization
        -   programs2
        -   publication
        -   queryactivity
        -   shared\_content
        -   shared\_data
        -   shared\_dataextension
        -   shared\_email
        -   shared\_item
        -   shared\_portfolio
        -   shared\_publication
        -   shared\_suppression\_list
        -   shared\_survey
        -   shared\_template
        -   suppression\_list
        -   survey
        -   template
        -   triggered\_send
        -   userinitiatedsends
-   **IsEditable**
    -   Boolean datatype
    -   Indicates if the property can be edited by the end-user in the UI
-   **AllowChildren**
    -   Boolean datatype
    -   Specifies whether a data folder can have child data folders
-   **ParentFolder**
    -   **ID**
        -   Int32 datatype
        -   System-controlled numeric unique identifier for the parent folder
    -   **CustomerKey**
        -   String datatype
        -   User-supplied unique identifier for the parent folder
