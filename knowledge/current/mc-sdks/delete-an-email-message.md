---
title: "Delete an Email Message"
domain: mc-sdks
topic: delete-an-email-message
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.609Z
estimatedTokens: 427
keywords: [Ruby, Python, CSharp, Java, Email, Message, Specify, unique, identifier, needs, props, order, identify, PHP]
---

> Use the Delete method to delete an email message. Specify a unique identifier needs to be specified in the props properties in order to identify which email message to update:

# Delete an Email Message

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in the user interface.

Use the **Delete** method to delete an email message. Specify a unique identifier needs to be specified in the **props** properties in order to identify which email message to update:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
email = FuelSDK::Email.new
email.authStub = myClient
email.props = {"ID" => "151515151"}
results = email.delete
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$email = new ET_Email();
$email->authStub = $myclient;
$email->props = array("ID" => "151515151");
$results = $email->delete();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
email = ET_Client.ET_Email()
email.auth_stub = myClient
email.props = {"ID" : "151515151"}
results = email.delete()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myClient = new ET_Client();
ET_Email email = new ET_Email();
email.AuthStub = myclient;
email.ID = 151515151;
DeleteReturn response = email.Delete();
Console.WriteLine("Delete Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
