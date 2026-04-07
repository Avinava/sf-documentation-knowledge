---
title: "Update a Subscriber"
domain: mc-sdks
topic: update-a-subscriber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.768Z
estimatedTokens: 418
keywords: [Ruby, Python, CSharp, Java, Subscriber, Patch, Specify, unique, identifier, props, order, identify, updated, PHP]
---

> Use the Patch method to update an existing subscriber. Specify a unique identifier in the props property in order to identify which subscriber will be updated:

# Update a Subscriber

Use the **Patch** method to update an existing subscriber. Specify a unique identifier in the **props** property in order to identify which subscriber will be updated:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
subscriber = FuelSDK::Subscriber.new
subscriber.authStub = myclient
subscriber.props = {"Status" => "Unsubscribed", "SubscriberKey" => "SDKSubscriber"}
results = subscriber.patch
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$subscriber = new ET_Subscriber();
$subscriber->authStub = $myclient;
$subscriber->props = array("Status" => "Unsubscribed", "SubscriberKey" => "SDKSubscriber");
$results = $subscriber->patch();
print_r($results);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
subscriber = ET_Client.ET_Subscriber()
subscriber.auth_stub = myclient
subscriber.props = {"Status" : "Unsubscribed", "SubscriberKey" : "SDKSubscriber"}
results = subscriber.patch()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_Subscriber subscriber = new ET_Subscriber();
subscriber.AuthStub = myclient;
subscriber.SubscriberKey = "SDKSubscriber";
subscriber.Status = SubscriberStatus.Unsubscribed;
PatchReturn results = subscriber.Patch();
Console.WriteLine("Patch Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
