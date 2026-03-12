---
title: "Safely Cache Values with the CacheBuilder Interface"
domain: apex-guide
topic: safely-cache-values-with-the-cachebuilder-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.761Z
estimatedTokens: 946
keywords: [Safely, Cache, CacheBuilder, Platform, best, practice, ensure, Apex, code, handles, misses, testing, requests, write, yourself]
---

# Safely Cache Values with the CacheBuilder Interface

> A Platform Cache best practice is to ensure that your Apex code handles cache misses
    by testing for cache requests that return null. You can write this code yourself. Or, you can
    use the Cache.CacheBuilder interface, which makes it
    easy to safely store and retrieve values to a session or org cache.

# Safely Cache Values with the CacheBuilder Interface

A Platform Cache best practice is to ensure that your Apex code handles cache misses by testing for cache requests that return null. You can write this code yourself. Or, you can use the Cache.CacheBuilder interface, which makes it easy to safely store and retrieve values to a session or org cache.

Rather than just declaring what you want to cache in your Apex class, create an inner class that implements the CacheBuilder interface. The interface has a single method, doLoad(String var), which you override by coding the logic that builds the cached value based on the doLoad(String var) method’s argument.

To retrieve a value that you’ve cached with CacheBuilder, you don’t call the doLoad(String var) method directly. Instead, it’s called indirectly by Salesforce the first time you reference the class that implements CacheBuilder. Subsequent calls get the value from the cache, as long as the value exists. If the value doesn’t exist, the doLoad(String var) method is called again to build the value and then return it. As a result, you don’t execute put() methods when using the CacheBuilder interface. And because the doLoad(String var) method checks for cache misses, you don’t have to write the code to check for nulls yourself.

Let’s look at an example. Suppose you’re coding an Apex controller class for a Visualforce page. In the Apex class, you often run a SOQL query that looks up a User record based on a user ID. SOQL queries can be expensive, and Salesforce user records don’t typically change much, so the User information is a good candidate for CacheBuilder.

In your controller class, create an inner class that implements the CacheBuilder interface and overrides the doLoad(String var) method. Then add the SOQL code to the doLoad(String var) method with the user ID as its parameter.

```

```

To retrieve the User record from the org cache, execute the Org.get(cacheBuilder, key) method, passing it the UserInfoCache class and the user ID. Similarly, use Session.get(cacheBuilder, key) and Partition.get(cacheBuilder, key) to retrieve the value from the session or partition cache, respectively.

```

```

When you run the get() method, Salesforce searches the cache using a unique key that consists of the strings 00541000000ek4c and UserInfoCache. If Salesforce finds a cached value, it returns it. For this example, the cached value is a User record associated with the ID 00541000000ek4c. If Salesforce doesn’t find a value, it executes the doLoad(String var) method of UserInfoCache again (and reruns the SOQL query), caches the User record, and then returns it.

## CacheBuilder Coding Requirements

Follow these requirements when you code a class that implements the CacheBuilder interface.

-   The doLoad(String var) method must take a String parameter, even if you do not use the parameter in the method’s code. Salesforce uses the string, along with the class name, to build a unique key for the cached value.
-   The doLoad(String var) method can return any value, including null. If a null value is returned, it is delivered directly to the CacheBuilder consumer and **not** cached. CacheBuilder consumers are expected to handle null values gracefully. We recommend using null values to reflect a temporary failure to re-build the cache key.
-   The class that implements CacheBuilder must be non-static because Salesforce instantiates a new instance of the class and runs the doLoad(String var) method to create the cached value.

#### See Also

-   [*Apex Reference Guide*: CacheBuilder Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm "Apex Reference Guide: CacheBuilder Interface - HTML (New Window)")

## Code Examples

```apex
class UserInfoCache implements Cache.CacheBuilder {
    public Object doLoad(String userid) {
        User u = (User)[SELECT Id, IsActive, username FROM User WHERE id =: userid];
        return u;
    }
}
```

```
User batman = (User) Cache.Org.get(UserInfoCache.class, ‘00541000000ek4c');
```
