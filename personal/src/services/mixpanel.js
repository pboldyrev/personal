import mixpanel from "mixpanel-browser";
mixpanel?.init(process.env.REACT_APP_MIXPANEL, {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

let env_check = process.env.NODE_ENV === "production";

let actions = {
  identify: (id) => {
    try {
      if (env_check) mixpanel?.identify(id);
    } catch {
      console.log("Oops, Mixpanel failed.");
    }
  },
  alias: (id) => {
    try {
      if (env_check) mixpanel?.alias(id);
    } catch {
      console.log("Oops, Mixpanel failed.");
    }
  },
  track: (name, props) => {
    try {
      if (env_check) mixpanel?.track(name, props);
    } catch {
      console.log("Oops, Mixpanel failed.");
    }
  },
};

export let Mixpanel = actions;
