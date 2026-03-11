---
title: "sObject Map Considerations"
domain: apex-guide
topic: sobject-map-considerations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.353Z
keywords: [sObject, Map, Considerations]
---

# sObject Map Considerations

# sObject Map Considerations

Be cautious when using sObjects as map keys. Key matching for sObjects is based on the comparison of all sObject field values. If one or more field values change after adding an sObject to the map, attempting to retrieve this sObject from the map returns null. This is because the modified sObject isn’t found in the map due to different field values. This can occur if you explicitly change a field on the sObject, or if the sObject fields are implicitly changed by the system; for example, after inserting an sObject, the sObject variable has the ID field autofilled. Attempting to fetch this Object from a map to which it was added before the insert operation won’t yield the map entry, as shown in this example.

```

```

Another scenario where sObject fields are autofilled is in triggers, for example, when using before and after insert triggers for an sObject. If those triggers share a static map defined in a class, and the sObjects in Trigger.New are added to this map in the before trigger, the sObjects in Trigger.New in the after trigger aren’t found in the map because the two sets of sObjects differ by the fields that are autofilled. The sObjects in Trigger.New in the after trigger have system fields populated after insertion, namely: ID, CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, and SystemModStamp.