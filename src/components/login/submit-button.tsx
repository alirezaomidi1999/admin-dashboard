"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../shadcn/ui/button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="bg-sidebar-accent" type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
