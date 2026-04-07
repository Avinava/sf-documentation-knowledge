---
title: "Models"
domain: mobile-sdk
topic: models
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.147Z
estimatedTokens: 459
keywords: [Models, client, represent, server, records, Mobile, Sync, model, objects, instances, Force.SObject, subclass, Backbone.Model, SObject, extends]
---

# Models

> Models on the client represent server records. In Mobile Sync, model
objects are instances of Force.SObject, a subclass of the Backbone.Model class. SObject extends Model to work with Salesforce APIs and,
  optionally, with SmartStore.

# Models

Models on the client represent server records. In Mobile Sync, model objects are instances of Force.SObject, a subclass of the Backbone.Model class. SObject extends Model to work with Salesforce APIs and, optionally, with SmartStore.

You can perform the following CRUD operations on SObject model objects:

-   Create
-   Destroy
-   Fetch
-   Save
-   Get/set attributes

In addition, model objects are observable: Views and controllers can receive notifications when the objects change.

## Properties

Force.SObject adds the following properties to Backbone.Model:

sobjectType

Required. The name of the Salesforce object that this model represents. This value can refer to either a standard object or a custom object.

fieldlist

Required. Names of fields to fetch, save, or destroy.

cacheMode

[Offline behavior](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_caching.htm#ModeConstantDescriptioncache-onlyFo-F0E2222F).

mergeMode

[Conflict handling behavior](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_conflict_detection.htm#ModeConstantDescriptionoverwriteFor-F0E20B23).

cache

For updatable offline storage of records. The Mobile Sync comes bundled with Force.StoreCache, a cache implementation that is backed by SmartStore.

cacheForOriginals

Contains original copies of records fetched from server to support conflict detection.

## Examples

You can assign values for model properties in several ways:

-   As properties on a Force.SObject instance.
-   As methods on a Force.SObject sub-class. These methods take a parameter that specifies the desired CRUD action (“create”, “read”, “update”, or “delete”).
-   In the options parameter of the fetch(), save(), or destroy() function call.

For example, these code snippets are equivalent.

```

```

```

```

```

```

## Code Examples

```
// As properties on a Force.SObject instance
acc = new Force.SObject({Id:"<some_id>"});
acc.sobjectType = "account";
acc.fieldlist = ["Id", "Name"]; 
acc.fetch();
```

```
// As methods on a Force.SObject sub-class
Account = Force.SObject.extend({
  sobjectType: "account",
  fieldlist: function(method) { return ["Id", "Name"];}
});
Acc = new Account({Id:"<some_id>"});
acc.fetch();
```

```
// In the options parameter of fetch()
acc = new Force.SObject({Id:"<some_id>"});
acc.sobjectType = "account";
acc.fetch({fieldlist:["Id", "Name"]);
```

## Related Topics

- Offline behavior (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_caching.htm)
- Conflict handling behavior (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_conflict_detection.htm)
