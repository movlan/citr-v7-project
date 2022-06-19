import { useEffect, useState } from "react";
import { Animal, BreedListAPIResponse } from "./APIResponsesTypes";

const localCache: {
  [index: string]: string[];
} = {};

type Status = "unloaded" | "loading" | "loaded";

export default function useBreedList(animal: Animal) {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const data = (await res.json()) as BreedListAPIResponse;

      localCache[animal] = data.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status] as [string[], Status];
}
