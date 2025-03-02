import { Routes } from "@angular/router";
import { TeacherDashboardComponent } from "./teacher-dashboard/teacher-dashboard.component";

export const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" }, // Redirect root to dashboard
  { path: "dashboard", component: TeacherDashboardComponent },
];