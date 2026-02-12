# frida-mcp-skills

Operational skills for using Frida MCP safely on Frida 17.

## Included Skills

- `frida-mcp-workflow`
  - Enforces: `Idea -> Scripting -> Execution -> Notes`
  - Requires docs-first usage before non-trivial Frida MCP calls
  - Prefers saved script files over large inline snippets
  - Enforces script lifecycle hygiene (track, unload, avoid duplicate hooks)

## Repository Layout

```text
skills/
  frida-mcp-workflow/
    SKILL.md
    references/
    templates/
    agents/
```

## Install

Choose one of these options.

### Option 1: Clone and copy skill folder

```bash
git clone git@github.com:yfe404/frida-mcp-skills.git
mkdir -p ~/.codex/skills
cp -R frida-mcp-skills/skills/frida-mcp-workflow ~/.codex/skills/
```

### Option 2: Symlink for live edits

```bash
git clone git@github.com:yfe404/frida-mcp-skills.git
mkdir -p ~/.codex/skills
ln -s "$(pwd)/frida-mcp-skills/skills/frida-mcp-workflow" ~/.codex/skills/frida-mcp-workflow
```

## Use

In your prompt, mention `frida-mcp-workflow` (or describe a matching Frida MCP task) so the agent loads this skill.

The skill requires every instrumentation task to include these phases in order:

1. `Idea`
2. `Scripting`
3. `Execution`
4. `Notes`

## Scope

- Target baseline: Frida 17+
- Frida 16 backward compatibility is out of scope
