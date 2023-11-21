// say_hello_workflow.ts
import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { NiceMessageFunctionDefinition as NiceMessage } from "../functions/build-nice-message_function.ts"
import * as log from "https://deno.land/std/log/mod.ts";

// say_hello_workflow.ts
export const HappyRequestWorkflow = DefineWorkflow({
  callback_id: "happy-workflow",
  title: "Happy Friday Robot",
});

const niceMessageGetStep = HappyRequestWorkflow.addStep(NiceMessage, {});

HappyRequestWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: niceMessageGetStep.outputs.channel,
  message: niceMessageGetStep.outputs.message,
});

