// /slack-samples/deno-hello-world/functions/greeting_function.ts
import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const NiceMessageFunctionDefinition = DefineFunction({
  callback_id: "buildnicemessage_function",
  title: "Build Nice Message",
  description: "Build a nice message",
  source_file: "functions/build-nice-message_function.ts",
  input_parameters: {
    properties: {

    },
    required: [],
  },
  output_parameters: {
    properties: {
      channel: {
        type: Schema.slack.types.channel_id,
        description: "Channel to message to",
        default: "C066T2Q5L6L",
      },
      message: {
        type: Schema.types.string,
        description: "Message to the channel",
      },
    },
    required: ["message"],
  },
});

export default SlackFunction(
  // Pass along the function definition from earlier in the source file
  NiceMessageFunctionDefinition,
  ({ inputs }) => { 
    
    const messageArray = [
      "https://www.youtube.com/watch?v=kfVsfOSbJY0&list=RDkfVsfOSbJY0&start_radio=1|It's Friday!> :friday-rebecca: Sorry for the delay, now your day can be brighter :sunny: (even if it's raining).",
      "<https://www.youtube.com/watch?v=kfVsfOSbJY0&list=RDkfVsfOSbJY0&start_radio=1|Good Friday!> :friday-rebecca:",
      "Don't worry, be happy! <https://www.youtube.com/watch?v=kfVsfOSbJY0&list=RDkfVsfOSbJY0&start_radio=1|It's Friday!> :friday-rebecca:",
      "<https://www.youtube.com/watch?v=kfVsfOSbJY0&list=RDkfVsfOSbJY0&start_radio=1|Come on! It's Friday!> :friday-rebecca:",
      "<https://www.youtube.com/watch?v=kfVsfOSbJY0&list=RDkfVsfOSbJY0&start_radio=1|Looking forward to the weekend!> :friday-rebecca:",
      "<https://www.youtube.com/watch?v=kfVsfOSbJY0&list=RDkfVsfOSbJY0&start_radio=1|It's Friday>, let's gooooo! :friday-rebecca:",
      "<https://www.youtube.com/watch?v=kfVsfOSbJY0&list=RDkfVsfOSbJY0&start_radio=1|It's Friday! Again!>"
    ];

    const message = messageArray[Math.floor(Math.random() * messageArray.length)];

    //const message =`The following person is on call: \n\n>${whosoncall} for the ${schedule} schedule.`;
    const channel = "C066T2Q5L6L"; // Test channel (Chris Test Public) "C066T2Q5L6L"

    // Don't forget any required output parameters
    return { outputs: { message, channel } };
  },
);



