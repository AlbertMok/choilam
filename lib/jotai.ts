import { useHydrateAtoms } from "jotai/utils";

export const HydrateAtoms = ({
  initialValues,
  children,
}: {
  initialValues: Parameters<typeof useHydrateAtoms>[0];
  children: JSX.Element;
}) => {
  // initialising on state with prop on render here
  useHydrateAtoms(initialValues);
  return children;
};
