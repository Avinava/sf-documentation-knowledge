---
title: "Update a Campaign"
domain: mc-sdks
topic: update-a-campaign
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.482Z
estimatedTokens: 320
keywords: [Ruby, Python, Java, Campaign, Patch, Specify, unique, identifier, props, order, identify, updated, PHP]
---

> Use the Patch method to update an existing campaign. Specify the unique identifier id in the props property in order to identify which campaign will be updated.

# Update a Campaign

Use the **Patch** method to update an existing campaign. Specify the unique identifier **id** in the **props** property in order to identify which campaign will be updated.

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaign = FuelSDK::Campaign.new
campaign.authStub = myClient
campaign.props = {"id" => "151515151", "name"=> "SDK Example, now Updated!"}
results = campaign.patch
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$campaign = new ET_Campaign();
$campaign->authStub = $myclient;
$campaign->props = array("id" => "151515151", "name"=> "SDK Example, now Updated!");
$results = $campaign->patch();
print_r($results);
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
       campaign = ET_Client.ET_Campaign()
  campaign.auth_stub = myClient
  campaign.props = {"id" : "151515151", "name": "SDK Example, now Updated!"}
results = campaign.patch()
print results
```

### Java

Documentation for the Fuel Java SDK can be found at [](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)[http://salesforce-marketingcloud.github.io/FuelSDK-Java/](http://salesforce-marketingcloud.github.io/FuelSDK-Java/)
