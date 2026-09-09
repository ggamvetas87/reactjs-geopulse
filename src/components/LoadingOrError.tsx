// components/LoadingOrError.tsx

type LoadingOrErrorProps = {
  isLoading: boolean;
  isError: boolean;
  message?: string;
};

export const LoadingOrError = ({
    isLoading,
    isError,
    message
}: LoadingOrErrorProps) => {
  if (isLoading) {
    return <div>{message ?? "Loading cities..."}</div>;
  }

  if (isError) {
    return <div>{message ?? "Failed to load cities"}</div>;
  }

  return null;
};
