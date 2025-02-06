import PrefetchHydrate from "@/components/shared/prefetch-hydrate";
import UsersList from "@/components/users-list/users-list";
import { getUsersList } from "@/services/queries/get-users-list";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-2xl ">Users List</h1>
      <PrefetchHydrate queryKey={["userslist"]} queryFn={getUsersList}>
        <UsersList />
      </PrefetchHydrate>
    </div>
  );
}
