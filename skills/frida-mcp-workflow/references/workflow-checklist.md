# Frida MCP Workflow Checklist

Use this checklist every run.

## Idea

- [ ] Target process/app is identified.
- [ ] Objective and success signal are explicit.
- [ ] `search_frida_docs` was used for all non-trivial assumptions.
- [ ] Doc facts are summarized.
- [ ] Frida 17-only assumptions confirmed.

## Scripting

- [ ] Script will be saved to file (or inline is justified as tiny probe).
- [ ] `script_id`, purpose, and targets are declared.
- [ ] Idempotence guard exists.
- [ ] Teardown/uninstall path exists.

## Execution

- [ ] Session liveness was verified.
- [ ] Existing scripts were listed.
- [ ] Overlapping targets were checked.
- [ ] Replaced scripts were unloaded before reload.
- [ ] Only intended hooks are active.

## Notes

- [ ] Notes were persisted to file.
- [ ] Script ledger updated (loaded/unloaded/active).
- [ ] Results and validation recorded.
- [ ] Errors and root cause recorded.
- [ ] Cleanup confirmed.
