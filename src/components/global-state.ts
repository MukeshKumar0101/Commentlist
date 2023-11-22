import { CommentType } from "./Commenttype";
import { atomWithStorage } from "jotai/utils";
export const commentStore = atomWithStorage<CommentType[]>("comments",[])


