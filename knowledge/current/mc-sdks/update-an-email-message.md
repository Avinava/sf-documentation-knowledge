---
title: "Update an Email Message"
domain: mc-sdks
topic: update-an-email-message
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.161Z
estimatedTokens: 460
keywords: [Email, Message, Patch, Specify, unique, identifier, props, order, identify, updated, Ruby, PHP, Python, CSharp, Java]
---

# Update an Email Message

> Use the Patch method to update an existing email message. Specify a unique identifier in the props property in order to identify which email will be updated:

# Update an Email Message

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in the user interface.

Use the **Patch** method to update an existing email message. Specify a unique identifier in the **props** property in order to identify which email will be updated:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
email = FuelSDK::Email.new
email.authStub = myClient
email.props = {"ID" => "151515151", "Name"=> "SDK Example, now Updated!"}
results = email.patch
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$email = new ET_Email();
$email->authStub = $myclient;
$email->props = array("ID" => "151515151", "Name"=> "SDK Example, now Updated!");
$results = $email->patch();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
email = ET_Client.ET_Email()
email.auth_stub = myClient
email.props = {"ID" : "151515151", "Name": "SDK Example, now Updated!"}
results = email.patch()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myClient = new ET_Client();
ET_Email email = new ET_Email();
email.AuthStub = myclient;
email.ID = 151515151;
email.Name = "SDK Example, now Updated!";
PatchReturn response = email.Patch();
Console.WriteLine("Patch Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
