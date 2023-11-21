import { Trigger } from "deno-slack-api/types.ts";
import { HappyRequestWorkflow } from "../workflows/happy-workflow.ts";
import { TriggerTypes } from "deno-slack-api/mod.ts";

const trigger: Trigger<typeof HappyRequestWorkflow.definition> = {
  type: TriggerTypes.Scheduled,
  name: "Triggers 'Happy Friday'",
  workflow: `#/workflows/${HappyRequestWorkflow.definition.callback_id}`,
  schedule: {
    // Schedule the first execution 60 seconds from when the trigger is created
    start_time: new Date(new Date().getTime() + 60000).toISOString(),
    end_time: "2037-12-31T23:59:59Z",
    frequency: {
        type: "weekly",
        repeats_every: 1,
        on_days: ["Friday"],
      },
  },
};

export default trigger;