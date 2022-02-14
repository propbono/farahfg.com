import { useRef, useEffect } from "react";

export const useDevLogger = (name: string, props: any, args?: any) => {
  const isDevMode = process.env.NODE_ENV === "development";

  const hasArgs = args && Object.keys(args).length > 0;

  const changedProps = useRef({});
  const previousProps = useRef(props);
  const renderCount = useRef(1);
  const renderTime = useRef(Date.now());

  const propKeys = Object.keys({ ...props, ...previousProps });
  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key]) return obj;
    return {
      ...obj,
      [key]: { previous: previousProps.current[key], current: props[key] },
    };
  }, {});

  const additionalArgs = args
    ? Object.keys(args).map((key) => {
        return `${key}: ${args[key]}`;
      })
    : {};
  const additionalProps = args
    ? Object.keys(props).map((key) => {
        return `${key}: ${props[key]}`;
      })
    : {};

  const info = {
    renderCount: renderCount.current,
    renderTime: Date.now() - renderTime.current,
    changedProps: changedProps.current,
    props: additionalProps,
    args: additionalArgs,
  };

  const style = "color: #00bcd4; font-weight: bold";
  const styleGroup =
    "color: #00bcd4; font-weight: bold; border:2px solid #00bcd4; padding: 5px; margin: 5px;";

  useEffect(() => {
    if (isDevMode) {
      renderCount.current++;
      previousProps.current = props;
      renderTime.current = Date.now();

      console.group(`%cDebug - Dev Mode`, styleGroup);
      console.log(
        "%c=================================================================",
        style
      );
      console.log(`%c${name} - Component Info`, style);
      console.log(
        "%c.................................................................",
        style
      );
      console.log("%cRenderCount: ", style, info.renderCount);
      console.log("%cRenderTime: ", style, info.renderTime + "ms");
      console.log(
        "%c=================================================================",
        style
      );

      console.log("%cProps", style);
      console.log(
        "%c.................................................................",
        style
      );
      Object.keys(props).forEach((key) => {
        console.log(`%c${key}: `, style, props[key]);
      });

      console.log("%cChangedProps: ", style, info.changedProps);
      console.log(
        "%c=================================================================",
        style
      );

      if (hasArgs) {
        console.log("%cArgs", style);
        console.log(
          "%c.................................................................",
          style
        );
        Object.keys(args).forEach((key) => {
          console.log(`%c${key}: `, style, args[key]);
        });
        console.log(
          "%c=================================================================",
          style
        );
      }
      console.groupEnd();
    }
  });
  if (isDevMode) return info;
  else return;
};
