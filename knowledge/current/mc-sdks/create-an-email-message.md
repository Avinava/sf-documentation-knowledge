---
title: "Create an Email Message"
domain: mc-sdks
topic: create-an-email-message
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.603Z
estimatedTokens: 797
keywords: [Ruby, Python, CSharp, Java, Email, Message, Post, new, Marketing, Cloud, account, PHP]
---

> Use the Post method to create a new email message within a Marketing Cloud account.

# Create an Email Message

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in the user interface.

Use the **Post** method to create a new email message within a Marketing Cloud account.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
email = FuelSDK::Email.new
email.authStub = myClient
email.props = {"CustomerKey" => "SDK Example", "Name"=>"SDK Example", "Subject" => "Created Using the SDK", "HTMLBody"=> "<b>Some HTML Goes here</b>"}
results = email.post
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$email = new ET_Email();
$email->authStub = $myclient;
$email->props = array("CustomerKey" => "SDK Example", "Name"=> "SDK Example", "Subject"=>"Created with the SDK",  "HTMLBody"=> "<b>Some HTML Goes here</b>",  "EmailType" => "HTML", "IsHTMLPaste" => "true");
$results = $email->post();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
email = ET_Client.ET_Email()
email.auth_stub = myClient
email.props = {"CustomerKey" : "SDK Example", "Name":"SDK Example", "Subject" : "Created Using the SDK", "HTMLBody": "<b>Some HTML Goes here</b>", "EmailType" : "HTML", "IsHTMLPaste" : "true"}
results = email.post()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myClient = new ET_Client();
ET_Email email = new ET_Email();
email.AuthStub = myclient;
email.Name = "SDK Example";
email.CustomerKey = "SDK Example";
email.Subject = "Created Using the SDK";
email.HTMLBody =  "%3Cb%3ESome%20HTML%20Goes%20here%3C%2Fb%3E";
email.Type = "HTML";
email.IsHTMLPaste = true;
PostReturn response = email.Post();
Console.WriteLine("Post Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Properties

You can provide the following values for the **props** property on the object:

### Email

-   **Name**
    -   String datatype
    -   Name of the object or property
-   **CategoryID**
    -   Int32 datatype
    -   Identifies the folder containing the email message
-   **HTMLBody**
    -   String datatype
    -   Contains HTML body of an email message.
-   **TextBody**
    -   String datatype
    -   Contains raw text body of a message
-   **Subject**
    -   String datatype
    -   Contains subject area information for a message
-   **IsHTMLPaste**
    -   Boolean datatype
    -   Set to **true** for all SDK-created emails
-   **EmailType**
    -   String datatype
    -   Specifies either HTML or TEXT email type
-   **CharacterSet**
    -   String datatype
    -   Indicates encoding used in an email message
-   **CustomerKey**
    -   String datatype
    -   User-supplied unique identifier for an object within an object type
