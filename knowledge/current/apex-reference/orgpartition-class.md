---
title: "OrgPartition Class"
domain: apex-reference
topic: orgpartition-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.590Z
estimatedTokens: 817
namespace: Cache
keywords: [OrgPartition, Contains, manage, cache, values, org, specific, partition., Unlike, session, tied, any, session., It’s, across, requests, users., Usage, Example, Note]
---

# OrgPartition Class

> Contains methods to manage cache values in the org cache of a specific partition.
        Unlike the session cache, the org cache is not tied to any session. It’s available to the
        org across requests and to all users.

**Namespace:** `Cache`

# OrgPartition Class

Contains methods to manage cache values in the org cache of a specific partition. Unlike the session cache, the org cache is not tied to any session. It’s available to the org across requests and to all users.

## Namespace

[Cache](atlas.en-us.apexref.meta/apexref/apex_namespace_cache.htm "The Cache namespace contains methods for managing the platform cache.")

## Usage

This class extends [Cache.Partition](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_class_cache_Partition "Base class of Cache.OrgPartition and Cache.SessionPartition. Use the subclasses to manage the cache partition for org caches and session caches.") and inherits all its non-static methods. Utility methods for creating and validating keys aren’t supported and can be called only from the Cache.Partition parent class. For a list of Cache.Partition methods, see [Partition Methods](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_methods).

To get an org partition, call Cache.Org.getPartition and pass in a fully qualified partition name, as follows.

```

```

See [Cache Key Format for Partition Methods](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#key_format_section).

The org cache supports concurrent reads and writes across multiple simultaneous Apex transactions, but the results can be indeterminate. See [Platform Cache Considerations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_platform_cache_limitations.htm) in the Apex Developer Guide.

Org cache operations are atomic transactions. If the Apex request that the cache operations run in fails, then all cache operations in that request are rolled back. See [Platform Cache Internals](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_platform_cache_internals.htm) in the Apex Developer Guide.

## Example

This class is the controller for a sample Visualforce page (shown in the subsequent code sample). The controller shows how to use the methods of Cache.OrgPartition to manage a cache value on a particular partition. The controller takes inputs from the Visualforce page for the partition name, key name for a counter, and initial counter value. The controller contains default values for these inputs. When you click **Rerender** on the Visualforce page, the go() method is invoked and increases the counter by one. When you click **Remove Key**, the counter key is removed from the cache. The counter value gets reset to its initial value when it’s re-added to the cache.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If another user logs in and runs this sample, the user gets the cache values that were last added or updated by the previous user. For example, if the counter value was five, the next user sees the counter value as increased to six.

```

```

This is the Visualforce page that corresponds to the OrgPartitionController class.

```

```

#### See Also

-   [*Apex Developer Guide*: Platform Cache](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cache_namespace_overview.htm "Apex Developer Guide: Platform Cache - HTML (New Window)")

## Code Examples

```
Cache.OrgPartition orgPartition = Cache.Org.getPartition('namespace.myPartition');
```

```apex
public class OrgPartitionController {
  
    // Name of a partition
    String partitionInput = 'local.myPartition';
    // Name of the key
    String counterKeyInput = 'counter';
    // Key initial value
    Integer counterInitValue = 0;
    // Org partition object
    Cache.OrgPartition orgPartition;
               
    // Constructor of the controller for the Visualforce page. 
    public OrgPartitionController() {  
    }
            
    // Adds counter value to the cache.
    // This method is called when the Visualforce page loads.
    public void init() {
        // Create the partition instance based on the partition name
        orgPartition = getPartition();

        // Create the partition instance based on the partition name
        // given in the Visualforce page or the default value.
        orgPartition = Cache.Org.getPartition(partitionInput);
        
        // Add counter to the cache with an initial value 
        //  or increment it if it's already there.
        if (!orgPartition.contains(counterKeyInput)) {
            orgPartition.put(counterKeyInput, counterInitValue);
        } else {
            orgPartition.put(counterKeyInput, getCounter() + 1);
        }        
    }
        
    // Returns the org partition based on the partition name
    // given in the Visualforce page or the default value.
    private Cache.OrgPartition getPartition() {
       if (orgPartition == null) {
            orgPartition = Cache.Org.getPartition(partitionInput);
       }
       
       return orgPartition;
     }
        

    // Return counter from the cache.
    public Integer getCounter() {
        return (Integer)getPartition().get(counterKeyInput);
    }
    
    // Invoked by the Submit button to save input values
    //  supplied by the user.
    public PageReference save() {
        // Reset the initial key value in the cache
        getPartition().put(counterKeyInput, counterInitValue);

        return null;
    }
   
    // Method invoked by the Rerender button on the Visualforce page.
    // Updates the values of various cached values.
    // Increases the values of counter and the MyData counter if those 
    //   cache values are still in the cache.
    public PageReference go() {
        // Get the org partition object
        orgPartition = getPartition();
        // Increase the cached counter value or set it to 0 
        //  if it's not cached.        
        if (orgPartition.contains(counterKeyInput)) {
            orgPartition.put(counterKeyInput, getCounter() + 1);
        } else {
            orgPartition.put(counterKeyInput, counterInitValue);
        }        
    
        return null;
    }
    
    // Method invoked by the Remove button on the Visualforce page.
    // Removes the datetime cached value from the org cache.
    public PageReference remove() {
        getPartition().remove(counterKeyInput);

        return null;
    }
    
    // Get and set methods for accessing variables
    // that correspond to the input text fields on
    // the Visualforce page.
    public String getPartitionInput() {
        return partitionInput;
    }
    
    public String getCounterKeyInput() {
        return counterKeyInput;
    }
    
    public Integer getCounterInitValue() {
        return counterInitValue;
    }
    
    public void setPartitionInput(String partition) {
        this.partitionInput = partition;
    }
    
    public void setCounterKeyInput(String keyName) {
        this.counterKeyInput = keyName;
    }
    
    public void setCounterInitValue(Integer counterValue) {
        this.counterInitValue = counterValue;
    }
}
```

```
<apex:page controller="OrgPartitionController" action="{!init}">

    <apex:form >
        <br/>Partition with Namespace Prefix: <apex:inputText value="{!partitionInput}"/>
        <br/>Counter Key Name: <apex:inputText value="{!counterKeyInput}"/>
        <br/>Counter Initial Value: <apex:inputText value="{!counterInitValue}"/>
        <apex:commandButton action="{!save}" value="Save Key Input Values"/>
    </apex:form>

    <apex:outputPanel id="output">
        <br/>Cached Counter: <apex:outputText value="{!counter}"/>
    </apex:outputPanel>
    
    <br/>
    <apex:form >
        <apex:commandButton id="go" action="{!go}" value="Rerender" rerender="output"/>
        <apex:commandButton id="remove" action="{!remove}" value="Remove Key" rerender="output"/>
    </apex:form>

</apex:page>
```

## Related Topics

- Cache (atlas.en-us.apexref.meta/apexref/apex_namespace_cache.htm)
- Cache.Partition (atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm)
- Partition Methods (atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm)
- Cache Key Format for Partition
                    Methods (atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm)
