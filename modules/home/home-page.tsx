import { Hero } from "./hero";
import { About } from "./about";
import { Process } from "./process";
import { ProjectList } from "@/modules/projects/components/project-list";
export function HomePage() {
  return <><Hero /><ProjectList /><About /><Process /></>;
}
