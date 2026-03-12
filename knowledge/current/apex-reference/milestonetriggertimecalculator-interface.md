---
title: "MilestoneTriggerTimeCalculator Interface"
domain: apex-reference
topic: milestonetriggertimecalculator-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.201Z
estimatedTokens: 638
namespace: Support
keywords: [MilestoneTriggerTimeCalculator, Support.MilestoneTriggerTimeCalculator, calculates, time, trigger, milestone, calculateMilestoneTriggerTime, caseId, milestoneTypeId, Implementation]
---

# MilestoneTriggerTimeCalculator Interface

> The Support.MilestoneTriggerTimeCalculator interface calculates the time trigger for a milestone.

**Namespace:** `Support`

# MilestoneTriggerTimeCalculator Interface

The Support.MilestoneTriggerTimeCalculator interface calculates the time trigger for a milestone.

## Namespace

[Support](atlas.en-us.apexref.meta/apexref/apex_namespace_Support.htm "The Support namespace provides an interface used for Case Feed.")

Implement the Support.MilestoneTriggerTimeCalculator interface to calculate a dynamic time trigger for a milestone based on the milestone type, the properties of the case, and case-related objects. To implement the Support.MilestoneTriggerTimeCalculator interface, you must first declare a class with the implements keyword as follows:

```

```

Next, your class must provide an implementation for the following method:

```

```

The implemented method must be declared as global or public.

-   **[MilestoneTriggerTimeCalculator Methods](atlas.en-us.apexref.meta/apexref/apex_interface_support_milestonetriggertimecalculator.htm#apex_Support_MilestoneTriggerTimeCalculator_methods)**

-   **[MilestoneTriggerTimeCalculator Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_support_milestonetriggertimecalculator.htm#apex_interface_support_milestonetriggertimecalculator_example)**


## MilestoneTriggerTimeCalculator Methods

The following are instance methods for MilestoneTriggerTimeCalculator.

-   **[calculateMilestoneTriggerTime(caseId, milestoneTypeId)](atlas.en-us.apexref.meta/apexref/apex_interface_support_milestonetriggertimecalculator.htm#apex_Support_MilestoneTriggerTimeCalculator_calculateMilestoneTriggerTime)**
    Calculates the milestone trigger time based on the specified case and milestone type and returns the time in minutes.

### calculateMilestoneTriggerTime(caseId, milestoneTypeId)

Calculates the milestone trigger time based on the specified case and milestone type and returns the time in minutes.

#### Syntax

public Integer calculateMilestoneTriggerTime(String caseId, String milestoneTypeId)

#### Parameters

caseId

Type: String

ID of the case the milestone is applied to.

milestoneTypeId

Type: String

ID of the milestone type.

#### Return Value

Type: Integer

The calculated trigger time in minutes.

## MilestoneTriggerTimeCalculator Example Implementation

This sample class demonstrates the implementation of theSupport.MilestoneTriggerTimeCalculator interface. In this sample, the case’s priority and the milestone m1 determine that the time trigger is 18 minutes.

```

```

This test class can be used to test the implementation of Support.MilestoneTriggerTimeCalculator.

```

```

## Code Examples

```apex
global class Employee implements Support.MilestoneTriggerTimeCalculator {
```

```apex
global Integer calculateMilestoneTriggerTime(String caseId, String milestoneTypeId)
```

```apex
global class myMilestoneTimeCalculator implements Support.MilestoneTriggerTimeCalculator {   
     global Integer calculateMilestoneTriggerTime(String caseId, String milestoneTypeId){
        Case c = [SELECT Priority FROM Case WHERE Id=:caseId];
        MilestoneType mt = [SELECT Name FROM MilestoneType WHERE Id=:milestoneTypeId];
        if (c.Priority != null && c.Priority.equals('High')){
              if (mt.Name != null && mt.Name.equals('m1')) { return 7;}
              else { return 5; }
        }
        else {
            return 18;
        }                
     }
}
```

```apex
@isTest 
private class MilestoneTimeCalculatorTest {
    static testMethod void testMilestoneTimeCalculator() {        
      
        // Select an existing milestone type to test with
        MilestoneType[] mtLst = [SELECT Id, Name FROM MilestoneType LIMIT 1];      
        if(mtLst.size() == 0) { return; }
        MilestoneType mt = mtLst[0];
        
        // Create case data.
        // Typically, the milestone type is related to the case, 
        // but for simplicity, the case is created separately for this test.
        Case c = new Case(priority = 'High');
        insert c;
        
        myMilestoneTimeCalculator calculator = new myMilestoneTimeCalculator();
        Integer actualTriggerTime = calculator.calculateMilestoneTriggerTime(c.Id, mt.Id);
        
        if(mt.name != null && mt.Name.equals('m1')) {
            System.assertEquals(actualTriggerTime, 7);
        }
        else {
            System.assertEquals(actualTriggerTime, 5);
        }
        
        c.priority = 'Low';
        update c;
        actualTriggerTime = calculator.calculateMilestoneTriggerTime(c.Id, mt.Id);
        System.assertEquals(actualTriggerTime, 18);
    }
}
```

## Related Topics

- Support (atlas.en-us.apexref.meta/apexref/apex_namespace_Support.htm)
- MilestoneTriggerTimeCalculator Methods (atlas.en-us.apexref.meta/apexref/apex_interface_support_milestonetriggertimecalculator.htm)
- MilestoneTriggerTimeCalculator Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_support_milestonetriggertimecalculator.htm)
- calculateMilestoneTriggerTime(caseId, milestoneTypeId) (atlas.en-us.apexref.meta/apexref/apex_interface_support_milestonetriggertimecalculator.htm)
