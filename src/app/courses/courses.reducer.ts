import { Course } from "./model/course";
import { Lesson } from "./model/lesson";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

// export interface CoursesState {
//   coursesEntities: { [key: number]: Course };
//   coursesOrder: number[];
// }

// export interface LessonsState {
//   lessonsEntities: { [key: number]: Lesson };
//   lessonsOrder: number[];
// }

export interface CoursesState extends EntityState<Course> {}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();
