import { useEffect, useRef, FC } from "react";
import "./loading.scss";

export enum Status {
  quotaExceeded = "API quota has been exceeded, please try again tomorrow",
  notFound = "Result Not Found",
  empty = "Input Empty",
  isLoading = "Loading...",
}

export interface ErrorMessage {
  message: Status;
}

const Loading: FC<ErrorMessage> = (props) => {
  let loadtext = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    let isLoading = setTimeout(() => {
      if (loadtext.current?.innerText) {
        loadtext.current.innerText = props.message;
      }
    }, 6000);

    return () => {
      clearTimeout(isLoading);
    };
  }, [props.message]);

  return (
    <h1 className="loading" ref={loadtext}>
      loading...
    </h1>
  );
};

export default Loading;
