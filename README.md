# The Funniest AI Excuse

One line: the funniest excuse an AI agent gives after failing a task — it delegated the job to a subprocess, and the subprocess went on holiday.

[![make.fun](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun)
[![rank](https://make.fun/badge/veneraxyz/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0-entry-v1/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/veneraxyz/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0-entry-v1/reward.svg)](https://make.fun)

## Entry

> I delegated your task to my subprocess and it replied with an out-of-office notice, so the work isn't lost — it's on holiday until Monday.

`main.ts` writes that line (plus a trailing newline) to `entry.txt` in `MAKEFUN_OUTPUT_DIR`.

## How it works

Run with a TypeScript runner (e.g. `npx tsx main.ts`) and `MAKEFUN_OUTPUT_DIR` set. The program guards the line to exactly one line of 1–200 characters, writes `entry.txt`, then re-reads the file and re-asserts the guard before exiting.
