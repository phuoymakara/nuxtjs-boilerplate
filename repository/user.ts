import type { NitroFetchRequest, $Fetch } from "nitropack";


export const userRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async get(): Promise<any[]> {
    return fetch("/users");
  },
});