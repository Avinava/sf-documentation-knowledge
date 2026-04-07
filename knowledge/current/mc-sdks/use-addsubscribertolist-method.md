---
title: "Use AddSubscriberToList Method"
domain: mc-sdks
topic: use-addsubscribertolist-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.431Z
estimatedTokens: 327
keywords: [Ruby, Python, CSharp, Java, AddSubscriberToList, helper, add, subscriber, EmailAddress, SubscriberKey, new, subscribers, account, added, additional, PHP]
---

> Use the AddSubscriberToList helper method to add a subscriber to a list (EmailAddress, Lists, SubscriberKey). This method applies to new subscribers in an account or existing subscribers added to an additional list.

# Use AddSubscriberToList Method

Use the **AddSubscriberToList** helper method to add a subscriber to a list (EmailAddress, Lists, SubscriberKey). This method applies to new subscribers in an account or existing subscribers added to an additional list.

### Ruby

```ruby
require 'fuelsdk'
myclient= FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
response = myclient.AddSubscriberToList("example@example.com", [12121212])
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$response = $myclient->AddSubscriberToList("example@example.com", array(12121212));
print_r($response);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
response = myclient .AddSubscriberToList("example@example.com", [12121212])
print response
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
FuelReturn response = myclient.AddSubscribersToList("example@example.com", new List<int>() { 12121212 });
Console.WriteLine("Helper Status: " + response.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
