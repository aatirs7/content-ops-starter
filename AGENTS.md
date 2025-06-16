# Agent Interaction Instructions (agents.md)

This document provides guidelines for automated coding agents (Codex, GPT-based code assistants, etc.) to interact effectively and safely with this repository.

---

## General Guidelines

- **Read Context Carefully**: Ensure you fully understand the existing code structure, component patterns, and styling conventions before making modifications.
- **Minimal Effective Changes**: Prefer small, precise edits over large-scale changes unless explicitly requested.
- **Consistency and Style**: Maintain existing formatting, naming conventions, and style (Tailwind utility-first classes, Markdown content structure).
- **Components and Structure**: This project uses component-based structures (e.g., `GenericSection`, `FeaturedItemsSection`). Do not deviate from these patterns unless instructed.

## File Structure

- Markdown files (`index.md`, `works.md`, etc.) are primary content files.
- Tailwind CSS utility classes handle all styling. Avoid introducing custom CSS unless explicitly instructed.
- Components follow clear naming conventions: `ComponentName`, placed under relevant component directories.

## Workflow

- Clearly document your changes, including rationale.
- Test responsiveness (mobile-first) and ensure visual consistency.
- Validate the layout and content visually whenever possible.
- Suggest enhancements (subtle animations, hover effects) only if they add clear user value without compromising simplicity.

## Submission Standards

- Submit each change or PR separately, clearly labeled with concise, descriptive commit messages.
- Document reasoning for stylistic or structural decisions directly in the PR or commit notes.

## Prohibited Actions

- Avoid any automated commits directly to the `main` branch.
- Do not introduce external dependencies or libraries unless explicitly permitted.
- Do not overwrite significant content or layout elements without explicit instruction.

## Clarifications & Questions

If instructions are ambiguous or unclear, request clarification from the maintainer before proceeding.

---

Following these guidelines ensures smooth, efficient collaboration and maintains the quality and integrity of the project.
