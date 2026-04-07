---
title: "Retrieve Email Details"
domain: mc-sdks
topic: retrieve-email-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.154Z
estimatedTokens: 877
keywords: [Retrieve, Email, messages, Ruby, PHP, Python, CSharp, Java, Streamline, usage, Filter, Requests]
---

# Retrieve Email Details

> Use the Get method to return information about existing email messages.

# Retrieve Email Details

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in the user interface.

Use the **Get** method to return information about existing email messages.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
email = FuelSDK::Email.new
email.authStub = myClient
response = email.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$email = new ET_Email();
$email->authStub = $myclient;
$response = $email->get();
print_r($response);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
email = ET_Client.ET_Email()
email.auth_stub = myClient
results = email.get()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myClient = new ET_Client();
ET_Email email = new ET_Email();
email.AuthStub = myclient;
GetReturn response = email.Get();
Console.WriteLine("Get Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Streamline Your usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:

-   ID
-   PartnerKey
-   CreatedDate
-   ModifiedDate
-   Client.ID
-   Name
-   Folder
-   CategoryID
-   HTMLBody
-   TextBody
-   Subject
-   IsActive
-   IsHTMLPaste
-   ClonedFromID
-   Status
-   EmailType
-   CharacterSet
-   HasDynamicSubjectLine
-   ContentCheckStatus
-   Client.PartnerClientKey
-   ContentAreas
-   CustomerKey

### Ruby

```ruby
email.props = ['Name', 'CustomerKey']
```

### PHP

```php
$email->props = array('Name', 'CustomerKey');
```

### Python

```python
email.props = ['Name', 'CustomerKey']
```

### CSharp

```csharp
email.Props = new string[] { "Name", "CustomerKey" };
```

## Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for an email
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
email.filter = {'Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyEmail'}
```

### PHP

```php
$email->filter = array('Property' => 'CustomerKey','SimpleOperator' => 'equals','Value' => 'MyEmail');
```

### Python

```python
email.search_filter = {'Property' : 'CustomerKey','SimpleOperator' : 'equals','Value' : 'MyEmail'}
```

### CSharp

```csharp
email.SearchFilter = new SimpleFilterPart() { Property = "CustomerKey", SimpleOperator = SimpleOperators.equals, Value = new String[] { "MyEmail" } };
```
