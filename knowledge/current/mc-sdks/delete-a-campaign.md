---
title: "Delete a Campaign"
domain: mc-sdks
topic: delete-a-campaign
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.470Z
estimatedTokens: 360
keywords: [Ruby, Python, CSharp, Java, Campaign, Specify, unique, identifier, props, order, identify, PHP]
---

> Use the Delete method to delete a campaign.  Specify the unique identifier id in the props properties in order to identify which campaign to delete:

# Delete a Campaign

Use the **Delete** method to delete a campaign. Specify the unique identifier **id** in the **props** properties in order to identify which campaign to delete:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaign = FuelSDK::Campaign.new
campaign.authStub = myClient
campaign.props = {"id" => "151515151"}
results = campaign.delete
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$campaign = new ET_Campaign();
$campaign->authStub = $myclient;
$campaign->props = array("id" => "151515151");
$results = $campaign->delete();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
       campaign = ET_Client.ET_Campaign()
  campaign.auth_stub = myClient
  campaign.props = {"id" : "151515151"}
results = campaign.delete()
print results
```

### CSharp

```csharp
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_Campaign campaign = new ET_Campaign();
campaign.AuthStub = myclient;
campaign.ID = 151515151;
DeleteReturn results = campaign.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
