---
title: "Create a TriggeredSend"
domain: mc-sdks
topic: create-a-triggeredsend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.336Z
estimatedTokens: 1422
keywords: [TriggeredSend, Post, new, Marketing, Cloud, account, Ruby, PHP, Python, CSharp, Java]
---

# Create a TriggeredSend

> Use the Post method to create a new triggeredsend within a Marketing Cloud account.

# Create a TriggeredSend

Use the **Post** method to create a new triggeredsend within a Marketing Cloud account.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
triggeredsend = FuelSDK::TriggeredSend.new
triggeredsend.authStub = myclient
triggeredsend.props = {}
triggeredsend.props["Name"] = "SDKTriggeredSend"
triggeredsend.props["Description"] = "SDK Created TriggeredSend"
triggeredsend.props["Email"] = {"ID" => 1111111}
triggeredsend.props["SendClassification"] = {"CustomerKey" => "2222"}
results = triggeredsend.post
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$triggeredsend = new ET_TriggeredSend();
$triggeredsend->authStub = $myclient;
$triggeredsend->props = array()
$triggeredsend->props["Name"] = "SDKTriggeredSend";
$triggeredsend->props["Description"] = "SDK Created TriggeredSend";
$triggeredsend->props["Email"] = array("ID" => 1111111);
$triggeredsend->props["SendClassification"] = array("CustomerKey" => "2222");
$results = $triggeredsend->post();
print_r($results);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
triggeredsend = ET_Client.ET_TriggeredSend()
triggeredsend.auth_stub = myclient
triggeredsend.props = {}
triggeredsend.props["Name"] = "SDKTriggeredSend"
triggeredsend.props["Description"] = "SDK Created TriggeredSend"
triggeredsend.props["Email"] = {"ID" : 1111111}
triggeredsend.props["SendClassification"] = {"CustomerKey" : "2222"}
results = triggeredsend.post()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_TriggeredSend triggeredsend = new ET_TriggeredSend();
triggeredsend.AuthStub = myclient;
triggeredsend.Name = "SDKTriggeredSend";
triggeredsend.CustomerKey = "SDK Created TriggeredSend";
triggeredsend.Email = new ET_Email() { ID = 1111111 };
triggeredsend.SendClassification = new ET_SendClassification() { CustomerKey = "2222" };
PostReturn prtriggeredsend = triggeredsend.Post();
Console.WriteLine("Post Status: " + prtriggeredsend.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Properties

You can provide the following values for the **props** property on the object:

-   **CustomerKey**
    -   String datatype
    -   User-supplied unique identifier for an object within an object type (corresponds to the external key assigned to an object in the user interface)
-   **Email**
    -   **ID**
        -   Int64 datatype
        -   System-controlled unique identifier for this object
-   **List**
    -   **ID**
        -   Int64 datatype
        -   System-controlled unique identifier for this object
-   **Name**
    -   String datatype
    -   Name of the object or property
-   **Description**
    -   String datatype
    -   Describes and provides information regarding the object
-   **TriggeredSendStatus**
    -   String datatype
    -   Description
    -   Valid Values
        -   New
        -   Inactive
        -   Active
        -   Canceled
-   **SendClassification**
    -   **CustomerKey**
        -   String datatype
        -   User-supplied unique identifier fort this object
    -   **ObjectID**
        -   Guid datatype
        -   System-controlled unique identifier for this object
-   **SenderProfile**
    -   **CustomerKey**
        -   String datatype
        -   Description
    -   **ObjectID**
        -   Guid datatype
        -   System-controlled unique identifier for this object
-   **DeliveryProfile**
    -   **CustomerKey**
        -   String datatype
        -   User-supplied unique identifier fort this object
    -   **ObjectID**
        -   Guid datatype
        -   System-controlled unique identifier for this object
-   **AutoAddSubscribers**
    -   Boolean datatype
    -   Indicates whether a triggered send recipient should be added to a subscriber list
-   **AutoUpdateSubscribers**
    -   Boolean datatype
    -   Indicates if any subscriber information should be updated as part of a triggered send
-   **CCEmail**
    -   String datatype
    -   Carbon copy email address
-   **BccEmail**
    -   String datatype
    -   Indicates email addresses to receive blind carbon copy of a message
-   **EmailSubject**
    -   String datatype
    -   Subject for an email send
-   **IsMultipart**
    -   Boolean datatype
    -   Indicates whether the email is sent with Multipart/MIME enabled
-   **IsWrapped**
    -   Boolean datatype
    -   Indicates whether an email send contains the links necessary to process tracking information for clicks.
-   **SuppressTracking**
    -   Boolean datatype
    -   Indicates whether the send definition suppresses tracking results for associated sends
-   **CategoryID**
    -   Int32 datatype
    -   Specifies the identifier of the folder.
-   **RefreshContent**
    -   Boolean datatype
    -   Indicates whether the triggered send definition should refresh content as part of the send. A value of true indicates the triggered send will contain refreshed content.
-   **ExclusionFilter**
    -   String datatype
    -   Contains a string of AMPscript used to exclude email addresses from a send definition.
-   **Priority**
    -   String datatype
    -   Defines the priority for a triggered send
    -   Valid Values
        -   Low
        -   Medium
        -   High
-   **SendSourceDataExtension**
    -   **CustomerKey**
        -   String datatype
        -   User-supplied unique identifier fort this object
