import mixpanel from "mixpanel-browser";
mixpanel.init(process.env.REACT_APP_MIXPANEL, {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

let env_check = process.env.NODE_ENV === "production";

let actions = {
  identify: (id) => {
    if (env_check) mixpanel.identify(id);
  },
  alias: (id) => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
};

export let Mixpanel = actions;
