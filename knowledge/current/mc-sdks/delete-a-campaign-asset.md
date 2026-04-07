---
title: "Delete a Campaign Asset"
domain: mc-sdks
topic: delete-a-campaign-asset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:28.951Z
estimatedTokens: 424
keywords: [Campaign, Asset, Specify, unique, identifier, props, order, identify, assetId, specfic, Ruby, PHP, CSharp, Python, Java]
---

# Delete a Campaign Asset

> Use the Delete method to delete a campaign asset. Specify the unique identifier id in the props properties in order to identify which campaign the asset is related to and the unique identifier assetId to identify the specfic asset:

# Delete a Campaign Asset

Use the **Delete** method to delete a campaign asset. Specify the unique identifier **id** in the **props** properties in order to identify which campaign the asset is related to and the unique identifier **assetId** to identify the specfic asset:

### Ruby

```ruby
require 'fuelsdk'
myClient = FuelSDK::Client.new {'client' => { 'id' => CLIENTID, 'secret' => SECRET }}
campaignAsset = FuelSDK::Campaign::Asset.new
campaignAsset.authStub = myClient
campaignAsset.props = {"id" => "20", "assetId" => "50"}
results = campaignAsset.delete
p results
```

### PHP

```php
require('ET_Client.php');
$myclient = new ET_Client();
$campaignAsset = new ET_Campaign_Asset();
$campaignAsset->authStub = $myclient;
$campaignAsset->props = array("id" => "20", "assetId" => "50");
$results = $campaignAsset->delete();
print_r($results);
```

### CSharp

```csharp
using FuelSDK;
ET_Client myclient = new ET_Client();
ET_CampaignAsset campaignAsset = new ET_CampaignAsset();
campaignAsset.AuthStub = myclient;
campaignAsset.ID = 50;
campaignAsset.CampaignID = '20';
DeleteReturn results = campaignAsset.Delete();
Console.WriteLine("Delete Status: " + results.Status.ToString());
```

### Python

```python
import ET_Client
myClient = ET_Client.ET_Client()
campaignAsset = ET_Client.ET_Campaign_Asset()
campaignAsset.auth_stub = myClient
campaignAsset.props = {"id" : "20", "assetId" : "50"}
results = campaignAsset.delete()
print results
```

### Java

```
<div class="alert alert-info" role="alert">
Documentation for the Fuel Java SDK can be found at <a href="http://salesforce-marketingcloud.github.io/FuelSDK-Java/">http://salesforce-marketingcloud.github.io/FuelSDK-Java/</a>
```
