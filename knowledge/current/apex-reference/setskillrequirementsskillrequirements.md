---
title: "setSkillRequirements(skillRequirements)"
domain: apex-reference
topic: setskillrequirementsskillrequirements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.605Z
keywords: [setSkillRequirements, skillRequirements, Sets, skills, required, complete, particular, task, work, type., Signature, Parameters, Return, Value]
---

# setSkillRequirements(skillRequirements)

> Sets the skills that are required to complete a particular task for a
      work type.

### setSkillRequirements(skillRequirements)

Sets the skills that are required to complete a particular task for a work type.

#### Signature

public lxscheduler.WorkTypeBuilder setSkillRequirements(List<lxscheduler.SkillRequirement> skillRequirements)

#### Parameters

skillRequirements

Type: List<[lxscheduler.SkillRequirement](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_SkillRequirement.htm#apex_class_lxscheduler_SkillRequirement "Contains information about the set of skills that are required to complete a particular task for a work type.")\>

This method takes input as an instance of the lxscheduler.SkillRequirement class. Build the instance of the input class using the lxscheduler.SkillRequirementBuilder class.

#### Return Value

Type: [lxscheduler.WorkTypeBuilder](#apex_class_lxscheduler_WorkTypeBuilder "Contains methods to build an instance of the lxscheduler.WorkType class.")