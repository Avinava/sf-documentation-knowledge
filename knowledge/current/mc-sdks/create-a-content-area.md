---
title: "Create a Content Area"
domain: mc-sdks
topic: create-a-content-area
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:28.993Z
estimatedTokens: 661
keywords: [Content, Area, Post, new, Marketing, Cloud, account, Ruby, PHP, Python, CSharp, Java]
---

# Create a Content Area

> Use the Post method to create a new content area within a Marketing Cloud account.

# Create a Content Area

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in the user interface.

Use the **Post** method to create a new content area within a Marketing Cloud account.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
contentarea = FuelSDK::ContentArea.new
contentarea.authStub = myClient
contentarea.props = {"CustomerKey" => "ExampleContentArea", "Name"=>"ExampleContentArea", "Content"=> "<b>Some HTML Content Goes here</b>"}
results = contentarea.post
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$contentarea = new ET_ContentArea();
$contentarea->authStub = $myclient;
$contentarea->props = array("CustomerKey" => "ExampleContentArea", "Name"=>"ExampleContentArea", "Content"=> "<b>Some HTML Content Goes here</b>");
$results = $contentarea->post();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
       contentarea = ET_Client.ET_ContentArea()
  contentarea.auth_stub = myClient
  contentarea.props = {"CustomerKey" : "ExampleContentArea", "Name" : "ExampleContentArea", "Content" : "<b>Some HTML Content Goes here</b>"}
results = contentarea.post()
print results
```

### CSharp

```csharp
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_ContentArea contentArea = new ET_ContentArea();
contentArea.AuthStub = myclient;
contentArea.Name = "ExampleContentArea";
contentArea.CustomerKey = "ExampleContentArea";
contentArea.Content = "%3Cb%3ESome%20HTML%20Content%20Goes%20here%3C%2Fb%3E";
PostReturn response = contentArea.Post();
Console.WriteLine("Post Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Properties

You can provide the following values for the **props** property on the object:

-   **CustomerKey**
    -   String datatype
    -   User-supplied unique identifier for an object within an object type
-   **CategoryID**
    -   Int32 datatype
    -   Specifies the identifier of the folder
-   **Name**
    -   String datatype
    -   Name of the object or property
-   **Content**
    -   String datatype
    -   Identifies content contained in a content area
