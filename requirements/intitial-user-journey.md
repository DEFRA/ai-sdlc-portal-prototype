# Defra AI Guidance Portal - User Journey & Content

## User Journey Overview

**Primary User Flow:**

1. **Start page** → 2. **Choose role** → 3. **Role-specific hub** → 4. **Specific guidance/tools**

**Secondary flows from role hub:**

- Access generic resources (prompt library, request form, policy, survey)
- Switch roles easily
- Return to start

---

## Page Structure & Content

### 1. Start Page

**URL:** `/`  
**GDS Pattern:** Start page pattern

#### Page Content

**Service name:** Defra AI Guidance Portal

**What this service is for:**
Get guidance on using artificial intelligence (AI) tools safely and effectively in your Defra role.

**What you'll get:**

- information on approved AI tools for Defra
- practical guidance on using AI securely
- a library of prompts shared by colleagues
- access to support and policies

**What you need to know:**
This guidance covers generative AI assistants and coding assistants. It does not cover machine learning or data science.

**Before you start:**
You do not need to sign in to use this service.

**[Start now]** (Green button, leads to role selection)

---

### 2. Choose Your Role

**URL:** `/choose-role`  
**GDS Pattern:** Question page with radio buttons

#### Page Content

**Back link:** ← Defra AI Guidance Portal

# What is your role?

Select the role that best describes your work at Defra.

**Radio button options:**

- Software engineer
- [Other roles will be added in future] (Greyed out with "Coming soon" text)

**[Continue]** (Button)

**Details component:**

<details>
<summary>My role is not listed</summary>
We're adding guidance for more roles regularly. For now, you can still access our generic resources like the prompt library and acceptable use policy.

[Access generic resources](/generic-hub)

</details>

---

### 3. Software Engineer Hub

**URL:** `/software-engineer`  
**GDS Pattern:** Hub page with task-based navigation

#### Page Content

**Back link:** ← Choose your role

**Breadcrumbs:** Home > Software engineer

# AI guidance for software engineers

Get the information and tools you need to use AI effectively in software development.

## Your AI tools and guidance

**[Approved AI tools](/software-engineer/approved-tools)**
Find out which AI tools you can use at Defra and how to access them.

**[How to use AI effectively](/software-engineer/how-to-guide)**
Practical guidance on integrating AI into your development workflow, from basics to advanced techniques.

## Resources and support

**[Prompt library](/prompt-library)**
Browse and share prompts created by the Defra community.

**[Request support](/request-form)**
Get help with licensing, training, or technical issues.

**[Acceptable use policy](/acceptable-use-policy)**
Understand your responsibilities when using AI tools.

**[Feedback survey](/survey)**
Tell us how you're using AI and help improve this service.

---

**Change role:**
Not a software engineer? [Choose a different role](/choose-role)

---

### 4. Approved AI Tools

**URL:** `/software-engineer/approved-tools`  
**GDS Pattern:** Content page with inset text for important information

#### Page Content

**Back link:** ← Software engineer guidance

**Breadcrumbs:** Home > Software engineer > Approved AI tools

# Approved AI tools for software engineers

These are the only AI tools approved for use by Defra software engineers.

**Inset text (Important banner):**
You must only use these approved tools. Other AI tools are not permitted as they lack the required enterprise licensing and security safeguards.

## Microsoft Copilot

Enterprise licensed with data protection and security controls.

**Use for:**

- general coding assistance
- debugging and problem solving
- code reviews and explanations
- documentation writing

## GitHub Copilot

Integrated coding assistant with enterprise controls.

**Use for:**

- code completion and suggestions
- generating code from comments
- writing tests
- refactoring assistance

## Getting access

If you need access to these tools, [request a licence](/request-form).

## Privacy and security

Before using any AI tool, you must configure proper privacy settings. This keeps your sensitive information safe.

[Check tool-specific privacy guidance](https://defra.github.io/ai-sdlc-tool-guidance/)

---

### 5. How to Use AI Effectively

**URL:** `/software-engineer/how-to-guide`  
**GDS Pattern:** Guide page with step-by-step content

#### Page Content

**Back link:** ← Software engineer guidance

**Breadcrumbs:** Home > Software engineer > How to use AI effectively

# How to use AI effectively in software development

Follow this guidance to get the most from AI tools while maintaining quality and security.

## Before you start

Make sure you have:

- access to approved AI tools
- configured privacy settings correctly
- read the acceptable use policy

## Getting started with AI-assisted development

### Write clear prompts

Be specific about what you want. Include context about your project, coding standards, and requirements.

**Good example:**
"Write a Python function to validate email addresses using regex. Follow PEP 8 style guide and include docstrings."

**Poor example:**
"Make an email validator."

### Start small

Begin with simple tasks like code explanations or basic functions before moving to complex features.

### Review everything

Always review and test AI-generated code. AI can make mistakes or suggest insecure practices.

## The Defra AI development workflow

Based on the [Defra AI SDLC playbook](https://defra.github.io/defra-ai-sdlc/), follow this workflow:

### 1. Project setup

- Define project requirements clearly
- Set up your development environment
- Configure AI tools with proper privacy settings

### 2. Development

Develop your solution iteratively, using AI for:

- implementation assistance
- code generation from specifications
- problem-solving and debugging

### 3. Test-driven development

Use AI tools to help with:

- writing test cases
- generating test data
- implementing tests alongside features

### 4. Testing

Apply AI for:

- unit testing strategies
- journey testing scenarios
- test automation

### 5. Refactoring

Once features are complete, use AI for:

- code optimisation suggestions
- improving readability
- identifying code smells

### 6. Documentation

Use AI to help:

- update technical documentation
- write clear code comments
- create user guidance
- maintain alignment with project goals

## Security and privacy considerations

### Protect sensitive information

- Never share personal data, API keys, or internal system details with AI tools
- Review your organisation's data classification before sharing any information
- Use dummy data for examples when possible

### Validate AI suggestions

- Don't trust AI-generated code blindly
- Test all code thoroughly
- Have peer reviews for AI-assisted work
- Check for security vulnerabilities

## Getting help

- [Browse the prompt library](/prompt-library) for examples from colleagues
- [Contact the AI Capabilities and Enablement team](/request-form) for support
- Join the #ask-ace Slack channel for questions

---

### 6. Prompt Library

**URL:** `/prompt-library`  
**GDS Pattern:** Filter and search interface

#### Page Content

**Back link:** ← Back

**Breadcrumbs:** Home > Prompt library

# Community prompt library

Browse and share prompts created by Defra colleagues.

**Search and filter section:**

**Search prompts**
[Search box: "Search by title, description, or category"]

**Filter by category**
[Dropdown: All categories]

- Code review
- Debugging
- Documentation
- Testing
- Refactoring
- General development

**[Search]** button

---

**Results section (example entries):**

### Python Code Review Assistant

**Category:** Code review  
**Submitted by:** Sarah Chen (sarah.chen@defra.gov.uk)  
**Votes:** ↑ 23

"Review this Python code for best practices, security issues, and PEP 8 compliance. Suggest improvements with explanations: [paste your code here]"

**[Copy prompt]** **[↑ Upvote]** **[💬 2 comments]**

---

### Unit Test Generator

**Category:** Testing  
**Submitted by:** James Wilson (james.wilson@defra.gov.uk)  
**Votes:** ↑ 18

"Generate comprehensive unit tests for this function. Include edge cases, error handling, and mock external dependencies: [paste function here]"

**[Copy prompt]** **[↑ Upvote]** **[💬 1 comment]**

---

**[Add your own prompt]** (Secondary button)

### Add a new prompt form

(Appears when "Add your own prompt" is clicked)

**Prompt title**
[Text input - max 100 characters]

**Description**
[Text area - max 200 characters]

**Your prompt**
[Large text area - max 8000 characters (Claude 4 limit)]

**Category**
[Dropdown with predefined options]

**Your name**
[Text input]

**Your email**
[Email input]

**[Submit prompt]**

---

### 7. Request Form

**URL:** `/request-form`  
**GDS Pattern:** Form page

#### Page Content

**Back link:** ← Back

**Breadcrumbs:** Home > Request support

# Request support

Get help with AI tools, licensing, or technical issues.

## Your details

**Your name**
[Text input]

**Your email address**
[Email input]

**Your department or team**
[Text input]

## Your request

**What do you need help with?**
[Radio buttons:]

- Licence acquisition for approved AI tools
- Training on using AI effectively
- Technical issues with AI tools
- General AI guidance question
- Other

**Tell us more about your request**
[Large text area]
Include as much detail as possible to help us respond quickly.

**How urgent is this request?**
[Radio buttons:]

- Low - respond within 5 working days
- Medium - respond within 2 working days
- High - respond within 1 working day

**[Submit request]**

---

### 8. Acceptable Use Policy

**URL:** `/acceptable-use-policy`  
**GDS Pattern:** Content page

#### Page Content

**Back link:** ← Back

**Breadcrumbs:** Home > Acceptable use policy

# Acceptable use policy for AI tools

You must follow this policy when using AI tools in your Defra role.

## Approved tools only

You must only use AI tools that have been approved by Defra. Currently, these are:

- Microsoft Copilot (enterprise licence)
- GitHub Copilot (enterprise licence)

Using non-approved AI tools is not permitted.

## Protecting information

### Do not share:

- Personal data about citizens, colleagues, or stakeholders
- Commercially sensitive information
- Security credentials or API keys
- Internal system configurations
- Draft policies or ministerial briefs

### You may share:

- Anonymised code examples
- General technical questions
- Publicly available information
- Non-sensitive documentation

## Your responsibilities

### Before using AI tools:

- Configure privacy settings as instructed
- Check information classification
- Consider data protection implications

### When using AI tools:

- Review and validate all AI-generated content
- Do not rely on AI for final decisions
- Maintain professional standards
- Keep your knowledge and skills up to date

### After using AI tools:

- Test any AI-generated code thoroughly
- Have work reviewed by colleagues where appropriate
- Document any AI assistance in your work

## Getting help

If you're unsure whether something is appropriate, ask:

- Your line manager
- The Data Protection team
- The AI Capabilities and Enablement team via [support request](/request-form)

## Consequences

Misuse of AI tools may result in:

- Removal of tool access
- Disciplinary action
- Security investigation

This policy is reviewed regularly and may be updated.

**Last updated:** [Current date]

---

### 9. Survey Link

**URL:** `/survey`  
**GDS Pattern:** External link page

#### Page Content

**Back link:** ← Back

**Breadcrumbs:** Home > Feedback survey

# Help improve AI guidance at Defra

Tell us about your experience using AI tools so we can improve this service.

The survey takes about 5 minutes to complete.

Your responses are anonymous and will help us:

- improve the guidance and resources
- understand how AI is being used across Defra
- identify training and support needs

**[Start survey](external-survey-link)** (Opens in new tab)

This survey is run by the AI Capabilities and Enablement team.

---

## Navigation Components

### Header navigation (appears on all pages except start page):

- **Service name:** Defra AI Guidance Portal (links to start page)
- **Role indicator:** "Guidance for software engineers" (with change role link)

### Footer (standard GDS footer):

- Built by the AI Capabilities and Enablement team
- Contact: #ask-ace Slack channel
- Feedback link
- Crown copyright notice

## Content Design Notes

**Following GDS content guidelines:**

- Front-loaded content (most important information first)
- Active voice and plain English
- Specific calls to action
- Progressive disclosure using details components
- Clear headings and subheadings
- Bulleted lists for scannable content
- Consistent terminology throughout
- Task-focused approach

**Technical considerations for future roles:**

- URLs include `/software-engineer/` to allow for other roles like `/policy-advisor/`, `/data-analyst/` etc.
- Generic pages (prompt library, request form, policy, survey) work for all roles
- Role switching preserves user context
- Content structure allows easy addition of new role-specific guidance

This structure provides a clear user journey while following GDS patterns and making it easy to extend for additional roles in future iterations.
