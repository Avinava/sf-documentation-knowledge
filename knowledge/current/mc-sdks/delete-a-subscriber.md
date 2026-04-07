---
title: "Delete a Subscriber"
domain: mc-sdks
topic: delete-a-subscriber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.306Z
estimatedTokens: 388
keywords: [Subscriber, Specify, unique, identifier, needs, props, order, identify, Ruby, PHP, Python, CSharp, Java]
---

# Delete a Subscriber

> Use the Delete method to delete a subscriber. Specify a unique identifier needs to be specified in the props properties in order to identify which subscriber to update:

# Delete a Subscriber

Use the **Delete** method to delete a subscriber. Specify a unique identifier needs to be specified in the **props** properties in order to identify which subscriber to update:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
subscriber = FuelSDK::Subscriber.new
subscriber.authStub = myclient
subscriber.props = {"SubscriberKey" => "SDKSubscriber"}
results = subscriber.delete
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$subscriber = new ET_Subscriber();
$subscriber->authStub = $myclient;
$subscriber->props = array("SubscriberKey" => "SDKSubscriber");
$results = $subscriber->delete();
print_r($results);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
subscriber = ET_Client.ET_Subscriber()
subscriber.auth_stub = myclient
subscriber.props = {"SubscriberKey" : "SDKSubscriber"}
results = subscriber.delete()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_Subscriber subscriber = new ET_Subscriber();
subscriber.AuthStub = myclient;
subscriber.SubscriberKey = "SDKSubscriber";
DeleteReturn results = subscriber.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
