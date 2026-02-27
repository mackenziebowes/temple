---
Complete PRD Structure (Markdown SSOT)
1. Header Metadata
 [Project/Feature Name]
- **Status:** Speclet / Brief / Spec / Full / Impact Review
- **Owner:** [Name]
- **Last Updated:** [Date]
- **Version:** [X.Y]
- **Related Docs:** [Links to Notion parent, Linear project, etc.]
---
2. Executive Summary (Minto Pyramid - Answer First)
 Executive Summary
[Brief paragraph starting with the core recommendation/thesis. What are we building, why now, and what's the expected outcome?]
---
3. Problem Statement
 Problem Statement
 User Pain
[Describe the user's psychological pain or operational friction]
 Quantitative Evidence
- [Metric]: [Value] (e.g., "40% of users abandon checkout due to...")
- [Metric]: [Value]
- [Metric]: [Value]
 Affected Segments
- [Segment A]: [Impact description]
- [Segment B]: [Impact description]
Pitfall: Don't define problem as "lack of feature X" — focus on the underlying pain.
---
4. Value Proposition
 Value Proposition
**We help [specific target user] to [accomplish specific goal] by [our unique approach/technology].**
 Differentiation
- How is this 10x better than status quo?
- Why will entrenched users switch?
Pitfall: Don't just list capabilities—connect each to user benefit.
---
5. Target Opportunity (from Product Brief stage)
 Opportunity Assessment
 Market Size
- TAM: $[X]
- SAM: $[X]
- SOM: $[X]
 Qualitative Evidence
- [User research quotes/findings]
- [Competitor analysis gaps]
- [Market trend data]
---
6. Hypothesis & Strategy
 Hypothesis
If we [solution], then [expected outcome], because [rationale].
 Strategic Approach
- [Key strategic pillar 1]
- [Key strategic pillar 2]
- [Key strategic pillar 3]
---
7. Explicit Non-Goals
 Non-Goals (Out of Scope)
The following are explicitly **NOT** part of this release:
- [Feature X]: Will be addressed in Phase 2
- [Feature Y]: Not relevant to this user problem
- [Feature Z]: Out of technical scope
 Rabbit Holes (Shape Up)
- [Detailed area to avoid]: [Why]
- [Detailed area to avoid]: [Why]
Pitfall: Ambiguity leads to scope creep.
---
8. Success Metrics
 Success Metrics
 Primary Metrics
| Metric | Target | Measurement Method | Timeframe |
|--------|--------|-------------------|-----------|
| [Metric 1] | [Specific value/threshold] | [How measured] | [X days/weeks] |
| [Metric 2] | [Specific value/threshold] | [How measured] | [X days/weeks] |
 Non-Failure Metrics (Guardrails)
| Metric | Minimum Threshold |
|--------|-------------------|
| [Metric] | [Value] |
| [Metric] | [Value] |
 Telemetry Requirements
- [Instrumentation needed for Metric 1]
- [Instrumentation needed for Metric 2]
Pitfall: Texas Sharpshooter Fallacy—vague goals allow painting bullseye after the fact.
---
9. Target KPIs (Organizational Alignment)
 Organizational KPI Impact
This project aims to move the following organizational needles:
- [KPI 1]: Current [X] → Target [Y]
- [KPI 2]: Current [X] → Target [Y]
- [KPI 3]: Current [X] → Target [Y]
---
10. Functional Requirements
 Functional Requirements
[Group by user journey: Onboarding → Core Usage → Edge Cases → Offboarding]
 Onboarding
- **FR-1:** The system must [behavioral requirement] (e.g., "authenticate via SSO within 500ms")
- **FR-2:** The system must [behavioral requirement]
  - Acceptance: [How we verify]
 Core User Journey
- **FR-3:** The system must [behavioral requirement]
- **FR-4:** The system must [behavioral requirement]
  - Acceptance: [How we verify]
  - Priority: Required / Nice-to-Have
 Edge Cases & Errors
- **FR-5:** The system must handle [edge case] by [behavior]
- **FR-6:** When [error condition], system must [behavior]
 Offboarding / Cleanup
- **FR-7:** The system must [behavior for account deletion/data retention]
Pitfall: Don't specify aesthetics ("blue button top right")—focus on behavioral outcomes.
---
11. Technical Considerations
 Technical Approach
 Architecture Implications
- [Database changes required]
- [API endpoints needed]
- [Third-party integrations]
- [Infrastructure changes]
 Constraints
- **Performance:** [e.g., "<100ms latency for 95th percentile"]
- **Compatibility:** [Browser/device/platform requirements]
- **Security:** [Compliance/encryption requirements]
 Technical Risks
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| [Risk] | [High/Med/Low] | [High/Med/Low] | [Plan] |
---
12. Systemic Risks & Assumptions
 Risks & Assumptions
 Key Assumptions
- [Assumption 1]: [Validation method]
- [Assumption 2]: [Validation method]
 Systemic Risks
| Risk | Likelihood | Impact | Mitigation Strategy |
|------|-----------|--------|---------------------|
| [Risk] | [High/Med/Low] | [High/Med/Low] | [Contingency plan] |
| [Risk] | [High/Med/Low] | [High/Med/Low] | [Contingency plan] |
 False Assumption Pressure-Test Plan
How we will validate/disprove assumptions before full build:
- [Experiment 1]
- [Experiment 2]
---
13. Operational Checklist (Go-to-Market)
 Operational Readiness Checklist
 Launch Activities
- [ ] Legal compliance review
- [ ] Marketing assets created (landing page, email, social)
- [ ] Customer support documentation written
- [ ] Sales enablement materials prepared
- [ ] Customer communication drafted
 Support Readiness
- [ ] Support team trained
- [ ] FAQ/KB articles published
- [ ] Escalation paths defined
 Internal Enablement
- [ ] Internal announcement scheduled
- [ ] Training sessions scheduled
- [ ] Success stories/case studies planned
Pitfall: Software deployment ≠ product launch.
---
14. Decision Journal
 Decision Journal
| Date | Decision | Rationale | Decision Maker | Alternatives Considered |
|------|----------|-----------|----------------|------------------------|
| [Date] | [What we decided] | [Why we chose this] | [Who] | [Options rejected and why] |
| [Date] | [What we decided] | [Why we chose this] | [Who] | [Options rejected and why] |
 Strategic Direction Log
- [Date]: Explored [approach A] → rejected because [reason]
- [Date]: Explored [approach B] → chosen because [reason]
Pitfall: Relying on oral tradition causes circular arguments with new stakeholders.
---
15. Launch & Rollout Plan
 Launch Strategy
 Phased Rollout
- **Alpha:** [Who, what, how long]
- **Beta:** [Who, what, how long]
- **GA:** [Who, what, timing]
 Rollback Plan
- [Condition that triggers rollback]
- [Steps to rollback]
- [Post-mortem process]
 Rollout Metrics
- [Metric to monitor during rollout]
- [Alert thresholds]
---
16. Appendix & References
 Appendix
 Related Documents
- [Link to master Notion PRD]
- [Link to Linear project]
- [Link to design files]
- [Link to user research]
 Telemetry Dashboards
- [Live dashboard link]
 User Personas
- [Persona A]: [Key traits]
- [Persona B]: [Key traits]
 Competitive Analysis
- [Competitor]: [What they do, our differentiation]
---
17. Impact Review (Post-Launch - Filled after GA)
 Impact Review
 Results vs. Hypothesis
| Metric | Hypothesis | Actual | Delta | Pass/Fail |
|--------|-----------|--------|-------|-----------|
| [Metric 1] | [Target] | [Actual] | [+/-] | [✅/❌] |
| [Metric 2] | [Target] | [Actual] | [+/-] | [✅/❌] |
 Key Learnings
- [What worked well]
- [What didn't work]
- [Unexpected outcomes]
 Retrospective Lessons
- [What would we do differently]
- [What should apply to future projects]
---
Summary: 17 Sections Total
| # | Section | Purpose |
|---|---------|---------|
| 1 | Header Metadata | Status, ownership, linking |
| 2 | Executive Summary | Answer-first thesis (Minto Pyramid) |
| 3 | Problem Statement | User pain + quantitative data |
| 4 | Value Proposition | We help X to Y by Z |
| 5 | Opportunity Assessment | Market size + qualitative evidence |
| 6 | Hypothesis & Strategy | If/then/why framework |
| 7 | Explicit Non-Goals | Scope boundaries + rabbit holes |
| 8 | Success Metrics | 2-3 specific targets + guardrails |
| 9 | Organizational KPIs | Executive alignment |
| 10 | Functional Requirements | Behavioral requirements by journey |
| 11 | Technical Considerations | Architecture, constraints, risks |
| 12 | Systemic Risks & Assumptions | Risk matrix + validation plan |
| 13 | Operational Checklist | GTM activities + support readiness |
| 14 | Decision Journal | Chronological "why" log |
| 15 | Launch & Rollout Plan | Phased rollout + rollback |
| 16 | Appendix | References, dashboards, personas |
| 17 | Impact Review | Post-launch results (filled later) |
