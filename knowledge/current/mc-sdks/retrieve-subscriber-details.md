---
title: "Retrieve Subscriber Details"
domain: mc-sdks
topic: retrieve-subscriber-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.763Z
estimatedTokens: 927
keywords: [Ruby, Python, CSharp, Java, Retrieve, Subscriber, subscribers, PHP, Streamline, Filter, Requests]
---

> Use the Get method to return information about existing subscribers.

# Retrieve Subscriber Details

Use the **Get** method to return information about existing subscribers.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
subscriber = FuelSDK::Subscriber.new
subscriber.authStub = myclient
response = subscriber.get
p response
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$subscriber = new ET_Subscriber();
$subscriber->authStub = $myclient;
$response = $subscriber->get();
print_r($response);
```

### Python

```python
import ET_Client
myclient = ET_Client.ET_Client()
subscriber = ET_Client.ET_Subscriber()
subscriber.auth_stub = myclient
results = subscriber.get()
print results
```

### CSharp

```csharp
Using FuelSDK;
ET_Client myclient = new ET_Client();
ET_Subscriber subscriber = new ET_Subscriber();
subscriber.AuthStub = myclient;
GetReturn results = subscriber.Get();
Console.WriteLine("Get Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Streamline Your Usage of Get

Optionally, you can set the **props** property when using the **Get** method in order to limit the number of fields returned. If you don't define the **props** property, the call returns all fields. You can provide the **props** property as an array containing any combination of the following values:

-   ID
-   PartnerKey
-   CreatedDate
-   Client.ID
-   Client.PartnerClientKey
-   EmailAddress
-   SubscriberKey
-   UnsubscribedDate
-   Status
-   EmailTypePreference

### Ruby

```ruby
subscriber.props = ['EmailAddress', 'SubscriberKey']
```

### PHP

```php
$subscriber->props = array('EmailAddress', 'SubscriberKey');
```

### Python

```python
subscriber.props = ["EmailAddress","SubscriberKey"]
```

### CSharp

```csharp
subscriber.Props = new string[] { "EmailAddress", "SubscriberKey" };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)

## Filter Get Requests

Optionally, you can set the **filter** property to limit the number of results returned. If you don't define the **props** property, the call returns all fields. A filter consists of three key/value pairs:

1.  **Property**: Any of the properties that can be returned for a subscriber
2.  **SimpleOperator**: Valid simple operators include the following:
    -   equals
    -   notEquals
    -   greaterThan
    -   lessThan
3.  **Value/DateValue**: Use **DateValue** to match values when using a **Date** datatype. Otherwise, use **Value**.

### Ruby

```ruby
subscriber.filter = {'Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'MySubscriber'}
```

### PHP

```php
$subscriber->filter = array('Property' => 'SubscriberKey','SimpleOperator' => 'equals','Value' => 'MySubscriber');
```

### Python

```python
subscriber.search_filter = {"Property" => "SubscriberKey","SimpleOperator" => "equals","Value" => "MySubscriber"}
```

### CSharp

```csharp
subscriber.SearchFilter = new SimpleFilterPart() { Property = "SubscriberKey", SimpleOperator = SimpleOperators.equals, Value = new string[] { "MySubscriber" } };
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
